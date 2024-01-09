'use client'
import { QueryClient, QueryClientProvider } from 'react-query'
import Home from "./App";
import "./globals.css";

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <title>다음의 민족</title>
      <div className="background">
        <Home />
      </div>
    </QueryClientProvider>
  );
}