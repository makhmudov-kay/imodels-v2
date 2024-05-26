export interface ProductImage {
  img: string;
  type: string;
  info: ImageInfo[];
}

interface ImageInfo {
  img: string;
  title: string;
  text: string;
}
