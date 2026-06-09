import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavLink } from "react-router";

// This is sample data.
const data = {
  navMain: [
    {
      title: "문제 종류들",
      url: "/",
      items: [
        {
          title: " 🍽️ 음식 레시피",
          url: "/menu",
        },
        {
          title: "🍹 음료 레시피",
          url: "/cafe",
        },
        {
          title: "💸 할인",
          url: "/discount",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="border-b py-4 text-xl text-center h-15">
        넥스 레시피 퀴즈
      </SidebarHeader>
      <SidebarContent>
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            {/* <SidebarGroupLabel>{item.title}</SidebarGroupLabel> */}
            <SidebarGroupContent>
              <SidebarMenu className="gap-2">
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title} className="px-1 py-2">
                    <SidebarMenuButton asChild className="text-lg">
                      <NavLink to={item.url}>{item.title}</NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
