export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: string;
  category: MenuCategory;
  isVegetarian?: boolean;
  isJainAvailable?: boolean;
}

export enum MenuCategory {
  SOUTH_INDIAN = 'South Indian',
  DOSA = 'Dosa',
  SPL_DOSA = 'Spl Dosa',
  UTTAPPA = 'Uttappa',
  MUMBAI_SPECIAL = 'Mumbai Special',
  HOT_BEVERAGE = 'Hot Beverage',
  PAV_BHAJI = 'Pav Bhaji',
  CHINESE_SOUP = 'Chinese Soup',
  KOFTA = 'Kofta',
  INDIAN_MAIN_COURSE = 'Indian Main Course',
  TANDOORI_STARTERS = 'Tandoori Starters',
  CHINESE_RICE_NOODLES = 'Chinese Rice / Noodles',
  KHANE_KE_SATHI = 'Khane Ke Sathi',
  RICE_BIRYANI = 'Rice And Biryani',
  FRESH_JUICES = 'Fresh Juices',
  MILK_SHAKE = 'Milk Shake',
  TAWA_RICE = 'Tawa Rice',
  DAL = 'Dal',
  COLD_BEVERAGES = 'Cold & Beverages',
  RAITA = 'Raita',
  PAPAD = 'Papad',
  SALAD = 'Salad',
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
}