// import hero slider images
import HeroSlideImage1 from './assets/img/logo1.jpg';
import HeroSlideImage2 from './assets/img/foto/salon.png';
import HeroSlideImage3 from './assets/img/foto/sitting.png';
// import dog category images


// import social icons
import { AiFillInstagram } from 'react-icons/ai';

export const navigation = [
  {
    name: 'Beranda',
    href: '#',
  },
  {
    name: 'Harga',
    href: '#',
  },
  {
    name: 'Kontak Kami',
    href: '#',
  },
  {
    name: 'Pesan',
    href: '#',
  },
];

export const heroSlider = [
  {
    id: 1,
    title: 'PET SHOP',
    image: <HeroSlideImage1 />,
    subtitle:
      'Kami Menjual Aneka produk makanan untuk hewan peliharaan kesayangan anda',
    buttonText: 'HUBUNGI KAMI',
  },
  {
    id: 2,
    title: 'PET CARE.',
    image: <HeroSlideImage2 />,
    subtitle:
      'Kami akan merawat hewan anda agar terlihat bersih',
    buttonText: 'HUBUNGI KAMI',
  },
  {
    id: 3,
    title: 'PET SITTING',
    image: <HeroSlideImage3 />,
    subtitle:
      'Kami senantiasa menjaga dan merawat hewan peliharaan anda saat anda keluar kota atau tidak dapat merawatnya sementara.',
    buttonText: 'HUBUNGI KAMI',
  },
];

export const bundleData = [
  {
    id: 1,
    image: "<kat1 />",
    name: 'Kecil',
    dogCategory: '',
    services: [
      {
        name: 'Bersih',
        price: 40000,
        list: ['Mandi', 'Pembersihan Kuping', 'Pemotongan KUKU', 'Parfum'],
      },
      
    ],
  },
  {
    id: 2,
    name: 'Sedang',
    image: "<kat2 />",
    dogCategory: '',
    services: [
      {
        name: 'Bersih',
        price: 45000,
        list: ['Mandi', 'Pembersihan Kuping', 'Pemotongan KUKU', 'Parfum'],
      },
      
    ],
  },
  {
    id: 3,
    name: 'Besar',
    image: "<kat3 />",
    dogCategory: '',
    services: [
      {
        name: 'Bersih',
        price: 50000,
        list: ['Mandi', 'Pembersihan Kuping', 'Pemotongan KUKU', 'Parfum'],
      },
      
    ],
  },
  

];

export const social = [
  
  {
    icon: <AiFillInstagram />,
    href: '#',
  },
 
];
