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
export const mockLadySuits: Product[] = [
  {
    id: "101",
    title: "Royal Silk Embroidered Suit",
    description:
      "Elegant royal silk suit featuring detailed zari embroidery with a matching dupatta. Perfect for weddings and festive occasions.",
    price: 2499,
    originalPrice: 2999,
    stockLevel: 15,
    rating: 4.8,
    reviewCount: 124,
    slug: "royal-silk-embroidered-suit",
    category: "Lady Suits",
    images: [
      {
        asset: {
          url: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop",
          altText: "Royal Silk Embroidered Suit in maroon color"
        }
      }
    ]
  },

  {
    id: "102",
    title: "Designer Georgette Party Suit",
    description:
      "Stylish georgette party wear suit with heavy embroidery and stone work, ideal for evening parties and celebrations.",
    price: 3199,
    originalPrice: 3899,
    stockLevel: 5,
    rating: 4.9,
    reviewCount: 86,
    slug: "designer-georgette-party-suit",
    category: "Lady Suits",
    images: [
      {
        asset: {
          url: "https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=1000&auto=format&fit=crop",
          altText: "Designer Georgette Party Suit in navy blue"
        }
      }
    ]
  },

  {
    id: "103",
    title: "Cotton Daily Wear Suit",
    description:
      "Comfortable cotton daily wear suit designed for everyday use. Lightweight, breathable, and stylish.",
    price: 1299,
    originalPrice: 1599,
    stockLevel: 42,
    rating: 4.5,
    reviewCount: 215,
    slug: "cotton-daily-wear-suit",
    category: "Lady Suits",
    images: [
      {
        asset: {
          url: "https://images.unsplash.com/photo-1669194722837-06fbe316a1eb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          altText: "Cotton Daily Wear Suit in light green"
        }
      }
    ]
  },

  {
    id: "104",
    title: "Punjabi Patiala Suit Set",
    description:
      "Traditional Punjabi Patiala suit set with vibrant colors and printed dupatta. Perfect for festive and casual wear.",
    price: 1899,
    originalPrice: 2199,
    stockLevel: 8,
    rating: 4.7,
    reviewCount: 92,
    slug: "punjabi-patiala-suit-set",
    category: "Lady Suits",
    images: [
      {
        asset: {
          url: "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?q=80&w=1000&auto=format&fit=crop",
          altText: "Punjabi Patiala Suit Set in yellow"
        }
      }
    ]
  },

  {
    id: "105",
    title: "Anarkali Party Wear Suit",
    description:
      "Graceful Anarkali suit with flared design and embroidered neckline. A stunning choice for weddings and parties.",
    price: 3599,
    originalPrice: 4299,
    stockLevel: 3,
    rating: 5.0,
    reviewCount: 45,
    slug: "anarkali-party-wear-suit",
    category: "Lady Suits",
    images: [
      {
        asset: {
          url: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&w=1000&auto=format&fit=crop",
          altText: "Anarkali Party Wear Suit in red"
        }
      }
    ]
  },

  {
    id: "106",
    title: "Chanderi Festive Suit",
    description:
      "Premium Chanderi fabric festive suit with elegant embroidery and soft dupatta. Perfect for traditional gatherings.",
    price: 2799,
    originalPrice: 3199,
    stockLevel: 21,
    rating: 4.6,
    reviewCount: 67,
    slug: "chanderi-festive-suit",
    category: "Lady Suits",
    images: [
      {
        asset: {
          url: "https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?q=80&w=1000&auto=format&fit=crop",
          altText: "Chanderi Festive Suit in pastel pink"
        }
      }
    ]
  }
];