import React, { useState } from 'react';
import { TrendingUp, Plus, DollarSign, CheckCircle2, Clock, XCircle, ShoppingBag, LogOut, BarChart3, HelpCircle, Package, ArrowUpRight, Sparkles } from 'lucide-react';
import { VendorProduct } from '../types';

interface VendorDashboardProps {
  onLogout: () => void;
  onAddProductToStore: (newProd: { title: string; price: number; category: 'Organic' | 'Service'; description: string }) => void;
}

export default function VendorDashboard({ onLogout, onAddProductToStore }: VendorDashboardProps) {
  // Local state for vendor products (defaults + user uploaded ones for simulation)
  const [vendorProducts, setVendorProducts] = useState<VendorProduct[]>([
    { id: 'vp-1', title: 'Premium Wooden Spoons Set', price: 420, category: 'Organic', dateAdded: 'May 10, 2026', status: 'Approved', salesCount: 38, revenue: 15960 },
    { id: 'vp-2', title: 'Organic Black Tea (Sylhet Garden)', price: 480, category: 'Organic', dateAdded: 'May 15, 2026', status: 'Approved', salesCount: 14, revenue: 6720 },
    { id: 'vp-3', title: 'Python Basic Crack sheet PDF', price: 300, category: 'Service', dateAdded: 'Yesterday', status: 'Pending', salesCount: 0, revenue: 0 },
  ]);

  // Form Fields
  const [newTitle, setNewTitle] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [newCategory, setNewCategory] = useState<'Organic' | 'Service'>('Organic');
  const [newDesc, setNewDesc] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Stats calculation
  const totalSales = vendorProducts.reduce((sum, p) => sum + p.salesCount, 0);
  const totalRevenue = vendorProducts.reduce((sum, p) => sum + p.revenue, 0);
  const totalPending = vendorProducts.filter(p => p.status === 'Pending').length;

  const handleCreateProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newPrice || !newDesc) return;

    const parsedPrice = parseInt(newPrice) || 0;
    const newRecord: VendorProduct = {
      id: `vp-${Date.now()}`,
      title: newTitle,
      price: parsedPrice,
      category: newCategory,
      dateAdded: 'Just now',
      status: 'Pending',
      salesCount: 0,
      revenue: 0
    };

    setVendorProducts([newRecord, ...vendorProducts]);
    
    // Also push to main store so it shows up
    onAddProductToStore({
      title: newTitle,
      price: parsedPrice,
      category: newCategory,
      description: newDesc
    });

    setNewTitle('');
    setNewPrice('');
    setNewDesc('');
    setSubmitSuccess(true);
    setTimeout(() => setSubmitSuccess(false), 3000);
  };

  // Mock Sales Graph coordinates (SVG based for ultimate compatibility & beauty)
  // Weeks of May
  const weeklySalesData = [2100, 4800, 3100, 7800, 6720];
  const maxVal = Math.max(...weeklySalesData);

  return (
    <div id="vendor-dashboard-panel" className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-left">
        
        {/* Header Ribbon */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 shadow-lg border border-slate-800">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping" />
              <h2 className="font-sans font-black text-xl sm:text-2xl tracking-tight">Student Vendor Operations Room</h2>
            </div>
            <p className="text-xs text-slate-400">
              Welcome back, verified student merchant. Track your organic harvests, bootcamps sales, and approve new listings.
            </p>
          </div>

          <button
            id="vendor-logout-btn"
            onClick={onLogout}
            className="flex items-center justify-center gap-1.5 self-start md:self-auto px-4 py-2 text-xs font-bold text-slate-300 hover:text-white bg-slate-800 hover:bg-red-600 rounded-xl transition-all cursor-pointer border border-slate-700 hover:border-transparent shrink-0"
          >
            <LogOut className="w-4 h-4" />
            <span>Close Dashboard Session</span>
          </button>
        </div>

        {/* Analytics Highlights Counters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none block">Total Student Sales</span>
              <h3 className="text-2xl font-black text-slate-900 font-sans tracking-tight leading-none">{totalSales} item packages</h3>
              <p className="text-[10px] text-emerald-600 font-bold flex items-center gap-0.5 mt-1">
                <ArrowUpRight className="w-3.5 h-3.5" />
                <span>+12.4% weekly speed</span>
              </p>
            </div>
            <div className="p-3 bg-red-100/65 text-red-600 rounded-2xl">
              <Package className="w-6 h-6" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none block">Revenue Produced</span>
              <h3 className="text-2xl font-black text-slate-900 font-sans tracking-tight leading-none">BDT {totalRevenue}</h3>
              <p className="text-[10px] text-slate-500 font-medium mt-1">
                40% routed to support general relief pool
              </p>
            </div>
            <div className="p-3 bg-emerald-100/65 text-emerald-600 rounded-2xl">
              <DollarSign className="w-6 h-6" />
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none block">Approval Queue</span>
              <h3 className="text-2xl font-black text-slate-900 font-sans tracking-tight leading-none">{totalPending} Pending</h3>
              <p className="text-[10px] text-amber-600 font-bold flex items-center gap-0.5 mt-1 animate-pulse">
                <Clock className="w-3.5 h-3.5" />
                <span>Checking catalog compliance</span>
              </p>
            </div>
            <div className="p-3 bg-amber-100/65 text-amber-600 rounded-2xl">
              <Clock className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Core Screen Split: Left Analytics Graph & Listing Status, Right Dynamic Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Block (8 units) - Graphic & Active lists */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Visual Analytics SVG graph */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <BarChart3 className="w-5 h-5 text-red-600" />
                  <h3 className="font-sans font-bold text-sm text-slate-900 uppercase tracking-wider">Weekly Revenue Stream Tracking</h3>
                </div>
                <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-mono">
                  Target: 20,000 BDT
                </span>
              </div>

              {/* Vector SVG Graphical Layout */}
              <div className="relative pt-4">
                <div className="h-44 flex items-end justify-between gap-3 px-4">
                  {weeklySalesData.map((val, idx) => {
                    const heightPercent = `${Math.round((val / maxVal) * 100)}%`;
                    return (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-2 group relative">
                        {/* Hover Popup */}
                        <div className="absolute -top-7 opacity-0 group-hover:opacity-100 bg-slate-900 text-white text-[10px] font-black px-2 py-0.5 rounded-md transition-opacity leading-none pointer-events-none">
                          BDT {val}
                        </div>

                        {/* Interactive Bar */}
                        <div
                          style={{ height: heightPercent }}
                          className="w-full bg-gradient-to-t from-red-600 to-rose-400 rounded-lg group-hover:from-red-700 group-hover:to-rose-500 transition-all duration-300 shadow-xs"
                        />
                        <span className="text-[10px] text-slate-400 font-semibold font-mono">
                          Week {idx + 1}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Grid guidelines */}
                <div className="absolute inset-x-0 bottom-0 top-18 flex flex-col justify-between pointer-events-none z-0 border-b border-dashed border-slate-150">
                  <div className="border-b border-dashed border-slate-100 w-full" />
                  <div className="border-b border-dashed border-slate-100 w-full" />
                  <div className="border-b border-dashed border-slate-100 w-full" />
                </div>
              </div>
            </div>

            {/* Live Product tracker */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
              <h3 className="font-sans font-bold text-sm text-slate-900 uppercase tracking-widest">Your Merchandises & Board Approvals</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-slate-100 text-slate-400 uppercase font-bold text-[10px] text-left">
                      <th className="pb-2.5">Item Title</th>
                      <th className="pb-2.5">Category</th>
                      <th className="pb-2.5">Unit BDT</th>
                      <th className="pb-2.5 text-center">Sold</th>
                      <th className="pb-2.5">Sales BDT</th>
                      <th className="pb-2.5 text-right">Approval State</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {vendorProducts.map((p) => (
                      <tr key={p.id} className="hover:bg-slate-50/50 transition-colors">
                        <td className="py-3 font-semibold text-slate-800">{p.title}</td>
                        <td className="py-3 text-slate-500">
                          <span className={`inline-block px-2 py-0.5 rounded text-[9px] font-black uppercase ${
                            p.category === 'Organic' ? 'bg-emerald-50 text-emerald-700' : 'bg-blue-50 text-blue-700'
                          }`}>
                            {p.category}
                          </span>
                        </td>
                        <td className="py-3 font-bold text-slate-800">{p.price}</td>
                        <td className="py-3 text-center font-semibold text-slate-600">{p.salesCount}</td>
                        <td className="py-3 font-black text-slate-900">{p.revenue}</td>
                        <td className="py-3 text-right">
                          {p.status === 'Approved' ? (
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                              <CheckCircle2 className="w-3 h-3" />
                              <span>Live on Store</span>
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-100">
                              <Clock className="w-3 h-3" />
                              <span>Pending Board audit</span>
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>

          {/* Right Column (5 units) - Dynamic upload form */}
          <div className="lg:col-span-5 bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
            <div className="border-b border-slate-100 pb-3">
              <h3 className="font-sans font-extrabold text-sm text-slate-900 uppercase tracking-widest flex items-center gap-1.5">
                <Plus className="w-4.5 h-4.5 text-red-600" />
                New Student Merchandise Proposal
              </h3>
              <p className="text-[11px] text-slate-500 mt-0.5 leading-normal">
                Submit raw foods or student tutoring services. Club auditors will review pricing margins before taking it live.
              </p>
            </div>

            {submitSuccess && (
              <div className="p-3 bg-emerald-50 text-emerald-800 border border-emerald-150 rounded-xl text-xs flex items-center gap-2 font-bold animate-fade-in">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>Proposal cataloged! Check progress in the approval table.</span>
              </div>
            )}

            <form onSubmit={handleCreateProduct} className="space-y-4 text-xs font-medium">
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Product/Service Title *</label>
                <input
                  type="text"
                  placeholder="e.g., Pure Mustard Oil (Batch C) or Javascript Prep Tutoring"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full text-xs text-slate-700 border border-slate-200 rounded-xl px-3 py-2.5 outline-none focus:border-red-500"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Catalog Category *</label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value as any)}
                    className="w-full text-xs border border-slate-200 bg-white rounded-xl px-3 py-2.5 outline-none focus:border-red-500 font-bold text-slate-700"
                  >
                    <option value="Organic">100% Organic Food</option>
                    <option value="Service">Academic Service</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Price in BDT *</label>
                  <input
                    type="number"
                    placeholder="e.g. 500"
                    min="10"
                    max="10000"
                    value={newPrice}
                    onChange={(e) => setNewPrice(e.target.value)}
                    className="w-full text-xs text-slate-700 border border-slate-200 rounded-xl px-3 py-2.5 outline-none focus:border-red-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Full Explanatory Description *</label>
                <textarea
                  rows={4}
                  placeholder="Explain chemical tests, source farms, or academic timelines if it's a course..."
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  className="w-full text-xs text-slate-700 border border-slate-200 rounded-xl p-3 outline-none focus:border-red-400"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-slate-900 text-white font-bold py-2.5 rounded-xl hover:bg-slate-800 transition-colors shadow-md shadow-slate-100 text-center cursor-pointer"
              >
                File Compliance Audit Proposal
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
}
