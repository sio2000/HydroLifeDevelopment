import React from 'react';
import { ArrowRight, Heart, ShoppingCart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Product {
  name: string;
  description: string;
  price: string;
  image: string;
  features: string[];
  tag: string;
}

const Products = () => {
  const { t } = useTranslation();
  const products = t('products.items', { returnObjects: true }) as Product[];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block px-6 py-2 bg-[#3498db]/10 rounded-full text-[#3498db] font-medium text-sm mb-4">
            Our Collection
          </div>
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2C3E50] to-[#3498DB] mb-6">
            {t('products.title')}
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            {t('products.subtitle')}
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-[#D89084] to-[#E8B4B4] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product: Product, index: number) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-[#3498db] rounded-full">
                    {product.tag}
                  </span>
                </div>
                <button className="absolute top-4 left-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                  <Heart className="h-5 w-5 text-gray-600" />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">€{product.price}</span>
                  <button className="flex items-center space-x-2 bg-[#3498db] text-white px-4 py-2 rounded-lg hover:bg-[#217dbb] transition font-semibold">
                    <ShoppingCart className="h-5 w-5" />
                    <span>{t('products.buyButton')}</span>
                  </button>
                </div>
                <div className="mt-4">
                  <ul className="space-y-2">
                    {product.features.map((feature: string, featureIndex: number) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <ArrowRight className="h-4 w-4 text-blue-600 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;