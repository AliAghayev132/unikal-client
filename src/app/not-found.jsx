import Link from "next/link";
import { TextAnimation } from "@/components/ui/Animations";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="wrapper min-h-[70vh] flex items-center">
      <div className="w-full text-center max-w-3xl mx-auto">
        <span className="block md:text-lg font-semibold tracking-wider text-neutral-500 uppercase mb-3">
          404
        </span>
        <TextAnimation>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Səhifə <span className="text-primary">tapılmadı</span>
          </h1>
        </TextAnimation>
        <TextAnimation delay={0.15}>
          <p className="text-neutral-600 md:text-lg mb-8">
            Axtardığınız səhifə mövcud deyil və ya keçid dəyişdirilib. Zəhmət olmasa ana səhifəyə qayıdın və ya bizimlə əlaqə saxlayın.
          </p>
        </TextAnimation>
        <div className="flex items-center justify-center gap-4">
          <Button isLink href="/" variant="default" text="Ana Səhifə" />
          <Button isLink href="/contact" variant="outline" text="Əlaqə" />
        </div>
      </div>
    </section>
  );
}
