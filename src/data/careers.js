export const careers = [
  {
    id: 1,
    slug: "qebul-emekdasi",
    title: "Qəbul şöbəsi əməkdaşı",
    location: "Sumqayıt, Niyazi küçəsi 121",
    type: "Tam ştat",
    description:
      "Klinikamızın qəbul şöbəsində pasiyentlərin qarşılanması, qeydiyyatı və yönləndirilməsi proseslərinə cavabdeh əməkdaş axtarılır.",
    requirements: [
      "Ali təhsil (arzuolunandır)",
      "Azərbaycan və rus dillərində sərbəst danışıq",
      "MS Office bilikləri",
      "Yüksək ünsiyyət bacarığı",
    ],
    benefits: [
      "Rəqabətədavamlı əməkhaqqı",
      "Yumşaq adaptasiya və təlimlər",
      "Dost və dəstəkçi komanda",
    ],
  },
  {
    id: 2,
    slug: "tibbi-qeydiyyatci",
    title: "Tibbi qeydiyyatçı",
    location: "Sumqayıt, Niyazi küçəsi 121",
    type: "Növbəli iş qrafiki",
    description:
      "Pasiyent məlumatlarının elektron sistemə daxil edilməsi və onların qəbul prosesinin idarə edilməsi.",
    requirements: [
      "Orta ixtisas və ya ali təhsil",
      "Dəqiqlik və məsuliyyətlilik",
      "Elektron informasiya sistemləri ilə işləmə bacarığı",
    ],
    benefits: [
      "Rəsmi əmək müqaviləsi",
      "Karyera inkişaf imkanları",
      "Bonus sistemləri",
    ],
  },
  {
    id: 3,
    slug: "temizlik-emekdasi",
    title: "Təmizlik xidmətləri əməkdaşı",
    location: "Sumqayıt, Niyazi küçəsi 121",
    type: "Tam ştat",
    description:
      "Klinika daxilində təmizlik və səliqə-sahman işlərinin təşkil olunması.",
    requirements: [
      "Məsuliyyətli və çalışqan",
      "Gigiyena qaydalarını bilmək",
      "Komanda ilə işləmə bacarığı",
    ],
    benefits: [
      "Stabil əməkhaqqı",
      "Sosial paket",
      "Növbəli qrafik",
    ],
  },
];

export function getCareerBySlug(slug) {
  return careers.find((c) => c.slug === slug);
}
