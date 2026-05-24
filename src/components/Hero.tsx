import { Heart, Globe2, Sparkles, Sprout, ArrowRight } from 'lucide-react';

interface HeroProps {
  onDonateClick: () => void;
  onExploreClick: () => void;
}

export default function Hero({ onDonateClick, onExploreClick }: HeroProps) {
  return (
    <div id="hero-banner" className="relative bg-slate-900 overflow-hidden min-h-[520px] flex items-center">
      {/* Background Image with Crimson Tint Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1600"
          alt="RPSU Social Welfare Volunteers on Field Work"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-red-950/95 via-slate-950/90 to-red-950/40" />
      </div>

      {/* Decorative Blur Backdrops */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-red-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-20 w-80 h-80 bg-rose-600/15 rounded-full blur-3xl" />

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 text-white text-left">
        <div className="max-w-3xl space-y-6">
          
          {/* Subtle Accent Beacon */}
          <div className="inline-flex items-center gap-1.5 bg-red-500/10 border border-red-500/30 px-3 py-1.5 rounded-full text-red-400 font-sans text-xs font-bold uppercase tracking-wider animate-pulse-border">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Empowering Campus Communities</span>
          </div>

          {/* Bold Core Headline */}
          <h1 className="font-sans font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.1]">
            Hope For <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400">
              Humanity
            </span>
          </h1>

          {/* Description */}
          <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl font-sans font-normal">
            At RPSU Social Welfare Club, we are dedicated to bridging hope and resource networks. 
            From active campus-led blood groupings and emergency matching systems, to independent commercial earnings routed entirely to marginalized relief, we transform collective empathy into structured humanitarian action.
          </p>

          {/* Quick Pillar Grid */}
          <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6 max-w-xl">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-red-500/15 rounded-lg text-red-400 shrink-0">
                <Heart className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-100 uppercase tracking-widest">Blood Portal</h4>
                <p className="text-[10px] text-slate-400">Instant Matchmaking</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-blue-500/15 rounded-lg text-blue-400 shrink-0">
                <Globe2 className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-100 uppercase tracking-widest">Field Relief</h4>
                <p className="text-[10px] text-slate-400">Disaster Intercessions</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-emerald-500/15 rounded-lg text-emerald-400 shrink-0">
                <Sprout className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-100 uppercase tracking-widest">Self-Funded</h4>
                <p className="text-[10px] text-slate-400">No-Profit Commerce</p>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              id="hero-donate-cta"
              onClick={onDonateClick}
              className="px-6 py-3 rounded-xl block font-bold text-xs sm:text-sm bg-red-600 hover:bg-red-700 active:scale-98 transition-all shadow-lg hover:shadow-red-600/20 text-center cursor-pointer text-white"
            >
              Donate Blood Now
            </button>
            
            <button
              id="hero-explore-cta"
              onClick={onExploreClick}
              className="px-6 py-3 rounded-xl block font-bold text-xs sm:text-sm border border-slate-700 hover:border-slate-500 hover:bg-white/5 active:scale-98 transition-all text-center cursor-pointer text-slate-200"
            >
              <span className="flex items-center justify-center gap-1.5">
                Explore Our Works
                <ArrowRight className="w-4 h-4" />
              </span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
