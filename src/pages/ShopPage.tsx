import React, { useState, useEffect } from 'react';
import { Filter, ShoppingCart, Heart, Search } from 'lucide-react';

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'devices', name: 'Devices' },
    { id: 'accessories', name: 'Accessories' },
    { id: 'parts', name: 'Replacement Parts' }
  ];

  const products = [
    {
      id: 1,
      name: 'Hydrogenated Water Device',
      category: 'devices',
      price: 299.99,
      image: 'https://images.unsplash.com/photo-1550505095-81378a674395?auto=format&fit=crop&w=600&h=400'
    },
    {
      id: 2,
      name: 'Replacement Filter',
      category: 'parts',
      price: 49.99,
      image: 'https://images.unsplash.com/photo-1621371205896-3082fa811d54?auto=format&fit=crop&w=600&h=400'
    },
    {
      id: 3,
      name: 'Travel Case',
      category: 'accessories',
      price: 29.99,
      image: 'https://images.unsplash.com/photo-1606767417374-d87dbbf0d445?auto=format&fit=crop&w=600&h=400'
    },
    {
      id: 4,
      name: 'Portable Generator',
      category: 'devices',
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1550505095-81378a674395?auto=format&fit=crop&w=600&h=400'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 md:mb-0">Shop</h1>
          
          <div className="w-full md:w-auto flex flex-col md:flex-row gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-full w-full md:w-64"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            
            <div className="flex gap-2 overflow-x-auto">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap ${
                    selectedCategory === category.id
                      ? 'bg-sky-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <button className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-sm hover:bg-gray-100">
                  <Heart className="h-4 w-4 text-gray-600" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-sky-600">${product.price}</span>
                  <button className="flex items-center bg-sky-600 text-white px-3 py-1.5 rounded-full hover:bg-sky-700 text-sm">
                    <ShoppingCart className="h-4 w-4 mr-1" />
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;