import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { client } from "../../sanity/lib/client";

interface Idata {
  title: string;
  price: number;
  imageUrl: string;
}

export default async function Product() {
  const products: Idata[] = await client.fetch(`
    *[_type == "products"]{
      title,
      price,
      "imageUrl": image.asset->url
    }
  `);

  console.log("data==>", products);

  return (
    <div className='w-[100%] bg-[#FFFFFF]'>
      <div className="w-[90%] xl:w-[70%] mx-auto">
        <h2 className="text-[34px] font-bold font-sans text-center mb-0 mt-8">
          Our Products
        </h2>
        <div className='flex my-10 justify-center lg:justify-start'>
          <div className="grid gap-2 grid-cols-2 lg:grid-cols-4 mb-0">
            {/* Loop through products */}
            {products.map((data, index) => (
              <div key={index} className="relative w-[220px] h-[377px]">
                <Image
                  src={data.imageUrl}
                  alt={data.title}
                  width={220}
                  height={312}
                  className="rounded-[6px]"
                  priority
                />
                <button className="absolute top-2 left-2 bg-[#01AD5A] text-white px-2 py-1 text-xs rounded">
                  New
                </button>
                <div className="flex justify-between items-center mt-4 px-2">
                  <div>
                    <h6 className="text-[18px] font-semibold hover:text-[#007580] cursor-pointer">
                      {data.title}
                    </h6>
                    <p className="text-gray-600 font-medium">${data.price}</p>
                  </div>
                  <button className="w-[50px] h-[50px] rounded-[5px] bg-[#F0F2F3] text-black hover:bg-[#029FAE] flex items-center justify-center">
                    <FontAwesomeIcon icon={faCartShopping} className='w-[22px] h-[22px]' />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
