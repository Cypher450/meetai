"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { BotIcon, VideoIcon, StarsIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { DashboardUserButton } from "./dashboard-user-button";

const firstMenuItems = [
  {
    icons: VideoIcon,
    label: "Meetings",
    href: "/meetings",
  },
  {
    icons: BotIcon,
    label: "AI Assistants",
    href: "/assistants",
  },
];

const SecondMenuItems = [
  {
    icons: StarsIcon,
    label: "Upgrade Plan",
    href: "/upgrade",
  },
];

export const DashboardSidebar = () => {
  const Pathname = usePathname();
  // const Pathname = "/assistants"; // Forcing active state for demo purposes

  return (
    <Sidebar>
      <SidebarHeader className="px-4 py-2 text-side-accent-foreground font-bold text-lg">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.svg" height={35} width={36} alt="Meet.AI" />
          <p className="text-2xl font-semibold">Meet.AI</p>
        </Link>
      </SidebarHeader>
      <div className="px-4 py-2">
        <Separator className="opacity-10 text-[#5D6B68]" />
      </div>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {firstMenuItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    className={cn(
                      "h-10 flex items-center px-3 w-full rounded-md text-sm font-medium transition-all duration-200",
                      "text-sidebar-foreground hover:text-sidebar-accent-foreground",
                      "hover:bg-sidebar-accent focus:bg-sidebar-accent focus:outline-none",
                      "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
                      Pathname === item.href &&
                        "bg-sidebar-accent text-sidebar-accent-foreground"
                    )}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center space-x-2 w-full"
                    >
                      <item.icons className="h-5 w-5" />
                      <span className="text-sm font-medium tracking-tight">
                        {item.label}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="px-4 py-2">
          <Separator className="opacity-10 text-[#5D6B68]" />
        </div>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {SecondMenuItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    className={cn(
                      "h-10 flex items-center px-3 w-full rounded-md text-sm font-medium transition-all duration-200",
                      "text-sidebar-foreground hover:text-sidebar-accent-foreground",
                      "hover:bg-sidebar-accent focus:bg-sidebar-accent focus:outline-none",
                      "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
                      Pathname === item.href &&
                        "bg-sidebar-accent text-sidebar-accent-foreground"
                    )}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center space-x-2 w-full"
                    >
                      <item.icons className="h-5 w-5" />
                      <span className="text-sm font-medium tracking-tight">
                        {item.label}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
        <SidebarFooter className="px-4 py-2 text-white">
            <DashboardUserButton />
        </SidebarFooter>
    </Sidebar>
  );
};
