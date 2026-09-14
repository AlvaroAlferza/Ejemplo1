export type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  unit: string;
  image: string;
};

export const products: Product[] = [
  {
    id: "huevos",
    name: "Huevos frescos",
    category: "Productos frescos",
    description:
      "Huevos seleccionados para el consumo diario, preparados con cuidado desde nuestra granja.",
    unit: "Bandejas",
    image: "/images/pavo1.jpg",
  },

  {
    id: "cuyes",
    name: "Cuyes",
    category: "Granja",
    description:
      "Cuyes criados con dedicación y una alimentación cuidada.",
    unit: "Unidades",
    image: "/images/cuy1.jpg",
  },

  {
    id: "gallinas",
    name: "Gallinas",
    category: "Granja",
    description:
      "Gallinas de nuestra granja disponibles según temporada y disponibilidad.",
    unit: "Unidades",
    image: "/images/pollo1.jpg",
  },
];