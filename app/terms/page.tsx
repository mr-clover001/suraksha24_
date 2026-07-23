import type { Metadata } from "next";
import Link from "next/link";
import { contact, siteConfig } from "@/config/site";
import LegalPageLayout from "@/components/legal/LegalPageLayout";
import { H2, P, UL, LI } from "@/components/legal/LegalTypography";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms of use governing Suraksha24's in-home caregiving, nursing and care-coordination services.",
  alternates: { canonical: `${siteConfig.url}/terms` },
};

export default function TermsPage() {
  return (
    <LegalPageLayout eyebrow="Legal" title="Terms & Conditions" lastUpdated="14 July 2026">
      <P>
        These Terms of Use (&ldquo;Terms&rdquo;) govern the access and use by you of the technology,
        applications, websites, content, products, and services made available by{" "}
        <strong className="font-semibold text-forest">Suraksha24 Pvt Ltd</strong> (&ldquo;Suraksha24&rdquo;),
        collectively also referred to as &ldquo;we&rdquo; or &ldquo;us&rdquo;.
      </P>

      <H2>1. About Suraksha24</H2>
      <P>
        Suraksha24 provides independent health caregivers (&ldquo;CareGivers&rdquo;) for in-home personal
        care (&ldquo;Service&rdquo;) for you or another person who is a parent or relative
        (&ldquo;Patient&rdquo;). Suraksha24 conducts background and experience verification of these
        CareGivers via an independent background-verification company. The Service is provided by these
        CareGivers only, and not by Suraksha24.
      </P>

      <H2>2. Customer Agreement</H2>
      <P>
        You, on behalf of the Patient, request Suraksha24 to provide the Service at home or any other
        location agreed with Suraksha24. You agree that the Service is advised by a legal medical
        practitioner, and you undertake responsibility for the Service and the risks involved. Suraksha24
        will ensure high quality of Service but will not be responsible for any Service error, including
        criminal activity by CareGivers. You understand and agree that the Service offered by Suraksha24 —
        directly or through CareGivers/affiliates of Suraksha24 — carries a risk of failure and/or adverse
        effects, including possible mortality or permanent disability. You understand and agree that
        Suraksha24 does not guarantee any recovery or outcome from the Service offered.
      </P>
      <P>
        You agree to provide a safe environment for CareGivers to discharge their duty, and you will ensure
        they are not harassed, abused or troubled in any way, physically or emotionally. You authorise
        Suraksha24 to collect the Patient&rsquo;s data and use/share it with others (without revealing the
        Patient&rsquo;s identity). Suraksha24 will not be responsible for misuse of the Patient&rsquo;s data
        by CareGivers, affiliates, employees or any other party. You will make payments to Suraksha24 as per
        the agreed terms and will not link payment to the outcome of the Service.
      </P>

      <H2>3. Scheduling Appointments</H2>
      <P>
        Appointments for Service with Suraksha24 can be scheduled through the Suraksha24 website, mobile
        app, or by calling{" "}
        <a href={contact.phoneHref} className="text-forest underline decoration-sage decoration-2 underline-offset-2 hover:text-forest-light">
          {contact.phoneDisplay}
        </a>
        . Your request for Service is only accepted once you receive a booking confirmation from
        Suraksha24.
      </P>

      <H2>4. CareGiver Selection</H2>
      <P>
        Suraksha24 has a pool of CareGivers to choose from to provide the Service. Suraksha24 will try to
        ensure that the CareGiver assigned is as per your preference, but this may not always be possible.
        Suraksha24 reserves the right to assign any CareGiver as it deems fit for that Service, and does not
        guarantee that the same CareGiver is assigned on all days. Suraksha24 can assign any CareGiver on
        any day as it deems fit, without prior notice.
      </P>

      <H2>5. General Payment Terms</H2>
      <P>
        Payment can only be made via cash, payment gateway, or cheque drawn in favour of{" "}
        <strong className="font-semibold text-forest">Suraksha24 Pvt Ltd</strong>. You agree to
        make payment as soon as the demand is raised. Suraksha24 reserves the right to cancel an ongoing or
        future appointment if payments are not made on time.
      </P>
      <P>
        <strong className="font-semibold text-forest">Taxes:</strong> All charges and fees are exclusive of
        applicable taxes. Additional taxes will apply as per prevailing rules. See our{" "}
        <Link href="/refund-cancellation" className="text-forest underline decoration-sage decoration-2 underline-offset-2 hover:text-forest-light">
          Payment, Refund &amp; Cancellation Policy
        </Link>{" "}
        for full details.
      </P>

      <H2>6. Intellectual Property Rights</H2>
      <P>
        All intellectual property used on the website by Suraksha24, service providers, or any third party
        remains the property of Suraksha24, the service provider, or that third party, as the case may be.
        You agree not to circumvent, disable or otherwise interfere with security-related features of the
        website, or features that prevent or restrict use or copying of any materials, or that enforce
        limitations on use of the website or its materials. The Service is protected to the maximum extent
        permitted by copyright laws, other laws, and international treaties. Content displayed on or through
        the Service is protected by copyright as a collective work and/or compilation. Materials on the
        website may not be modified, copied, reproduced, distributed, republished, downloaded, displayed,
        sold, compiled, posted or transmitted in any form or by any means — electronic, mechanical,
        photocopying, recording or otherwise.
      </P>

      <H2>7. Limitation of Liability</H2>
      <P>
        In no event shall Suraksha24 be liable for any special, incidental, indirect or consequential
        damages of any kind in connection with these Terms, even if informed in advance of the possibility
        of such damages. In no event shall the total aggregate liability of Suraksha24 to a user or
        professional, for all damages, losses and causes of action (whether in contract or tort, including
        but not limited to negligence), arising from this agreement or from your use of the website or the
        Service, exceed in the aggregate <strong className="font-semibold text-forest">INR 100 (Rupees One
        Hundred only)</strong>.
      </P>

      <H2>8. Information You Provide Suraksha24</H2>
      <P>
        When you request a Service from Suraksha24, you agree to provide personal information about
        yourself and the Patient — such as name, mobile number, date of birth, gender, weight — and medical
        information about the Patient relevant to the Service. You agree to provide accurate personal and
        medical information, and your failure to do so may result in adverse consequences in the delivery of
        the Service. Suraksha24 may share this information with the assigned CareGiver as it deems fit.
      </P>

      <H2>9. Customized Service and Payment Flow</H2>
      <P>
        Every patient is different. Upon receiving your request, we have a detailed conversation with you
        about the specific medical condition and suggest the best course of action. We ask for payment only
        once you agree with our proposed plan of action and the costs involved. We may request online
        payments through SMS, email, website, or our mobile app, which also clarifies the details of your
        booking, using third-party payment service providers. Except in urgent situations, we commence the
        Service only upon receiving payment.
      </P>

      <H2>10. Communications from Suraksha24</H2>
      <P>
        You agree, on behalf of yourself and the Patient, to receive communication in the form of SMS
        messages, email and calls on your mobile number and email address, from both Suraksha24 and the
        CareGiver assigned to you. You agree to receive promotional messages in the form of newsletters,
        special offers, reminders and updates.
      </P>

      <H2>11. Termination</H2>
      <P>
        Suraksha24 may terminate the Service at any time, for any reason, through notice sent by post to
        your registered postal address or by email to your registered email address.
      </P>

      <H2>12. Choice of Law</H2>
      <P>
        These Terms of Use shall be governed by, and interpreted and construed in accordance with, the laws
        of India. The place of jurisdiction shall be exclusively in Kolkata.
      </P>

      <UL>
        <LI>
          <Link href="/privacy" className="text-forest underline decoration-sage decoration-2 underline-offset-2 hover:text-forest-light">
            Privacy Policy
          </Link>
        </LI>
        <LI>
          <Link href="/refund-cancellation" className="text-forest underline decoration-sage decoration-2 underline-offset-2 hover:text-forest-light">
            Payment, Refund &amp; Cancellation Policy
          </Link>
        </LI>
      </UL>
    </LegalPageLayout>
  );
}
