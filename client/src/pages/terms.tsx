import { Link } from "wouter";
import { PolicyLayout, ContactBlock, CONTACT } from "@/components/policy-layout";

export default function Terms() {
  return (
    <PolicyLayout title="Terms of Service">
      <p className="text-sm text-brand-gray mb-8">Effective upon publication</p>

      <p>
        Welcome to Second Spin Thrift. These Terms of Service explain the conditions for using our website and
        participating in our promotional text messaging program. This website and the SMS program are operated by
        Second Spin Thrift Inc. (“Second Spin,” “we,” “us,” or “our”).
      </p>

      <h2>Contact information</h2>
      <ContactBlock />
      <p className="mt-0">
        Website: <a href="https://www.secondspin.ca">www.secondspin.ca</a>
      </p>

      <h2>Using our website</h2>
      <p>
        By using our website, you agree to use it for lawful purposes and not to interfere with its operation,
        security, or other users’ access.
      </p>
      <p>
        We make reasonable efforts to keep website information accurate and current. Prices, promotions, products,
        store hours, and other information may change without notice. Promotional offers are subject to the terms
        stated in the applicable offer and may be available for a limited time.
      </p>
      <p>
        Links to third-party websites are provided for convenience. We are not responsible for the content or
        privacy practices of those websites.
      </p>

      <h2>Loyalty program</h2>
      <p>
        Second Spin may offer a loyalty program that allows members to earn and use store credit or other benefits.
        Program benefits and any applicable conditions will be communicated in store or through our website.
      </p>
      <p>
        We may update or discontinue the loyalty program or its benefits, subject to applicable law. We will
        communicate material changes when appropriate. Joining the loyalty program does not automatically enroll you
        in promotional text messages. SMS marketing consent is optional and is collected separately.
      </p>

      <h2 id="sms">Promotional text messaging program</h2>
      <p>
        When you opt in to the Second Spin promotional SMS program, you agree to receive text messages from Second
        Spin Thrift Inc. at the mobile number you provide. Messages may include promotions, discounts, sale
        announcements, store events, loyalty offers, and other Second Spin news.
      </p>
      <ul>
        <li>
          <strong>Message frequency:</strong> Approximately one or two promotional messages per month. Frequency may
          vary.
        </li>
        <li>
          <strong>Cost:</strong> Second Spin does not charge a subscription fee for the SMS program. Standard message
          and data rates may apply, depending on your mobile plan.
        </li>
        <li>
          <strong>Optional participation:</strong> Consent to receive promotional texts is not required to make a
          purchase or participate in the loyalty program.
        </li>
        <li>
          <strong>Opting out:</strong> Reply STOP to any promotional text message to unsubscribe. You can also contact
          us using the information above. We will process your request promptly and no later than required by law.
        </li>
        <li>
          <strong>Help:</strong> Reply HELP to a text message or contact us at{" "}
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
        </li>
      </ul>
      <p>
        Please provide a mobile number that you are authorized to use. If your number changes or is no longer yours,
        please contact us so we can update your information. Delivery of text messages depends on your mobile carrier
        and other service providers. Messages may be delayed or undelivered.
      </p>

      <h2>Privacy</h2>
      <p>
        Our collection, use, and disclosure of personal information are described in our{" "}
        <Link href="/privacy">Privacy Policy</Link>.
      </p>

      <h2>Website content</h2>
      <p>
        Unless otherwise stated, the content on this website, including text, graphics, logos, and other materials,
        belongs to Second Spin or is used with permission. You may view and use the website for personal,
        non-commercial purposes. You may not reproduce or use our content for commercial purposes without our
        permission.
      </p>

      <h2>Changes to these terms</h2>
      <p>
        We may update these Terms of Service from time to time. The updated version will be posted on this website
        with a revised effective date. Changes will apply subject to applicable law.
      </p>

      <h2>Governing law</h2>
      <p>These terms are governed by the laws of Ontario and the applicable laws of Canada.</p>
    </PolicyLayout>
  );
}
