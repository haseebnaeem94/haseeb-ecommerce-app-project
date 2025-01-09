import { getProducts } from '@/lib/api';
import { Product } from '@/lib/types';
import ProductGrid from '@/components/product-grid';

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">All Products</h1>
      <ProductGrid products={products} />
    </div>
  );
}