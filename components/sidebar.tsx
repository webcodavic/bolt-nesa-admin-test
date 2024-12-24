"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { LayoutDashboard, Users, Settings, BarChart3, FileText, Mail, MessageSquare, Package, ShoppingCart } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const routes = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
  },
  {
    label: 'Analytics',
    icon: BarChart3,
    href: '/analytics',
  },
  {
    label: 'Users',
    icon: Users,
    href: '/users',
  },
  {
    label: 'Products',
    icon: Package,
    href: '/products',
  },
  {
    label: 'Orders',
    icon: ShoppingCart,
    href: '/orders',
  },
  {
    label: 'Messages',
    icon: MessageSquare,
    href: '/messages',
  },
  {
    label: 'Documents',
    icon: FileText,
    href: '/documents',
  },
  {
    label: 'Email',
    icon: Mail,
    href: '/email',
  },
  {
    label: 'Settings',
    icon: Settings,
    href: '/settings',
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-card">
      <div className="px-3 py-2">
        <h2 className="mb-2 px-4 text-2xl font-bold tracking-tight text-primary">NESA</h2>
        <div className="space-y-1">
          <ScrollArea className="h-[calc(100vh-8rem)]">
            <div className="space-y-1 p-2">
              {routes.map((route) => (
                <Button
                  key={route.href}
                  variant={pathname === route.href ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start",
                    pathname === route.href && "bg-secondary text-white"
                  )}
                  asChild
                >
                  <Link href={route.href}>
                    <route.icon className="mr-2 h-4 w-4" />
                    {route.label}
                  </Link>
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}