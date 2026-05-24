import { Member, Notice, EventGalleryItem, Product, BloodRequest } from './types';

export const EXEC_COMMITTEE_2026: Member[] = [
  {
    name: "Md. Selim",
    designation: "President",
    studentId: "CSE-2023-01",
    department: "Computer Science & Engineering",
    bio: "Dedicated to mobilizing youth leadership for impactful community services and building real-time blood networks.",
    email: "selim.cse@rpsu.edu",
    phone: "+8801712345678",
    linkedin: "https://linkedin.com/in/md-selim-rpsu",
    avatarSeed: "selim"
  },
  {
    name: "Rohan Hossian",
    designation: "Vice President",
    studentId: "BBA-2023-14",
    department: "Bachelor of Business Administration",
    bio: "Passionate about structural club management, youth outreach, and resource budgeting for welfare activities.",
    email: "rohan.bba@rpsu.edu",
    phone: "+8801812345678",
    linkedin: "https://linkedin.com/in/rohan-hossian-rpsu",
    avatarSeed: "rohan"
  },
  {
    name: "Nafiz Iqbal Srabon",
    designation: "Vice President",
    studentId: "PHR-2023-05",
    department: "Department of Pharmacy",
    bio: "Spearheading clinical coordination and safety measures in emergency medical supply runs and blood donation drives.",
    email: "nafiz.phr@rpsu.edu",
    phone: "+8801912345678",
    linkedin: "https://linkedin.com/in/nafiz-iqbal-rpsu",
    avatarSeed: "nafiz"
  },
  {
    name: "Mohammad Al-Amin",
    designation: "Vice President",
    studentId: "ENG-2023-08",
    department: "Department of English",
    bio: "Advocating for digital communication standards, inclusivity in volunteer groups, and humanitarian policy alignment.",
    email: "alamin.eng@rpsu.edu",
    phone: "+8801612345678",
    linkedin: "https://linkedin.com/in/al-amin-rpsu",
    avatarSeed: "alamin"
  },
  {
    name: "Md. Ashik Rahman",
    designation: "General Secretary",
    studentId: "CSE-2023-10",
    department: "Computer Science & Engineering",
    bio: "Directing club administration, streamlining communications, and organizing cross-department volunteer squads.",
    email: "ashik.cse@rpsu.edu",
    phone: "+8801512345678",
    linkedin: "https://linkedin.com/in/ashik-rahman-rpsu",
    avatarSeed: "ashik"
  },
  {
    name: "Sharowar Hossain Ivan",
    designation: "Joint Secretary",
    studentId: "PHR-2023-12",
    department: "Department of Pharmacy",
    bio: "Enhancing hospital relations, medical inventory safety, and logistics design for monthly donation camps.",
    email: "ivan.phr@rpsu.edu",
    phone: "+8801312345678",
    linkedin: "https://linkedin.com/in/sharowar-ivan-rpsu",
    avatarSeed: "ivan"
  },
  {
    name: "Monira Islam Mira",
    designation: "Joint Secretary",
    studentId: "ENG-2023-15",
    department: "Department of English",
    bio: "Crafting public relations, volunteer training modules, and leading women-student welfare and outreach panels.",
    email: "mira.eng@rpsu.edu",
    phone: "+8801412345678",
    linkedin: "https://linkedin.com/in/monira-mira-rpsu",
    avatarSeed: "mira"
  },
  {
    name: "KM. Istiak Ahammed",
    designation: "Organizing Secretary",
    studentId: "CSE-2023-22",
    department: "Computer Science & Engineering",
    bio: "Coordinating field volunteers, securing permissions for relief zones, and scheduling emergency deployments.",
    email: "istiak.cse@rpsu.edu",
    phone: "+8801723456789",
    linkedin: "https://linkedin.com/in/istiak-ahammed-rpsu",
    avatarSeed: "istiak"
  },
  {
    name: "Rayhan Kabir Rohan",
    designation: "Treasurer",
    studentId: "BBA-2023-04",
    department: "Bachelor of Business Administration",
    bio: "Managing the club financial books, audit compliance, and allocating funds raised via the Organic & Tech wing.",
    email: "rayhan.bba@rpsu.edu",
    phone: "+8801823456789",
    linkedin: "https://linkedin.com/in/rayhan-rohan-rpsu",
    avatarSeed: "rayhantr"
  },
  {
    name: "Nusrat Ahmed Kona",
    designation: "Assistant Treasurer",
    studentId: "CSE-2023-30",
    department: "Computer Science & Engineering",
    bio: "Supporting transaction tracking, issuing receipts for donations, and documenting financial summaries.",
    email: "nusrata.cse@rpsu.edu",
    phone: "+8801923456789",
    linkedin: "https://linkedin.com/in/nusrat-kona-rpsu",
    avatarSeed: "nusrat"
  },
  {
    name: "Moshiur Rahman",
    designation: "Publicity Secretary",
    studentId: "PHR-2023-25",
    department: "Department of Pharmacy",
    bio: "Directing awareness campaigns across social media channels, leading graphic designs, and publishing monthly reports.",
    email: "moshiur.phr@rpsu.edu",
    phone: "+8801623456789",
    linkedin: "https://linkedin.com/in/moshiur-rahman-rpsu",
    avatarSeed: "moshiur"
  },
  {
    name: "Mohammad Mishruh Abdullah",
    designation: "Assistant Publicity Secretary",
    studentId: "ENG-2023-44",
    department: "Department of English",
    bio: "Writing newsletters, drafting press releases, and managing direct student-room notifications in the dorms.",
    email: "mishruh.eng@rpsu.edu",
    phone: "+8801523456789",
    linkedin: "https://linkedin.com/in/mishruh-abdullah-rpsu",
    avatarSeed: "mishruh"
  },
  {
    name: "Ommey Habiba Sowme",
    designation: "Office Secretary",
    studentId: "PHR-2023-18",
    department: "Department of Pharmacy",
    bio: "Cataloging volunteer database archives, handling incoming letters, and scheduling regular meetings.",
    email: "sowme.phr@rpsu.edu",
    phone: "+8801323456789",
    linkedin: "https://linkedin.com/in/commey-sowme-rpsu",
    avatarSeed: "sowme"
  },
  {
    name: "Sayma Islam",
    designation: "Assistant Office Secretary",
    studentId: "CSE-2023-40",
    department: "Computer Science & Engineering",
    bio: "Assisting in membership directory cleanups, attendance metrics, and logging office inventory lists.",
    email: "sayma.cse@rpsu.edu",
    phone: "+8801423456789",
    linkedin: "https://linkedin.com/in/sayma-islam-rpsu",
    avatarSeed: "sayma"
  },
  {
    name: "Mishkat Mashrafi Sabik",
    designation: "Executive Member",
    studentId: "CSE-2023-50",
    department: "Computer Science & Engineering",
    bio: "Advising on software integration, portal operations, and on-ground relief team setup.",
    email: "sabik.cse@rpsu.edu",
    phone: "+8801734567890",
    linkedin: "https://linkedin.com/in/mishkat-sabik-rpsu",
    avatarSeed: "sabik"
  },
  {
    name: "Sara Ban Tahura",
    designation: "Executive Member",
    studentId: "PHR-2023-51",
    department: "Department of Pharmacy",
    bio: "Helping out in hospital volunteer distributions and medical camp awareness protocols.",
    email: "sara.phr@rpsu.edu",
    phone: "+8801834567890",
    linkedin: "https://linkedin.com/in/sara-tahura-rpsu",
    avatarSeed: "sara"
  },
  {
    name: "Kumkum Habiba",
    designation: "Executive Member",
    studentId: "ENG-2023-52",
    department: "Department of English",
    bio: "Active in relief food distributions and leading soft skills seminars for rural children.",
    email: "kumkum.eng@rpsu.edu",
    phone: "+8801934567890",
    linkedin: "https://linkedin.com/in/kumkum-habiba-rpsu",
    avatarSeed: "kumkum"
  },
  {
    name: "Md. Mostafa",
    designation: "Executive Member",
    studentId: "BBA-2023-53",
    department: "Bachelor of Business Administration",
    bio: "Key focal point for managing private sponsor booths and student engagement councils.",
    email: "mostafa.bba@rpsu.edu",
    phone: "+8801634567890",
    linkedin: "https://linkedin.com/in/md-mostafa-rpsu",
    avatarSeed: "mostafa"
  },
  {
    name: "Nadia Akter",
    designation: "Executive Member",
    studentId: "CSE-2023-54",
    department: "Computer Science & Engineering",
    bio: "Supporting dynamic spreadsheet systems for donor queries and emergency requests logistics.",
    email: "nadia.cse@rpsu.edu",
    phone: "+8801534567890",
    linkedin: "https://linkedin.com/in/nadia-akter-rpsu",
    avatarSeed: "nadia"
  }
];

export const EXEC_COMMITTEE_2025: Member[] = [
  {
    name: "Kazi Sazzad",
    designation: "President",
    studentId: "CSE-2022-03",
    department: "Computer Science & Engineering",
    bio: "Pioneered the online blood lookup framework. Driven towards creating a unified student support platform.",
    email: "sazzad.cse@rpsu.edu",
    phone: "+8801700000001",
    linkedin: "https://linkedin.com/in/sazzad-cse",
    avatarSeed: "sazzad"
  },
  {
    name: "Fariha Tabassum",
    designation: "Vice President",
    studentId: "PHR-2022-11",
    department: "Department of Pharmacy",
    bio: "Devoted to establishing clean clinical practices and health safety layouts in sub-districts.",
    email: "fariha.phr@rpsu.edu",
    phone: "+8801800000002",
    linkedin: "https://linkedin.com/in/fariha-phr",
    avatarSeed: "fariha"
  },
  {
    name: "Md. Selim",
    designation: "General Secretary",
    studentId: "CSE-1111",
    department: "Computer Science & Engineering",
    bio: "Managed executive logistics, field projects operations, and laid foundations for session 2026.",
    email: "selim.cse@rpsu.edu",
    phone: "+8801712345678",
    linkedin: "#",
    avatarSeed: "selim"
  },
  {
    name: "Monira Islam Mira",
    designation: "Publicity Officer",
    studentId: "ENG-1115",
    department: "Department of English",
    bio: "Curated initial social media templates and established deep connections with corporate welfare foundations.",
    email: "mira.eng@rpsu.edu",
    phone: "+8801412345678",
    linkedin: "#",
    avatarSeed: "mira"
  },
  {
    name: "Rayhan Kabir Rohan",
    designation: "Assistant Treasurer",
    studentId: "BBA-1104",
    department: "Bachelor of Business Administration",
    bio: "Led fundraising programs for winter blanket packaging, accounting with ledger-precise statements.",
    email: "rayhan.bba@rpsu.edu",
    phone: "+8801823456789",
    linkedin: "#",
    avatarSeed: "rayhantr"
  }
];

export const STATISTICS = {
  volunteers: 450,
  bloodDonations: 1120,
  completedProjects: 48,
  fundRaised: 382000 // in BDT
};

export const NOTICES: Notice[] = [
  {
    id: "not-1",
    title: "📢 Annual Blood Donation Camp & Health Checkup 2026",
    date: "May 28, 2026",
    priority: "high",
    type: "notice",
    content: "RPSU Social Welfare Club is hosting its prestigious Annual Blood Camp inside campus building lobby. Free health screenings, blood grouping, and refreshments will be provided for all donors."
  },
  {
    id: "not-2",
    title: "🚨 Urgent Winter Clothing Distribution Planning Meeting",
    date: "Jun 02, 2026",
    priority: "high",
    type: "meeting",
    content: "All executive committee members and general volunteers are requested to join the emergency boardroom session. Agenda: finalizing donation collection zones for the northern cold region relief drive."
  },
  {
    id: "not-3",
    title: "🎓 Phase-1 Tech Bootcamp Kickoff: Web Design for Social Action",
    date: "Jun 10, 2026",
    priority: "normal",
    type: "event",
    content: "The academic wing starts its first 4-week hybrid coding bootcamp. All proceeds are routed directly to the Welfare Club General Fund to purchase primary school supplies for orphanages."
  },
  {
    id: "not-4",
    title: "📝 Routine Monthly Board Meeting: June Agenda",
    date: "Jun 15, 2026",
    priority: "normal",
    type: "meeting",
    content: "Discussion on financial transparency reports, onboarding fresh batch of student volunteers, and evaluating the shop's organic ghee storage expansion project."
  }
];

export const EVENTS: EventGalleryItem[] = [
  {
    id: "ev-1",
    title: "Mass Blood Grouping & Safety Camp",
    date: "March 2026",
    category: "Blood Camp",
    description: "Successfully identified blood groups for 600+ freshers, cataloged 400 new eligible donors in our emergency look-up directory.",
    volunteersCount: 42
  },
  {
    id: "ev-2",
    title: "Sylhet Flood Rehabilitation Relief Drive",
    date: "August 2025",
    category: "Relief Work",
    description: "Distributed life-saving food boxes, dry snacks, and medicine packages to over 850 distressed families in sub-districts.",
    volunteersCount: 28
  },
  {
    id: "ev-3",
    title: "Street Children Winter Warmth Program",
    date: "December 2025",
    category: "Charity",
    description: "Handed out 350+ heavy winter blankets and thermal socks to underprivileged street dwellers around the capital and university areas.",
    volunteersCount: 35
  },
  {
    id: "ev-4",
    title: "Empowering Rural Orphanages via Technology",
    date: "February 2026",
    category: "Charity",
    description: "Installed a mini computer lab with 3 systems and hosted critical basics classes. Co-funded with profits from the Welfare Organic Shop.",
    volunteersCount: 15
  },
  {
    id: "ev-5",
    title: "Free Medical Screening & Primary Care Camp",
    date: "April 2026",
    category: "Health Campaign",
    description: "In collaboration with RPSU Pharmacy Dept, provided free checkups and essential hygiene supplies to 400 neighborhood security workers.",
    volunteersCount: 21
  }
];

export const PRESET_PRODUCTS: Product[] = [
  // 100% Organic Products
  {
    id: "prod-1",
    title: "Pure Sundarbans Wild Honey",
    price: 1200,
    category: "Organic",
    imageUrl: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=400",
    badge: "Pure Organic",
    rating: 4.9,
    description: "100% authentic raw golden honey extracted by local mouwals inside Sundarbans mangrove reserve. Rich in antioxidants and wellness enzymes."
  },
  {
    id: "prod-2",
    title: "Hand-Churned Premium Cow Ghee",
    price: 1800,
    category: "Organic",
    imageUrl: "https://images.unsplash.com/photo-1631515223380-7f2129b8a8ca?auto=format&fit=crop&q=80&w=400",
    badge: "Pure Organic",
    rating: 4.8,
    description: "Traditional wood-fired cow milk ghee, hand-bottled for ultimate safety. Deep rich aroma, perfect for daily immune boosts."
  },
  {
    id: "prod-3",
    title: "First-Pressed Organic Mustard Oil",
    price: 650,
    category: "Organic",
    imageUrl: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=400",
    badge: "Pure Organic",
    rating: 4.7,
    description: "Specially cold-crushed mustard seeds, filtering absolute purity. Unrefined and completely free of chemicals or industrial colors."
  },
  {
    id: "prod-4",
    title: "Organic Kalojira (Black Seed) Oil",
    price: 950,
    category: "Organic",
    imageUrl: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=400",
    badge: "Pure Organic",
    rating: 4.9,
    description: "Pressed from grade-A black seeds, famous globally as the remedy for natural healing. High concentration of volatile oils."
  },
  {
    id: "prod-5",
    title: "Natural Brown Rock Sugar (Mishri)",
    price: 350,
    category: "Organic",
    imageUrl: "https://images.unsplash.com/photo-1581798459219-318e76aecc7b?auto=format&fit=crop&q=80&w=400",
    badge: "Pure Organic",
    rating: 4.6,
    description: "Unbleached and chemical-free whole sugarcane crystals, preserving dynamic mineral properties and standard sweet profile."
  },
  // Academic Services
  {
    id: "prod-6",
    title: "Welfare Full-Stack Tech Bootcamp",
    price: 4900,
    category: "Service",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400",
    badge: "Welfare Service",
    rating: 5.0,
    description: "Complete 4-week interactive bootcamp on React, Node.js & databases, taught by elite CSE seniors. 100% of profit goes to the charity fund."
  },
  {
    id: "prod-7",
    title: "English Speaking & IELTS Bootcamp",
    price: 2500,
    category: "Service",
    imageUrl: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=400",
    badge: "Welfare Service",
    rating: 4.8,
    description: "Structured speaking practice, mock assessments, feedback, and study manuals provided by members of the English Department."
  },
  {
    id: "prod-8",
    title: "UI/UX Design Masterclass UI-UX",
    price: 3000,
    category: "Service",
    imageUrl: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&q=80&w=400",
    badge: "Welfare Service",
    rating: 4.9,
    description: "Master wireframing, typography, color harmony, and Figma handoffs. Hand-guided sessions with real interactive projects."
  },
  {
    id: "prod-9",
    title: "1-on-1 Personalized Programming Tutoring",
    price: 1500,
    category: "Service",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400",
    badge: "Welfare Service",
    rating: 4.7,
    description: "Hour-long custom target lessons in Python, C++, Data Structures, or Algorithms. Ideal for clearing exams with stellar clarity."
  }
];

export const INITIAL_BLOOD_REQUESTS: BloodRequest[] = [
  {
    id: "req-1",
    patientName: "Siddiqur Rahman",
    bloodGroup: "O-",
    hospital: "RPSU Medical Center, Kaliakair",
    units: 2,
    contact: "01728345911",
    reason: "Decompression Surgery recovery support",
    date: "Today, Morning",
    status: "Urgent"
  },
  {
    id: "req-2",
    patientName: "Tasneem Jahan",
    bloodGroup: "A+",
    hospital: "Enam Medical College & Hospital, Savar",
    units: 1,
    contact: "01827409212",
    reason: "Thalassemia monthly transfusion protocol",
    date: "Tomorrow, 10:00 AM",
    status: "In Progress"
  },
  {
    id: "req-3",
    patientName: "Master Nabil (Age 8)",
    bloodGroup: "B-",
    hospital: "National Heart Foundation, Dhaka",
    units: 3,
    contact: "01511482033",
    reason: "Urgent pediatric bypass surgery guidance",
    date: "In 2 days",
    status: "Urgent"
  },
  {
    id: "req-4",
    patientName: "Rahima Khatun",
    bloodGroup: "AB+",
    hospital: "Apollo Hospital, Uttara Line",
    units: 1,
    contact: "01923055981",
    reason: "Safely managed routine delivery operations",
    date: "3 days ago",
    status: "Fulfilled"
  }
];
