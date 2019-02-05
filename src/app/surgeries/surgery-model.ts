export interface SurgeryModel {
  image_name: Image;
  surgery: Surgery;
}

interface Image {
  id: number;
  imageName: string;
  subFolder: string;
}
interface Surgery {
  id: number;
  image_id: number;
  isArabic: string;
  title: string;
  titleAr: string;
  topic: string
  topicAr: string;
  videoLink: string;
}
