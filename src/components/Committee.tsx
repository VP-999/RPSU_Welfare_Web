import { useState } from 'react';
import { Mail, Phone, Linkedin, Search, Filter, Award, Eye, ArrowUpDown, ChevronRight, User } from 'lucide-react';
import { EXEC_COMMITTEE_2026, EXEC_COMMITTEE_2025 } from '../data';
import { Member } from '../types';

export default function Committee() {
  const [selectedSession, setSelectedSession] = useState<'2026-2027' | '2025-2026'>('2026-2027');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');
  const [activeContactMember, setActiveContactMember] = useState<string | null>(null);

  const committeeMembers = selectedSession === '2026-2027' ? EXEC_COMMITTEE_2026 : EXEC_COMMITTEE_2025;

  // Derive available departments
  const departments = ['All', ...Array.from(new Set(committeeMembers.map(m => m.studentId.split('-')[0])))];

  // Filter lists
  const filteredMembers = committeeMembers.filter(m => {
    const matchesSearch = m.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          m.designation.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          m.department.toLowerCase().includes(searchQuery.toLowerCase());
    
    const deptCode = m.studentId.split('-')[0];
    const matchesDept = selectedDept === 'All' || deptCode === selectedDept;

    return matchesSearch && matchesDept;
  });

  // Assign distinct styles for designations
  const getDesignationBadgeStyles = (designation: string) => {
    const d = designation.toLowerCase();
    if (d.includes('president')) {
      return 'bg-red-50 text-red-700 border-red-100 dark:bg-red-950/20 dark:text-red-400';
    } else if (d.includes('secretary') && !d.includes('assistant')) {
      return 'bg-rose-50 text-rose-700 border-rose-100';
    } else if (d.includes('treasurer')) {
      return 'bg-teal-50 text-teal-700 border-teal-100';
    } else if (d.includes('organizing') || d.includes('publicity')) {
      return 'bg-indigo-50 text-indigo-700 border-indigo-100';
    } else if (d.includes('assistant') || d.includes('office')) {
      return 'bg-amber-50 text-amber-700 border-amber-100';
    } else {
      return 'bg-slate-50 text-slate-700 border-slate-100';
    }
  };

  // Assign stylized avatars
  const getAvatarGradient = (seed: string) => {
    const hash = seed.split('').reduce((acc, char) => char.charCodeAt(0) + acc, 0);
    const colors = [
      'from-rose-500 to-red-600',
      'from-slate-700 to-slate-900',
      'from-orange-500 to-red-600',
      'from-slate-800 to-indigo-900',
      'from-rose-600 to-pink-700'
    ];
    return colors[hash % colors.length];
  };

  return (
    <section id="committee-section" className="py-16 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="text-left space-y-2">
            <span className="text-xs font-bold text-red-600 uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full border border-red-100">
              Active Leadership
            </span>
            <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
              Executive Committee Board
            </h2>
            <p className="text-sm text-slate-500 max-w-xl">
              Meet the hard-working organizers and volunteers orchestrating welfare projects and medical relief networks across RPSU.
            </p>
          </div>

          {/* Top Session Dropdown & Quick Search Filter */}
          <div className="flex items-center gap-3.5 flex-wrap">
            <div className="flex items-center gap-2 bg-white px-3.5 py-1.8 rounded-xl border border-slate-200 shadow-xs">
              <label className="text-xs font-semibold text-slate-500 font-sans">Active Session:</label>
              <select
                id="session-year-dropdown"
                value={selectedSession}
                onChange={(e) => {
                  setSelectedSession(e.target.value as any);
                  setSearchQuery('');
                  setSelectedDept('All');
                }}
                className="text-xs font-bold text-slate-800 bg-transparent outline-none cursor-pointer font-sans"
              >
                <option value="2026-2027">2026 - 2027 (Active)</option>
                <option value="2025-2026">2025 - 2026 (Historical)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Search & Department Filters Block */}
        <div className="bg-white p-4 rounded-2xl border border-slate-100 flex flex-col sm:flex-row items-center gap-3 mb-8 shadow-xs">
          {/* Text Filter */}
          <div className="relative w-full sm:flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search leaders by name, role, department..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs text-slate-700 bg-slate-50 hover:bg-slate-100/50 border border-slate-200/80 rounded-xl pl-9 pr-4 py-2.5 outline-none focus:border-red-500 focus:bg-white transition-all font-sans"
            />
          </div>

          {/* Department Quick Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto shrink-0 pb-1 sm:pb-0 scrollbar-none">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2 hidden sm:inline">
              Dept:
            </span>
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedDept === dept
                    ? 'bg-red-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        {/* Members Grid layout */}
        {filteredMembers.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-100">
            <User className="w-12 h-12 text-slate-300 mx-auto stroke-1 mb-2" />
            <p className="text-slate-500 text-sm font-semibold">No committee board members found matching search filters.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedDept('All'); }}
              className="text-xs text-red-600 font-bold hover:underline mt-1 cursor-pointer"
            >
              Clear filters and view all
            </button>
          </div>
        ) : (
          <div id="committee-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMembers.map((member, i) => {
              const matchesActiveContact = activeContactMember === member.name;

              return (
                <div
                  key={member.name}
                  className="bg-white rounded-2xl border border-slate-100 hover:border-red-100 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden relative group"
                >
                  {/* Top Abstract Accents */}
                  <div className="h-2 bg-gradient-to-r from-red-600 via-rose-500 to-amber-500 shrink-0" />

                  <div className="p-5 flex-1 flex flex-col items-center text-center space-y-4">
                    {/* Visual Avatar Bubble */}
                    <div className="relative">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-tr ${getAvatarGradient(member.avatarSeed)} flex items-center justify-center text-white font-sans text-2xl font-extrabold shadow-md transform group-hover:scale-105 transition-all`}>
                        {member.name.split(' ').slice(-2).map(part => part[0]).join('') || 'WM'}
                      </div>
                      <div className="absolute -bottom-1 -right-1 bg-white p-1 rounded-lg border border-slate-100 shadow-xs">
                        <Award className="w-4 h-4 text-red-600" />
                      </div>
                    </div>

                    {/* Basic Meta Details */}
                    <div className="space-y-1">
                      <h3 className="font-sans font-extrabold text-sm text-slate-900 group-hover:text-red-600 transition-colors">
                        {member.name}
                      </h3>
                      
                      {/* Designation Badge */}
                      <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${getDesignationBadgeStyles(member.designation)}`}>
                        {member.designation}
                      </span>
                    </div>

                    {/* Department Badges combo */}
                    <div className="flex flex-wrap items-center justify-center gap-1.5">
                      <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-0.5 rounded-lg border border-slate-200">
                        {member.studentId}
                      </span>
                      <span className="bg-slate-50 text-slate-500 text-[9px] font-bold px-2 py-0.5 rounded-lg border border-slate-100 truncate max-w-[120px]">
                        {member.studentId.split('-')[0]} Dept
                      </span>
                    </div>

                    {/* Text Snippet Bio */}
                    <p className="text-xs text-slate-500 leading-relaxed font-sans line-clamp-3">
                      {member.bio}
                    </p>
                  </div>

                  {/* Interactive Details Tray */}
                  <div className="px-5 pb-5 pt-3 border-t border-slate-50 bg-slate-50/50 flex flex-col gap-2 shrink-0">
                    {matchesActiveContact ? (
                      <div className="bg-white p-3 rounded-xl border border-slate-150 shadow-xs animate-fade-in text-left space-y-2 relative">
                        <button
                          onClick={() => setActiveContactMember(null)}
                          className="absolute right-2 top-2 p-0.5 text-slate-400 hover:text-slate-800 rounded-full cursor-pointer"
                        >
                          ✕
                        </button>
                        <div className="space-y-1 text-slate-700">
                          <p className="text-[10px] font-bold uppercase text-slate-400">Direct Contact Details</p>
                          <a href={`tel:${member.phone}`} className="flex items-center gap-1.5 text-xs font-bold text-slate-800 hover:text-red-600 break-all">
                            <Phone className="w-3.5 h-3.5 text-slate-400" />
                            <span>{member.phone}</span>
                          </a>
                          <a href={`mailto:${member.email}`} className="flex items-center gap-1.5 text-xs font-bold text-slate-800 hover:text-red-600 break-all">
                            <Mail className="w-3.5 h-3.5 text-slate-400" />
                            <span>{member.email}</span>
                          </a>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                          Connect
                        </span>
                        
                        <div className="flex items-center gap-2">
                          {/* Phone Action */}
                          <button
                            title="Call Member"
                            onClick={() => setActiveContactMember(member.name)}
                            className="p-1.8 bg-white hover:bg-red-50 hover:text-red-600 text-slate-500 rounded-lg border border-slate-200/60 shadow-xs transition-colors cursor-pointer"
                          >
                            <Phone className="w-3.5 h-3.5" />
                          </button>

                          {/* Email Action */}
                          <button
                            title="Email Member"
                            onClick={() => setActiveContactMember(member.name)}
                            className="p-1.8 bg-white hover:bg-red-50 hover:text-red-600 text-slate-500 rounded-lg border border-slate-200/60 shadow-xs transition-colors cursor-pointer"
                          >
                            <Mail className="w-3.5 h-3.5" />
                          </button>

                          {/* LinkedIn Action */}
                          <a
                            href={member.linkedin}
                            title="LinkedIn Professional Profile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.8 bg-white hover:bg-blue-50 hover:text-blue-600 text-slate-500 rounded-lg border border-slate-200/60 shadow-xs transition-colors cursor-pointer"
                          >
                            <Linkedin className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
