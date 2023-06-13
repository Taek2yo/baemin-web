'use client'
import { signOut } from 'next-auth/react'
export default function LogoutOnclick(){
    return(
        <span className="out" onClick={()=>{ signOut() }}>로그아웃</span>
    )
}

