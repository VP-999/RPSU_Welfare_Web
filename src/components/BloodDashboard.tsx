import { useState } from 'react';
import { Search, Heart, MapPin, Calendar, Smartphone, Hospital, User, CheckCircle2, ShieldAlert, Sparkles, HeartPulse } from 'lucide-react';
import { BloodRequest } from '../types';

interface BloodDashboardProps {
  bloodRequests: BloodRequest[];
  onOpenBloodRequestForm: () => void;
  onDonatePledge: (reqId: string) => void;
}

export default function BloodDashboard({ bloodRequests, onOpenBloodRequestForm, onDonatePledge }: BloodDashboardProps) {
  const [selectedGroup, setSelectedGroup] = useState<string>('All');
  const [pledgedHearts, setPledgedHearts] = useState<Record<string, boolean>>({});

  const bloodGroups = ['All', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  // Filter requests
  const filteredRequests = bloodRequests.filter(req => {
    return selectedGroup === 'All' || req.bloodGroup === selectedGroup;
  });

  const handlePledgeLocal = (reqId: string) => {
    onDonatePledge(reqId);
    setPledgedHearts(prev => ({ ...prev, [reqId]: true }));
  };

  return (
    <section id="blood-dashboard-section" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-left">
        
        {/* Header and Quick Stats overview */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-bold text-red-600 uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full border border-red-100 inline-block">
              Rapid Response Portal
            </span>
            <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight leading-tight">
              Emergency Student Blood Directory
            </h2>
            <p className="text-sm text-slate-500 max-w-xl">
              Live matching system coordinating with the local medical centers. Click on any active patient's card below to pledge or contact volunteers.
            </p>
          </div>

          <button
            id="dashboard-request-trigger-btn"
            onClick={onOpenBloodRequestForm}
            className="px-5 py-3 rounded-xl text-xs font-bold bg-red-650 hover:bg-red-700 text-white shadow-lg hover:shadow-red-200 active:scale-98 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <HeartPulse className="w-4 h-4 animate-pulse" />
            <span>Post New Emergency Request</span>
          </button>
        </div>

        {/* Group Filter bar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-150 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <span className="text-xs font-bold text-slate-600 uppercase tracking-wider shrink-0 flex items-center gap-1">
            <Search className="w-4 h-4 text-slate-400" />
            Filter by Antigen Group:
          </span>

          <div className="flex items-center gap-1.5 overflow-x-auto w-full pb-1 sm:pb-0 scrollbar-none justify-start sm:justify-end">
            {bloodGroups.map(grp => (
              <button
                key={grp}
                onClick={() => setSelectedGroup(grp)}
                className={`w-10 h-10 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer flex items-center justify-center ${
                  selectedGroup === grp
                    ? 'bg-red-600 text-white shadow-sm scale-103'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {grp}
              </button>
            ))}
          </div>
        </div>

        {/* Requests Cards grid */}
        {filteredRequests.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-150 shadow-xs space-y-3">
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 mx-auto border border-slate-100">
              <Heart className="w-7 h-7 stroke-1" />
            </div>
            <h4 className="font-sans font-bold text-base text-slate-800">No active emergency seekers found for '{selectedGroup}' group.</h4>
            <p className="text-xs text-slate-400 max-w-sm mx-auto">
              This is a wonderful sign! It means there are no unfulfilled clinical emergencies matching this antigen group.
            </p>
            <button
              onClick={() => setSelectedGroup('All')}
              className="text-xs text-red-600 font-bold hover:underline cursor-pointer"
            >
              Reset group filters and review all active list
            </button>
          </div>
        ) : (
          <div id="blood-card-grid" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredRequests.map(req => {
              const hasPledged = pledgedHearts[req.id] || req.status === 'Fulfilled';

              return (
                <div
                  key={req.id}
                  className={`bg-white rounded-2xl border transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                    req.status === 'Urgent' && !hasPledged
                      ? 'border-red-250 hover:border-red-400 shadow-md shadow-red-50/50'
                      : 'border-slate-150 hover:border-slate-300 shadow-xs'
                  }`}
                >
                  {/* Status Indicator Banner */}
                  <div className={`px-4 py-2 flex items-center justify-between text-[11px] font-bold ${
                    req.status === 'Urgent' && !hasPledged
                      ? 'bg-red-50 text-red-700 border-b border-red-100'
                      : req.status === 'Fulfilled' || hasPledged
                      ? 'bg-emerald-50 text-emerald-700 border-b border-emerald-100'
                      : 'bg-amber-50 text-amber-700 border-b border-amber-100'
                  }`}>
                    <span className="flex items-center gap-1 uppercase tracking-wider">
                      <span className={`w-2 h-2 rounded-full ${
                        req.status === 'Urgent' && !hasPledged
                          ? 'bg-red-600 animate-ping'
                          : hasPledged
                          ? 'bg-emerald-600'
                          : 'bg-amber-500'
                      }`} />
                      {hasPledged ? 'Sufficient Donors Connected' : `${req.status} Patient Case`}
                    </span>
                    <span>{req.date}</span>
                  </div>

                  <div className="p-5 flex-1 flex gap-4">
                    {/* Giant Blood Group Stamp */}
                    <div className={`w-16 h-16 rounded-2xl shrink-0 flex flex-col items-center justify-center border text-center ${
                      req.status === 'Urgent' && !hasPledged
                        ? 'bg-gradient-to-br from-red-600 to-rose-700 text-white border-transparent shadow-md'
                        : 'bg-slate-100 text-slate-800 border-slate-200'
                    }`}>
                      <span className="text-[10px] font-extrabold uppercase leading-none opacity-80">Group</span>
                      <span className="text-xl font-black leading-none mt-1">{req.bloodGroup}</span>
                    </div>

                    {/* Patient Context Details */}
                    <div className="space-y-2 min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-1.5 flex-wrap">
                        <h4 className="font-sans font-extrabold text-sm text-slate-900 truncate">
                          Patient: {req.patientName}
                        </h4>
                        <span className="bg-slate-100 text-slate-650 px-2 py-0.5 rounded text-[10px] font-mono font-bold shrink-0">
                          {req.units} {req.units === 1 ? 'Pint' : 'Pints'} Required
                        </span>
                      </div>

                      <div className="space-y-1.5 text-xs text-slate-600">
                        <p className="flex items-start gap-1.5">
                          <Hospital className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                          <span className="truncate"><strong>At:</strong> {req.hospital}</span>
                        </p>
                        <p className="flex items-start gap-1.5">
                          <ShieldAlert className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                          <span className="leading-snug"><strong>Clinical Diagnosis:</strong> {req.reason}</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card Interactions Footer */}
                  <div className="px-5 pb-5 pt-3 border-t border-slate-50 bg-slate-50/50 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
                    <div className="flex items-center gap-1 text-xs font-bold text-slate-800">
                      <Smartphone className="w-4 h-4 text-slate-405" />
                      <span>Voluntarily dial: <a href={`tel:${req.contact}`} className="text-red-600 underline font-mono">{req.contact}</a></span>
                    </div>

                    <button
                      onClick={() => handlePledgeLocal(req.id)}
                      disabled={hasPledged}
                      className={`w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-sm cursor-pointer ${
                        hasPledged
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-100 shadow-none cursor-default'
                          : 'bg-white hover:bg-red-50 text-red-600 border border-red-200 active:scale-97'
                      }`}
                    >
                      {hasPledged ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>Pledged / Fulfilled ✓</span>
                        </>
                      ) : (
                        <>
                          <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
                          <span>I can Donate Blood</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Safety Standards callout */}
        <div className="bg-red-50 rounded-2xl p-4.5 border border-red-100 max-w-3xl mx-auto flex gap-3 text-left">
          <Sparkles className="w-6 h-6 text-red-650 shrink-0 animate-bounce mt-0.5" />
          <div className="space-y-1">
            <h5 className="text-xs font-extrabold text-red-950 uppercase tracking-wider">Clinical Safety Standards Disclaimer</h5>
            <p className="text-[11px] text-red-700 leading-relaxed font-sans">
              Always verify safe interval gaps before donating. In Bangladesh, active eligible donors must maintain a strict 4-month gap (120 days) between blood pint extractions. Registered campus teams will double-check hematology counts, hemoglobin volumes, and temperature indexes inside campus camp wards before any extraction protocol.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
