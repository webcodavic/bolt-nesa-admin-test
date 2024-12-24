import { Badge } from "@/components/ui/badge"
import { UserRole } from "@/lib/types/user"

const roleColors = {
  admin: "bg-red-500/20 text-red-500 hover:bg-red-500/20",
  editor: "bg-blue-500/20 text-blue-500 hover:bg-blue-500/20",
  viewer: "bg-green-500/20 text-green-500 hover:bg-green-500/20"
}

interface UserRoleBadgeProps {
  role: UserRole
}

export function UserRoleBadge({ role }: UserRoleBadgeProps) {
  return (
    <Badge variant="secondary" className={roleColors[role]}>
      {role.charAt(0).toUpperCase() + role.slice(1)}
    </Badge>
  )
}