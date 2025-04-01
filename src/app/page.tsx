import ProductList from "@/components/ProductList";
import CategoryList from "@/components/CategoryList";
import Slider from "@/components/Slider";
import Filter from "@/components/Filter";

const HomePage = () => {
  return (
    <div className="">
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:64">
        <h1 className="text-2xl">Featured Products</h1>
        <ProductList />
      </div>
      <div className="mt-24">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:32 2xl:64 mb-12">
          Categories
        </h1>
        <CategoryList />
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:64">
        <h1 className="text-2xl">New Products</h1>
        <ProductList />
      </div>
      {/* FILTER */}
      <Filter />
      {/* PRODUCTS */}
      <h1>Shoes for you!</h1>
      <ProductList />
    </div>
  );
};

export default HomePage;
