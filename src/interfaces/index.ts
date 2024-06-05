export interface IErrorForm {
  error: {
    message?: string;
    details?: {
      errors: {
        message: string;
      }[];
    };
  };
}

export interface ITodo {
  id: number;
  attributes: {
    title: string;
    description: string;
  };
}