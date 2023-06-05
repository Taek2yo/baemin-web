import Header from "@/components/header/Header";
import "./globals.css";
import Category from "@/components/category/Category";
import MainContent from "@/components/mainContent/MainContent";

export default function Home() {
  return (
      <div className="background">
        <Header />
        <Category />
        <MainContent />
      </div>
  );
}
