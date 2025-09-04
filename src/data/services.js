import icon1 from "@/assets/sections/icons/icon1.jpg";
import icon2 from "@/assets/sections/icons/icon2.jpg";

export const services = [
  { id: 1, slug: "umumi-muayine", title: "Ümumi Müayinə", description: "Gündəlik sağlamlığınız üçün profilaktik və ümumi tibbi xidmətlər.", icon: icon1 },
  { id: 2, slug: "usaq-hekimliyi", title: "Uşaq Həkimliyi", description: "Körpələr və uşaqlar üçün peşəkar pediatrik xidmətlər.", icon: icon2 },
  { id: 3, slug: "nevrologiya", title: "Nevrologiya", description: "Sinir sistemi xəstəliklərinin diaqnostikası və müalicəsi.", icon: icon1 },
  { id: 4, slug: "ortopediya", title: "Ortopediya", description: "Sümük-oynaq sistemi xəstəliklərinin müasir müalicəsi.", icon: icon2 },
  { id: 5, slug: "gastroenterologiya", title: "Gastroenterologiya", description: "Həzm sistemi xəstəliklərinin effektli müalicəsi.", icon: icon1 },
  { id: 6, slug: "kardiologiya", title: "Kardiologiya", description: "Ürək-damar xəstəliklərinin diaqnostikası və nəzarəti.", icon: icon2 },
  { id: 7, slug: "dermatologiya", title: "Dermatologiya", description: "Korpus sistemi xəstəliklərinin diaqnostikası və müalicəsi.", icon: icon1 },
  { id: 8, slug: "oftalmologiya", title: "Oftalmologiya", description: "Göz xəstəliklərinin diaqnostikası və müalicəsi.", icon: icon2 },
  { id: 9, slug: "ginekologiya", title: "Ginekologiya", description: "Qadın sağlamlığı və reproduktiv sistemin müalicəsi.", icon: icon1 },
];


export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug);
}
