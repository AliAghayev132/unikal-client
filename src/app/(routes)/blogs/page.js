import Image from "next/image";
import bestServiceImg from "@/assets/sections/bestservice.jpg";
import ourMissionImg from "@/assets/sections/ourmission.jpg";
import heroImg from "@/assets/unikal_esas.jpg";
import Grid from "./components/Grid";
import ContactNow from "../about/components/ContactNow";
import { TextAnimation } from "@/components/ui/Animations";

const posts = [
  {
    id: 1,
    title: "Autoimmün Xəstəlikləri Anlamaq və İdarə Etmək",
    excerpt:
      "Autoimmün xəstəliklərin səbəbləri, əlamətləri və müalicə yolları haqqında məlumat əldə edin.",
    date: "Dek 22, 2024",
    image: heroImg,
  },
  {
    id: 2,
    title: "Baş Ağrılarının Müxtəlif Növləri və Səbəbləri",
    excerpt:
      "Migren, gərginlik və digər baş ağrısı növləri haqqında qısa bələdçi.",
    date: "Dek 22, 2023",
    image: ourMissionImg,
  },
  {
    id: 3,
    title: "Yoqa və Sağlamlıq: Fitnes Rutininizə Faydaları",
    excerpt:
      "Stressin azaldılması, elastikliyin artırılması və ümumi rifah üçün yoqanın üstünlükləri.",
    date: "Dek 22, 2023",
    image: bestServiceImg,
  },
  {
    id: 4,
    title: "Sümük Sağlamlığı: Kalsium və D Vitamini Rolu",
    excerpt:
      "Sümüklərin möhkəmliyi üçün düzgün qidalanma və həyat tərzi tövsiyələri.",
    date: "Dek 10, 2023",
    image: ourMissionImg,
  },
  {
    id: 5,
    title: "Laborator Diaqnostika: Analizlərə Necə Hazırlaşmalı",
    excerpt:
      "Daha dəqiq nəticələr üçün qan, sidik və digər analizlər öncəsi qaydalar.",
    date: "Noy 29, 2023",
    image: bestServiceImg,
  },
  {
    id: 6,
    title: "Klinikamızda Yeniliklər və Xəbərlər",
    excerpt: "Yeni avadanlıqlar, xidmətlər və aksiya xəbərlərini izləyin.",
    date: "Noy 12, 2023",
    image: heroImg,
  },
];

export const metadata = {
    title: "Xəbərlər",
    description: "Xəbərlər",
    keywords: ["Xəbərlər"]
  };

function Blogs() {
  return (
    <main className="w-full">
      {/* Header */}
      <section className="wrapper py-10 md:py-14 lg:py-16">
        <div className="text-center max-w-3xl mx-auto">
          <span className="block text-xs md:text-sm font-semibold tracking-wider text-neutral-500 uppercase mb-2">
            Bloqlarımız
          </span>
          <TextAnimation>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Son Xəbərlər və Yeniliklər
          </h1>
          </TextAnimation>
          <TextAnimation delay={0.2}>
          <p className="text-neutral-600 md:text-lg">
            Sağlamlıqla bağlı faydalı məqalələr, klinikamızdan xəbərlər və ən
            son yeniliklər — hamısı burada sizi gözləyir.
          </p>
          </TextAnimation>
        </div>
      </section>

      {/* Grid */}
      <Grid posts={posts} />
      <ContactNow/>
    </main>
  );
}

export default Blogs;
