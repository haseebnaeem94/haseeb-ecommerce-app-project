'use client';

import { Product } from '@/lib/types';
import { formatPrice } from '@/lib/utils';
import { Button } from './ui/button';
import { useCart } from './cart-provider';
import { Star, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import { toast } from 'sonner'; 

export function ProductDetails({ product }: { product: Product }) {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: product.id.toString(),
      name: product.title,
      price: product.price,
      quantity: 1,
      image: product.image,
    });

    toast.success('Added to cart', {
      description: `${product.title} has been added to your cart.`,
    });
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="relative aspect-square bg-white rounded-lg overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain p-8"
        />
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${
                  i < Math.floor(product.rating.rate)
                    ? 'fill-primary text-primary'
                    : 'fill-muted text-muted'
                }`}
              />
            ))}
          </div>
          <span className="text-muted-foreground">
            ({product.rating.count} reviews)
          </span>
        </div>
        <p className="text-2xl font-bold mb-6">{formatPrice(product.price)}</p>
        <p className="text-muted-foreground mb-6">{product.description}</p>
        <Button size="lg" onClick={handleAddToCart}>
          <ShoppingCart className="mr-2 h-5 w-5" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
}