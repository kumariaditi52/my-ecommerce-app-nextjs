import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";

export const metadata = {
  title: "All Products - NextShop",
  description: "Browse our complete collection of premium products at NextShop",
};

export default function ProductsPage() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-8">All Products</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Layout>
  );
}