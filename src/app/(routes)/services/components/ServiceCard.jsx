import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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
      <Link href={`/services/${service.slug}`} className="flex flex-col items-start gap-4">
        <div className="shrink-0 rounded-2xl">
          <div className="relative h-20 w-20 overflow-hidden rounded-xl">
            <Image src={service.icon} alt={service.title} fill className="object-cover" />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
          <p className="mt-2 text-slate-600 leading-relaxed">{service.description}</p>
          <span className="mt-6 inline-flex items-center gap-2 text-primary text-sm font-medium">
            Daha ətraflı ↗
          </span>
        </div>
      </Link>
    </motion.article>
  );
};

export default ServiceCard;
