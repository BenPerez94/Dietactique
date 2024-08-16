export interface Article {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  categoryId: string;
  category: Category;
}

export interface Category {
  id: string;
  name: string;
  articles?: Article[];
}
