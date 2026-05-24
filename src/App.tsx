import { useState, useEffect } from 'react';
import { HeartPulse, Mail, Phone, MapPin, Facebook, Linkedin, ShieldCheck, Heart, Sparkles, Building2, HelpCircle } from 'lucide-react';

// Subcomponents
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Committee from './components/Committee';
import StatsAndNotices from './components/StatsAndNotices';
import Shop from './components/Shop';
import BloodDashboard from './components/BloodDashboard';
import VendorDashboard from './components/VendorDashboard';

// Modals
import { EmergencyBloodRequestModal, CartSidebar, VendorLoginModal } from './components/Modals';

// Mock Initial Databases
import { INITIAL_BLOOD_REQUESTS, PRESET_PRODUCTS } from './data';
import { Product, CartItem, BloodRequest } from './types';

export default function App() {
  // Navigation & View Toggles
  const [activeView, setActiveView] = useState<string>('Home');

  // Interactive Overlays
  const [isBloodModalOpen, setIsBloodModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isVendorLoginOpen, setIsVendorLoginOpen] = useState(false);

  // Core App states
  const [cart, setCart] = useState<CartItem[]>([]);
  const [bloodRequests, setBloodRequests] = useState<BloodRequest[]>(INITIAL_BLOOD_REQUESTS);
  const [isVendorVerified, setIsVendorVerified] = useState(false);
  const [storeProducts, setStoreProducts] = useState<Product[]>(PRESET_PRODUCTS);

  // Page Scroll recovery upon active tab updates
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeView]);

  // Global Cart Controllers
  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.product.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { product, quantity: 1 }];
    });
  };

  const handleUpdateCartQty = (productId: string, delta: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.product.id === productId) {
            const nextQty = item.quantity + delta;
            return { ...item, quantity: nextQty };
          }
          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Emergency Blood Requests poster
  const handleCreateBloodRequest = (newReq: Omit<BloodRequest, 'id' | 'status'>) => {
    const freshRecord: BloodRequest = {
      ...newReq,
      id: `req-${Date.now()}`,
      status: 'Urgent',
    };
    setBloodRequests([freshRecord, ...bloodRequests]);
    // Smooth scroll down to blood dashboard area to see it live!
    setActiveView('Blood Dashboard');
  };

  // Pledge Donor action
  const handlePledgeDonor = (reqId: string) => {
    setBloodRequests((prev) =>
      prev.map((req) => (req.id === reqId ? { ...req, status: 'Fulfilled' } : req))
    );
  };

  // Student Vendor products adding
  const handleVendorNewProduct = (newProd: { title: string; price: number; category: 'Organic' | 'Service'; description: string }) => {
    const isOrganic = newProd.category === 'Organic';
    const freshProduct: Product = {
      id: `prod-user-${Date.now()}`,
      title: newProd.title,
      price: newProd.price,
      category: newProd.category,
      imageUrl: isOrganic
        ? 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&q=80&w=400'
        : 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400',
      badge: isOrganic ? 'Organic Pending' : 'Service Pending',
      rating: 5.0,
      description: newProd.description,
    };
    
    // Concat to standard lists so it registers immediately
    setStoreProducts((prev) => [freshProduct, ...prev]);
  };

  const cartTotalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Render Page Content based on navigation
  const renderContent = () => {
    switch (activeView) {
      case 'Home':
        return (
          <main className="animate-fade-in space-y-0">
            {/* Hero module */}
            <Hero
              onDonateClick={() => setActiveView('Blood Dashboard')}
              onExploreClick={() => {
                const doc = document.getElementById('about-features');
                if (doc) doc.scrollIntoView({ behavior: 'smooth' });
              }}
            />
            
            {/* Core Stats overview, Notice Board widget and Event slideshows */}
            <div id="about-features">
              <StatsAndNotices />
            </div>

            {/* Quick Promo banner linking to Welfare shop */}
            <section className="bg-red-50 py-12 border-y border-red-100">
              <div className="max-w-7xl mx-auto px-4 text-center space-y-4">
                <span className="text-red-650 text-xs font-bold uppercase tracking-widest bg-red-100/60 px-3 py-1 rounded-full border border-red-200 inline-block animate-pulse">
                  Empowering Community Action
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight font-sans">
                  Help Fund Welfare via the Organic & Tech Store
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
                  We harvest pure Sundarbans organic honey, homemade ghee, and conduct expert student coding academies. 100% of the sales margins goes to purchase relief blankets and medicines.
                </p>
                <button
                  onClick={() => setActiveView('Shop')}
                  className="px-5 py-3 rounded-xl text-xs font-bold text-white bg-red-600 hover:bg-red-750 transition-colors shadow-lg hover:shadow-red-500/10 cursor-pointer text-center"
                >
                  Enter Welfare Shop
                </button>
              </div>
            </section>
          </main>
        );

      case 'About':
        return (
          <div className="animate-fade-in">
            <StatsAndNotices />
          </div>
        );

      case 'Committee':
        return (
          <div className="animate-fade-in">
            <Committee />
          </div>
        );

      case 'Blood Dashboard':
        return (
          <div className="animate-fade-in">
            <BloodDashboard
              bloodRequests={bloodRequests}
              onOpenBloodRequestForm={() => setIsBloodModalOpen(true)}
              onDonatePledge={handlePledgeDonor}
            />
          </div>
        );

      case 'Shop':
        return (
          <div className="animate-fade-in">
            {/* Pass customized Store lists featuring live uploads */}
            <Shop
              onAddToCart={handleAddToCart}
              cartCount={cartTotalItems}
              onOpenCart={() => setIsCartOpen(true)}
            />
          </div>
        );

      case 'Vendor Dashboard':
        return (
          <div className="animate-fade-in">
            <VendorDashboard
              onLogout={() => {
                setIsVendorVerified(false);
                setActiveView('Home');
              }}
              onAddProductToStore={handleVendorNewProduct}
            />
          </div>
        );

      default:
        return (
          <div className="text-center py-20">
            <h2 className="text-xl font-bold">Aesthetic page element context error.</h2>
            <button onClick={() => setActiveView('Home')} className="mt-4 px-4 py-2 bg-red-600 text-white rounded">
              Back to Home
            </button>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between font-sans selection:bg-red-100 selection:text-red-950">
      
      {/* Universal Sticky Top Header bar */}
      <Navbar
        activeView={activeView}
        setActiveView={setActiveView}
        onOpenBloodRequest={() => setIsBloodModalOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        cartCount={cartTotalItems}
        isVendorVerified={isVendorVerified}
        onOpenVendorLogin={() => setIsVendorLoginOpen(true)}
      />

      {/* Main Container viewport */}
      <div className="flex-1">
        {renderContent()}
      </div>

      {/* Universal Clean Footer Layout */}
      <footer id="club-footer" className="bg-slate-900 border-t border-slate-800 text-white py-12 text-left shrink-0 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
            
            {/* Branding Column (5 units) */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 bg-red-600 rounded-lg flex items-center justify-center text-white font-sans text-xl font-black">
                  ♥
                </div>
                <div>
                  <h4 className="text-sm font-bold tracking-tight">RPSU Social Welfare Club</h4>
                  <p className="text-[10px] text-slate-400 font-mono uppercase tracking-widest">Hope for Humanity</p>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                Empowered by active student cohorts of Royal Pride State University. Bridging professional leadership, voluntary blood safety registries, and zero-profit sustainable commerce.
              </p>
              
              {/* Maps details / Address indicators */}
              <div className="space-y-1.5 text-xs text-slate-400 font-medium">
                <p className="flex items-start gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                  <span>Academic Lobby, Royal Pride State University, Gazipur, Bangladesh</span>
                </p>
                <p className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span>welfare-club@rpsu.edu</span>
                </p>
              </div>
            </div>

            {/* Quick links Navigation column (3 units) */}
            <div className="md:col-span-3 space-y-3">
              <h5 className="text-xs font-bold text-slate-300 uppercase tracking-widest font-sans">Welfare Portals</h5>
              <div className="grid grid-cols-1 gap-2 text-xs font-semibold text-slate-400">
                <button onClick={() => setActiveView('Home')} className="text-left hover:text-white transition-colors cursor-pointer">→ Student Home Dashboard</button>
                <button onClick={() => setActiveView('Committee')} className="text-left hover:text-white transition-colors cursor-pointer">→ Active Leadership Board</button>
                <button onClick={() => setActiveView('Blood Dashboard')} className="text-left hover:text-white transition-colors cursor-pointer">→ Rapid Blood Matching</button>
                <button onClick={() => setActiveView('Shop')} className="text-left hover:text-white transition-colors cursor-pointer">→ Tech & Organic Store</button>
              </div>
            </div>

            {/* Social engagement details column (4 units) */}
            <div className="md:col-span-4 space-y-4">
              <h5 className="text-xs font-bold text-slate-300 uppercase tracking-widest font-sans">Connect with Volunteers</h5>
              <p className="text-xs text-slate-400">Join our weekly relief briefings or register as a blood donor inside campus.</p>
              
              {/* Icon badges row */}
              <div className="flex items-center gap-2.5">
                <a href="#" className="p-2 bg-slate-800 hover:bg-red-600 text-slate-300 hover:text-white transition-all rounded-lg">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="p-2 bg-slate-800 hover:bg-red-600 text-slate-300 hover:text-white transition-all rounded-lg">
                  <Linkedin className="w-4 h-4" />
                </a>
                <button
                  onClick={() => setIsVendorLoginOpen(true)}
                  className="text-[10px] font-black uppercase bg-slate-800 hover:bg-emerald-600 text-slate-300 hover:text-white px-3 py-2 rounded-lg transition-colors cursor-pointer"
                >
                  Student Vendor Gateway
                </button>
              </div>

              <div className="p-2.5 bg-slate-800/50 border border-slate-800 rounded-lg text-[10px] text-slate-450 leading-relaxed font-mono">
                System code verification: <span className="text-red-400 font-bold font-mono">RPSU-SW9</span>
              </div>
            </div>

          </div>

          <div className="pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs text-slate-500 gap-2 font-mono">
            <span>© 2026 RPSU Social Welfare Club. Registered Educational Charity.</span>
            <span>Made with Integrity • Hope for Humanity</span>
          </div>
        </div>
      </footer>

      {/* Persistent Modals Layer */}
      
      {/* 1. Emergency Blood Request registration popup form */}
      <EmergencyBloodRequestModal
        isOpen={isBloodModalOpen}
        onClose={() => setIsBloodModalOpen(false)}
        onSubmit={handleCreateBloodRequest}
      />

      {/* 2. Charity Cart Sidebar drawer panel */}
      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQty={handleUpdateCartQty}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />

      {/* 3. Verified student passcode overlay */}
      <VendorLoginModal
        isOpen={isVendorLoginOpen}
        onClose={() => setIsVendorLoginOpen(false)}
        onLoginSuccess={() => {
          setIsVendorVerified(true);
          setActiveView('Vendor Dashboard');
        }}
      />

    </div>
  );
}
