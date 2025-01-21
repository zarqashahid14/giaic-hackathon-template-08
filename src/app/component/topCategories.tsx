import { client } from "../../sanity/lib/client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";

interface Idata {
    title: string;
    numberOfProducts: number;
    imageUrl: string;
}

export default async function TopCategories() {
    const categories: Idata[] = await client.fetch(`
        *[_type == "categories"]{
            title,
            numberOfProducts,
            "imageUrl": image.asset->url
          }`);

    return (
        <div className="w-[90%] xl:w-[70%] mx-auto">
            <h2 className="text-[34px] mb-6 mt-4">Top categories</h2>
            <div className="grid gap-2 grid-cols-3 mb-6">
                {categories.map((data, index) => (
                    <div key={index} className="relative w-[200px] lg:w-[300px] h-[377px]">
                        <Image
                            src={data.imageUrl}
                            alt={data.title}
                            width={250}
                            height={312}
                            className="rounded-[6px] w-[250px] lg:w-[300px]"
                            priority
                        />
                        <button className="absolute top-2 left-2 bg-[#01AD5A] text-white px-2 py-1 text-xs rounded">
                            New
                        </button>
                        <div className="flex justify-between bg-[#000000B2] items-center mt-4 px-2 py-2">
                            <div className="text-[#FFFFFF]">
                                <h6 className="text-[20px] font-semibold">{data.title}</h6>
                                <p className="text-[15px]">{data.numberOfProducts} Products</p>
                            </div>
                            <button className="w-[50px] h-[50px] rounded-[5px] bg-[#F0F2F3] text-black hover:bg-[#029FAE] flex items-center justify-center">
                                <FontAwesomeIcon icon={faCartShopping} className="w-[22px] h-[22px]" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
