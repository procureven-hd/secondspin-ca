import { useEffect, type ReactNode } from "react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { STORE } from "@/lib/store-info";

export const CONTACT = {
  company: "Second Spin Thrift Inc.",
  street: "390 Sidney Street",
  city: "Trenton, Ontario K8V 2V2",
  // Same store number as the rest of the site; the policies keep their own contact email.
  phone: STORE.phone,
  phoneHref: STORE.phoneHref,
  email: "darryl@secondspin.ca",
};

export function ContactBlock({ heading }: { heading?: string }) {
  return (
    <address className="not-italic leading-relaxed">
      {heading && <span className="block">{heading}</span>}
      {CONTACT.company}
      <br />
      {CONTACT.street}
      <br />
      {CONTACT.city}
      <br />
      Phone: <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
      <br />
      Email: <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
    </address>
  );
}

export function PolicyLayout({ title, children }: { title: string; children: ReactNode }) {
  useEffect(() => {
    document.title = `${title} | Second Spin Thrift`;
    window.scrollTo(0, 0);
    // Direct visits skip the home page, which normally applies the saved theme.
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, [title]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <header className="bg-brand-navy text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold hover:text-brand-red transition-colors">
            second spin thrift
          </Link>
          <Link href="/" className="inline-flex items-center text-sm opacity-90 hover:text-brand-red transition-colors">
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to home
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 text-gray-700 dark:text-gray-300 text-base leading-relaxed [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-brand-navy dark:[&_h2]:text-gray-100 [&_h2]:mt-10 [&_h2]:mb-3 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_li]:mb-2 [&_a]:text-brand-red [&_a]:underline">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-navy dark:text-gray-100 mb-2">{title}</h1>
        {children}
      </main>

      <footer className="bg-brand-navy text-white py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center text-sm opacity-90 space-x-4">
          <Link href="/terms" className="hover:text-brand-red transition-colors">Terms of Service</Link>
          <Link href="/privacy" className="hover:text-brand-red transition-colors">Privacy Policy</Link>
        </div>
      </footer>
    </div>
  );
}
