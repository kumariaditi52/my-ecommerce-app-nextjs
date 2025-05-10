export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  reviews: number;
  rating: number;
  features: string[];
  specifications: Record<string, string>;
  stock: number;
  discount?: number;
  isNew?: boolean;
  isFeatured?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless",
    description: "Experience crystal-clear sound with our premium wireless headphones. Featuring noise-cancellation technology, comfortable ear cushions, and long battery life, these headphones are perfect for music lovers and professionals alike.",
    price: 199.99,
    image: "/assets/pexels-alexandr-borecky-128389-393047.jpg",
    category: "Electronics",
    reviews: 124,
    rating: 4.8,
    stock: 15,
    discount: 10,
    isFeatured: true,
    features: [
      "Active noise cancellation",
      "40-hour battery life",
      "Bluetooth 5.0 connectivity",
      "Built-in microphone for calls",
      "Foldable design for easy storage"
    ],
    specifications: {
      "Brand": "NextAudio",
      "Model": "NA-500",
      "Color": "Matte Black",
      "Weight": "250g",
      "Warranty": "2 years"
    }
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    description: "Track your fitness goals with our advanced smart watch. Monitor your heart rate, count steps, track sleep patterns, and receive notifications from your smartphone. Water-resistant and durable for all your activities.",
    price: 149.99,
    image: "/assets/pexels-jonathanborba-14309811.jpg",
    category: "Wearables",
    reviews: 89,
    rating: 4.6,
    stock: 22,
    isNew: true,
    features: [
      "Heart rate monitoring",
      "GPS tracking",
      "Water-resistant up to 50m",
      "7-day battery life",
      "Customizable watch faces"
    ],
    specifications: {
      "Brand": "FitTech",
      "Model": "FT-200",
      "Color": "Silver",
      "Weight": "45g",
      "Warranty": "1 year"
    }
  },
  {
    id: 3,
    name: "Ultra HD 4K Smart TV",
    description: "Transform your home entertainment with our Ultra HD 4K Smart TV. Featuring vibrant colors, sharp contrast, and smart connectivity options, this TV brings your favorite content to life with stunning clarity.",
    price: 799.99,
    image: "/assets/pexels-jonathanborba-14309811.jpg",
    category: "Electronics",
    reviews: 56,
    rating: 4.7,
    stock: 8,
    discount: 15,
    isFeatured: true,
    features: [
      "4K Ultra HD resolution",
      "Smart TV functionality with built-in apps",
      "Voice control compatibility",
      "Multiple HDMI and USB ports",
      "Dolby Atmos sound"
    ],
    specifications: {
      "Brand": "VisionPlus",
      "Model": "VP-55UHD",
      "Screen Size": "55 inches",
      "Resolution": "3840 x 2160",
      "Warranty": "3 years"
    }
  },
  {
    id: 4,
    name: "Professional DSLR Camera",
    description: "Capture life's moments with exceptional clarity using our professional DSLR camera. With advanced sensors, multiple shooting modes, and 4K video capability, this camera is perfect for both photography enthusiasts and professionals.",
    price: 1299.99,
    image: "/assets/pexels-burst-374067.jpg",
    category: "Photography",
    reviews: 42,
    rating: 4.9,
    stock: 5,
    features: [
      "24.2 MP full-frame sensor",
      "4K video recording",
      "61-point autofocus system",
      "Weather-sealed body",
      "Built-in Wi-Fi and Bluetooth"
    ],
    specifications: {
      "Brand": "PhotoPro",
      "Model": "PP-D850",
      "Sensor Type": "CMOS",
      "Weight": "765g",
      "Warranty": "2 years"
    }
  },
  {
    id: 5,
    name: "Ergonomic Office Chair",
    description: "Work in comfort with our ergonomic office chair. Designed to provide optimal support for your back and promote good posture during long work hours. Adjustable features allow you to customize the chair to your needs.",
    price: 249.99,
    image: "/assets/pexels-junior-teixeira-1064069-2047905.jpg",
    category: "Furniture",
    reviews: 78,
    rating: 4.5,
    stock: 18,
    discount: 5,
    features: [
      "Adjustable height and armrests",
      "Lumbar support",
      "Breathable mesh back",
      "360-degree swivel",
      "Durable nylon base"
    ],
    specifications: {
      "Brand": "ComfortPlus",
      "Model": "CP-E100",
      "Color": "Black",
      "Weight Capacity": "300 lbs",
      "Warranty": "5 years"
    }
  },
  {
    id: 6,
    name: "Premium Coffee Maker",
    description: "Start your day right with our premium coffee maker. Featuring programmable brewing, temperature control, and a built-in grinder, this coffee maker delivers the perfect cup of coffee every time.",
    price: 129.99,
    image: "/assets/pexels-jonathanborba-14309811.jpg",
    category: "Kitchen Appliances",
    reviews: 103,
    rating: 4.7,
    stock: 25,
    isFeatured: true,
    features: [
      "Built-in bean grinder",
      "Programmable timer",
      "Temperature control",
      "10-cup capacity",
      "Auto shut-off feature"
    ],
    specifications: {
      "Brand": "BrewMaster",
      "Model": "BM-500",
      "Color": "Stainless Steel",
      "Power": "1000W",
      "Warranty": "2 years"
    }
  },
  {
    id: 7,
    name: "Wireless Gaming Mouse",
    description: "Gain a competitive edge with our wireless gaming mouse. Featuring high precision sensors, customizable buttons, and RGB lighting, this mouse is designed for serious gamers who demand performance.",
    price: 79.99,
    image: "/assets/pexels-junior-teixeira-1064069-2047905.jpg",
    category: "Gaming",
    reviews: 67,
    rating: 4.6,
    stock: 30,
    isNew: true,
    features: [
      "16,000 DPI optical sensor",
      "Programmable buttons",
      "RGB lighting effects",
      "70-hour battery life",
      "Lightweight design"
    ],
    specifications: {
      "Brand": "GameTech",
      "Model": "GT-M700",
      "Color": "Black/RGB",
      "Weight": "95g",
      "Warranty": "2 years"
    }
  },
  {
    id: 8,
    name: "Portable Bluetooth Speaker",
    description: "Take your music anywhere with our portable Bluetooth speaker. Waterproof, durable, and with powerful sound, this speaker is perfect for outdoor adventures, beach trips, or just relaxing at home.",
    price: 89.99,
    image: "/assets/pexels-jonathanborba-14309811.jpg",
    category: "Audio",
    reviews: 91,
    rating: 4.5,
    stock: 20,
    discount: 8,
    features: [
      "360-degree sound",
      "IPX7 waterproof rating",
      "12-hour battery life",
      "Built-in microphone for calls",
      "Compact and portable design"
    ],
    specifications: {
      "Brand": "SoundWave",
      "Model": "SW-P300",
      "Color": "Blue",
      "Weight": "560g",
      "Warranty": "1 year"
    }
  },
  {
    id: 9,
    name: "Stainless Steel Water Bottle",
    description: "Stay hydrated in style with our vacuum-insulated stainless steel water bottle. Keeps drinks cold for 24 hours or hot for 12 hours. Durable, leak-proof, and eco-friendly alternative to disposable bottles.",
    price: 34.99,
    image: "/assets/pexels-soulful-pizza-2080276-3780680.jpg",
    category: "Lifestyle",
    reviews: 128,
    rating: 4.8,
    stock: 45,
    features: [
      "Vacuum insulation technology",
      "BPA-free construction",
      "Leak-proof lid",
      "Sweat-free exterior",
      "Wide mouth for easy cleaning"
    ],
    specifications: {
      "Brand": "EcoFlow",
      "Model": "EF-H500",
      "Capacity": "500ml",
      "Material": "18/8 Stainless Steel",
      "Warranty": "Lifetime"
    }
  },
  {
    id: 10,
    name: "Wireless Charging Pad",
    description: "Simplify your charging experience with our wireless charging pad. Compatible with all Qi-enabled devices, this sleek charging pad eliminates cable clutter and provides fast, efficient charging for your devices.",
    price: 39.99,
    image: "/assets/pexels-jonathanborba-14309811.jpg",
    category: "Electronics",
    reviews: 54,
    rating: 4.4,
    stock: 35,
    isNew: true,
    features: [
      "10W fast charging",
      "Compatible with all Qi devices",
      "LED charging indicator",
      "Slim and compact design",
      "Non-slip surface"
    ],
    specifications: {
      "Brand": "PowerUp",
      "Model": "PU-W10",
      "Color": "Black",
      "Input": "QC 3.0 / USB-C",
      "Warranty": "1 year"
    }
  },
  {
    id: 11,
    name: "Smart Home Security Camera",
    description: "Keep your home safe with our smart security camera. Featuring HD video, night vision, motion detection, and two-way audio, this camera connects to your smartphone for real-time monitoring from anywhere.",
    price: 129.99,
    image: "/assets/pexels-jonathanborba-14309811.jpg",
    category: "Smart Home",
    reviews: 76,
    rating: 4.6,
    stock: 12,
    discount: 12,
    features: [
      "1080p HD video",
      "Night vision up to 30ft",
      "Motion detection alerts",
      "Two-way audio",
      "Cloud storage options"
    ],
    specifications: {
      "Brand": "SecureView",
      "Model": "SV-C200",
      "Power": "Wired or Battery",
      "Field of View": "130°",
      "Warranty": "2 years"
    }
  },
  {
    id: 12,
    name: "Mechanical Keyboard",
    description: "Enhance your typing experience with our mechanical keyboard. Featuring tactile switches, customizable backlighting, and durable construction, this keyboard is perfect for both gaming and productivity.",
    price: 119.99,
    image: "/assets/pexels-jonathanborba-14309811.jpg",
    category: "Computing",
    reviews: 63,
    rating: 4.7,
    stock: 18,
    isFeatured: true,
    features: [
      "Mechanical switches",
      "RGB backlighting",
      "N-key rollover",
      "Programmable macros",
      "Detachable wrist rest"
    ],
    specifications: {
      "Brand": "TypeMaster",
      "Model": "TM-MK100",
      "Switch Type": "Blue",
      "Layout": "Full-size",
      "Warranty": "3 years"
    }
  },
  {
    id: 13,
    name: "Leather Wallet",
    description: "Carry your essentials in style with our premium leather wallet. Handcrafted from genuine leather, this wallet features multiple card slots, a bill compartment, and RFID blocking technology for security.",
    price: 49.99,
    image: "/assets/pexels-soulful-pizza-2080276-3780680.jpg",
    category: "Accessories",
    reviews: 112,
    rating: 4.8,
    stock: 28,
    features: [
      "Genuine full-grain leather",
      "RFID blocking technology",
      "8 card slots",
      "2 bill compartments",
      "Slim profile design"
    ],
    specifications: {
      "Brand": "LeatherCraft",
      "Model": "LC-W200",
      "Material": "Full-grain leather",
      "Dimensions": "4.5\" x 3.5\"",
      "Warranty": "Lifetime"
    }
  },
  {
    id: 14,
    name: "Robot Vacuum Cleaner",
    description: "Let technology handle your cleaning with our smart robot vacuum. With intelligent mapping, powerful suction, and app control, this robot vacuum navigates your home efficiently, keeping floors spotless with minimal effort.",
    price: 299.99,
    image: "/assets/pexels-soulful-pizza-2080276-3780681.jpg",
    category: "Smart Home",
    reviews: 87,
    rating: 4.5,
    stock: 10,
    discount: 20,
    features: [
      "Smart mapping technology",
      "2000Pa suction power",
      "App and voice control",
      "Automatic recharging",
      "HEPA filtration system"
    ],
    specifications: {
      "Brand": "CleanTech",
      "Model": "CT-RV300",
      "Battery Life": "120 minutes",
      "Noise Level": "65dB",
      "Warranty": "2 years"
    }
  },
  {
    id: 15,
    name: "Portable Power Bank",
    description: "Stay charged on the go with our high-capacity power bank. Featuring fast charging technology, multiple ports, and a compact design, this power bank ensures your devices never run out of battery when you need them most.",
    price: 59.99,
    image: "/assets/pexels-soulful-pizza-2080276-3780681.jpg",
    category: "Electronics",
    reviews: 145,
    rating: 4.7,
    stock: 40,
    discount: 5,
    features: [
      "20,000mAh capacity",
      "USB-C Power Delivery",
      "Dual USB-A ports",
      "LED power indicator",
      "Compact and lightweight"
    ],
    specifications: {
      "Brand": "PowerMax",
      "Model": "PM-20K",
      "Capacity": "20,000mAh",
      "Input": "USB-C, Micro USB",
      "Warranty": "18 months"
    }
  }
];