import icon1 from '@/assets/sections/icons/icon1.jpg'
import icon2 from '@/assets/sections/icons/icon2.jpg'
import ServicesGrid from './components/ServicesGrid'
import ContactNow from '../about/components/ContactNow';
import FAQ from '../(home)/components/FAQ';

export const metadata = {
    title: "Xidmətlər",
    description: "Xidmətlər",
    keywords: ["Xidmətlər"]
  };

const services = [
  { id: 1, title: 'Ümumi Müayinə', description: 'Gündəlik sağlamlığınız üçün profilaktik və ümumi tibbi xidmətlər.', icon: icon1 },
  { id: 2, title: 'Uşaq Həkimliyi', description: 'Körpələr və uşaqlar üçün peşəkar pediatrik xidmətlər.', icon: icon2 },
  { id: 3, title: 'Nevrologiya', description: 'Sinir sistemi xəstəliklərinin diaqnostikası və müalicəsi.', icon: icon1 },
  { id: 4, title: 'Ortopediya', description: 'Sümük-oynaq sistemi xəstəliklərinin müasir müalicəsi.', icon: icon2 },
  { id: 5, title: 'Gastroenterologiya', description: 'Həzm sistemi xəstəliklərinin effektli müalicəsi.', icon: icon1 },
  { id: 6, title: 'Kardiologiya', description: 'Ürək-damar xəstəliklərinin diaqnostikası və nəzarəti.', icon: icon2 },
]

function Services() {
  return (
    <main className="w-full">
      {/* Header */}
      <section className="wrapper py-10 md:py-14 lg:py-16">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
          Ailəniz üçün hərtərəfli tibbi xidmətlər
        </h1>
      </section>

      {/* Services grid */}
      <section className="wrapper pb-16 md:pb-20">
        <ServicesGrid services={services} />
      </section>
      <ContactNow/>
      <FAQ/>
    </main>
  );
}

export default Services