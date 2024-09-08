export default function handler(req, res) {
  const productos = [
    {
      id: 1,
      nombre: 'Alimento Premium',
      imagen: '/images/Vitalcan Balanced Adulto.jpeg',
      destacado: true,
    },
    {
      id: 2,
      nombre: 'Alimento Balanceado',
      imagen: '/images/PRO PLAN ADULT DOG RAZA MEDIANA.png',
      destacado: true,
    },
    {
      id: 3,
      nombre: 'Accesorios Variados',
      imagen: '/images/DOGUI ADULTOS.png',
      destacado: true,
    },
    {
      id: 4,
      nombre: 'Accesorios Variados',
      imagen: '/images/Therapy Canine Mobility Aid.jpeg',
      destacado: true,
    },
    {
      id: 5,
      nombre: 'Accesorios Variados',
      imagen: '/images/CAT CHOW ADULTOS SABOR PESCADO Y POLLO.jpeg',
    },{
      id: 6,
      nombre: 'Alimento Premium',
      imagen: '/images/Vitalcan Balanced Adulto.jpeg',
      destacado: true,
    },
    {
      id: 7,
      nombre: 'Alimento Balanceado',
      imagen: '/images/PRO PLAN ADULT DOG RAZA MEDIANA.png',
      destacado: true,
    },
    {
      id: 8,
      nombre: 'Accesorios Variados',
      imagen: '/images/DOGUI ADULTOS.png',
      destacado: true,
    }
  ];

  res.status(200).json(productos);
}
