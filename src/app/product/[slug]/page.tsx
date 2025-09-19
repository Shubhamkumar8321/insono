"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { graphQLClient, GET_PRODUCTS } from "@/lib/graphql";

interface Product {
  id: string;
  title: string;
  slug: string;
  featuredImage?: { node?: { sourceUrl: string } };
  categories?: { nodes: { name: string }[] };
  description?: string;
}

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();
  const { slug } = params;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    async function fetchProduct() {
      try {
        const data = await graphQLClient.request<{
          products: { nodes: Product[] };
        }>(GET_PRODUCTS);

        const found = data.products.nodes.find((p) => p.slug === slug);
        setProduct(found || null);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [slug]);

  if (loading) {
    return (
      <main className="max-w-4xl mx-auto px-6 py-20 text-center">
        <p className="text-lg text-gray-600">Loading product...</p>
      </main>
    );
  }

  if (!product) {
    return (
      <main className="max-w-4xl mx-auto px-6 py-20 text-center">
        <p className="text-lg text-gray-600">Product not found.</p>
      </main>
    );
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-16 mt-6">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        {/* Product Image */}
        <div className="lg:w-1/2 w-full rounded-xl overflow-hidden shadow-md bg-gray-50 relative h-96 lg:h-[500px] flex items-center justify-center">
          {product.featuredImage?.node?.sourceUrl ? (
            <Image
              src={product.featuredImage.node.sourceUrl}
              alt={product.title}
              fill
              className="object-contain"
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full text-gray-400 text-sm">
              No Image Available
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="lg:w-1/2 w-full flex flex-col justify-start">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#023784] mb-4">
            {product.title}
          </h1>

          {product.categories && product.categories.nodes.length > 0 && (
            <p className="text-sm text-gray-500 mb-6">
              Categories:{" "}
              {product.categories.nodes.map((c) => c.name).join(", ")}
            </p>
          )}

          <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-6">
            {product.description ||
              "This is a high-quality product designed to meet your needs. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec facilisis magna, non gravida felis."}
          </p>

          <button
            onClick={() => router.push("/form")}
            className="bg-[#023784] text-white px-6 py-3 rounded-md hover:bg-[#012d66] transition w-full sm:w-auto text-center font-medium"
          >
            Buy Now
          </button>
        </div>
      </div>

      {/* Optional: Related Products Section */}
      {/* <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          // Map related products here
        </div>
      </div> */}
    </main>
  );
}
