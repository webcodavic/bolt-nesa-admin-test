import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface RecentSaleProps {
  name: string
  email: string
  amount: string
  image: string
  initials: string
}

export function RecentSale({ name, email, amount, image, initials }: RecentSaleProps) {
  return (
    <div className="flex items-center">
      <Avatar className="h-9 w-9">
        <AvatarImage src={image} />
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>
      <div className="ml-4 space-y-1">
        <p className="text-sm font-medium">{name}</p>
        <p className="text-sm text-muted-foreground">{email}</p>
      </div>
      <div className="ml-auto font-medium">+{amount}</div>
    </div>
  )
}