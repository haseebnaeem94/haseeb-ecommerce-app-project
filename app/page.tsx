import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, ShoppingBag, Truck, Shield } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '@/lib/api';
import ProductGrid from '@/components/product-grid';

export default async function Home() {
  const products = await getProducts();
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="flex flex-col gap-16 pb-16">
      
      <section className="relative h-[600px] flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
          alt="Hero"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="container relative z-10 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Discover Your Style
          </h1>
          <p className="text-xl mb-8 max-w-xl">
            Shop the latest trends in fashion, electronics, and more with
            unbeatable prices and premium quality.
          </p>
          <Button asChild size="lg">
            <Link href="/products">
              Shop Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      
      <section className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6">
            <ShoppingBag className="h-12 w-12 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Premium Selection</h3>
            <p className="text-muted-foreground">
              Curated collection of high-quality products from trusted brands.
            </p>
          </Card>
          <Card className="p-6">
            <Truck className="h-12 w-12 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Fast Delivery</h3>
            <p className="text-muted-foreground">
              Free shipping on orders over $50. Quick and reliable delivery.
            </p>
          </Card>
          <Card className="p-6">
            <Shield className="h-12 w-12 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Secure Shopping</h3>
            <p className="text-muted-foreground">
              100% secure payment processing and buyer protection.
            </p>
          </Card>
        </div>
      </section>

      
      <section className="container">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        {products.length > 0 ? (
          <>
            <ProductGrid products={featuredProducts} />
            <div className="text-center mt-8">
              <Button asChild size="lg">
                <Link href="/products">
                  View All Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No products available</p>
          </div>
        )}
      </section>
    </div>
  );
}