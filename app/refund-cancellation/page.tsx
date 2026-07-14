import type { Metadata } from "next";
import { contact, siteConfig } from "@/config/site";
import LegalPageLayout from "@/components/legal/LegalPageLayout";
import { H2, H3, P, UL, LI } from "@/components/legal/LegalTypography";

export const metadata: Metadata = {
  title: "Payment, Refund & Cancellation Policy",
  description:
    "Suraksha24's payment schedules, taxes, refund handling and cancellation charges for in-home care services.",
  alternates: { canonical: `${siteConfig.url}/refund-cancellation` },
};

export default function RefundCancellationPage() {
  return (
    <LegalPageLayout
      eyebrow="Legal"
      title="Payment, Refund & Cancellation Policy"
      lastUpdated="14 July 2026"
    >
      <H2>Payment Policy</H2>
      <UL>
        <LI>
          <strong className="font-semibold text-forest">Applicable services:</strong> all services
          including Attendant, Nursing Care, Critical Care, Infant Care and Rehab Care, except Physiotherapy
          and short-term intervention services.
        </LI>
        <LI>
          <strong className="font-semibold text-forest">Only direct payment to Suraksha24:</strong> you do
          not need to pay the caregiver in cash or cheque unless asked to by the Suraksha24 customer-service
          team. Payment is made directly to Suraksha24, online/via the app, or through a requested
          cash/cheque pickup.
        </LI>
        <LI>
          <strong className="font-semibold text-forest">Payment mode:</strong> app, online, NEFT, cheque and
          cash payments are all accepted. Suraksha24 promotes and prefers advance online payment, which
          enables us to pay our caregivers on time without hassle. For cash/cheque pickup, the amount must be
          more than ₹1,500 — any amount below that should be paid online.
        </LI>
        <LI>
          <strong className="font-semibold text-forest">Taxes:</strong> a 5% tax applies to all services
          provided by Suraksha24, in accordance with prevailing tax regulations.
        </LI>
      </UL>

      <H2>Payment Facilities</H2>
      <UL>
        <LI>
          <strong className="font-semibold text-forest">Weekly:</strong> a weekly invoice is generated every
          7 days and must be paid in advance. Non-advance payment adds a penalty of ₹100 per day.
        </LI>
        <LI>
          <strong className="font-semibold text-forest">Monthly:</strong> this is an advance-payment service
          — you will need to pay 30 days in advance, or the weekly cycle will apply by default.
        </LI>
        <LI>
          <strong className="font-semibold text-forest">Surcharge:</strong> a surcharge applies during
          festival season as an add-on incentive for the caregiver to work and support the patient. You will
          be informed of the surcharge two days before any festival; it may range from ₹100 to ₹300 per
          12-hour visit, depending on the festival.
        </LI>
      </UL>

      <H2>General Terms and Conditions on Payments</H2>
      <UL>
        <LI>
          Suraksha24 will not be accountable for any amount paid directly to a CareGiver. The service fee
          must be paid to Suraksha24, and under no circumstances will an amount paid to the CareGiver be
          adjusted against the service fee.
        </LI>
        <LI>
          If payment is not made within 30 days of the overdue date, the case may be legally filed, and the
          dispute will be resolved in the Kolkata district court.
        </LI>
        <LI>
          Invoiced amounts include payment charges only for visits where the caregiver&rsquo;s attendance has
          been verified. Any invoice is not a final amount — charges for unverified visits will be added
          after confirmation from both the customer and the caregiver.
        </LI>
      </UL>

      <H2>Refund Policy</H2>
      <UL>
        <LI>Once a refund is initiated, the balance amount will be credited to your account within 3 working days.</LI>
        <LI>Refunds are processed only through NEFT.</LI>
      </UL>

      <H2>Cancellation Policy</H2>
      <UL>
        <LI>
          You may cancel or reschedule any appointment by calling{" "}
          <a href={contact.phoneHref} className="text-forest underline decoration-sage decoration-2 underline-offset-2 hover:text-forest-light">
            {contact.phoneDisplay}
          </a>
          , or through the website or mobile app, no later than 24 hours before the scheduled appointment —
          otherwise you will be charged 100% of the service charge.
        </LI>
        <LI>
          If you request a rescheduling, Suraksha24 does not guarantee that the same CareGiver will be
          available again, or at the rescheduled time.
        </LI>
        <LI>Suraksha24 may cancel or reschedule any appointment without prior notice.</LI>
      </UL>
      <P>
        In case of cancellation by Suraksha24, any advance payment made by you to Suraksha24 for the
        affected Service will be refunded.
      </P>

      <H3>Questions about a charge?</H3>
      <P>
        Contact our care team at{" "}
        <a href={`mailto:${contact.email}`} className="text-forest underline decoration-sage decoration-2 underline-offset-2 hover:text-forest-light">
          {contact.email}
        </a>{" "}
        or call{" "}
        <a href={contact.phoneHref} className="text-forest underline decoration-sage decoration-2 underline-offset-2 hover:text-forest-light">
          {contact.phoneDisplay}
        </a>{" "}
        and we&rsquo;ll help sort it out. This policy should be read together with our{" "}
        <a href="/terms" className="text-forest underline decoration-sage decoration-2 underline-offset-2 hover:text-forest-light">
          Terms &amp; Conditions
        </a>
        .
      </P>
    </LegalPageLayout>
  );
}
