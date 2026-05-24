import { Menu, X, HeartPulse, ShoppingCart, UserCheck, ShieldAlert, Award } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  activeView: string;
  setActiveView: (view: string) => void;
  onOpenBloodRequest: () => void;
  onOpenCart: () => void;
  cartCount: number;
  isVendorVerified: boolean;
  onOpenVendorLogin: () => void;
}

export default function Navbar({
  activeView,
  setActiveView,
  onOpenBloodRequest,
  onOpenCart,
  cartCount,
  isVendorVerified,
  onOpenVendorLogin,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', view: 'Home' },
    { label: 'About Us', view: 'About' },
    { label: 'Committee', view: 'Committee' },
    { label: 'Blood Dashboard', view: 'Blood Dashboard' },
    { label: 'Tech & Organic Shop', view: 'Shop' },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            {/* Logo Left */}
            <div
              onClick={() => setActiveView('Home')}
              className="flex items-center gap-2.5 cursor-pointer select-none group shrink-0"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-rose-700 rounded-xl flex items-center justify-center text-white shadow-md shadow-red-200 group-hover:scale-105 transition-all">
                <HeartPulse className="w-5.5 h-5.5 animate-pulse" />
              </div>
              <div>
                <h1 className="font-sans font-extrabold text-base tracking-tight text-slate-900 group-hover:text-red-600 transition-colors">
                  RPSU Social Welfare Club
                </h1>
                <p className="font-mono text-[9px] text-slate-500 uppercase tracking-widest">
                  Hope for Humanity
                </p>
              </div>
            </div>

            {/* Desktop Navigation Links Middle */}
            <nav className="hidden md:flex items-center gap-1.5 bg-slate-50 border border-slate-100 p-1 rounded-xl">
              {navLinks.map((link) => {
                const isActive = activeView === link.view;
                return (
                  <button
                    key={link.view}
                    onClick={() => setActiveView(link.view)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-red-600 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden md:flex items-center gap-3">
              {/* Shopping Cart Mini Indicator */}
              <button
                id="navbar-cart-trigger"
                onClick={onOpenCart}
                className="relative p-2 text-slate-600 hover:text-red-600 hover:bg-slate-50 rounded-xl transition-all cursor-pointer border border-transparent hover:border-slate-100"
              >
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-red-600 text-white rounded-full text-[9px] font-extrabold px-1.5 py-0.5 min-w-[18px] text-center border-2 border-white animate-bounce">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Student Vendor Portal Button */}
              {isVendorVerified ? (
                <button
                  onClick={() => setActiveView('Vendor Dashboard')}
                  className="flex items-center gap-1 text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-xl font-bold hover:bg-emerald-100 transition-colors cursor-pointer"
                >
                  <UserCheck className="w-4 h-4 animate-bounce" />
                  <span>Vendor Panel</span>
                </button>
              ) : (
                <button
                  onClick={onOpenVendorLogin}
                  className="text-slate-600 hover:text-slate-900 text-xs font-semibold px-2.5 py-1.5 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  Vendor Log
                </button>
              )}

              {/* Flashing Emergency Blood Request Button */}
              <button
                id="navbar-emergency-blood-btn"
                onClick={onOpenBloodRequest}
                className="relative overflow-hidden text-xs text-red-600 font-extrabold bg-red-50 hover:bg-red-100 px-4 py-2 rounded-xl transition-all border border-red-200 shadow-xs cursor-pointer animate-pulse-border group"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-red-600 rounded-full animate-ping shrink-0" />
                  Emergency Blood Request
                </span>
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={onOpenCart}
                className="relative p-2 text-slate-600 focus:outline-none cursor-pointer"
              >
                <ShoppingCart className="w-5.5 h-5.5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full text-[9px] font-extrabold px-1.5 py-0.5 border border-white">
                    {cartCount}
                  </span>
                )}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 text-slate-600 hover:bg-slate-100 rounded-lg cursor-pointer"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-100 px-4 pt-2 pb-4 bg-white space-y-2.5 animate-fade-in shadow-lg">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = activeView === link.view;
                return (
                  <button
                    key={link.view}
                    onClick={() => {
                      setActiveView(link.view);
                      setMobileMenuOpen(false);
                    }}
                    className={`block w-full text-left px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                      isActive ? 'bg-red-600 text-white' : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>

            <div className="border-t border-slate-100 pt-3 flex flex-col gap-2.5">
              {isVendorVerified ? (
                <button
                  onClick={() => {
                    setActiveView('Vendor Dashboard');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-center text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 py-2.5 rounded-xl font-bold cursor-pointer"
                >
                  ✓ Student Vendor Panel
                </button>
              ) : (
                <button
                  onClick={() => {
                    onOpenVendorLogin();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-center text-xs text-slate-600 bg-slate-50 hover:bg-slate-100 py-2.5 rounded-xl font-bold cursor-pointer"
                >
                  Student Vendor Login
                </button>
              )}

              <button
                onClick={() => {
                  onOpenBloodRequest();
                  setMobileMenuOpen(false);
                }}
                className="w-full text-center text-xs text-white bg-red-600 hover:bg-red-700 py-2.5 rounded-xl font-bold shadow-md shadow-red-100 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <HeartPulse className="w-4 h-4 animate-pulse" />
                <span>Emergency Blood Request</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
