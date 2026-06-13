import { Sidebar, SidebarHeader } from "@/components/ui/sidebar";
import { Link, NavLink } from "react-router";
import { CAFE, DISCOUNT, MENU } from "@/constants/url";
import { cn } from "@/lib/utils";
import { UtensilsCrossed, Coffee, Tag } from "lucide-react";

const NAV_MENU = [
  { title: "음식 레시피", url: MENU, icon: UtensilsCrossed },
  { title: "음료 레시피", url: CAFE, icon: Coffee },
  { title: "현금 할인", url: DISCOUNT, icon: Tag },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="border-b py-4 text-xl text-center h-15">
        <Link to={MENU}>넥스 레시피 퀴즈</Link>
      </SidebarHeader>

      {NAV_MENU.map((menu) => (
        <NavLink
          key={menu.url}
          to={menu.url}
          className={({ isActive }) =>
            cn(
              "flex items-center gap-2.5 px-4 py-4 rounded-md text-lg transition-colors",
              "text-muted-foreground hover:text-foreground hover:bg-muted",
              isActive && "bg-muted text-foreground font-medium",
            )
          }
        >
          <menu.icon size={20} aria-hidden="true" />
          <span>{menu.title}</span>
        </NavLink>
      ))}
    </Sidebar>
  );
}
