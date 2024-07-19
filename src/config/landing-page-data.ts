import { BarChartIcon, CalendarIcon, CrosshairIcon } from "lucide-react";
import React from "react";

type Platform = {
  name: string;
  icon: string;
};

type Feature = {
  icon: React.ElementType;
  title: string;
  description: string;
};

type PricingPlan = {
  name: string;
  price: number;
  features: string[];
};

type Testimonial = {
  name: string;
  role: string;
  text: string;
};

type FAQ = {
  question: string;
  answer: string;
};
export type NavLink = {
  href: string;
  title: string;
};

type LandingPageData = {
  navLinks: NavLink[];
  platforms: Platform[];
  features: Feature[];
  pricing: PricingPlan[];
  testimonials: Testimonial[];
  faqs: FAQ[];
};

export const landingPageData: LandingPageData = {
  navLinks: [
    { href: "#features", title: "Features" },
    { href: "#pricing", title: "Pricing" },
    { href: "#testimonials", title: "Testimonials" },
    { href: "#faq", title: "FAQ" },
    { href: "#cta", title: "CTA" },
  ],
  platforms: [
    { name: "Facebook", icon: "/fb-icon.png" },
    { name: "Instagram", icon: "/ig-icon.png" },
    { name: "LinkedIn", icon: "/li-icon.png" },
    { name: "TikTok", icon: "/tt-icon.png" },
  ],
  features: [
    {
      icon: CrosshairIcon,
      title: "Cross-Posting",
      description:
        "Publish to all your social media accounts with a single click.",
    },
    {
      icon: CalendarIcon,
      title: "Scheduling",
      description:
        "Plan and schedule your content in advance for maximum impact.",
    },
    {
      icon: BarChartIcon,
      title: "Analytics",
      description:
        "Gain insights into your social media performance and audience.",
    },
  ],
  pricing: [
    {
      name: "Starter",
      price: 9,
      features: [
        "3 Social Media Accounts",
        "Scheduling and Automation",
        "Basic Analytics",
      ],
    },
    {
      name: "Pro",
      price: 19,
      features: [
        "10 Social Media Accounts",
        "Scheduling and Automation",
        "Advanced Analytics",
        "Team Collaboration",
      ],
    },
    {
      name: "Enterprise",
      price: 49,
      features: [
        "Unlimited Social Media Accounts",
        "Scheduling and Automation",
        "Advanced Analytics",
        "Team Collaboration",
        "Dedicated Account Manager",
      ],
    },
  ],
  testimonials: [
    {
      name: "Jane Doe",
      role: "Social Media Manager",
      text: "This tool has been a game-changer for our social media strategy. It's so easy to use and has saved us so much time.",
    },
    {
      name: "John Smith",
      role: "Marketing Coordinator",
      text: "I love how this tool makes it easy to manage all of our social media accounts in one place. It's a must-have for any business.",
    },
    {
      name: "Sarah Lee",
      role: "Social Media Influencer",
      text: "This tool has helped me streamline my social media workflow and reach a wider audience. Highly recommended!",
    },
  ],
  faqs: [
    {
      question: "What is Acme Social?",
      answer:
        "Acme Social is an all-in-one social media management platform that helps businesses and individuals streamline their social media presence. It allows you to cross-post, schedule content, and analyze your performance across multiple platforms.",
    },
    {
      question: "How much does Acme Social cost?",
      answer:
        "Acme Social offers a free plan as well as several paid plans starting at $9.99 per month. The paid plans include additional features and higher limits. You can check our pricing page for more details.",
    },
    {
      question: "What platforms does Acme Social support?",
      answer:
        "Acme Social integrates with all the major social media platforms, including Facebook, Twitter, Instagram, LinkedIn, Pinterest, YouTube, TikTok, Snapchat, and Reddit.",
    },
    {
      question: "How do I get started with Acme Social?",
      answer:
        "To get started with Acme Social, simply sign up for a free account on our website. You can",
    },
  ],
};
