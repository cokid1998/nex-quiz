import { AppSidebar } from "@/components/app-sidebar";
import Header from "@/components/base/Header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header />

        <main className="p-10">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
