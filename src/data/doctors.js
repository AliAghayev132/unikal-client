import doctorImage from "@/assets/doctors/doctor.png";

export const doctors = [
  {
    id: 1,
    name: "Dr. Elvin Məmmədov",
    desc: "12 illik təcrübəyə malik kardioloq. Ürək-damar xəstəliklərinin profilaktikası, diaqnostikası və müasir müalicə metodlarında ixtisaslaşıb.",
    serviceSlug: "kardiologiya",
    title: "Kardioloq",
    image: doctorImage,
    shift: "morning",
    socialLinks: {
      linkedIn: '',
      website: '',
      instagram: '',
      tiktok: '',
    },
    education: [
      "Azərbaycan Tibb Universiteti — Müalicə işi (2006–2012)",
      "Kardiologiya üzrə rezidentura — Mərkəzi Klinika (2012–2016)",
    ],
    certificates: [
      "EKQ interpretasiyası üzrə təlim (ESC)",
      "Ekokardioqrafiya praktik kursu",
    ],
  },
  {
    id: 2,
    name: "Dr. Nigar Həsənli",
    desc: "Nevroloji xəstəliklərin erkən aşkarlanması və müalicəsində müasir yanaşmalardan istifadə edən 7 illik təcrübəli nevroloq.",
    serviceSlug: "nevrologiya",
    title: "Nevroloq",
    image: doctorImage,
    shift: "afternoon",
    socialLinks: {
      tiktok: '',
      website: '',
      instagram: '',
    },
    education: [
      "Azərbaycan Tibb Universiteti — Müalicə işi (2008–2014)",
      "Nevrologiya üzrə rezidentura — Respublika Neyrocərrahiyyə Mərkəzi (2014–2018)",
    ],
    certificates: [
      "EEG və EMG diaqnostikası üzrə kurs",
      "Miqrenin müasir müalicə metodları",
    ],
  },
  {
    id: 3,
    name: "Dr. Orxan Əliyev",
    desc: "Ortopedik problemlərin diaqnostika və müalicəsində geniş təcrübəyə malikdir. Əsasən sümük və oynaq xəstəlikləri üzrə fəaliyyət göstərir.",
    serviceSlug: "ortopediya",
    title: "Ortoped",
    image: doctorImage,
    shift: "evening",
    socialLinks: {
      tiktok: '',
      website: '',
      instagram: '',
    },
    education: [
      "ATU — Müalicə işi (2007–2013)",
      "Ortopediya və travmatologiya üzrə rezidentura (2013–2017)",
    ],
    certificates: [
      "Artroskopiya üzrə təkmilləşdirmə kursu",
      "Ortopedik reabilitasiya seminarı",
    ],
  },
  {
    id: 4,
    name: "Dr. Aysel Rzayeva",
    desc: "Uşaq sağlamlığının qorunması və inkişafı üzrə ixtisaslaşmış pediatr. Valideynlər üçün faydalı tövsiyələr və fərdi yanaşma təqdim edir.",
    serviceSlug: "usaq-hekimliyi",
    title: "Pediatr",
    image: doctorImage,
    shift: "morning",
    socialLinks: {
      tiktok: '',
      website: '',
      instagram: '',
    },
    education: [
      "ATU — Pediatriya fakültəsi (2009–2015)",
      "Pediatriya üzrə rezidentura — Uşaq Kliniki Xəstəxanası (2015–2019)",
    ],
    certificates: [
      "Uşaq immunizasiyası üzrə ixtisasartırma",
      "Neonatal reanimasiya və ilkin yardım kursu",
    ],
  },
  {
    id: 5,
    name: "Dr. Cavid Qasımov",
    desc: "15 illik təcrübəyə malik terapevt. Ümumi müayinələr, xroniki xəstəliklərin nəzarəti və profilaktik sağlamlıq müayinələri üzrə mütəxəssisdir.",
    serviceSlug: "umumi-muayine",
    title: "Terapevt",
    image: doctorImage,
    shift: "afternoon",
    socialLinks: {
      tiktok: '',
      website: ''
    },
    education: [
      "ATU — Müalicə işi (2003–2009)",
      "Daxili xəstəliklər üzrə rezidentura (2009–2013)",
    ],
    certificates: [
      "Diabetin idarə olunması üzrə kurs",
      "Hipertoniya müalicəsində yeni yanaşmalar",
    ],
  },
  {
    id: 6,
    name: "Dr. Ləman Quliyeva",
    desc: "Həzm sistemi xəstəliklərinin müalicəsi üzrə ixtisaslaşıb. Pasiyentlərə fərdi müalicə planı hazırlayaraq effektiv nəticələr əldə edir.",
    serviceSlug: "gastroenterologiya",
    title: "Gastroenteroloq",
    image: doctorImage,
    shift: "evening",
    socialLinks: {
      tiktok: '',
      website: '',
    },
    education: [
      "ATU — Müalicə işi (2009–2015)",
      "Gastroenterologiya üzrə rezidentura (2015–2019)",
    ],
    certificates: [
      "Endoskopiya üzrə praktik təlim",
      "Qastroezofagial refluks müalicəsi seminarı",
    ],
  },
];


export const availableShifts = [
  { value: "", label: "Hamısı" },
  { value: "morning", label: "Səhər (09:00 – 13:00)" },
  { value: "afternoon", label: "Günorta (13:00 – 18:00)" },
  { value: "evening", label: "Axşam (18:00 – 22:00)" },
];

export function getDoctorsByService(slug) {
  return doctors.filter((d) => d.serviceSlug === slug);
}

export function getDoctorById(id) {
  const numeric = Number(id);
  return doctors.find((d) => d.id === numeric);
}
