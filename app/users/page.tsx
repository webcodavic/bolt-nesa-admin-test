"use client"

import { useState } from "react"
import { users as initialUsers } from "@/lib/data/users"
import { User, UserRole } from "@/lib/types/user"
import { UserTable } from "@/components/users/user-table"
import { EditUserDialog } from "@/components/users/edit-user-dialog"

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>(initialUsers)
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [editDialogOpen, setEditDialogOpen] = useState(false)

  const handleEditUser = (user: User) => {
    setSelectedUser(user)
    setEditDialogOpen(true)
  }

  const handleSaveUser = (user: User, newRole: UserRole) => {
    setUsers(users.map(u => 
      u.id === user.id ? { ...u, role: newRole } : u
    ))
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Users Table</h2>
      </div>
      <UserTable users={users} onEdit={handleEditUser} />
      <EditUserDialog
        user={selectedUser}
        open={editDialogOpen}
        onOpenChange={setEditDialogOpen}
        onSave={handleSaveUser}
      />
    </div>
  )
}