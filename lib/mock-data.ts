export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  stockLevel?: number;
  rating?: number;
  reviewCount?: number;
  slug: string;
  category: string;
  images: Array<{
    asset: {
      url: string;
      altText?: string;
    };
  }>;
}
export const mockPunjabiSuits: Product[] =[
  {
    id: "37246955",
    title: "Women Purple Embroidered Kurta Sets With Dupatta",
    description: "Elegant purple embroidered kurta set with dupatta. Perfect for festive occasions and family gatherings. Made with premium quality fabric for all-day comfort.",
    price: 1319,
    originalPrice: 4399,
    stockLevel: 15,
    rating: 4.2,
    reviewCount: 124,
    slug: "sangria-women-purple-embroidered-kurta-sets-with-dupatta",
    category: "Lady Suits",
    images: [
      {
        asset: {
          url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/SEPTEMBER/29/lCgz3pgG_df6695a8cec74c9dbc40c5d278909801.jpg",
          altText: "Sangria Women Purple Embroidered Kurta Sets With Dupatta"
        }
      }
    ]
  },
  {
    id: "37246977",
    title: "Women Black Embroidered Kurta Sets With Dupatta",
    description: "Stylish black embroidered kurta set with matching dupatta. Ideal for evening parties and festive celebrations.",
    price: 1371,
    originalPrice: 4899,
    stockLevel: 8,
    rating: 3.6,
    reviewCount: 10,
    slug: "sangria-women-black-embroidered-kurta-sets-with-dupatta",
    category: "Lady Suits",
    images: [
      {
        asset: {
          url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/SEPTEMBER/29/3DUD8bS8_c92dc35ab1074348b8128610f4d1c365.jpg",
          altText: "Sangria Women Black Embroidered Kurta Sets With Dupatta"
        }
      }
    ]
  },
  {
    id: "40104294",
    title: "Women Ethnic Motifs Embroidered Velvet Kurta with Patiala & Dupatta",
    description: "Luxurious velvet kurta set with ethnic motifs embroidery, paired with Patiala salwar and dupatta. Perfect for weddings and grand celebrations.",
    price: 1865,
    originalPrice: 3999,
    stockLevel: 5,
    rating: 4.4,
    reviewCount: 17,
    slug: "kriska-women-ethnic-motifs-embroidered-velvet-kurta-with-patiala-dupatta",
    category: "Lady Suits",
    images: [
      {
        asset: {
          url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2026/FEBRUARY/17/wYcjBeoR_3d4b8da994ac44eaaf906b9af14bd7c7.jpg",
          altText: "KRISKA Women Ethnic Motifs Embroidered Velvet Kurta with Patiala & Dupatta"
        }
      }
    ]
  },
  {
    id: "37246970",
    title: "Women Yellow Self Design Kurta Sets With Dupatta",
    description: "Beautiful yellow self-design kurta set with dupatta. Lightweight and comfortable for daily wear and casual outings.",
    price: 1518,
    originalPrice: 4899,
    stockLevel: 12,
    rating: 3.4,
    reviewCount: 11,
    slug: "sangria-women-yellow-self-design-kurta-sets-with-dupatta",
    category: "Lady Suits",
    images: [
      {
        asset: {
          url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/SEPTEMBER/29/5FcdHMxG_2db1bd7a4d8d4a98981957a8c691795b.jpg",
          altText: "Sangria Women Yellow Self Design Kurta Sets With Dupatta"
        }
      }
    ]
  },
  {
    id: "40980751",
    title: "Women Regular Kurta with Salwar & Dupatta",
    description: "Comfortable regular-fit kurta set with matching salwar and dupatta. Perfect for everyday wear and office wear.",
    price: 1729,
    originalPrice: 4999,
    stockLevel: 20,
    rating: 4.0,
    reviewCount: 45,
    slug: "legendbrity-women-regular-kurta-with-salwar-dupatta",
    category: "Lady Suits",
    images: [
      {
        asset: {
          url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2026/MARCH/28/sVggu2TR_b89cf5cf223744b491d6eec77aebf272.jpg",
          altText: "LEGENDBRITY Women Regular Kurta with Salwar & Dupatta"
        }
      }
    ]
  },
  {
    id: "37003005",
    title: "Geometric Printed Straight Kurta with Patiala",
    description: "Trendy geometric printed straight kurta paired with Patiala salwar. Modern design with traditional comfort.",
    price: 1415,
    originalPrice: 5599,
    stockLevel: 7,
    rating: 4.3,
    reviewCount: 39,
    slug: "sangria-geometric-printed-straight-kurta-with-patiala",
    category: "Lady Suits",
    images: [
      {
        asset: {
          url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/SEPTEMBER/16/VWqipyLm_b48cccad81304f7182512bb831d4d0cc.jpg",
          altText: "Sangria Geometric Printed Straight Kurta with Patiala"
        }
      }
    ]
  },
  {
    id: "36865637",
    title: "Women Printed Regular Thread Work Kurta With Patiala & Dupatta",
    description: "Beautiful printed kurta with intricate thread work, paired with Patiala and dupatta. Great value for money.",
    price: 665,
    originalPrice: 2663,
    stockLevel: 25,
    rating: 1.8,
    reviewCount: 6,
    slug: "rajnandini-women-printed-thread-work-kurta-with-patiala-dupatta",
    category: "Lady Suits",
    images: [
      {
        asset: {
          url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/SEPTEMBER/9/FZtEfV1K_1b40222e9d05483f805e6396fd50a98f.jpg",
          altText: "Rajnandini Women Printed Thread Work Kurta With Patiala & Dupatta"
        }
      }
    ]
  },
  {
    id: "37150612",
    title: "Women Floral Printed Regular Kurta Sets",
    description: "Fresh floral printed kurta set, lightweight and breathable. Perfect for summer days and casual wear.",
    price: 899,
    originalPrice: 2599,
    stockLevel: 30,
    rating: 3.1,
    reviewCount: 28,
    slug: "herenow-women-floral-printed-regular-kurta-sets",
    category: "Lady Suits",
    images: [
      {
        asset: {
          url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/SEPTEMBER/23/dPQ2rhtC_8c0c5d3eb2f24c19b12fb3182a9bad86.jpg",
          altText: "HERE&NOW Women Floral Printed Regular Kurta Sets"
        }
      }
    ]
  },
  {
    id: "38431769",
    title: "Women Floral Printed Angrakha Pure Cotton Kurta with Patiala & Dupatta",
    description: "Traditional Angrakha style kurta in pure cotton with floral prints, paired with Patiala and dupatta. Extremely comfortable for all-day wear.",
    price: 1379,
    originalPrice: 5999,
    stockLevel: 10,
    rating: 4.3,
    reviewCount: 89,
    slug: "anouk-women-floral-printed-angrakha-cotton-kurta-with-patiala-dupatta",
    category: "Lady Suits",
    images: [
      {
        asset: {
          url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/DECEMBER/11/OnOq31Dk_68f278524b784da991a2f9e6922a3b5f.jpg",
          altText: "Anouk Women Floral Printed Angrakha Pure Cotton Kurta with Patiala & Dupatta"
        }
      }
    ]
  },
  {
    id: "37246962",
    title: "Women Olive Embroidered Kurta Sets With Dupatta",
    description: "Elegant olive green embroidered kurta set with dupatta. Sophisticated color perfect for family functions.",
    price: 1319,
    originalPrice: 4399,
    stockLevel: 14,
    rating: 4.1,
    reviewCount: 67,
    slug: "sangria-women-olive-embroidered-kurta-sets-with-dupatta",
    category: "Lady Suits",
    images: [
      {
        asset: {
          url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/SEPTEMBER/29/g7cxiZU5_fca039ea05b449f79e43672be2db8f52.jpg",
          altText: "Sangria Women Olive Embroidered Kurta Sets With Dupatta"
        }
      }
    ]
  },
  {
    id: "32997879",
    title: "Women Floral Embroidered Regular Pure Cotton Kurta with Patiala & Dupatta",
    description: "Pure cotton kurta set with beautiful floral embroidery, paired with Patiala and dupatta. Premium quality fabric for ultimate comfort.",
    price: 1499,
    originalPrice: 5999,
    stockLevel: 18,
    rating: 4.1,
    reviewCount: 390,
    slug: "anouk-women-floral-embroidered-cotton-kurta-with-patiala-dupatta",
    category: "Lady Suits",
    images: [
      {
        asset: {
          url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/FEBRUARY/28/u6eSVYtD_e295fea6468444f2918903b958420a83.jpg",
          altText: "Anouk Women Floral Embroidered Regular Pure Cotton Kurta with Patiala & Dupatta"
        }
      }
    ]
  },
  {
    id: "34652563",
    title: "Women Floral Printed Regular Kurta with Patiala & Dupatta",
    description: "Vibrant floral printed kurta set with Patiala and dupatta. Eye-catching design for festive occasions.",
    price: 1190,
    originalPrice: 6999,
    stockLevel: 9,
    rating: 4.0,
    reviewCount: 34,
    slug: "srilica-women-floral-printed-kurta-with-patiala-dupatta",
    category: "Lady Suits",
    images: [
      {
        asset: {
          url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/JUNE/2/Vp09Miyu_f2b59f5a64904d98b5f5060bf7f0573f.jpg",
          altText: "SRILICA Women Floral Printed Regular Kurta with Patiala & Dupatta"
        }
      }
    ]
  },
  {
    id: "39612908",
    title: "Women Floral Printed Regular Pure Cotton Kurta with Patiala",
    description: "Breathable pure cotton kurta with floral prints, paired with comfortable Patiala. Ideal for summer days.",
    price: 1799,
    originalPrice: 3295,
    stockLevel: 22,
    rating: 4.2,
    reviewCount: 123,
    slug: "inweave-women-floral-printed-cotton-kurta-with-patiala",
    category: "Lady Suits",
    images: [
      {
        asset: {
          url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2026/JANUARY/24/ccco4J3o_00f1a65e8c46407596e8e27f50b7b42c.jpg",
          altText: "InWeave Women Floral Printed Regular Pure Cotton Kurta with Patiala"
        }
      }
    ]
  },
  {
    id: "38291459",
    title: "Embroidered Straight Kurta with Farshi Salwar & Dupatta",
    description: "Elegant embroidered straight kurta paired with trendy Farshi salwar and dupatta. Perfect for weddings and parties.",
    price: 1275,
    originalPrice: 5999,
    stockLevel: 6,
    rating: 4.2,
    reviewCount: 509,
    slug: "anouk-embroidered-straight-kurta-with-farshi-salwar-dupatta",
    category: "Lady Suits",
    images: [
      {
        asset: {
          url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/NOVEMBER/28/QMMRb98G_a61be760d9ed4645869ee5efbc831ffc.jpg",
          altText: "Anouk Embroidered Straight Kurta with Farshi Salwar & Dupatta"
        }
      }
    ]
  },
  {
    id: "37975314",
    title: "Women Regular Pure Cotton Kurta with Patiala",
    description: "Simple and elegant pure cotton kurta set with Patiala. Perfect for daily wear and casual outings.",
    price: 1394,
    originalPrice: 3099,
    stockLevel: 35,
    rating: 3.4,
    reviewCount: 44,
    slug: "indo-era-women-regular-pure-cotton-kurta-with-patiala",
    category: "Lady Suits",
    images: [
      {
        asset: {
          url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2025/NOVEMBER/14/I7k973Wb_98fa63fa1a7f4f10bc252ddaddbeeb52.jpg",
          altText: "Indo Era Women Regular Pure Cotton Kurta with Patiala"
        }
      }
    ]
  }
];