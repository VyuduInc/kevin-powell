export interface Photo {
  id: string;
  src: string;
  alt: string;
  category: 'main' | 'contemporary' | 'archival';
  width: number;
  height: number;
  caption: string;
}

export interface GallerySection {
  title: string;
  description: string;
  category: 'main' | 'contemporary' | 'archival';
  photos: Photo[];
}
