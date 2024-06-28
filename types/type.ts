export interface Article {
  id: string;
  title: string;
  contents: { text: string; order: number }[];
  images?: { url: string; order: number }[];
  videos?: { url: string; order: number }[];
  createdAt: Date;
  categoryId: string;
  category: Category;
}

export interface Category {
  id: string;
  name: string;
  articles?: Article[];
}
