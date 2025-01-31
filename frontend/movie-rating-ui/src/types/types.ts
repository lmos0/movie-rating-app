export interface User {
    id: string;
    name: string;
    email: string;
    ratings: Rating[];
    createdAt: string;
    updatedAt: string;
  }
  
  export interface Movie {
    id: number;
    title: string;
    director: string;
    year: number;
    ratings: Rating[];
    createdAt: string;
    updatedAt: string;
  }
  
  export interface Rating {
    id: number;
    score: number;
    comment: string;
    movie: {
      title: string;
    };
  }