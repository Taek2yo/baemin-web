'use client'
import Cart from "@/components/cartpage/Cart";
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()
export default function CartPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <Cart />
    </QueryClientProvider>
  );
}
