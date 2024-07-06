import Header from "@GlobalComponents/Header/Header";
import Footer from "@GlobalComponents/Footer/Footer";

import BlogSection from "@Home/Blog/BlogSection";
import OurFavorites from "@Home/OurFavorites/OurFavorites";
import LanderSection from "@Home/Lander/LanderSection";
import ReviewSection from "@Home/Review/ReviewSection";
import FavoriteSection from "@Home/Favorite/FavoriteSection";
import ReservationSection from "@Home/Reservation/ReservationSection";
import InstructionsSection from "@Home/Instructions/InstructionsSection";
import PreviewRecipesSection from "@Home/PreviewRecipes/PreviewRecipesSection";

import { ReviewContextProvider } from "@Home/Review/ReviewSection";

export default function Home() {
  return (
    <main className="w-full h-auto flex flex-col items-center overflow-x-hidden">
      <Header />
      <LanderSection />
      <FavoriteSection />
      <OurFavorites />
      <InstructionsSection />
      <PreviewRecipesSection />
      <ReservationSection />
      <ReviewContextProvider>
        <ReviewSection />
      </ReviewContextProvider>
      <BlogSection />
      <Footer />
    </main>
  );
}
