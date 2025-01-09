'use client';

import { Product } from '@/lib/types';
import { formatPrice } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { Star } from 'lucide-react';

export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/products/${product.id}`}
          className="group"
        >
          <div className="aspect-square relative rounded-lg overflow-hidden mb-4 bg-white">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain p-4 transition-transform group-hover:scale-105"
            />
          </div>
          <h3 className="font-medium mb-2 line-clamp-2">{product.title}</h3>
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating.rate)
                      ? 'fill-primary text-primary'
                      : 'fill-muted text-muted'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              ({product.rating.count})
            </span>
          </div>
          <p className="text-lg font-semibold">{formatPrice(product.price)}</p>
        </Link>
      ))}
    </div>
  );
}