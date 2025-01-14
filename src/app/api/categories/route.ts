import { client } from "@/sanity/lib/client";
import { NextRequest } from "next/server";
export const dynamic = 'force-static'

export async function GET(req: NextRequest) {
  try {
    const categories = await client.fetch(`*[_type == "categories"] {
          _id,
          title,
          "imageUrl": image.asset->url
        }`);

    return new Response(JSON.stringify(categories), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to fetch categories" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
