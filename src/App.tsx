import React, { useState, useMemo, useEffect } from 'react';
import { categories, products } from './data';
import { ShoppingBag, Clock, MapPin, Info, ChevronRight, Plus, Minus, Search } from 'lucide-react';

export default function App() {
  const [cart, setCart] = useState<Record<string, number>>({});
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
      
      // Update active category based on scroll position
      const categoryElements = categories.map(c => document.getElementById(`category-${c.id}`));
      const scrollPosition = window.scrollY + 200; // Offset for header

      for (let i = categoryElements.length - 1; i >= 0; i--) {
        const element = categoryElements[i];
        if (element && element.offsetTop <= scrollPosition) {
          setActiveCategory(categories[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const addToCart = (productId: string) => {
    setCart(prev => ({ ...prev, [productId]: (prev[productId] || 0) + 1 }));
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[productId] > 1) {
        newCart[productId] -= 1;
      } else {
        delete newCart[productId];
      }
      return newCart;
    });
  };

  const cartTotal = useMemo(() => {
    return Object.entries(cart).reduce((total, [productId, quantity]) => {
      const product = products.find(p => p.id === productId);
      return total + (product?.price || 0) * quantity;
    }, 0);
  }, [cart]);

  const cartItemCount = Object.values(cart).reduce((a, b) => a + b, 0);

  const scrollToCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
    const element = document.getElementById(`category-${categoryId}`);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 130;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F7F4] font-sans text-stone-800 pb-28">
      {/* Top Bar (Visible on scroll) */}
      <div className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-sm transition-transform duration-300 ${isScrolled ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between">
          <span className="font-bold text-lg text-stone-900">Doce Encanto</span>
          <button className="p-2 text-stone-600 hover:bg-stone-100 rounded-full">
            <Search className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Header Banner */}
      <div className="h-48 sm:h-64 w-full bg-pink-200 relative">
        <img 
          src="https://picsum.photos/seed/bakerybanner/1200/400" 
          alt="Banner" 
          className="w-full h-full object-cover opacity-90"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <div className="absolute top-4 right-4 z-10">
           <button className="p-2 bg-white/20 backdrop-blur-md text-white hover:bg-white/30 rounded-full transition-colors">
            <Search className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Store Info */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-20 relative z-10">
        <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-5 sm:p-6 flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-white shadow-md overflow-hidden bg-white shrink-0">
            <img 
              src="https://picsum.photos/seed/bakerylogo/200/200" 
              alt="Logo" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex-1 pt-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-stone-900">Doce Encanto Confeitaria</h1>
            <p className="text-stone-500 mt-1 text-sm">Bolos, doces artesanais e muito amor em cada pedaço.</p>
            
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mt-4 text-xs font-medium">
              <span className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-full">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Aberto agora
              </span>
              <span className="flex items-center gap-1.5 text-stone-600 bg-stone-100 px-2.5 py-1 rounded-full">
                <Clock className="w-3.5 h-3.5" />
                40-50 min
              </span>
              <span className="flex items-center gap-1.5 text-stone-600 bg-stone-100 px-2.5 py-1 rounded-full">
                <MapPin className="w-3.5 h-3.5" />
                2.5 km
              </span>
            </div>
          </div>
          <button className="text-pink-600 hover:bg-pink-50 p-2 rounded-full transition-colors hidden sm:block">
            <Info className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Categories Navigation */}
      <div className={`sticky z-40 bg-[#F9F7F4]/95 backdrop-blur-md border-b border-stone-200 mt-6 transition-all duration-300 ${isScrolled ? 'top-14 shadow-sm' : 'top-0'}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto hide-scrollbar py-3 gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => scrollToCategory(category.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.id 
                    ? 'bg-pink-600 text-white shadow-md shadow-pink-200' 
                    : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 space-y-10">
        {categories.map(category => {
          const categoryProducts = products.filter(p => p.categoryId === category.id);
          if (categoryProducts.length === 0) return null;

          return (
            <div key={category.id} id={`category-${category.id}`} className="scroll-mt-32">
              <h2 className="text-xl font-bold text-stone-800 mb-4 flex items-center gap-2">
                {category.name}
                <div className="h-px bg-stone-200 flex-1 ml-2"></div>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {categoryProducts.map(product => (
                  <div key={product.id} className="bg-white rounded-2xl p-4 shadow-sm border border-stone-100 flex gap-4 hover:shadow-md transition-shadow group">
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-semibold text-stone-900 group-hover:text-pink-600 transition-colors leading-tight">{product.name}</h3>
                        <p className="text-sm text-stone-500 mt-1.5 line-clamp-2 leading-snug">{product.description}</p>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="font-bold text-stone-900">
                          R$ {product.price.toFixed(2).replace('.', ',')}
                        </span>
                        
                        {cart[product.id] ? (
                          <div className="flex items-center gap-3 bg-stone-50 border border-stone-200 rounded-full p-1 shadow-sm">
                            <button 
                              onClick={() => removeFromCart(product.id)}
                              className="w-7 h-7 flex items-center justify-center rounded-full bg-white text-stone-600 shadow-sm hover:text-pink-600 transition-colors"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="font-medium text-sm w-4 text-center">{cart[product.id]}</span>
                            <button 
                              onClick={() => addToCart(product.id)}
                              className="w-7 h-7 flex items-center justify-center rounded-full bg-pink-600 text-white shadow-sm hover:bg-pink-700 transition-colors"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        ) : (
                          <button 
                            onClick={() => addToCart(product.id)}
                            className="flex items-center justify-center w-8 h-8 rounded-full bg-pink-50 text-pink-600 hover:bg-pink-600 hover:text-white transition-colors"
                          >
                            <Plus className="w-5 h-5" />
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden shrink-0 bg-stone-100 relative">
                      <img 
                        src={product.imageUrl} 
                        alt={product.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      {/* Optional: Add a "popular" badge if needed */}
                      {product.categoryId === 'destaques' && (
                        <div className="absolute top-0 right-0 bg-pink-600 text-white text-[10px] font-bold px-2 py-1 rounded-bl-xl">
                          TOP
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Floating Cart Bar */}
      {cartItemCount > 0 && (
        <div className="fixed bottom-0 left-0 right-0 p-4 z-50 bg-gradient-to-t from-white via-white/90 to-transparent pt-10 pb-6">
          <div className="max-w-3xl mx-auto">
            <button className="w-full bg-pink-600 hover:bg-pink-700 text-white rounded-2xl p-4 flex items-center justify-between shadow-lg shadow-pink-200 transition-transform active:scale-[0.98]">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 w-8 h-8 rounded-full flex items-center justify-center font-medium">
                  {cartItemCount}
                </div>
                <span className="font-medium">Ver sacola</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">R$ {cartTotal.toFixed(2).replace('.', ',')}</span>
                <ChevronRight className="w-5 h-5" />
              </div>
            </button>
          </div>
        </div>
      )}

      {/* Global styles for hiding scrollbar but keeping functionality */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
}
