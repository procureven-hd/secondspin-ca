import { Switch, Route, Router as WouterRouter } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Survey from "@/pages/survey";
import Terms from "@/pages/terms";
import Privacy from "@/pages/privacy";
import Donations from "@/pages/donations";
import { useEffect } from "react";
import { initGA, initMetaPixel } from "../lib/analytics";
import { useAnalytics } from "../hooks/use-analytics";

function Router() {
  // Track page views when routes change
  useAnalytics();
  
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/survey" component={Survey} />
      <Route path="/terms" component={Terms} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/donations" component={Donations} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Initialize analytics when app loads
  useEffect(() => {
    // The shareable preview file is for feedback only; keep it out of the store's analytics.
    if (import.meta.env.VITE_STANDALONE) return;

    // Initialize Google Analytics
    if (!import.meta.env.VITE_GA_MEASUREMENT_ID) {
      console.warn('Missing required Google Analytics key: VITE_GA_MEASUREMENT_ID');
    } else {
      initGA();
    }
    
    // Initialize Meta Pixel
    initMetaPixel();
  }, []);

  // The standalone single-file preview opens from disk, where normal URL paths don't exist,
  // so it routes with #/terms style links instead.
  const routes = import.meta.env.VITE_STANDALONE ? (
    <WouterRouter hook={useHashLocation}>
      <Router />
    </WouterRouter>
  ) : (
    <Router />
  );

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        {routes}
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
