import { ThemeToggle } from "@/components/theme/theme-toggle";
import {
  Header,
  HeaderLeft,
  HeaderRight,
  HeaderTitle,
} from "@/components/ui/header";
import { NavLink } from "@/components/ui/nav";
import { Mountain } from "lucide-react";
import { UserDropdown } from "./user-dropdown";
import MobileNav from "./mobile-nav";
import { cn } from "@/lib/utils";

export default function DashboardHeader({
  links,
  className,
}: {
  links: NavLink[];
  className?: string;
}) {
  return (
    <Header className={cn(className)}>
      <HeaderLeft>
        <MobileNav links={links} />
        <HeaderTitle>
          <Mountain size={24} />
          <h1 className="text-lg font-semibold">Acme Social</h1>
        </HeaderTitle>
        {/* <NavLinks links={links} /> */}
      </HeaderLeft>
      <HeaderRight>
        <ThemeToggle />
        <UserDropdown />
      </HeaderRight>
    </Header>
  );
}
