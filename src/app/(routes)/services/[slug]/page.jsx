import Image from "next/image";
import Link from "next/link";
import { TextAnimation } from "@/components/ui/Animations";
import Button from "@/components/ui/Button";
import { getServiceBySlug } from "@/data/services";
import { getDoctorsByService } from "@/data/doctors";

export default function ServiceDetail({ params }) {
  const { slug } = params;
  const service = getServiceBySlug(slug);

  if (!service) {
    // Defer to global not-found page
    return (
      <section className="wrapper py-16">
        <h1 className="text-2xl font-semibold">Xidmət tapılmadı</h1>
        <Link href="/services" className="text-primary mt-4 inline-block">
          Xidmətlərə qayıt
        </Link>
      </section>
    );
  }

  const relatedDoctors = getDoctorsByService(slug);

  return (
    <main className="w-full min-h-screen">
      <section className="wrapper py-10 md:py-14 lg:py-16">
        <div className="max-w-3xl">
          <TextAnimation>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
          </TextAnimation>
          <p className="text-neutral-600 md:text-lg">{service.description}</p>
          <div className="mt-6 flex gap-4">
            <Button isLink href="/contact" variant="default" text="Qəbula yazıl" />
            <Button isLink href="/services" variant="outline" text="Bütün xidmətlər" />
          </div>
        </div>
      </section>

      <section className="wrapper pb-16 md:pb-20">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Bu xidmət üzrə həkimlər</h2>
        {relatedDoctors.length === 0 ? (
          <p className="text-neutral-600">Hazırda bu xidmət üzrə həkim məlumatı əlavə edilməyib.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedDoctors.map((doc) => (
              <article key={doc.id} className="rounded-2xl border border-neutral-200 p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 rounded-xl overflow-hidden">
                    <Image src={doc.image} alt={doc.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{doc.name}</h3>
                    <p className="text-sm text-neutral-600">{doc.title}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
