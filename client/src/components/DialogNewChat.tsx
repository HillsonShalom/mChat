import { Button, Dialog } from '@mui/material'
import React, { useEffect, useState } from 'react'
import socket from '../socket/io'

const DialogNewChat = ({open}: {open: boolean}) => {
    const [users, setUsers] = useState<getUsersDto[]>([])

    useEffect(() => {
        socket.emit('all-users');
        socket.on('all-users', (data: getUsersDto[]) => {
            setUsers(data)
        })
    }, [open])
  return (
    <Dialog open={open} >
        {users.map((u, i) => <Button key={i}>{u.username}</Button>)}
    </Dialog>
  )
}

export default DialogNewChat

export type getUsersDto = {_id: string, username: string, photoUrl?: string}