/**
 * Cymatic Engine - Pure PNG & MP4 Asset Registry
 */

export interface AssetContext {
  id: string;
  source: string;
  title: string;
  category: string;
  type: 'image' | 'video';
}

export const PortraitRegistry: AssetContext[] = [
  {
    id: 'hero_portrait',
    source: '/media/photo1.png',
    title: 'Isabirye Latif',
    category: 'IDENTITY',
    type: 'image'
  },
  {
    id: 'bento_study',
    source: '/media/photo2.png',
    title: 'Cymatic Study Architecture',
    category: 'THE_BUILDER',
    type: 'image'
  },
  {
    id: 'bento_pdf',
    source: '/media/photo3.png',
    title: 'High-Performance PDF Engine',
    category: 'THE_BUILDER',
    type: 'image'
  },
  {
    id: 'sonic_lab_video',
    source: '/media/video1.mp4',
    title: 'Latty Adams Showcase',
    category: 'SONIC_LAB',
    type: 'video'
  }
];

export const getHeroPortrait = () => PortraitRegistry[0];
export const getBentoImages = () => PortraitRegistry.slice(1, 3);
export const getSonicLabVideo = () => PortraitRegistry[3];
