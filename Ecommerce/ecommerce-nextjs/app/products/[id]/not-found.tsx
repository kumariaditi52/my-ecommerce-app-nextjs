import Link from "next/link";
import Layout from "@/app/components/Layout";

export default function ProductNotFound() {
  return (
    <Layout>
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
        <p className="text-xl mb-8">Sorry, the product you're looking for doesn't exist.</p>
        <Link 
          href="/products" 
          className="rounded-full bg-foreground text-background px-6 py-3 font-medium hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors"
        >
          Browse All Products
        </Link>
      </div>
    </Layout>
  );
}