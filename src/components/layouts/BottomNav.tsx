
import { cn } from "@/lib/utils";
import { Home, Building2, CalendarDays, MessageCircle, Settings } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const navItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Building2, label: "Properties", href: "/properties" },
  { icon: CalendarDays, label: "Calendar", href: "/appointments" },
  { icon: MessageCircle, label: "Messages", href: "/messages" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export function BottomNav() {
  const isMobile = useIsMobile();

  if (!isMobile) return null;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#111] border-t border-white/10 px-4 py-2 z-50 animate-fade-in">
      <div className="flex justify-between items-center max-w-md mx-auto">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={cn(
              "flex flex-col items-center gap-1 p-2",
              "text-gray-400 hover:text-white transition-colors"
            )}
          >
            <item.icon className="h-5 w-5" />
            <span className="text-xs">{item.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}
