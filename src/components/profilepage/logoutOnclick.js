'use client'
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LogoutOnclick() {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut({
      callbackUrl: '/mypage',
    });
    router.push('/mypage');
  };

  return (
    <span className="out" onClick={handleLogout}>
      로그아웃
    </span>
  );
}
