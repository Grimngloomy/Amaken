
import { cn } from "@/lib/utils";
import { SidebarProvider, Sidebar, SidebarContent, SidebarGroup } from "@/components/ui/sidebar";
import { Home, Building2, CalendarDays, MessageCircle, Settings } from "lucide-react";
import { BottomNav } from "./BottomNav";
import { useIsMobile } from "@/hooks/use-mobile";

const sidebarItems = [
  { icon: Home, label: "Dashboard", href: "/" },
  { icon: Building2, label: "Properties", href: "/properties" },
  { icon: CalendarDays, label: "Appointments", href: "/appointments" },
  { icon: MessageCircle, label: "Messages", href: "/messages" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export function MainLayout({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-black text-white">
        {!isMobile && (
          <Sidebar className="border-r border-white/10">
            <SidebarContent>
              <div className="p-4 mb-4">
                <h1 className="text-xl font-semibold">Amaken</h1>
              </div>
              <SidebarGroup>
                {sidebarItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 px-4 py-2 text-sm text-gray-400",
                      "hover:text-white hover:bg-white/5 transition-colors",
                      "rounded-lg mx-2"
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </a>
                ))}
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
        )}
        <main className="flex-1 overflow-auto">
          <div className="container mx-auto p-6 pb-20 md:pb-6">
            {children}
          </div>
        </main>
        <BottomNav />
      </div>
    </SidebarProvider>
  );
}
