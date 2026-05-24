import { useState } from 'react';
import { ShoppingCart, Star, ShieldCheck, HelpCircle, Laptop, Heart, HandIcon, Sparkles, Filter, Check, GraduationCap } from 'lucide-react';
import { PRESET_PRODUCTS } from '../data';
import { Product } from '../types';

interface ShopProps {
  onAddToCart: (product: Product) => void;
  cartCount: number;
  onOpenCart: () => void;
}

export default function Shop({ onAddToCart, cartCount, onOpenCart }: ShopProps) {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Organic' | 'Service'>('All');
  const [justAddedId, setJustAddedId] = useState<string | null>(null);

  const filteredProducts = PRESET_PRODUCTS.filter(p => {
    return activeCategory === 'All' || p.category === activeCategory;
  });

  const handleBuy = (product: Product) => {
    onAddToCart(product);
    setJustAddedId(product.id);
    setTimeout(() => {
      setJustAddedId(null);
    }, 1200);
  };

  return (
    <section id="shop-section" className="py-16 bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-left">
        
        {/* Banner with Glowing Charity Statement */}
        <div className="relative overflow-hidden bg-gradient-to-r from-red-800 to-rose-700 rounded-3xl p-6 sm:p-10 text-white shadow-xl">
          {/* Absolute decorative backdrops */}
          <div className="absolute right-0 top-0 w-80 h-80 bg-white/5 rounded-full -translate-y-10 translate-x-20 blur-2xl" />
          <div className="absolute left-1/3 bottom-0 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl animate-pulse" />

          {/* Banner Content */}
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1 bg-white/20 px-3.5 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest text-red-100">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300 animate-spin" />
              <span>Independent Earning Wing</span>
            </span>

            <h2 className="font-sans font-black text-2xl sm:text-4xl text-white tracking-tight leading-none">
              Welfare Organic & Tech Shop
            </h2>

            <p className="text-sm sm:text-base text-red-100 leading-relaxed font-sans max-w-2xl font-light">
              We believe in self-reliance. To support emergency flood rescues and medical oxygen deployments without constantly requiring external donations, our student committee runs this micro-business.
            </p>

            {/* Glowing Callout box */}
            <div className="p-4 bg-white/10 hover:bg-white/15 transition-all rounded-2xl border-l-[6px] border-yellow-300">
              <p className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider leading-snug">
                🚨 Code of Integrity: <span className="text-yellow-200 underline underline-offset-4">100% of profit margins</span> from this shop are channeled directly to the Welfare Club General Charity Fund!
              </p>
              <p className="text-[10px] text-red-100/90 mt-0.5">
                Every purchase pays for winter blankets, orphan medicine, or local medical supply runs.
              </p>
            </div>
          </div>
        </div>

        {/* Categories Bar & Grid Control */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
          <div className="space-y-1">
            <h3 className="font-sans font-extrabold text-xl text-slate-900 tracking-tight">
              Curated Charity Storefront
            </h3>
            <p className="text-xs text-slate-500">
              Buy healthy premium food or book professional training bootcamps managed by our active senior students.
            </p>
          </div>

          {/* Filtering Toggles */}
          <div className="flex items-center gap-2 bg-white p-1 rounded-xl border border-slate-200 self-start">
            <button
              onClick={() => setActiveCategory('All')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeCategory === 'All' ? 'bg-red-600 text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Items
            </button>
            <button
              onClick={() => setActiveCategory('Organic')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeCategory === 'Organic' ? 'bg-red-600 text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              100% Organic Foods
            </button>
            <button
              onClick={() => setActiveCategory('Service')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeCategory === 'Service' ? 'bg-red-600 text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Vocational Tech Courses
            </button>
          </div>
        </div>

        {/* E-Commerce Grid */}
        <div id="product-ecommerce-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((p) => {
            const isAdded = justAddedId === p.id;
            return (
              <div
                key={p.id}
                className="bg-white rounded-2xl border border-slate-200 hover:border-red-200 hover:shadow-lg transition-all duration-300 flex flex-col relative group overflow-hidden"
              >
                {/* Product Thumbnail with Badges overlay */}
                <div className="h-48 overflow-hidden relative bg-slate-55 border-b border-slate-100 shrink-0">
                  <img
                    src={p.imageUrl}
                    alt={p.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                  />
                  
                  {/* Category Indicator Tag */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-full text-[9px] font-extrabold text-slate-800 uppercase tracking-widest shadow-xs border border-slate-100 flex items-center gap-1">
                    {p.category === 'Organic' ? (
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                    ) : (
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    )}
                    {p.category}
                  </div>

                  {/* Elite Trust Badge */}
                  <div className="absolute top-3 right-3 bg-red-600 px-2.5 py-1 rounded-full text-[9px] font-black tracking-wider text-white uppercase shadow-md">
                    {p.badge}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      {/* Interactive Rating indicators */}
                      <div className="flex items-center gap-0.5 text-amber-500">
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <Star key={idx} className={`w-3.5 h-3.5 ${idx < Math.floor(p.rating) ? 'fill-amber-500' : 'stroke-1'}`} />
                        ))}
                        <span className="text-[10px] text-slate-500 font-bold ml-1">({p.rating})</span>
                      </div>

                      <span className="text-slate-400 text-[10px] font-mono uppercase">
                        SKU-{p.id}
                      </span>
                    </div>

                    <h4 className="font-sans font-extrabold text-slate-900 group-hover:text-red-600 transition-colors text-sm sm:text-base leading-tight">
                      {p.title}
                    </h4>

                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                      {p.description}
                    </p>
                  </div>

                  {/* Interactive footer details */}
                  <div className="pt-3 border-t border-slate-50 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider leading-none">Price (Cash/bKash)</p>
                      <span className="text-lg font-black text-slate-900">BDT {p.price}</span>
                    </div>

                    <button
                      onClick={() => handleBuy(p)}
                      className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-md ${
                        isAdded
                          ? 'bg-emerald-600 text-white shadow-emerald-100 scale-95'
                          : 'bg-red-600 text-white hover:bg-red-700 hover:shadow-red-200 active:scale-97'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Added ✓</span>
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="w-3.5 h-3.5" />
                          <span>Add to Cart</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Micro FAQ explaining deliveries */}
        <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div>
            <h5 className="text-[11px] font-black uppercase text-slate-500 tracking-wider">📦 Delivery Protocol</h5>
            <p className="text-xs text-slate-502 mt-1">Cash on Delivery, hand-packaged by designated volunteer panels at the RPSU Lobby.</p>
          </div>
          <div>
            <h5 className="text-[11px] font-black uppercase text-slate-505 tracking-wider">🛡️ Authentic Standards</h5>
            <p className="text-xs text-slate-502 mt-1">Chemical-free food supplies and rigorous course curricula prepared with experienced department mentors.</p>
          </div>
          <div>
            <h5 className="text-[11px] font-black uppercase text-slate-505 tracking-wider">🤝 Mutual Accountability</h5>
            <p className="text-xs text-slate-502 mt-1">Audit logs are completely public. Financial ledger sheets can be accessed inside the club bulletin board.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
