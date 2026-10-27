import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { surveySubmissionSchema, type SurveySubmission } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { Link } from "wouter";
import { ChevronLeft } from "lucide-react";

type SurveyFormData = SurveySubmission;

export default function Survey() {
  const { toast } = useToast();
  const form = useForm<SurveyFormData>({
    resolver: zodResolver(surveySubmissionSchema),
    defaultValues: {
      visited: "yes",
      rating: 5,
      nps: 9,
      improvement: "",
      website: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: SurveyFormData) => {
      const response = await fetch("/api/surveys", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Failed to submit survey");
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Survey submitted!",
        description: "Thank you for your feedback. We appreciate your input!",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit survey. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: SurveyFormData) => mutation.mutate(data);

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-light to-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header with back button */}
        <div className="mb-8">
          <Link href="/">
            <button className="flex items-center gap-2 text-brand-navy hover:text-brand-red transition-colors mb-6">
              <ChevronLeft className="w-5 h-5" />
              Back to Home
            </button>
          </Link>
          <h1 className="text-4xl font-bold text-brand-navy mb-2">Customer Feedback Survey</h1>
          <p className="text-lg text-brand-gray">Help us improve your experience at Second Spin Thrift</p>
        </div>

        {/* Survey Form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Question 1: Have you visited? */}
              <FormField
                control={form.control}
                name="visited"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-semibold text-brand-navy">
                      Have you visited Second Spin Thrift in the past 60 days?
                    </FormLabel>
                    <FormControl>
                      <RadioGroup value={field.value} onValueChange={field.onChange}>
                        <div className="flex items-center space-x-4 mt-4">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="yes" id="visited-yes" />
                            <label htmlFor="visited-yes" className="cursor-pointer text-brand-gray">
                              Yes
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="no" id="visited-no" />
                            <label htmlFor="visited-no" className="cursor-pointer text-brand-gray">
                              No
                            </label>
                          </div>
                        </div>
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Question 2: Rating */}
              <FormField
                control={form.control}
                name="rating"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-semibold text-brand-navy">
                      How would you rate your overall experience?
                    </FormLabel>
                    <FormDescription>1 = Poor, 5 = Excellent</FormDescription>
                    <FormControl>
                      <div className="mt-4">
                        <div className="flex justify-between mb-4">
                          {[1, 2, 3, 4, 5].map((num) => (
                            <button
                              key={num}
                              type="button"
                              aria-label={`${num} star${num > 1 ? "s" : ""}`}
                              aria-pressed={field.value === num}
                              onClick={() => field.onChange(num)}
                              className={`w-12 h-12 rounded-full text-2xl transition-all ${
                                field.value === num
                                  ? "bg-brand-red text-white scale-110"
                                  : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                              }`}
                            >
                              ⭐
                            </button>
                          ))}
                        </div>
                        <div className="text-center text-sm text-brand-gray">
                          {field.value ? `${field.value} star${field.value > 1 ? "s" : ""}` : "Select rating"}
                        </div>
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Question 3: NPS */}
              <FormField
                control={form.control}
                name="nps"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-semibold text-brand-navy">
                      How likely are you to recommend us to a friend or family member?
                    </FormLabel>
                    <FormDescription>0 = Not at all likely, 10 = Extremely likely</FormDescription>
                    <FormControl>
                      <div className="mt-6">
                        <Slider
                          min={0}
                          max={10}
                          step={1}
                          value={[field.value]}
                          onValueChange={(value) => field.onChange(value[0])}
                          className="w-full"
                        />
                        <div className="flex justify-between mt-4 text-sm text-brand-gray">
                          <span>0</span>
                          <span className="text-lg font-semibold text-brand-red">{field.value}</span>
                          <span>10</span>
                        </div>
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Question 4: Open Feedback */}
              <FormField
                control={form.control}
                name="improvement"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-semibold text-brand-navy">
                      What is one thing we could improve to make your next visit even better?
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Share your thoughts..."
                        className="min-h-32 resize-none"
                        maxLength={500}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Spam trap: hidden from people, bots tend to fill it in */}
              <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                <label htmlFor="website">Leave this field empty</label>
                <input id="website" type="text" tabIndex={-1} autoComplete="off" {...form.register("website")} />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={mutation.isPending}
                className="w-full bg-brand-red hover:bg-brand-red-dark text-white py-3 text-lg font-semibold rounded-lg transition-colors"
                data-testid="button-submit-survey"
              >
                {mutation.isPending ? "Sending..." : "Send Survey"}
              </Button>
            </form>
          </Form>
        </div>

        {/* Footer note */}
        <p className="text-center text-sm text-brand-gray mt-8">
          Your feedback helps us serve you better. Thank you!
        </p>
      </div>
    </div>
  );
}
