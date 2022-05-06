export interface BookInterface {
  authors: string[];
  category: string;
  description: string;
  id: string;
  imageUrl: string;
  isbn10: string;
  isbn13: string;
  language: string;
  pageCount: number;
  published: number;
  publisher: string;
  title: string;
}

export interface ReasponseApiInterface {
  data: BookInterface[];
  page: number;
  totalItems: number;
  totalPages: number;
}
