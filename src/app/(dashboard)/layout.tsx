import DashboardHeader from "@/components/dashboard/layout/header";
import DashboardSidebar from "@/components/dashboard/layout/sidebar";

const navLinks = [
  { title: "Overview", href: "/overview" },
  { title: "Analytics", href: "/analytics" },
  { title: "Content", href: "/content" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen w-full">
      <div className="block">
        <div className="flex flex-col h-full max-h-screen">
          <DashboardHeader links={navLinks} />
          <div className="h-full flex">
            <DashboardSidebar links={navLinks} className="hidden md:flex" />
            <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
              {children}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
