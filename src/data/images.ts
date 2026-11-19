// Every photo the site uses. Paths are relative to the current site's uploads
// folder. Run `npm run images:pull` to copy them into /public/img, then set
// PUBLIC_IMAGES_LOCAL=true so the site serves its own copies (do this before
// the old site is switched off).
const REMOTE = 'https://www.justwardrobes.com.au/content/wp-content/uploads/';
const LOCAL = import.meta.env.PUBLIC_IMAGES_LOCAL === 'true';

export const img = (path: string) =>
  LOCAL ? `/img/${path.split('/').pop()}` : REMOTE + path;

export const photos = {
  heroWir: '2025/06/Just-Wardrobes-Web43.jpg',
  wirShelves: '2025/06/Just-Wardrobes-Web05.jpg',
  wirWhiteSheen: '2025/06/Classic-White-Sheen-1.jpg',
  wirTimber: '2025/08/WIR-TG.jpg',
  wirPantRacks: '2025/08/WIR-w-pant-racks.jpg',
  wirIsland: '2016/03/137-Allambi-High-Res-018-2.jpg',
  wirIsland2: '2016/03/137-Allambi-High-Res-019.jpg',
  wirDark: '2017/08/Just-Wardrobes-15-Palmetto-Crt-Broadbeach-Waters-2-High-Resolution.jpg',
  boutique: '2016/03/Boutique-Robe-0010-1-1.jpg',
  bar: '2025/08/Riverbend-Travis-28-1140x515.jpg',
  vanity: '2024/11/Soiree-WR-9.jpg',
  timberCabinetry: '2024/11/Clamroc32SavoyLo-Res-55.jpg',
  fireplace: '2018/08/Feature-Fireplace.jpg',
  cabinetry1: '2017/08/Cabinetry-Collection-JWS3.jpg',
  cabinetry2: '2017/07/DSC0697.jpg',
  birTimber: '2025/08/Timbergrain-BIR.jpg',
  birDesk: '2025/08/Nice-BIR-with-TG-desk.jpg',
  birWhite: '2025/01/IMG_0841-2-e1737689240456.jpg',
  birWhite2: '2025/08/White-reach-in-robe-22.jpg',
  suspended: '2025/07/Suspended-System-1.jpg',
  onFloor: '2016/03/white-board-reach-in-robe-2.jpg',
  surano: '2020/06/Surano-Sliding-Doors-For-Clients.jpg',
  doorMirror: '2016/03/Framed-Mirror-White-Glass.jpg',
  doorSemi: '2016/03/Semi-frameless-mirror.jpg',
  doorPrinted: '2016/03/photo-copy.jpg',
  door2pac: '2016/03/2Pac-Colonial-6-Sliding-Doors.jpg',
  doorJamb: '2016/03/Jam-Mullion-picture-2.jpg',
  buffet1: '2016/03/IMG_8210.jpg',
  buffet2: '2016/03/IMG_7638.jpg',
};

export type GalleryItem = { src: string; alt: string; cat: string };

export const galleryCats = [
  { id: 'walk-in', label: 'Walk-in robes' },
  { id: 'built-in', label: 'Built-in robes' },
  { id: 'boutique', label: 'Boutique & buffets' },
  { id: 'cabinetry', label: 'Cabinetry' },
  { id: 'doors', label: 'Doors' },
];

export const gallery: GalleryItem[] = [
  { cat: 'walk-in', src: photos.heroWir, alt: 'White walk-in robe with open shelving, drawers and a pendant light' },
  { cat: 'walk-in', src: photos.wirShelves, alt: 'Walk-in robe with lit glass-front display shelves' },
  { cat: 'walk-in', src: photos.wirWhiteSheen, alt: 'Classic white sheen walk-in robe' },
  { cat: 'walk-in', src: photos.wirTimber, alt: 'Timbergrain walk-in robe' },
  { cat: 'walk-in', src: photos.wirPantRacks, alt: 'Walk-in robe with pull-out pant racks' },
  { cat: 'walk-in', src: '2025/08/WIR.jpg', alt: 'White walk-in robe with double hanging' },
  { cat: 'walk-in', src: '2025/06/IMG_9018.jpeg', alt: 'Walk-in robe with timbergrain drawer fronts' },
  { cat: 'walk-in', src: '2025/06/IMG_5122-1.jpg', alt: 'Walk-in robe with cabinetry buffet' },
  { cat: 'walk-in', src: '2025/01/IMG_0395-scaled.jpeg', alt: 'Walk-in robe built around a window' },
  { cat: 'walk-in', src: '2016/08/Standard-System-on-a-Kick-0001-.jpg', alt: 'Standard system walk-in robe on a kickboard' },
  { cat: 'walk-in', src: '2025/01/IMG_0873.jpeg', alt: 'Cabinetry walk-in robe' },
  { cat: 'walk-in', src: '2025/01/IMG_0715.jpeg', alt: 'White melamine walk-in robe' },
  { cat: 'built-in', src: photos.birTimber, alt: 'Timbergrain built-in robe' },
  { cat: 'built-in', src: photos.birDesk, alt: 'Built-in robe with a timbergrain desk' },
  { cat: 'built-in', src: photos.birWhite, alt: 'White built-in robe with drawers' },
  { cat: 'built-in', src: photos.birWhite2, alt: 'White reach-in robe' },
  { cat: 'built-in', src: '2025/01/IMG_1299-1.jpeg', alt: 'Built-in robe with shelving and hanging' },
  { cat: 'built-in', src: '2025/01/IMG_0632-3.jpg', alt: 'Built-in robe with open shelves' },
  { cat: 'built-in', src: '2025/01/IMG_0970-1.jpeg', alt: 'Reach-in robe with drawers' },
  { cat: 'built-in', src: photos.suspended, alt: 'Wall-mounted suspended wardrobe system' },
  { cat: 'built-in', src: photos.onFloor, alt: 'On-the-floor white board reach-in robe' },
  { cat: 'boutique', src: photos.wirIsland, alt: 'Boutique walk-in robe with a central island' },
  { cat: 'boutique', src: photos.wirIsland2, alt: 'Boutique robe with glass-top centre buffet' },
  { cat: 'boutique', src: photos.boutique, alt: 'Signature boutique robe with chandelier' },
  { cat: 'boutique', src: photos.wirDark, alt: 'Dark timbergrain dressing room in Broadbeach Waters' },
  { cat: 'boutique', src: photos.buffet1, alt: 'Centre buffet with jewellery drawers' },
  { cat: 'boutique', src: photos.buffet2, alt: 'Centre buffet in a walk-in robe' },
  { cat: 'boutique', src: '2016/03/IMG_8225.jpg', alt: 'Boutique robe with display shelving' },
  { cat: 'cabinetry', src: photos.bar, alt: 'Home bar with marble benchtop and lit glass cabinets' },
  { cat: 'cabinetry', src: photos.vanity, alt: 'Timber vanity with pink basins' },
  { cat: 'cabinetry', src: photos.timberCabinetry, alt: 'Full-height timber veneer cabinetry' },
  { cat: 'cabinetry', src: photos.fireplace, alt: 'Black media wall around a feature fireplace' },
  { cat: 'cabinetry', src: photos.cabinetry2, alt: 'Custom cabinetry with curved detail' },
  { cat: 'cabinetry', src: '2018/07/EDI_4744-copy.jpg', alt: 'Two-tone kitchen' },
  { cat: 'cabinetry', src: '2018/11/IMG_9669_1536976766.jpg', alt: '2 pac shaker laundry' },
  { cat: 'doors', src: photos.doorMirror, alt: 'Framed mirror and white glass sliding doors' },
  { cat: 'doors', src: photos.doorSemi, alt: 'Semi-frameless mirror sliding doors' },
  { cat: 'doors', src: photos.doorPrinted, alt: 'Custom photo-printed sliding doors' },
  { cat: 'doors', src: photos.door2pac, alt: 'Routered 2 pac colonial sliding doors' },
  { cat: 'doors', src: photos.doorJamb, alt: 'Jamb and mullion hinged doors' },
];
