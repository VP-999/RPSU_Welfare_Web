export interface Member {
  name: string;
  designation: string;
  studentId: string;
  department: string;
  bio: string;
  email: string;
  phone: string;
  linkedin: string;
  avatarSeed: string; // for high quality UI generation or clean layouts
}

export interface Notice {
  id: string;
  title: string;
  date: string;
  priority: 'high' | 'normal';
  type: 'notice' | 'event' | 'meeting';
  content: string;
}

export interface EventGalleryItem {
  id: string;
  title: string;
  date: string;
  category: 'Blood Camp' | 'Relief Work' | 'Charity' | 'Health Campaign';
  description: string;
  volunteersCount: number;
}

export interface Product {
  id: string;
  title: string;
  price: number;
  category: 'Organic' | 'Service';
  imageUrl: string;
  badge: string;
  rating: number;
  description: string;
}

export interface BloodRequest {
  id: string;
  patientName: string;
  bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  hospital: string;
  units: number;
  contact: string;
  reason: string;
  date: string;
  status: 'Urgent' | 'Fulfilled' | 'In Progress';
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface VendorProduct {
  id: string;
  title: string;
  price: number;
  category: 'Organic' | 'Service';
  dateAdded: string;
  status: 'Approved' | 'Pending' | 'Rejected';
  salesCount: number;
  revenue: number;
}
