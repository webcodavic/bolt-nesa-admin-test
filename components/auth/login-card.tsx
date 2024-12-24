"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Microsoft } from "@/components/icons/microsoft"

interface LoginCardProps {
  onLogin: () => Promise<void>
  isLoading: boolean
}

export function LoginCard({ onLogin, isLoading }: LoginCardProps) {
  return (
    <Card className="w-[400px]">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl text-center">Welcome back</CardTitle>
        <CardDescription className="text-center">
          Sign in to your account using Azure AD
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Button
          variant="outline"
          onClick={onLogin}
          disabled={isLoading}
          className="w-full bg-[#2F2F2F] hover:bg-[#262626] text-white border-none h-12"
        >
          <Microsoft className="mr-2 h-5 w-5" />
          Sign in with Microsoft
        </Button>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-muted-foreground text-center px-6 w-full">
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </p>
      </CardFooter>
    </Card>
  )
}