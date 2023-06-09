import Header from "@/components/header/Header";
import "./globals.css";
import Category from "@/components/category/Category";
import MainContent from "@/components/mainContent/MainContent";
import Quick from "@/components/quickDelivery/quick";
import FavoritesBar from "@/components/favoritesBar/FavoritesBar";
export default function Home() {
  return (
      <div className="background">
        <Header />
        <Category />
        <MainContent />
        <Quick/>
        <FavoritesBar/>
      </div>
  );
}
