"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import { Phone, MapPin, Clock, ShieldCheck, Truck, CreditCard } from "lucide-react";

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
        { name: "Shop", id: "products" },
        { name: "Financing", id: "financing" },
        { name: "About", id: "about" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="Moda Home Furniture"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardScroll
      background={{ variant: "gradient-bars" }}
      title="Redefining Comfort, One Piece at a Time."
      description="Premium Houston furniture for every lifestyle. From solid oak craftsmanship to modern sectional luxury, enjoy fast nationwide shipping and unbeatable prices. We offer a 5-year warranty on all durable designs."
      buttons={[
        { text: "Shop Best Sellers", href: "#products" },
        { text: "Apply for Financing", href: "#financing" },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/flowers-vases-postcard-box-books-placed-table_23-2148103291.jpg?_wi=1"
      imageAlt="Moda Home Furniture Interior"
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={["Furniture Today", "Design Weekly", "Texas Living", "Home Decor Monthly", "Houston Style", "Modern Nest", "City Furnishings"]}
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
        { id: "p1", name: "S320 Texan Grey Sectional", price: "$4,499.00", imageSrc: "http://img.b2bpic.net/free-photo/pillow-sofa_74190-2476.jpg?_wi=1", priceButtonProps: { children: "View Details" } },
        { id: "p2", name: "Kingsbury Modern Wood Bedroom Set", price: "$1,599.00", imageSrc: "http://img.b2bpic.net/free-photo/decorative-pom-poms-used-decorative-vase_23-2149449982.jpg?_wi=1", priceButtonProps: { children: "View Details" } },
        { id: "p3", name: "Rebecca Rectangle Marble Dining Set", price: "$2,399.00", imageSrc: "http://img.b2bpic.net/free-photo/wedding-table-arrangement-with-flowers_23-2149436427.jpg?_wi=1", priceButtonProps: { children: "View Details" } },
      ]}
      title="Shop Our Best Sellers"
      description="Featuring durable construction and backed by our industry-leading 5-year warranty for lasting peace of mind."
      buttons={[{ text: "Explore Full Collection", href: "#" }]}
    />
  </div>

  <div id="financing" data-section="financing">
      <MetricSplitMediaAbout
      useInvertedBackground={true}
      title="Affordable Luxury with Easy Financing"
      description="Get your dream home today. Our flexible financing allows for low initial payments and fast approvals, perfect for any budget. Includes a 5-year warranty on all furniture."
      metrics={[
        { value: "$29", title: "Initial Payment" },
        { value: "10 min", title: "Approval Time" },
        { value: "Easy", title: "Financing Process" },
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
        { id: "t1", name: "Kelvin Lockhart", date: "Aug 30, 2024", title: "Fast & Helpful", quote: "Jose hooked me up in 10 mins! Very friendly, very helpful, and got me the money I needed thank you sir!!!", tag: "Satisfied Customer", avatarSrc: "http://img.b2bpic.net/free-photo/internationals-people-standing-cafe_1157-32343.jpg" },
        { id: "t2", name: "Dawayne Lee", date: "Sept 11, 2024", title: "Great Deal", quote: "Sells man Sebastian helped us out and gave me a great deal on a leather couch I wanted for years thank you so much I will be back", tag: "Returning Buyer", avatarSrc: "http://img.b2bpic.net/free-photo/positive-emotions-reaction-feelings-joyful-funny-young-woman-with-dyed-bob-hairstyle-artistic-make-up-screwing-up-eyes-smiling-feeling-shy-laughing-joke-being-good-mood_343059-4357.jpg" }
      ]}
      title="Real Stories from Happy Customers"
      description="Hear what our Houston community has to say about our comfort, craftsmanship, and service."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      tag="Connect With Us"
      title="Visit Our Showrooms"
      description="Experience premium comfort at one of our two convenient Houston locations. Schedule a visit or inquire about our 5-year warranty."
      background={{ variant: "animated-grid" }}
      useInvertedBackground={true}
    />
    <div className="grid md:grid-cols-2 gap-8 py-12 px-4 max-w-6xl mx-auto">
        <div className="p-6 border border-accent rounded-xl space-y-4 shadow-sm bg-card">
            <div className="flex items-center gap-2 text-primary-cta font-bold"><MapPin /> North Houston</div>
            <p className="text-sm text-foreground/80">1234 North Freeway, Houston, TX 77009</p>
            <button className="underline font-semibold text-accent" onClick={() => window.location.href = 'tel:2815550101'}>Call: (281) 555-0101</button>
            <div className="flex items-center gap-2 text-sm text-foreground/70"><Clock size={16} /> Open Daily: 10am - 8pm</div>
        </div>
        <div className="p-6 border border-accent rounded-xl space-y-4 shadow-sm bg-card">
            <div className="flex items-center gap-2 text-primary-cta font-bold"><MapPin /> West Houston</div>
            <p className="text-sm text-foreground/80">5678 Westheimer Rd, Houston, TX 77056</p>
            <button className="underline font-semibold text-accent" onClick={() => window.location.href = 'tel:7135550202'}>Call: (713) 555-0202</button>
            <div className="flex items-center gap-2 text-sm text-foreground/70"><Clock size={16} /> Open Daily: 10am - 8pm</div>
        </div>
    </div>
    <div className="flex flex-wrap justify-center gap-6 pb-12 text-sm">
        <div className="flex items-center gap-2 font-medium"><ShieldCheck className="text-primary-cta" /> 5-Year Warranty</div>
        <div className="flex items-center gap-2 font-medium"><Truck className="text-primary-cta" /> Fast Delivery</div>
        <div className="flex items-center gap-2 font-medium"><CreditCard className="text-primary-cta" /> Easy Financing</div>
    </div>
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      logoText="Moda Home Furniture"
      columns={[
        { items: [{ label: "Beds", href: "#" }, { label: "Sofas", href: "#" }, { label: "Sectionals", href: "#" }] },
        { items: [{ label: "About Us", href: "#" }, { label: "Financing", href: "#" }, { label: "Contact Us", href: "#" }] },
        { items: [{ label: "Return Policy", href: "#" }, { label: "Shipping Policy", href: "#" }] }
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}