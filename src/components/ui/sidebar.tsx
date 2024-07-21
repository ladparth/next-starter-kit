import React from "react";
import { cn } from "@/lib/utils";

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <aside
    ref={ref}
    className={cn("flex-1 flex flex-col max-w-64 p-4 border-r", className)}
    {...props}
  >
    {children}
  </aside>
));
Sidebar.displayName = "Sidebar";

const SidebarHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex items-center gap-4", className)} {...props} />
);
SidebarHeader.displayName = "SidebarHeader";

const SidebarContent = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex-1 grid gap-4", className)} {...props} />
);
SidebarContent.displayName = "SidebarContent";

const SidebarFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex items-center gap-4", className)} {...props} />
);
SidebarFooter.displayName = "SidebarFooter";

export { Sidebar, SidebarHeader, SidebarContent, SidebarFooter };
