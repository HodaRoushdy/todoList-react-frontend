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
