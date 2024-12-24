import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <div className="hidden lg:block w-72">
          <Sidebar />
        </div>
        <main className="flex-1 min-h-[calc(100vh-4rem)]">
          <div className="h-full p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}