import type { Metadata } from "next";
import { contact, siteConfig } from "@/config/site";
import LegalPageLayout from "@/components/legal/LegalPageLayout";
import { H2, H3, P, UL, LI, Note } from "@/components/legal/LegalTypography";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Suraksha24 collects, uses, stores and shares your personal information under the Information Technology Act, 2000.",
  alternates: { canonical: `${siteConfig.url}/privacy` },
};

export default function PrivacyPage() {
  return (
    <LegalPageLayout eyebrow="Legal" title="Privacy Policy" lastUpdated="14 July 2026">
      <Note>
        This Privacy Policy is an electronic record in the form of an electronic contract formed under the
        Information Technology Act, 2000 and the rules made thereunder, including the amended provisions
        pertaining to electronic documents/records in various statutes as amended by the Information
        Technology Act, 2000. This Privacy Policy does not require any physical, electronic or digital
        signature and is published in accordance with the Information Technology (Reasonable Security
        Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011. By using the
        website, you indicate that you understand, agree and consent to this Privacy Policy and provide
        your unconditional consent as contemplated under Sections 43A and 72A of the Information Technology
        Act, 2000. If you do not agree with this Privacy Policy, please do not use this website.
      </Note>

      <P>
        By providing us your information, or by making use of the facilities provided by the website, you
        consent to the collection, storage, processing and transfer of your Personal Information and
        Non-Personal Information by Aegis Care Advisors Private Limited (&ldquo;Suraksha24&rdquo;,
        &ldquo;We&rdquo;, &ldquo;Us&rdquo; or &ldquo;Our&rdquo;) as specified under this Privacy Policy. You
        further agree that such collection, use, storage and transfer shall not cause any loss or wrongful
        gain to you or any other person. This Privacy Policy is a contract between you and Suraksha24 and
        should be read together with our{" "}
        <a
          href="/terms"
          className="text-forest underline decoration-sage decoration-2 underline-offset-2 hover:text-forest-light"
        >
          Terms &amp; Conditions
        </a>
        . Please read this entire Privacy Policy before using or submitting information to this website.
      </P>

      <H2>1. Collection and Storage of Information</H2>
      <P>
        The information (which also includes data) provided by you to Suraksha24, or collected from you,
        may consist of &ldquo;Personal Information&rdquo; and &ldquo;Non-Personal Information&rdquo;.
      </P>
      <P>
        <strong className="font-semibold text-forest">Personal Information</strong> is information that can
        be used to uniquely identify or contact you — including, but not limited to, your name, address,
        contact number, e-mail address, transaction information, financial information, IP address, any
        &ldquo;sensitive personal data or information&rdquo; as defined under the Information Technology
        (Reasonable Security Practices and Procedures and Sensitive Personal Data of Information) Rules,
        2011, the identification code of your communication device, or any other information you provide
        during registration.
      </P>
      <P>
        Such Personal Information may be collected in various ways, including when you register as a user,
        avail services offered on the website, participate in a survey or contest, or post reviews. We may
        also receive Personal Information about you from third parties such as social media services,
        commercially available sources, and business partners — for example, if you connect the website to
        a social media service, we may collect your associated user name, profile picture, email address,
        friends list, or other information that service permits us to receive. Connecting the website to a
        social media service authorises Suraksha24 to collect, store, use and retain such information in
        accordance with this Privacy Policy.
      </P>
      <P>
        <strong className="font-semibold text-forest">Non-Personal Information</strong> may also be
        collected when you visit or use the website, and may be stored in server logs — including your
        geographic location, telecom/internet service provider, browser type, operating system, device, the
        site you visited before ours, and the duration of your stay, along with the date and time of access.
        Non-Personal Information is also collected through cookies; you can configure your browser to erase,
        block, or alert you before accepting cookies, though this may prevent you from using certain
        features of the website.
      </P>
      <P>
        You represent to Suraksha24 that the information you provide is authentic, correct, current and
        updated, that you have all rights, permissions and consents required to provide it, and that your
        providing it — and our consequent storage, collection, usage, transfer, access or processing of it —
        will not violate any third-party agreement, law, charter document, judgment, order or decree.
        Suraksha24 and its officers, directors, contractors and agents are not responsible for the
        authenticity of information provided by you or any other user, and you agree to indemnify and hold
        them harmless in the event of your breach of this Privacy Policy.
      </P>
      <P>
        Your information will primarily be stored in electronic form, though certain data may also be stored
        in physical form. We may store, collect, process and use your data in countries other than India, in
        compliance with applicable laws, and may engage third parties (in or outside India) to store or
        process your information, requiring them on a commercially reasonable basis to adopt reasonable
        security standards to safeguard it.
      </P>

      <H2>2. Purpose for Collecting, Using, Storing and Processing Information</H2>
      <P>
        Suraksha24 collects, uses, stores and processes your information for any purpose permissible under
        applicable law, including — but not limited to — the following (&ldquo;Purposes&rdquo;):
      </P>
      <UL>
        <LI>To facilitate your use of the website and fulfil your requests for information about our services;</LI>
        <LI>To send you information about available services, offers, and important updates regarding the website, terms, and policies;</LI>
        <LI>To send you surveys and marketing communications, and to personalise your experience with relevant advertisements and offers;</LI>
        <LI>To help you resolve technical or other problems encountered on the website;</LI>
        <LI>To complete and fulfil any service you avail through the website;</LI>
        <LI>To protect the integrity and administration of the website, and to conduct internal reviews, data analysis and service improvement;</LI>
        <LI>To conduct academic research, surveys and analytical studies on user behaviour and preferences;</LI>
        <LI>To respond to legal, judicial or quasi-judicial process, and to provide information to law-enforcement agencies in connection with investigations related to public safety, as permitted by law;</LI>
        <LI>To implement information-security practices, and to determine security breaches, computer contaminants or viruses;</LI>
        <LI>To investigate, prevent or act on illegal activity or suspected fraud, and to undertake forensics as part of an investigation or internal audit;</LI>
        <LI>To process any job application you submit;</LI>
        <LI>To trace computer resources or persons who have contravened, or are suspected of contravening, applicable law, including the Information Technology Act, 2000; and</LI>
        <LI>To enable a potential buyer or investor to evaluate the business of Suraksha24.</LI>
      </UL>
      <P>
        You agree and acknowledge that the information so collected is for a lawful purpose connected with a
        function or activity of Suraksha24, and that its collection is necessary for the Purposes above.
      </P>

      <H2>3. Sharing and Disclosure of Your Information</H2>
      <P>
        You unconditionally agree and permit that Suraksha24 may transfer, share, disclose or part with all
        or any of your information, within and outside India, to third-party service providers, partners,
        banks and financial institutions for one or more of the Purposes, or as required by applicable law.
        Where Suraksha24 transfers your information to another entity within or outside your country of
        residence, we will place contractual obligations on the transferee requiring it to adhere to this
        Privacy Policy, to the extent permissible under applicable law.
      </P>
      <P>
        We may share statistical and other data (other than your Personal Information) without your express
        or implied consent, to support programmes or initiatives by Suraksha24, its affiliates, agents,
        third-party service providers, partners, or banks and financial institutions — for example, technical
        infrastructure, usage analysis, merchant services, payment facilitation, or academic research. These
        affiliates and third-party service providers adhere to confidentiality obligations consistent with
        this Privacy Policy.
      </P>
      <P>
        We also use third parties such as card-processing companies, payment gateways and pre-paid card
        providers to enable you to make payments. If you choose to save your card details for faster future
        payments, we may share relevant Personal Information — such as your name, residence and email
        address — as necessary for these third parties to provide such services. Processing of payments is
        governed solely by these third parties&rsquo; own policies and terms, and we are not responsible or
        liable for any delay or failure at their end.
      </P>
      <P>
        We may also share Personal Information where we believe it necessary to investigate, prevent or act
        on illegal activity, suspected fraud, situations involving a potential threat to anyone&rsquo;s
        physical safety, or violations of our terms and conditions or policies; where required by law,
        regulation, legal obligation, or a request from a law-enforcement, governmental, judicial,
        quasi-judicial, or other statutory or constitutional authority; or to establish or exercise our legal
        rights or defend against legal claims. Such disclosure, sharing and transfer of your information
        shall not cause any wrongful loss to you or any third party, nor any wrongful gain to us or any third
        party.
      </P>
      <P>
        Should Suraksha24 or its assets merge with, or be acquired by, another business entity, or undergo
        reorganisation, amalgamation or restructuring, we and our affiliates may share or transfer some or
        all of your personal information to that entity, which will be required to continue to honour this
        Privacy Policy with respect to your Personal Information.
      </P>

      <H2>4. Links to Other Websites</H2>
      <P>
        Our website may provide links to other sites for your convenience only; this does not imply that
        those sites are related to or associated with us. Such sites have their own terms of use and privacy
        policies, which you should review before submitting any information to them — we do not guarantee
        their content or security. Certain features on our website may be hosted by third parties, and your
        interaction with such features is governed by that third party&rsquo;s privacy policy. We are not
        responsible for any loss, damage, claim or expense arising from your use of such third-party sites or
        features.
      </P>

      <H2>5. Security</H2>
      <P>
        We strive to ensure the security, integrity and privacy of your information, and adopt adequate
        measures to prevent unauthorised access to, or alteration, disclosure or destruction of, your
        Personal Information. We reserve the right to conduct a security review at any time to verify your
        identity; if you fail to comply with a security request, we may terminate your account and prohibit
        further access to the website.
      </P>
      <P>
        We are not liable for any breach of security, or for the actions of any third party that receives
        your Personal Information. Trademarks, logos and service marks displayed on the website
        (&ldquo;Marks&rdquo;) are the property of Suraksha24, its merchants, or the relevant third party, and
        may not be used without prior consent.
      </P>
      <P>
        We shall not be held responsible for any loss, damage or misuse of your Personal Information
        attributable to a Force Majeure Event — meaning any event beyond our reasonable control, including
        without limitation sabotage, fire, flood, explosion, acts of God, civil commotion, strikes or
        industrial action, riots, insurrection, war, acts of government, computer hacking, unauthorised
        access to computer data or storage devices, computer crashes, or breach of security or encryption.
      </P>

      <H2>6. Choice / Opt-Out</H2>
      <P>
        You provide your information out of your own free will, and you may choose not to provide, or later
        withdraw your consent to Suraksha24&rsquo;s collection of, your Personal Information by writing to
        our grievance officer at{" "}
        <a href={`mailto:${contact.email}`} className="text-forest underline decoration-sage decoration-2 underline-offset-2 hover:text-forest-light">
          {contact.email}
        </a>
        , or such other electronic address as may be notified to you.
      </P>

      <H2>7. Updates to this Privacy Policy</H2>
      <P>
        Suraksha24 may update this Privacy Policy as and when the need arises, and the updated version will
        be made available on the website. Our commitment to protecting your privacy remains unchanged.
      </P>

      <H3>Grievance Officer</H3>
      <P>
        For any questions, complaints, or to exercise your choices under this Privacy Policy, please
        contact us at{" "}
        <a href={`mailto:${contact.email}`} className="text-forest underline decoration-sage decoration-2 underline-offset-2 hover:text-forest-light">
          {contact.email}
        </a>{" "}
        or call{" "}
        <a href={contact.phoneHref} className="text-forest underline decoration-sage decoration-2 underline-offset-2 hover:text-forest-light">
          {contact.phoneDisplay}
        </a>
        .
      </P>
    </LegalPageLayout>
  );
}
