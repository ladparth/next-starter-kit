"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cva, VariantProps } from "class-variance-authority";

export interface NavLink {
  title: string;
  href: string;
}

const NavLink = ({ title, href }: NavLink) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={cn(
        "w-full text-muted-foreground flex items-center transition-colors px-3 py-2 hover:text-primary",
        href === pathname && "text-primary rounded-lg dark:bg-muted/50 bg-muted"
      )}
    >
      {title}
    </Link>
  );
};

const navLinksVariants = cva("flex", {
  variants: {
    layout: {
      horizontal: "items-center hidden md:flex",
      vertical: "flex-col items-start ",
    },
    size: {
      sm: "text-sm",
      md: "text-[16px]",
      lg: "text-lg",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    layout: "horizontal",
    size: "sm",
    weight: "medium",
  },
});

export interface NavLinksProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof navLinksVariants> {
  links: NavLink[];
}

const NavLinks = React.forwardRef<HTMLElement, NavLinksProps>(
  ({ className, layout, size, weight, links, ...props }, ref) => {
    return (
      <nav
        ref={ref}
        className={cn(navLinksVariants({ layout, size, weight, className }))}
        {...props}
      >
        {links.map((link) => {
          return (
            <NavLink key={link.title} title={link.title} href={link.href} />
          );
        })}
      </nav>
    );
  }
);

NavLinks.displayName = "NavLinks";

export { NavLinks, navLinksVariants };
