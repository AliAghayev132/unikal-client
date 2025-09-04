import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

const ServiceCard = ({ service }) => {
  return (
    <motion.article
      variants={itemVariants}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md "
    >
      <Link href={`/services/${service.slug}`} className="flex flex-col items-start gap-4 h-full">
        <div className="shrink-0 rounded-2xl">
          <div className="relative h-20 w-20 overflow-hidden rounded-xl">
            <Image src={service.icon} alt={service.title} fill className="object-cover" />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
          <p className="mt-2 text-slate-600 leading-relaxed">{service.description}</p>
        </div>
                <button className="group mt-auto relative inline-flex items-center gap-2 text-primary font-medium text-sm px-3 py-2 rounded-lg focus:outline-none">
                  Ətraflı
                  <span
                    //  style={{willChange: "transform"}}
                    className="inline-block group-hover:pl-2 transition-all duration-300"
                  >
                    <ArrowRight size={16} />
                  </span>
                  {/* underline animasiyası */}
                  <span className="absolute left-0 -bottom-0.5 w-0 group-hover:w-full h-0.5 bg-primary transition-all duration-300 ease-out rounded" />
                </button>
      </Link>
    </motion.article>
  );
};

export default ServiceCard;
