"use client";
import { useVisibleItem } from "@/hooks/use-visible-item";
import { cn } from "@/lib/utils";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import { Mountain } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { NavLink } from "@/config/landing-page-data";

type NavLinksProps = {
  navLinks: NavLink[];
  activeId: string | null;
  isMobile: boolean;
  onLinkClick?: () => void;
};

const NavLinks: React.FC<NavLinksProps> = ({
  navLinks,
  activeId,
  isMobile,
  onLinkClick,
}) => (
  <nav
    className={cn(
      isMobile
        ? "flex flex-col items-start py-4 border-t"
        : "hidden md:flex md:items-center md:gap-4"
    )}
  >
    {navLinks.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        className={cn(
          "text-sm font-medium hover:underline underline-offset-4",
          isMobile && "py-2 w-full",
          activeId === link.href.slice(1) && "underline"
        )}
        onClick={onLinkClick}
        prefetch={false}
      >
        {link.title}
      </Link>
    ))}
  </nav>
);

export function Header({ navLinks }: { navLinks: NavLink[] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const itemIds = navLinks.map((link) => link.href.slice(1));
  const activeId = useVisibleItem(itemIds);
  const handleMobileLinkClick = () => setIsMenuOpen(false);

  return (
    <header
      className={cn(
        "w-full fixed top-0 left-0 px-4 lg:px-6 flex flex-col bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 transition-all duration-300 ease-in-out",
        isMenuOpen ? "h-auto" : "h-16"
      )}
    >
      <div className="h-16 flex items-center justify-between">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <Mountain className="h-6 w-6" />
          <span className="sr-only">Acme Social</span>
        </Link>
        <Button
          variant="ghost"
          className="md:hidden p-2 rounded-lg"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <Cross1Icon className="h-6 w-6" />
          ) : (
            <HamburgerMenuIcon className="h-6 w-6" />
          )}
        </Button>
        <NavLinks navLinks={navLinks} activeId={activeId} isMobile={false} />
      </div>
      {isMenuOpen && (
        <NavLinks
          navLinks={navLinks}
          activeId={activeId}
          isMobile={true}
          onLinkClick={handleMobileLinkClick}
        />
      )}
    </header>
  );
}
