import img from "@/assets/sections/emergency.jpg";

export const socialProjects = [
  {
    id: 1,
    slug: "saglam-gelecek-kampaniyasi",
    name: "Sağlam Gələcək Kampaniyası",
     content:
       "Aztəminatlı ailələr üçün pulsuz tibbi müayinələr və maarifləndirmə görüşləri təşkil edirik. Layihənin məqsədi preventiv sağlamlıq vərdişlərini gücləndirmək və erkən diaqnostikanı əlçatan etməkdir.",
     image: img,
     createdAt: "2024-11-12",
   },
   {
     id: 2,
     slug: "urekten-yardim-marafonu",
     name: "Ürəkdən Yardım Marafonu",
     content:
       "Uşaq kardiologiyası üçün ianə toplama və maarifləndirici seminarlar keçirdiyimiz sosial layihədir. Könüllülər və həkimlər birgə ictimaiyyətə sağlam ürək üçün vacib addımları çatdırırlar.",
     image: img,
     createdAt: "2025-02-18",
   },
 ];

 export function getProjectBySlug(slug) {
   return socialProjects.find((p) => p.slug === slug);
 }
