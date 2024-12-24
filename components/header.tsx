"use client"

import { Bell, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ProfileMenu } from "@/components/profile-menu"

export function Header() {
  return (
    <div className="border-b bg-card">
      <div className="flex h-16 items-center px-6">
        <div className="lg:hidden">
          <h2 className="text-2xl font-bold tracking-tight text-primary">NESA</h2>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search..."
              className="w-[300px] pl-8 bg-background"
            />
          </div>
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <Bell className="h-5 w-5" />
          </Button>
          <ProfileMenu />
        </div>
      </div>
    </div>
  )
}