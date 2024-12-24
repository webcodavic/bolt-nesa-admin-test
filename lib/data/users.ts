import { User } from "@/lib/types/user"

export const users: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    role: "admin",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "editor",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    id: "3",
    name: "Mike Johnson",
    email: "mike.johnson@example.com",
    role: "viewer",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
  }
]