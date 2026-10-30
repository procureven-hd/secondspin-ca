import { PolicyLayout, ContactBlock, CONTACT } from "@/components/policy-layout";

export default function Privacy() {
  return (
    <PolicyLayout title="Privacy Policy">
      <p className="text-sm text-brand-gray mb-8">Effective upon publication</p>

      <p>
        Second Spin Thrift Inc. (“Second Spin,” “we,” “us,” or “our”) respects your privacy. This policy explains how
        we collect, use, disclose, and protect personal information when you visit our website, join our loyalty
        program, sign up for text messages, shop with us, or otherwise contact us.
      </p>

      <h2>Contact us</h2>
      <p>For privacy questions, updates, or concerns, contact:</p>
      <ContactBlock heading="Privacy Contact" />

      <h2>Information we may collect</h2>
      <ul>
        <li>Your name, phone number, email address, and other contact details you provide.</li>
        <li>Loyalty program information, such as membership details, purchases, rewards, and store credit.</li>
        <li>
          Information about your consent to receive communications, including when and how you signed up and any
          changes to your preferences.
        </li>
        <li>Messages or other information you provide when you contact us.</li>
        <li>
          Website information, such as your IP address, browser type, device information, and information about how
          you use our website, where collected through website tools or cookies.
        </li>
      </ul>

      <h2>How we use your information</h2>
      <p>
        We may use your information to administer the loyalty program, record purchases and apply benefits, respond
        to inquiries, provide customer service, send marketing communications where you have consented or as
        otherwise permitted by law, manage communication preferences, maintain and improve our website and services,
        and meet legal, accounting, and record-keeping obligations. We will identify additional purposes when
        required by law.
      </p>

      <h2 id="sms">Promotional text messages and consent</h2>
      <p>
        If you choose to receive promotional texts, we will use your mobile number to send messages about Second Spin
        promotions, discounts, sales, events, loyalty offers, and news. We expect to send approximately one or two
        promotional messages per month. Message frequency may vary. Standard message and data rates may apply.
      </p>
      <p>
        Signing up for promotional texts is optional and is not a condition of making a purchase or joining the
        loyalty program. You can withdraw your consent at any time by replying STOP to a promotional text or by
        contacting us. Reply HELP for assistance or contact us at{" "}
        <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
      </p>
      <p>
        If you unsubscribe, we may retain a record of your number and opt-out request so we can respect your
        preferences and meet our legal obligations.
      </p>

      <h2>How we share information</h2>
      <p>
        We may share personal information with service providers that help us operate our business, such as loyalty,
        point-of-sale, website hosting, and text messaging providers. These providers may use the information only to
        provide services to us or as otherwise permitted or required by law.
      </p>
      <p>
        We do not sell or share mobile phone numbers or SMS consent information with third parties for their own
        marketing purposes. We may share information with service providers that help us deliver and manage our own
        text messaging program.
      </p>
      <p>
        We may also disclose information when required or permitted by law, or in connection with a business
        transaction, subject to applicable privacy requirements. Some service providers may store or process
        information outside Canada, where it may be subject to the laws of that country and accessible to its courts,
        law enforcement, or government authorities.
      </p>

      <h2>Cookies and website technologies</h2>
      <p>
        Our website may use cookies and similar technologies to help it function, remember preferences, understand
        website traffic, or improve the visitor experience. You can adjust your browser settings to control or block
        cookies, although some website features may not work properly if cookies are disabled.
      </p>

      <h2>Protecting and retaining information</h2>
      <p>
        We use reasonable safeguards appropriate to the sensitivity of the information to help protect personal
        information against loss, unauthorized access, use, or disclosure. We retain personal information only as long
        as reasonably necessary for the purposes described in this policy, to respect communication preferences, and
        to meet legal or business record-keeping requirements. When information is no longer needed, we securely
        delete, destroy, or anonymize it where appropriate.
      </p>

      <h2>Accessing or correcting your information</h2>
      <p>
        You may contact us to request access to your personal information or ask us to correct information that is
        inaccurate or incomplete. We will respond in accordance with applicable privacy law. In some circumstances,
        legal exceptions may limit the information we can provide.
      </p>
      <p>
        You may also withdraw consent to certain uses of your personal information, subject to legal or contractual
        restrictions and reasonable notice. We will explain any consequences of withdrawing consent when applicable.
      </p>

      <h2>Privacy questions and complaints</h2>
      <p>
        Please contact us first if you have a privacy question or concern. If you are not satisfied with our response,
        you may contact the Office of the Privacy Commissioner of Canada at{" "}
        <a href="https://www.priv.gc.ca" target="_blank" rel="noopener noreferrer">
          www.priv.gc.ca
        </a>
        .
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. The updated policy will be posted on this website with a
        revised effective date. If a change requires your consent, we will obtain it as required by law.
      </p>
    </PolicyLayout>
  );
}
