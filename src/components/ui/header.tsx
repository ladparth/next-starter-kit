import React from "react";
import { cn } from "@/lib/utils";

const Header = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <header
    ref={ref}
    className={cn(
      "flex items-center justify-between h-16 px-4 border-b",
      className
    )}
    {...props}
  >
    {children}
  </header>
));
Header.displayName = "Header";

const HeaderLeft = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex items-center gap-4", className)} {...props} />
);
HeaderLeft.displayName = "HeaderLeft";

const HeaderRight = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex items-center gap-4", className)} {...props} />
);
HeaderRight.displayName = "HeaderRight";

interface HeaderTitleProps extends React.HTMLAttributes<HTMLDivElement> {}

const HeaderTitle = React.forwardRef<HTMLDivElement, HeaderTitleProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("hidden md:flex items-center gap-2", className)}
      {...props}
    />
  )
);
HeaderTitle.displayName = "HeaderTitle";

export { Header, HeaderLeft, HeaderRight, HeaderTitle };
