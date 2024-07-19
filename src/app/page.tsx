import { CheckIcon } from "lucide-react";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Header } from "@/components/landing-page/header";
import { Footer } from "@/components/landing-page/footer";
import {
  Section,
  SectionContent,
  SectionDescription,
  SectionHeader,
  SectionTitle,
} from "@/components/ui/section";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { landingPageData } from "@/config/landing-page-data";
export default function Home() {
  const { navLinks, platforms, features, pricing, testimonials, faqs } =
    landingPageData;

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header navLinks={navLinks} />
      <main className="flex-1 mt-16">
        <Section>
          <SectionHeader>
            <SectionTitle>Streamline Your Social Media Presence</SectionTitle>
            <SectionDescription>
              Manage all your social media accounts in one place. Schedule
              posts, analyze performance, and grow your audience.
            </SectionDescription>
          </SectionHeader>
          <SectionContent>
            <div className="flex max-w-5xl gap-6">
              {platforms.map((platform) => (
                <div
                  key={platform.name}
                  className="flex items-center justify-center"
                >
                  <Image
                    src={platform.icon}
                    width={48}
                    height={48}
                    alt={platform.name}
                    className="h-6 w-6"
                  />
                </div>
              ))}
            </div>
            <div>
              <Link
                href="/signup"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "w-64 h-10"
                )}
                prefetch={false}
              >
                Get Started
              </Link>
            </div>
          </SectionContent>
        </Section>

        <Section id="features" className="bg-muted w-full rounded-lg shadow-md">
          <SectionHeader>
            <SectionTitle>
              Powerful Tools for Social Media Domination
            </SectionTitle>
            <SectionDescription>
              Streamline your social media workflow with our all-in-one
              platform. Easily cross-post, schedule content, and analyze your
              performance.
            </SectionDescription>
          </SectionHeader>
          <SectionContent>
            <div className="max-sm:flex-col flex gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-center gap-4">
                  <div className="rounded-full bg-primary p-2 text-primary-foreground">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div className="text-start space-y-1">
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </SectionContent>
        </Section>

        <Section id="pricing">
          <SectionHeader>
            <SectionTitle>Affordable Pricing for Every Business</SectionTitle>
            <SectionDescription>
              Choose the plan that best fits your needs and budget.
            </SectionDescription>
          </SectionHeader>
          <SectionContent>
            <div className="mx-auto grid max-w-6xl items-center gap-6 lg:grid-cols-3 lg:gap-12">
              {pricing.map((plan) => (
                <Card
                  key={plan.name}
                  className="bg-muted p-4 shadow-md h-full flex flex-col"
                >
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">
                      {plan.name}
                    </CardTitle>
                    <div className="flex items-baseline pt-2">
                      <span className="text-4xl font-bold">${plan.price}</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-1">
                    <ul className="space-y-2 text-muted-foreground">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="text-sm flex items-center gap-2"
                        >
                          <CheckIcon className="h-4 w-4 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="#cta"
                      className={cn(
                        "w-full",
                        buttonVariants({ variant: "default" })
                      )}
                    >
                      Get Started
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </SectionContent>
        </Section>

        <Section id="testimonials" className="bg-muted rounded-lg shadow-md">
          <SectionHeader>
            <SectionTitle>What Our Customers Say</SectionTitle>
            <SectionDescription>
              Hear from the people who have used our social media publishing
              tool and loved it.
            </SectionDescription>
          </SectionHeader>
          <SectionContent>
            <div className="grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.name} className="p-6 shadow-md">
                  <CardContent className="p-0 grid gap-4">
                    <div className="flex gap-3">
                      <span className="inline-flex rounded-full">
                        <Avatar>
                          <AvatarImage
                            src={""}
                            alt={`${testimonial.name} avatar`}
                          />
                          <AvatarFallback>
                            {testimonial.name.split(" ").map((name) => name[0])}
                          </AvatarFallback>
                        </Avatar>
                      </span>
                      <div className="text-start">
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <q className="text-muted-foreground">{testimonial.text}</q>
                  </CardContent>
                </Card>
              ))}
            </div>
          </SectionContent>
        </Section>

        <Section id="faq">
          <SectionHeader>
            <SectionTitle>Frequently Asked Questions</SectionTitle>
            <SectionDescription>
              Get answers to the most common questions about our platform.
            </SectionDescription>
          </SectionHeader>
          <SectionContent>
            <Accordion
              type="single"
              collapsible
              className="w-full max-w-3xl"
              defaultValue="item-0"
            >
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-start">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </SectionContent>
        </Section>

        <Section id="cta" className="bg-muted rounded-lg shadow-md mb-4">
          <SectionHeader>
            <SectionTitle>Start Growing Your Audience Today</SectionTitle>
            <SectionDescription>
              Sign up for our social media publisher and start publishing your
              content across all your platforms with ease.
            </SectionDescription>
          </SectionHeader>
          <SectionContent>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex gap-2 items-center">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="max-w-lg flex-1 bg-background shadow-md"
                />
                <Button type="submit">Sign Up</Button>
              </form>
              <p className="text-xs text-muted-foreground">
                Sign up to get started with our social media publisher.{" "}
                <Link
                  href="#"
                  className="underline underline-offset-2"
                  prefetch={false}
                >
                  Terms &amp; Conditions
                </Link>
              </p>
            </div>
          </SectionContent>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
