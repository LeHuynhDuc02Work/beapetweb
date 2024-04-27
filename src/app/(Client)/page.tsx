"use client"
import Slider from "@/components/homePage/slider";
import LatestProduct from "@/components/homePage/latestProduct";
import CategoryProduct from "@/components/homePage/categoryProduct";
import Brands from "@/components/homePage/brand";
import New from "@/components/homePage/new";

export default function Home() {
  return (
    <div className="home">
      <Slider />
      <LatestProduct />
      <CategoryProduct />
      <Brands />
      <New />
    </div>
  );
}
