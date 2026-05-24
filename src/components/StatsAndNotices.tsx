import { useState } from 'react';
import { Calendar, Users, HeartHandshake, FolderHeart, Coins, Bell, Megaphone, Clock, Check, ArrowRight, ShieldCheck, Image, ExternalLink } from 'lucide-react';
import { NOTICES, EVENTS, STATISTICS } from '../data';
import { Notice, EventGalleryItem } from '../types';

export default function StatsAndNotices() {
  const [activeTab, setActiveTab] = useState<'All' | 'Blood Camp' | 'Relief Work' | 'Charity'>('All');
  const [expandedNoticeId, setExpandedNoticeId] = useState<string | null>(null);

  // Filter gallery events
  const filteredEvents = EVENTS.filter(ev => {
    return activeTab === 'All' || ev.category === activeTab;
  });

  const getNoticeIcon = (type: Notice['type']) => {
    switch (type) {
      case 'notice':
        return <Megaphone className="w-4 h-4 text-rose-600" />;
      case 'meeting':
        return <Users className="w-4 h-4 text-amber-600" />;
      case 'event':
        return <Calendar className="w-4 h-4 text-indigo-605" />;
      default:
        return <Bell className="w-4 h-4 text-slate-500" />;
    }
  };

  const getRandomImage = (category: string) => {
    switch (category) {
      case 'Blood Camp':
        return "https://images.unsplash.com/photo-1615461066841-6116ecdccd04?auto=format&fit=crop&q=80&w=500";
      case 'Relief Work':
        return "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=500";
      case 'Charity':
        return "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=500";
      default:
        return "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=500";
    }
  };

  return (
    <div id="stats-notices-container" className="py-16 space-y-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Layout Grid: Left Details & Right Notices */}
        <div id="about-and-notices-grid" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column (8 units): About the Club & Counts */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-xs font-bold text-red-600 uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full border border-red-100 inline-block">
                Who We Are
              </span>
              <h2 className="font-sans font-extrabold text-3xl text-slate-900 tracking-tight leading-tight">
                Empowering Youth, <span className="text-red-600">Restoring Dignity</span>
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-sans">
                RPSU Social Welfare Club is a volunteer-led student organization at Royal Pride State University. 
                Our core vision is driven by deep humanitarian calling. We connect clinical donor groups directly to patients, allocate resources during national flood/cold crises, and leverage our in-house Tech & Organic commerce to self-fund academic projects inside underprivileged communities.
              </p>
            </div>

            {/* Premium Stat Counters Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {/* Stat Card 1 */}
              <div className="bg-slate-50 border border-slate-100 p-4.5 rounded-2xl text-center space-y-1 relative overflow-hidden group hover:border-red-100 transition-all">
                <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center text-red-600 mx-auto mb-2">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 font-sans tracking-tight">
                  {STATISTICS.volunteers}+
                </h3>
                <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest leading-none">
                  Volunteers List
                </p>
                <div className="absolute top-0 right-0 h-1 w-0 bg-red-500 group-hover:w-full transition-all duration-300" />
              </div>

              {/* Stat Card 2 */}
              <div className="bg-slate-50 border border-slate-100 p-4.5 rounded-2xl text-center space-y-1 relative overflow-hidden group hover:border-red-100 transition-all">
                <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center text-rose-600 mx-auto mb-2">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 font-sans tracking-tight">
                  {STATISTICS.bloodDonations}+
                </h3>
                <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest leading-none">
                  Blood Pints
                </p>
                <div className="absolute top-0 right-0 h-1 w-0 bg-rose-500 group-hover:w-full transition-all duration-300" />
              </div>

              {/* Stat Card 3 */}
              <div className="bg-slate-50 border border-slate-100 p-4.5 rounded-2xl text-center space-y-1 relative overflow-hidden group hover:border-red-100 transition-all">
                <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mx-auto mb-2">
                  <FolderHeart className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 font-sans tracking-tight">
                  {STATISTICS.completedProjects}+
                </h3>
                <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest leading-none">
                  Projects Sourced
                </p>
                <div className="absolute top-0 right-0 h-1 w-0 bg-emerald-500 group-hover:w-full transition-all duration-300" />
              </div>

              {/* Stat Card 4 */}
              <div className="bg-slate-50 border border-slate-100 p-4.5 rounded-2xl text-center space-y-1 relative overflow-hidden group hover:border-red-100 transition-all">
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 mx-auto mb-2">
                  <Coins className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-black text-slate-900 font-sans tracking-tight pt-1.5 leading-none">
                  BDT {STATISTICS.fundRaised.toLocaleString()}
                </h3>
                <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest mt-1.5 inline-block">
                  Clean Charity Funds Raised
                </p>
                <div className="absolute top-0 right-0 h-1 w-0 bg-amber-500 group-hover:w-full transition-all duration-300" />
              </div>
            </div>

            {/* Core Values Bullets */}
            <div className="p-5 bg-red-50/50 rounded-2xl border border-red-100 space-y-3.5">
              <h4 className="text-xs font-bold text-red-950 uppercase tracking-widest">Our Guiding Core Principles</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "100% Volunteerism with clean fiscal ethics",
                  "Immediate on-ground response for disaster zones",
                  "Zero administrative cost leakage structure",
                  "Fostering next-gen student leaders & tech makers"
                ].map((val, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                    <Check className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <span className="font-medium">{val}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column (5 units): Minimal Live Notice Board */}
          <div className="lg:col-span-5 bg-slate-50 rounded-2xl border border-slate-200/80 p-5 space-y-4 text-left shadow-xs">
            <div className="flex items-center justify-between border-b border-slate-250 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-red-500 rounded-full animate-ping" />
                <h3 className="font-sans font-extrabold text-base text-slate-900 tracking-tight">
                  Live Action Alert Board
                </h3>
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                Official Feed
              </span>
            </div>

            {/* Notices Scroll Area */}
            <div id="notice-scroller" className="space-y-3 max-h-[360px] overflow-y-auto pr-1">
              {NOTICES.map((not) => {
                const isExpanded = expandedNoticeId === not.id;
                return (
                  <div
                    key={not.id}
                    onClick={() => setExpandedNoticeId(isExpanded ? null : not.id)}
                    className="p-3 bg-white hover:bg-slate-100/50 rounded-xl border border-slate-200 cursor-pointer transition-colors duration-200 space-y-2 relative"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-start gap-2">
                        <div className="p-1 bg-slate-50 rounded-lg shrink-0 mt-0.5 border border-slate-100">
                          {getNoticeIcon(not.type)}
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-slate-800 hover:text-red-600 transition-colors line-clamp-2">
                            {not.title}
                          </h4>
                          <div className="flex items-center gap-1.5 mt-1">
                            <Clock className="w-3.5 h-3.5 text-slate-400" />
                            <span className="text-[10px] font-medium text-slate-500">{not.date}</span>
                          </div>
                        </div>
                      </div>

                      {not.priority === 'high' && (
                        <span className="bg-red-100 text-red-700 text-[9px] font-extrabold px-1.5 py-0.5 rounded uppercase leading-none">
                          Urgent
                        </span>
                      )}
                    </div>

                    {isExpanded && (
                      <p className="text-xs text-slate-600 leading-relaxed font-sans bg-slate-50 p-3 rounded-lg border border-slate-100 animate-fade-in">
                        {not.content}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="text-center pt-1 border-t border-slate-200">
              <p className="text-[10px] text-slate-500">
                💡 Tap on any notice to expand and view detailed briefs.
              </p>
            </div>
          </div>

        </div>

        {/* Gallery Section with Toggles */}
        <div id="gallery-carousel-block" className="pt-20 border-t border-slate-100 text-left">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold text-red-600 uppercase tracking-widest bg-red-50 px-2.5 py-0.5 rounded-full border border-red-100 inline-block">
                Impact Chronicles
              </span>
              <h3 className="font-sans font-extrabold text-xl sm:text-2xl text-slate-900 tracking-tight">
                Our Event & Relief Gallery
              </h3>
              <p className="text-xs text-slate-505 max-w-lg">
                Glimpses of active campaigns, street distributions, and campus healthcare camps led by our student panels.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl self-start overflow-x-auto w-full md:w-auto">
              {(['All', 'Blood Camp', 'Relief Work', 'Charity'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    activeTab === tab
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Event Cards Grid */}
          <div id="gallery-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {filteredEvents.map((ev) => (
              <div
                key={ev.id}
                className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-xs hover:shadow-md transition-all group"
              >
                {/* Photo Header */}
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={getRandomImage(ev.category)}
                    alt={ev.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full text-[10px] font-extrabold text-indigo-900 tracking-tight shadow-xs uppercase border border-slate-100">
                    {ev.category}
                  </div>
                  <div className="absolute bottom-3 left-3 bg-slate-900/85 backdrop-blur-xs px-2.5 py-1 rounded-lg text-[10px] font-bold text-white tracking-widest uppercase">
                    {ev.date}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <h4 className="text-sm font-extrabold text-slate-900 group-hover:text-red-600 transition-colors">
                    {ev.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {ev.description}
                  </p>
                  
                  {/* Footer details */}
                  <div className="flex items-center justify-between pt-3 border-t border-slate-50 text-[11px] font-semibold text-slate-500">
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-slate-400" />
                      <strong>{ev.volunteersCount} Active Members Involved</strong>
                    </span>
                    <span className="text-red-500 inline-flex items-center gap-0.5 hover:underline cursor-pointer">
                      Read Report <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
