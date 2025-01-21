
import Hero from "../component/hero";
import TopCategories from "../component/topCategories";
import Product from "../product/page";
import FeatureProduct from "../component/feature";
import ExploreProduct from "../component/exploreProduct";



  export default function Home() {
    return (
        <>
      <Hero />
      <FeatureProduct />
      <TopCategories />
      <ExploreProduct />
      <Product />
      
        </>
    );
  }
  
