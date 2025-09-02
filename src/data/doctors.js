import doctorImage from "@/assets/doctors/doctor.png";

export const doctors = [
  { id: 1, name: "Dr. Elvin Məmmədov", serviceSlug: "kardiologiya", title: "Kardioloq", image: doctorImage },
  { id: 2, name: "Dr. Nigar Həsənli", serviceSlug: "nevrologiya", title: "Nevroloq", image: doctorImage },
  { id: 3, name: "Dr. Orxan Əliyev", serviceSlug: "ortopediya", title: "Ortoped", image: doctorImage },
  { id: 4, name: "Dr. Aysel Rzayeva", serviceSlug: "usaq-hekimliyi", title: "Pediatr", image: doctorImage },
  { id: 5, name: "Dr. Cavid Qasımov", serviceSlug: "umumi-muayine", title: "Terapevt", image: doctorImage },
  { id: 6, name: "Dr. Ləman Quliyeva", serviceSlug: "gastroenterologiya", title: "Gastroenteroloq", image: doctorImage },
];

export function getDoctorsByService(slug) {
  return doctors.filter((d) => d.serviceSlug === slug);
}
