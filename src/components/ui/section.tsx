import * as React from "react";
import { cn } from "@/lib/utils";

const Section = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => (
  <section
    ref={ref}
    className={cn(
      "w-full py-12 md:py-24 lg:py-32 container mx-auto max-md:pt-20",
      className
    )}
    {...props}
  />
));
Section.displayName = "Section";

const SectionHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("space-y-2 text-center", className)}
    {...props}
  />
));
SectionHeader.displayName = "SectionHeader";

const SectionTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement> & { isHero?: boolean }
>(({ className, isHero = false, ...props }, ref) => {
  const HeadingTag = isHero ? "h1" : "h2";
  const headingClass = isHero
    ? "text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none"
    : "text-3xl font-bold tracking-tighter sm:text-5xl";

  return (
    <HeadingTag ref={ref} className={cn(headingClass, className)} {...props} />
  );
});
SectionTitle.displayName = "SectionTitle";

const SectionDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "mx-auto max-w-[700px] text-muted-foreground md:text-xl",
      className
    )}
    {...props}
  />
));
SectionDescription.displayName = "SectionDescription";

const SectionContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("mt-6 flex flex-col items-center gap-6 text-center", className)}
    {...props}
  />
));
SectionContent.displayName = "SectionContent";

export {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
  SectionContent,
};
