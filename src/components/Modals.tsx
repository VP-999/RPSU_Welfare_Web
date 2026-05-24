import React, { useState } from 'react';
import { X, ShoppingBag, Plus, Minus, Trash2, ShieldCheck, HeartPulse, Sparkles, Building, AlertCircle } from 'lucide-react';
import { Product, CartItem, BloodRequest } from '../types';

interface EmergencyBloodRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (request: Omit<BloodRequest, 'id' | 'status'>) => void;
}

export function EmergencyBloodRequestModal({ isOpen, onClose, onSubmit }: EmergencyBloodRequestModalProps) {
  const [patientName, setPatientName] = useState('');
  const [bloodGroup, setBloodGroup] = useState<'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-'>('O+');
  const [hospital, setHospital] = useState('');
  const [units, setUnits] = useState(1);
  const [contact, setContact] = useState('');
  const [reason, setReason] = useState('');
  const [err, setErr] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName || !hospital || !contact || !reason) {
      setErr('Please fill out all fields carefully.');
      return;
    }
    if (contact.length < 11) {
      setErr('Please input a valid contact number.');
      return;
    }
    onSubmit({
      patientName,
      bloodGroup,
      hospital,
      units,
      contact,
      reason,
      date: 'Just now'
    });
    setPatientName('');
    setHospital('');
    setUnits(1);
    setContact('');
    setReason('');
    setErr('');
    onClose();
  };

  return (
    <div id="blood-request-overlay" className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fade-in">
      <div id="blood-request-card" className="bg-white rounded-2xl shadow-xl w-full max-w-lg border border-red-50 overflow-hidden transform transition-all duration-300">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-red-700 to-rose-600 p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <HeartPulse className="w-6 h-6 animate-pulse" />
            <span className="font-sans font-semibold text-lg tracking-tight">Create Emergency Blood Request</span>
          </div>
          <button id="close-blood-modal-btn" onClick={onClose} className="p-1 hover:bg-white/20 rounded-full transition-colors cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {err && (
            <div className="p-3 bg-red-50 text-red-700 rounded-lg text-xs flex items-center gap-2 font-medium">
              <AlertCircle className="w-4 h-4 text-red-500" />
              <span>{err}</span>
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">Patient Name *</label>
              <input
                type="text"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                placeholder="Enter patient full name"
                className="w-full text-sm border border-slate-200 rounded-xl px-3 py-2.5 outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/20 transition-all font-sans"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">Required Blood Group *</label>
              <select
                value={bloodGroup}
                onChange={(e) => setBloodGroup(e.target.value as any)}
                className="w-full text-sm border border-slate-200 rounded-xl px-3 py-2.5 bg-white outline-none focus:border-red-500 transition-all font-sans font-medium"
              >
                {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map((grp) => (
                  <option key={grp} value={grp}>{grp}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">Hospital / Medical Center *</label>
            <div className="relative">
              <Building className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                value={hospital}
                onChange={(e) => setHospital(e.target.value)}
                placeholder="Hospital Name & Branch Location"
                className="w-full text-sm border border-slate-200 rounded-xl pl-9 pr-3 py-2.5 outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/20 transition-all font-sans"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">Units Needed (Pints) *</label>
              <input
                type="number"
                min="1"
                max="10"
                value={units}
                onChange={(e) => setUnits(parseInt(e.target.value) || 1)}
                className="w-full text-sm border border-slate-200 rounded-xl px-3 py-2.5 outline-none focus:border-red-500 transition-all font-sans"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">Contact Mobile Number *</label>
              <input
                type="tel"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="e.g., 017XXXXXXXX"
                className="w-full text-sm border border-slate-200 rounded-xl px-3 py-2.5 outline-none focus:border-red-500 transition-all font-sans"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">Reason / Clinical Case *</label>
            <textarea
              rows={3}
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Provide context (e.g. bypass operation, thalassemia supply, dialysis backing)"
              className="w-full text-sm border border-slate-200 rounded-xl p-3 outline-none focus:border-red-500 transition-all font-sans"
              required
            />
          </div>

          <p className="text-[11px] text-slate-500 leading-normal bg-red-50/50 p-3 rounded-lg border border-red-100">
            <strong>Medical Notice:</strong> Requests placed here will immediately float on our live Blood Group Dashboard. Local students and alumni with matched antigen lists will be notified via SMS broadcast.
          </p>

          <div className="flex gap-3 pt-2">
            <button
              id="cancel-blood-btn"
              type="button"
              onClick={onClose}
              className="flex-1 text-sm text-slate-600 font-semibold bg-slate-100 hover:bg-slate-200 rounded-xl py-2.5 transition-all text-center cursor-pointer"
            >
              Cancel
            </button>
            <button
              id="submit-blood-btn"
              type="submit"
              className="flex-1 text-sm text-white font-semibold bg-red-600 hover:bg-red-700 active:scale-98 rounded-xl py-2.5 transition-all shadow-md shadow-red-200 text-center cursor-pointer"
            >
              Post Emergency Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQty: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export function CartSidebar({ isOpen, onClose, cart, onUpdateQty, onRemoveItem, onClearCart }: CartSidebarProps) {
  const [checkedOut, setCheckedOut] = useState(false);
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userDept, setUserDept] = useState('CSE');

  if (!isOpen) return null;

  const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName || !userPhone) return;
    setCheckedOut(true);
    setTimeout(() => {
      onClearCart();
      setCheckedOut(false);
      onClose();
    }, 4500);
  };

  return (
    <div id="cart-sidebar-backdrop" className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex justify-end z-50">
      <div id="cart-drawer" className="bg-white w-full max-w-md h-full shadow-2xl flex flex-col transform transition-transform duration-300 relative animate-slide-left">
        {/* Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-red-50/50">
          <div className="flex items-center gap-2 text-red-600">
            <ShoppingBag className="w-5 h-5" />
            <h3 className="font-sans font-bold text-lg tracking-tight">Your Charity Shopping Cart</h3>
          </div>
          <button id="close-cart-btn" onClick={onClose} className="p-1 hover:bg-slate-200 rounded-full transition-colors cursor-pointer">
            <X className="w-5 h-5 text-slate-500" />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {checkedOut ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 animate-bounce">
                <ShieldCheck className="w-9 h-9" />
              </div>
              <h4 className="font-sans font-bold text-xl text-slate-900">Purchase Approved!</h4>
              <p className="text-sm text-slate-600 max-w-sm">
                Thank you for your order, <strong>{userName}</strong>! Since 100% of profit margins are donated, you just raised <strong>BDT {Math.round(total * 0.4)}</strong> for the social welfare fund.
              </p>
              <p className="text-xs text-red-500 font-semibold italic animate-pulse">
                Delivering via RPSU Volunteer Desk within 24 hours.
              </p>
            </div>
          ) : cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-slate-400 py-12">
              <ShoppingBag className="w-16 h-16 stroke-1 mb-3" />
              <p className="text-sm font-medium">Your shopping cart is currently empty.</p>
              <p className="text-xs text-slate-400 max-w-xs mt-1">Add organic foods or vocational tech services to help fund underprivileged welfare services.</p>
            </div>
          ) : (
            <>
              {/* Product list */}
              <div className="space-y-3">
                {cart.map((item) => (
                  <div key={item.product.id} className="flex gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <img
                      src={item.product.imageUrl}
                      alt={item.product.title}
                      referrerPolicy="no-referrer"
                      className="w-14 h-14 object-cover rounded-lg bg-white shrink-0 border border-slate-100"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-slate-800 truncate">{item.product.title}</h4>
                      <span className="text-[10px] bg-red-100 text-red-700 font-semibold px-2 py-0.5 rounded-full inline-block mt-0.5">
                        {item.product.badge}
                      </span>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs font-bold text-slate-900">BDT {item.product.price}</span>
                        <div className="flex items-center gap-2 bg-white rounded-lg border border-slate-200 px-1 py-0.5">
                          <button
                            onClick={() => onUpdateQty(item.product.id, -1)}
                            className="p-1 hover:text-red-600 transition-colors cursor-pointer"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold text-slate-700 min-w-[12px] text-center">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQty(item.product.id, 1)}
                            className="p-1 hover:text-red-600 transition-colors cursor-pointer"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => onRemoveItem(item.product.id)}
                      className="text-slate-400 hover:text-red-500 self-center p-1 cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Charity Note */}
              <div className="bg-red-50 p-3.5 rounded-xl border border-red-100 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-red-800">
                  <Sparkles className="w-4 h-4 text-red-600 animate-spin" />
                  <span>Humanitarian Margin Tracking</span>
                </div>
                <p className="text-[11px] text-red-700 font-medium leading-relaxed">
                  Total Profit allocated for Charity from this cart: <strong className="text-red-900">BDT {Math.round(total * 0.4)} (approx 40% clean cost differential)</strong>.
                </p>
              </div>

              {/* Simplified Checkout Form */}
              <form onSubmit={handleCheckout} className="border-t border-slate-100 pt-4 mt-6 space-y-3">
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-widest">Student Checkout Credentials</h4>
                <div>
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Student Full Name"
                    className="w-full text-xs border border-slate-200 rounded-xl px-3 py-2 outline-none focus:border-red-500 transition-all font-sans"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="tel"
                    value={userPhone}
                    onChange={(e) => setUserPhone(e.target.value)}
                    placeholder="Contact Mobile"
                    className="w-full text-xs border border-slate-200 rounded-xl px-3 py-2 outline-none focus:border-red-500 transition-all font-sans"
                    required
                  />
                  <select
                    value={userDept}
                    onChange={(e) => setUserDept(e.target.value)}
                    className="w-full text-xs border border-slate-200 rounded-xl px-3 py-2 bg-white outline-none focus:border-red-500 transition-all font-sans"
                  >
                    <option value="CSE">CSE Dept</option>
                    <option value="PHR">Pharmacy (PHR)</option>
                    <option value="ENG">English (ENG)</option>
                    <option value="BBA">BBA Dept</option>
                    <option value="LAW">LAW Dept</option>
                  </select>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 flex justify-between text-sm font-bold text-slate-800">
                  <span>Grand Total (Cash on Campus)</span>
                  <span className="text-red-600">BDT {total}</span>
                </div>

                <button
                  id="checkout-submit-btn"
                  type="submit"
                  className="w-full text-sm text-white font-bold bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 py-3 rounded-xl shadow-lg shadow-red-200 transition-all text-center cursor-pointer mt-2"
                >
                  Conclude Charity Order
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

interface VendorLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: () => void;
}

export function VendorLoginModal({ isOpen, onClose, onLoginSuccess }: VendorLoginModalProps) {
  const [vendorCode, setVendorCode] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (vendorCode.toUpperCase() === 'RPSU2026' || vendorCode === '1234') {
      onLoginSuccess();
      setVendorCode('');
      setErrorMsg('');
      onClose();
    } else {
      setErrorMsg('Invalid authorization passcode. Enter RPSU2026 or 1234.');
    }
  };

  return (
    <div id="vendor-login-overlay" className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fade-in">
      <div id="vendor-login-card" className="bg-white rounded-2xl shadow-xl w-full max-w-sm border border-slate-100 overflow-hidden transform transition-all duration-300">
        <div className="bg-gradient-to-b from-slate-900 to-slate-800 p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-5 h-5 text-red-500" />
            <h3 className="font-sans font-bold text-base">Student Vendor Gateway</h3>
          </div>
          <button id="close-vendor-login-btn" onClick={onClose} className="p-1 hover:bg-white/10 rounded-full transition-colors cursor-pointer">
            <X className="w-5 h-5 text-white/70" />
          </button>
        </div>

        <form onSubmit={handleLogin} className="p-5 space-y-4">
          <div className="text-center">
            <p className="text-xs text-slate-600 leading-normal mb-3">
              Only verified student merchants who contribute profits to the Welfare general charity ledger have access.
            </p>
          </div>

          <div>
            <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Enter Vendor Passcode</label>
            <input
              type="password"
              placeholder="e.g. RPSU2026 or 1234"
              value={vendorCode}
              onChange={(e) => setVendorCode(e.target.value)}
              className="w-full text-sm border border-slate-200 rounded-xl px-3 py-2.5 text-center outline-none focus:border-red-500 font-mono tracking-widest"
              required
            />
          </div>

          {errorMsg && (
            <p className="text-[11px] text-red-600 font-medium bg-red-50 py-1.5 px-3 rounded text-center">
              {errorMsg}
            </p>
          )}

          <div className="flex gap-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 text-xs text-slate-600 font-bold bg-slate-100 hover:bg-slate-200 rounded-xl py-2.5 transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 text-xs text-white font-bold bg-emerald-600 hover:bg-emerald-700 rounded-xl py-2.5 shadow-md shadow-emerald-100 transition-colors cursor-pointer"
            >
              Verify Passcode
            </button>
          </div>

          <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 text-[10px] text-slate-500 leading-relaxed text-center">
            Passcodes for review: <code className="bg-white px-1 py-0.5 rounded border border-slate-100 font-bold">RPSU2026</code> or <code className="bg-white px-1 py-0.5 rounded border border-slate-100 font-bold">1234</code>
          </div>
        </form>
      </div>
    </div>
  );
}
