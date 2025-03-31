import Image from "next/image";
import Link from "next/link";

const ProductList = () => {
  return (
    <div className="flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link href="/test" className="relative w-full h-80">
        <Image
          src="https://plus.unsplash.com/premium_photo-1711051475117-f3a4d3ff6778?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          fill
          sizes="25vw"
        />
      </Link>
    </div>
  );
};

export default ProductList;
