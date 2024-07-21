import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { NavLink, NavLinks } from "@/components/ui/nav";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { Mountain } from "lucide-react";

export default function DashboardSidebar({
  links,
  className,
}: {
  links: NavLink[];
  className?: string;
}) {
  return (
    <Sidebar className={cn(className)}>
      <SidebarHeader className="flex md:hidden pb-4 border-b mb-4">
        <Mountain size={24} />
        <h1 className="text-lg font-semibold">Acme Social</h1>
      </SidebarHeader>
      <SidebarContent>
        <NavLinks links={links} layout="vertical" />
      </SidebarContent>
      <SidebarFooter>
        <Card x-chunk="A card with a call to action">
          <CardHeader className="p-4">
            <CardTitle>Upgrade to Pro</CardTitle>
            <CardDescription>
              Unlock all features and get unlimited access to our support team.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
            <Button size="sm" className="w-full">
              Upgrade
            </Button>
          </CardContent>
        </Card>
      </SidebarFooter>
    </Sidebar>
  );
}
