import Image from "next/image";
import { client } from "../../sanity/lib/client";

interface Idata {
  imageUrl: string;
}

export default async function ExploreProduct() {
  const ExploreProduct1 : Idata[] = await client.fetch( `
    *[_type == "products"][5]{
      "imageUrl": image.asset->url
    }`);
  const ExploreProduct: Idata[] = await client.fetch(
    `*[_type == "products"][6...10]{
      "imageUrl": image.asset->url
    }`
  );

  console.log("data==>", ExploreProduct1);
  console.log("data==>", ExploreProduct);

  return (
    <div className="w-[90%] xl:w-[70%] my-20 mx-auto">
      <p className="text-[34px] font-sans font-bold mb-2 text-center">
        Explore new and popular styles
      </p>
      <div className="flex gap-3 flex-wrap justify-center">
        {ExploreProduct1.map((data, index) => (
          <div key={index}>
          
            <Image
              src={data.imageUrl}
              alt="popular styles"
              width={450}
              height={450}
              className="rounded-[6px]"
              priority
            />
            </div>
          ))}
            <div className="grid grid-cols-2 gap-2 w-[450px] h-[450px] mt-3">
            {ExploreProduct.map((data, index) => (
              
                <Image
                  key={index}
                  src={data.imageUrl}
                  alt="popular styles"
                  width={200}
                  height={220}
                  className="rounded-[6px] w-[200px] h-[220px]"
                  priority
            />))
}
              
            </div>
      </div>
    </div>
  );
}
