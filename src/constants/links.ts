export const STUDIO_LINKS = {
  WHATSAPP_DM: 'https://wa.me/message/TGF67ON4CABTL1',
  WHATSAPP_CHANNEL: 'https://whatsapp.com/channel/0029VbDsayr6hENxF8WvzI0J',
  INSTAGRAM: 'https://www.instagram.com/ataldas1997?igsh=d2d5ZTNxYzZmNXM2',
  FACEBOOK: 'https://www.facebook.com/share/1EVrpgHrnD/',
  YOUTUBE_CHANNEL: 'https://www.youtube.com/@MixWithAD',
  RECORDING_VIDEO: 'https://www.youtube.com/watch?v=LUUiAE6qHNw',
  RAW_VOCAL_GDRIVE: 'https://drive.google.com/file/d/1pLkD5tTzllPAfq5STahaqFuErQ7trl-n/view?usp=sharing',
  MIXED_VOCAL_GDRIVE: 'https://drive.google.com/file/d/1KwnuXgu5stdYddmqbDR1WVjgC3zOZGYV/view?usp=sharing',
};

export interface PricingItem {
  id: string;
  name: string;
  nameBn?: string;
  price: string;
  description: string;
  featured?: boolean;
  badge?: string;
}

export interface PricingCategory {
  category: string;
  categoryBn: string;
  subtitle?: string;
  items: PricingItem[];
}

export const PRICING_DATA: PricingCategory[] = [
  {
    category: 'REELS SONG',
    categoryBn: 'রিলস গান প্রোডাকশন',
    subtitle: '1:00 – 1:30 min (Instagram & YouTube Reels)',
    items: [
      {
        id: 'reels-solo',
        name: 'YouTube Karaoke — Solo',
        price: '₹700',
        description: 'Single vocal mix on karaoke track for reels.',
        badge: 'Budget Friendly'
      },
      {
        id: 'reels-duet',
        name: 'YouTube Karaoke — Duet',
        price: '₹1,600',
        description: 'Duet vocals mix & balance with karaoke track.',
      },
      {
        id: 'reels-new',
        name: 'New Music Production',
        price: '₹1,000',
        description: 'Fresh custom short arrangement for reels.',
        badge: 'Trending'
      }
    ]
  },
  {
    category: 'COVER SONG',
    categoryBn: 'কভার গান প্রোডাকশন',
    subtitle: 'Professional arrangement & studio mixing for cover songs',
    items: [
      {
        id: 'cover-new',
        name: 'New Music Production',
        price: '₹4,000',
        description: 'Create a fresh musical arrangement for your cover.',
        badge: 'Custom Music'
      },
      {
        id: 'cover-karaoke',
        name: 'Karaoke Track',
        price: '₹2,000',
        description: 'Professional mixing with a karaoke track.',
        badge: 'Essential'
      }
    ]
  },
  {
    category: 'ORIGINAL SONG',
    categoryBn: 'অরিজিনাল গান প্রোডাকশন',
    subtitle: 'Full original song composition, arrangement & mixing',
    items: [
      {
        id: 'orig-manual',
        name: 'Manual Instruments',
        price: '₹10,000+',
        description: 'Live / manual instrument-based production.',
        badge: 'Premium Studio'
      },
      {
        id: 'orig-vst',
        name: 'VST Instruments',
        price: '₹6,000',
        description: 'Digital instrument-based production.',
        badge: 'Popular Choice'
      }
    ]
  }
];

export const SERVICES_DATA = [
  {
    id: 'music-production',
    title: 'Music Production',
    icon: 'Mic2',
    description: 'Original songs, cover songs and custom music production.',
    tag: 'Original & Covers'
  },
  {
    id: 'mixing-production',
    title: 'Mixing & Production',
    icon: 'SlidersHorizontal',
    description: 'Professional mixing with a polished studio finish.',
    tag: 'Studio Finish'
  },
  {
    id: 'reels-songs',
    title: 'Reels Songs',
    icon: 'Headphones',
    description: 'Short-form music production for Instagram / YouTube Reels.',
    tag: '1:00 – 1:30 min'
  },
  {
    id: 'free-mixing-challenge',
    title: 'Free Mixing Challenge',
    icon: 'Gift',
    description: 'Followers can participate in our occasional Free Mixing Challenge and win completely free mixing.',
    tag: 'Occasional Winner'
  }
];

export const POLICIES_DATA = [
  {
    id: 'policy-audio-pricing',
    title: 'Audio Only Pricing',
    icon: 'Headphones',
    content: 'উপরের রেটগুলো শুধুমাত্র Audio Production-এর জন্য। Video Shoot বা Video Editing-এর জন্য আলাদা চার্জ প্রযোজ্য।'
  },
  {
    id: 'policy-revisions',
    title: '2 Revision Rounds',
    icon: 'RotateCcw',
    content: 'প্রতিটি কাজের মধ্যে সর্বোচ্চ 2টি Revision Round অন্তর্ভুক্ত। এরপর অতিরিক্ত পরিবর্তনের জন্য আলাদা চার্জ প্রযোজ্য।'
  },
  {
    id: 'policy-collab',
    title: 'Collaboration',
    icon: 'Handshake',
    content: 'Collaboration Charges আলোচনা সাপেক্ষে।'
  },
  {
    id: 'policy-discussion',
    title: 'Work Discussion',
    icon: 'MessageSquareText',
    content: 'কাজ শুরু করার আগে Project, Package এবং Requirements WhatsApp-এ আলোচনা করুন।'
  }
];
