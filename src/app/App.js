"use client";
import Header from "@/components/header/Header";
import "./globals.css";
import Category from "@/components/category/Category";
import MainContent from "@/components/mainContent/MainContent";
import Quick from "@/components/quickDelivery/quick";
import FavoritesBar from "@/components/favoritesBar/FavoritesBar";
import Footer from "@/components/footer/Footer";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Category />
        <MainContent />
        <Quick />
        <FavoritesBar />
        <Footer />
      </QueryClientProvider>
    </>
  );
}
