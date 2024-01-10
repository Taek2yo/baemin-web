'use client'
import DeliveryCategory from "@/components/deliverypage/DeliveryCategory";
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()
export default function DeliveryCategoryPage(){
    return(
        <QueryClientProvider client={queryClient}>
        <DeliveryCategory/>
        </QueryClientProvider>
    )
}