import { CircuitBoard, Cog, Cpu, Wrench } from "lucide-react";

export const business = {
  phone: "+52 81 1234 5678",
  tel: "tel:+528112345678",
  whatsapp: "https://wa.me/528112345678",
  email: "contacto@tecnoindustrialmty.mx",
  states: ["Nuevo León", "Coahuila", "Tamaulipas", "San Luis Potosí"],
  experienceYears: 15,
  emergencyHours: 4,
};
export const links = [
  ["Servicios", "servicios"],
  ["Nosotros", "nosotros"],
  ["Proceso", "proceso"],
  ["FAQ", "faq"],
  ["Contacto", "contacto"],
] as const;
export const services = [
  {
    icon: Cog,
    title: "Mantenimiento a centros de maquinado CNC",
    label: "01 / CNC Y PRECISIÓN",
    items: [
      "Preventivo y correctivo",
      "Diagnóstico de servo-sistemas y husillos",
      "Calibración de precisión",
      "Cambio de componentes",
    ],
  },
  {
    icon: CircuitBoard,
    title: "Electricidad y electrónica industrial",
    label: "02 / ELECTRICIDAD Y ELECTRÓNICA",
    items: [
      "Reparación de tarjetas electrónicas",
      "Variadores y fuentes de poder",
      "Instalaciones eléctricas industriales",
      "Diagnóstico a nivel componente",
    ],
  },
  {
    icon: Cpu,
    title: "Programación y automatización PLC",
    label: "03 / CONTROL Y AUTOMATIZACIÓN",
    items: [
      "Programación Allen Bradley y Siemens",
      "HMI y variadores de frecuencia",
      "Retrofit de controles obsoletos",
      "Integración de sensores y actuadores",
    ],
  },
  {
    icon: Wrench,
    title: "Mantenimiento integral y emergencias",
    label: "04 / CONTINUIDAD OPERATIVA",
    items: [
      "Planes de mantenimiento preventivo",
      "Atención de paros urgentes",
      "Diagnóstico en planta",
      "Reporte técnico de servicio",
    ],
  },
];
