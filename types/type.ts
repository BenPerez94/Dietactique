export interface Article {
  id: string;
  title: string;
  mainImage: string;
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

export interface FormData {
  nameContact: string;
  emailContact: string;
  firstNameContact: string;
  messageContact: string;
}
