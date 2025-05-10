import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Layout from "@/app/components/Layout";
import ProductDetailClient from "./page.client";

// Define dynamic metadata for SEO
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const productId = parseInt(params.id);
  const product = products.find(p => p.id === productId);
  
  if (!product) {
    return {
      title: "Product Not Found - NextShop",
      description: "The requested product could not be found."
    };
  }
  
  return {
    title: `${product.name} - NextShop`,
    description: product.description.substring(0, 160),
    openGraph: {
      title: `${product.name} - NextShop`,
      description: product.description.substring(0, 160),
      images: [
        {
          url: product.image,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
      type: 'product',
      product: {
        price: {
          amount: product.price.toString(),
          currency: 'USD',
        },
      },
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} - NextShop`,
      description: product.description.substring(0, 160),
    },
  };
}

// Generate static paths for all products
export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const productId = parseInt(params.id);
  const product = products.find(p => p.id === productId);
  
  if (!product) {
    notFound();
  }
  
  // Related products (same category, excluding current product)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);
  
  return (
    <Layout>
      <nav className="text-sm mb-6">
        <ol className="flex items-center space-x-2">
          <li><Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link></li>
          <li><span className="text-gray-500">/</span></li>
          <li><Link href="/products" className="text-gray-500 hover:text-gray-700">Products</Link></li>
          <li><span className="text-gray-500">/</span></li>
          <li><span className="text-gray-900">{product.name}</span></li>
        </ol>
      </nav>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="relative h-[400px] md:h-[600px] bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        
        <div>
          <span className="text-sm font-medium text-blue-600">{product.category}</span>
          <h1 className="text-3xl font-bold mt-2 mb-4">{product.name}</h1>
          
          <div className="flex items-center mb-4">
            <div className="text-yellow-500 flex">
              {Array(5).fill(0).map((_, i) => (
                <span key={i}>{i < Math.floor(product.rating) ? "★" : "☆"}</span>
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-500">({product.reviews} reviews)</span>
          </div>
          
          <p className="text-2xl font-bold mb-6">${product.price.toFixed(2)}</p>
          
          <p className="text-gray-600 dark:text-gray-300 mb-6">{product.description}</p>
          
          <div className="mb-6">
            <h2 className="font-semibold mb-2">Features:</h2>
            <ul className="list-disc pl-5 space-y-1">
              {product.features.map((feature, index) => (
                <li key={index} className="text-gray-600 dark:text-gray-300">{feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="mb-8">
            <h2 className="font-semibold mb-2">Specifications:</h2>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex flex-col">
                  <span className="text-sm text-gray-500">{key}</span>
                  <span className="text-gray-700 dark:text-gray-300">{value}</span>
                </div>
              ))}
            </div>
          </div>
          
          <ProductDetailClient product={product} />
        </div>
      </div>
      
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link href={`/products/${relatedProduct.id}`} key={relatedProduct.id} className="group">
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden transition-all hover:shadow-lg">
                  <div className="relative h-64 w-full bg-gray-100 dark:bg-gray-800">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{relatedProduct.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">${relatedProduct.price.toFixed(2)}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </Layout>
  );
}