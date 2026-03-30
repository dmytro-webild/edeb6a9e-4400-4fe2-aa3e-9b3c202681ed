"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import { Phone } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="compact"
        sizing="largeSizeMediumTitles"
        background="aurora"
        cardStyle="subtle-shadow"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Shop",
          id: "products",
        },
        {
          name: "Financing",
          id: "financing",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Moda Home Furniture"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardScroll
      background={{
        variant: "gradient-bars",
      }}
      title="Redefining Comfort, One Piece at a Time."
      description="Premium Houston furniture for every lifestyle. From solid oak craftsmanship to modern sectional luxury, enjoy fast nationwide shipping and unbeatable prices. We don't just match prices—we beat them."
      buttons={[
        {
          text: "Shop Best Sellers",
          href: "#products",
        },
        {
          text: "Apply for Financing",
          href: "#financing",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/flowers-vases-postcard-box-books-placed-table_23-2148103291.jpg?_wi=1"
      imageAlt="Moda Home Furniture Interior"
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "Furniture Today",
        "Design Weekly",
        "Texas Living",
        "Home Decor Monthly",
        "Houston Style",
        "Modern Nest",
        "City Furnishings",
      ]}
      title="Highly Recommended by Our Happy Customers"
      description="Join thousands of satisfied Houston residents who have transformed their homes with our quality, affordable furniture."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "S320 Texan Grey Sectional",
          price: "$4,499.00",
          imageSrc: "http://img.b2bpic.net/free-photo/pillow-sofa_74190-2476.jpg?_wi=1",
        },
        {
          id: "p2",
          name: "Kingsbury Modern Wood Bedroom Set",
          price: "$1,599.00",
          imageSrc: "http://img.b2bpic.net/free-photo/decorative-pom-poms-used-decorative-vase_23-2149449982.jpg?_wi=1",
        },
        {
          id: "p3",
          name: "Rebecca Rectangle Marble Dining Set",
          price: "$2,399.00",
          imageSrc: "http://img.b2bpic.net/free-photo/wedding-table-arrangement-with-flowers_23-2149436427.jpg?_wi=1",
        },
      ]}
      title="Shop Our Best Sellers"
      description="Hand-picked comfort and style, now at unbeatable prices."
    />
  </div>

  <div id="financing" data-section="financing">
      <MetricSplitMediaAbout
      useInvertedBackground={true}
      title="Affordable Luxury with Easy Financing"
      description="Start with an initial payment as low as $29 with no credit needed financing. We believe everyone deserves a beautiful home, regardless of budget."
      metrics={[
        {
          value: "$29",
          title: "Initial Payment",
        },
        {
          value: "10 min",
          title: "Approval Time",
        },
        {
          value: "Easy",
          title: "Financing Process",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/pillow-sofa_74190-2476.jpg?_wi=2"
      imageAlt="Financing Furniture"
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Kelvin Lockhart",
          date: "Aug 30, 2024",
          title: "Fast & Helpful",
          quote: "Jose hooked me up in 10 mins! Very friendly, very helpful, and got me the money I needed thank you sir!!!",
          tag: "Satisfied Customer",
          avatarSrc: "http://img.b2bpic.net/free-photo/internationals-people-standing-cafe_1157-32343.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/flowers-vases-postcard-box-books-placed-table_23-2148103291.jpg?_wi=2",
          imageAlt: "luxury modern furniture living room",
        },
        {
          id: "t2",
          name: "Dawayne Lee",
          date: "Sept 11, 2024",
          title: "Great Deal",
          quote: "Sells man Sebastian helped us out and gave me a great deal on a leather couch I wanted for years thank you so much I will be back",
          tag: "Returning Buyer",
          avatarSrc: "http://img.b2bpic.net/free-photo/positive-emotions-reaction-feelings-joyful-funny-young-woman-with-dyed-bob-hairstyle-artistic-make-up-screwing-up-eyes-smiling-feeling-shy-laughing-joke-being-good-mood_343059-4357.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/pillow-sofa_74190-2476.jpg?_wi=3",
          imageAlt: "modern grey sectional sofa",
        },
        {
          id: "t3",
          name: "Maria Garcia",
          date: "Oct 05, 2024",
          title: "Excellent Service",
          quote: "Excellent service!! Jose was amazing. He worked with my budget and helped me secure the furniture I wanted effortlessly.",
          tag: "Happy Customer",
          avatarSrc: "http://img.b2bpic.net/free-photo/smiley-man-looking-camera-holding-cup-coffee_23-2148306626.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/decorative-pom-poms-used-decorative-vase_23-2149449982.jpg?_wi=2",
          imageAlt: "solid wood bedroom set",
        },
        {
          id: "t4",
          name: "John Smith",
          date: "Nov 12, 2024",
          title: "Highly Recommend",
          quote: "Fantastic selection and very knowledgeable staff. Found the perfect dining set for our family in no time.",
          tag: "Local Customer",
          avatarSrc: "http://img.b2bpic.net/free-photo/portrait-young-professional-businesswoman-sitting-her-office-answering-phone-call-using-her_1258-194674.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/wedding-table-arrangement-with-flowers_23-2149436427.jpg?_wi=2",
          imageAlt: "marble dining table set",
        },
        {
          id: "t5",
          name: "Sarah Jenkins",
          date: "Dec 01, 2024",
          title: "Quality Goods",
          quote: "The quality of the wood in the bedroom set is outstanding. So happy with the purchase!",
          tag: "Loyal Patron",
          avatarSrc: "http://img.b2bpic.net/free-photo/positive-emotions-reaction-feelings-joyful-funny-young-woman-with-dyed-bob-hairstyle-artistic-make-up-screwing-up-eyes-smiling-feeling-shy-laughing-joke-being-good-mood_343059-4357.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/internationals-people-standing-cafe_1157-32343.jpg",
          imageAlt: "happy customer furniture shopping",
        },
      ]}
      title="Real Stories from Happy Customers"
      description="Hear what our Houston community has to say about our comfort, craftsmanship, and service."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactFaq
      animationType="slide-up"
      useInvertedBackground={true}
      faqs={[
        {
          id: "q1",
          title: "Do you offer financing?",
          content: "Yes, we offer no-credit-needed financing with payments starting as low as $29.",
        },
        {
          id: "q2",
          title: "Do you offer shipping?",
          content: "We ship nationwide and also provide same-day local delivery in Houston.",
        },
        {
          id: "q3",
          title: "What is your return policy?",
          content: "We offer a customer-friendly return and refund policy to ensure you love your furniture.",
        },
      ]}
      ctaTitle="Visit Us in Houston"
      ctaDescription="Get directions or contact our support team today."
      ctaButton={{
        text: "Contact Us Now",
        href: "mailto:info@modahf.com",
      }}
      ctaIcon={Phone}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Moda Home Furniture"
      columns={[
        {
          title: "Shop",
          items: [
            {
              label: "Beds",
              href: "#",
            },
            {
              label: "Sofas",
              href: "#",
            },
            {
              label: "Sectionals",
              href: "#",
            },
            {
              label: "Recliners",
              href: "#",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#",
            },
            {
              label: "Financing",
              href: "#",
            },
            {
              label: "Contact Us",
              href: "#",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Return Policy",
              href: "#",
            },
            {
              label: "Shipping Policy",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2025 Moda Home Furniture. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
