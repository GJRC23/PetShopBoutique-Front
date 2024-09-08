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
      imagen: '/images/balanced-cordero.png',
      destacado: true,
    },{
      id: 6,
      nombre: 'Alimento Premium',
      imagen: '/images/CatChow.jpg',
      destacado: true,
    }
  ];

  res.status(200).json(productos);
}
