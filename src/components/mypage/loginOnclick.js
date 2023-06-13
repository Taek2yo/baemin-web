'use client'
import { signIn } from 'next-auth/react'
export default function LoginOnclick(){
    return(
        <span className="grade" onClick={()=>{ signIn() }}>로그인해주세요.</span>
    )
}