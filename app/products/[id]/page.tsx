import { getProduct, getProducts } from '@/lib/api';
import { ProductDetails } from '@/components/product-details';
import { notFound } from 'next/navigation';


export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}


export const dynamicParams = false;

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProduct(params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container py-8">
      <ProductDetails product={product} />
    </div>
  );
}