import type { LucideIcon } from "lucide-react";
import {
  BatteryCharging,
  Car,
  ChefHat,
  Compass,
  Database,
  GraduationCap,
  Landmark,
  Palette,
  ShoppingBag,
  Users,
} from "lucide-react";

export const NAV_LINKS = [
  { label: "Bosh sahifa", href: "#home" },
  { label: "Biz haqimizda", href: "#about" },
  { label: "Yo'nalishlar", href: "#programs" },
  { label: "Pearson", href: "#pearson" },
  { label: "Galereya", href: "#gallery" },
  { label: "Rahbariyat", href: "#leadership" },
  { label: "Bog'lanish", href: "#contact" },
] as const;

export const CONTACT = {
  address: "Toshkent shahar, Yangihayot tumani, Qanora ko'chasi 44-uy",
  phoneLabel: "+998 71 258 46 22",
  phoneHref: "tel:+998712584622",
  telegramUrl: "https://t.me/tistinfouz",
  telegramLabel: "t.me/tistinfouz",
  instagramUrl:
    "https://www.instagram.com/iqtisodiyot_va_soliq_texnikum",
  instagramLabel: "@iqtisodiyot_va_soliq_texnikum",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Qanora%20ko%27chasi%2044%2C%20Yangihayot%20tumani%2C%20Toshkent",
} as const;

export const STATS = [
  { value: "1100+", label: "O'quvchilar", icon: Users },
  { value: "50+", label: "O'qituvchilar", icon: GraduationCap },
  { value: "8", label: "Ta'lim yo'nalishlari", icon: Compass },
] as const;

export type Program = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const PROGRAMS: Program[] = [
  {
    title: "Bank nazoratchisi",
    description: "Moliyaviy sohada kasbiy ko'nikmalarni shakllantiruvchi yo'nalish.",
    icon: Landmark,
  },
  {
    title: "Grafik va dizayn texnologiyasi",
    description: "Dizayn va vizual mahsulotlarni yaratish asoslari.",
    icon: Palette,
  },
  {
    title: "Avtomobillar servisi",
    description: "Avtomobillarga texnik xizmat ko'rsatish ko'nikmalari.",
    icon: Car,
  },
  {
    title: "Elektrobuslar, elektromobillar va elektroskutterlar servisi",
    description: "Zamonaviy elektr texnikaga xizmat ko'rsatish yo'nalishi.",
    icon: BatteryCharging,
  },
  {
    title: "Sotuvchi-kassir",
    description: "Savdo sohasida xizmat ko'rsatish va hisob-kitob ko'nikmalari.",
    icon: ShoppingBag,
  },
  {
    title: "Raqamli axborotlarni qayta ishlash",
    description: "Raqamli ma'lumotlarni qayta ishlash va tizimlashtirish.",
    icon: Database,
  },
  {
    title: "Oshpaz",
    description: "Oshpazlik san'ati va ovqat tayyorlash mahorati.",
    icon: ChefHat,
  },
];