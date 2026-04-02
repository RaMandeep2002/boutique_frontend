export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
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
    slug: "cotton-daily-wear-suit",
    category: "Lady Suits",
    images: [
      {
        asset: {
          url: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1000&auto=format&fit=crop",
          altText: "Elegant embroidered lady suit"
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