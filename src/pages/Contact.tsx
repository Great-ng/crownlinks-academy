import MainLayout from "../layouts/MainLayout";

import ContactHero from "../components/ContactHero";
import ContactSection from "../components/ContactSection";
import ContactMap from "../components/ContactMap";
import ContactFaq from "../components/ContactFaq";

const Contact = () => {
  return (
    <MainLayout>
      {/* Contact Hero */}
      <ContactHero />

      {/* Contact Form + Contact Information + Office Hours */}
      <ContactSection />

      {/* Office Location */}
      <ContactMap />

      {/* Frequently Asked Questions */}
      <ContactFaq />
    </MainLayout>
  );
};

export default Contact;