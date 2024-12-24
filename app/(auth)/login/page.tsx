"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { LoginCard } from "@/components/auth/login-card"

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async () => {
    try {
      setIsLoading(true)
      // Simulate a brief loading state before redirect
      await new Promise(resolve => setTimeout(resolve, 500))
      router.push("/dashboard")
    } catch (error) {
      console.error("Login failed:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container flex items-center justify-center">
      <LoginCard onLogin={handleLogin} isLoading={isLoading} />
    </div>
  )
}