interface IRegisterInput {
  placeholder: string;
  name: "username" | "email" | "password";
  constrains: {
    pattern?: RegExp;
    required: boolean;
    minLength?: number;
  };
}
interface ILoginInput {
  placeholder: string;
  name: "identifier" | "password";
  constrains: {
    pattern?: RegExp;
    required: boolean;
    minLength?: number;
  };
}
export const RegisterData: IRegisterInput[] = [
  {
    placeholder: "Username",
    name: "username",
    constrains: {
      required: true,
      minLength: 4,
    },
  },
  {
    placeholder: "Email",
    name: "email",
    constrains: {
      required: true,
      pattern: /^[^@]+@[^@]+\.[^@ .]{2,}$/,
    },
  },
  {
    placeholder: "Password",
    name: "password",
    constrains: {
      required: true,
      minLength: 6,
      pattern: /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/,
    },
  },
];

export const LoginInputData: ILoginInput[] = [
  {
    placeholder: "Email adress",
    name: "identifier",
    constrains: {
      required: true,
      pattern: /^[^@]+@[^@]+\.[^@ .]{2,}$/,
    },
  },
  {
    placeholder: "Password",
    name: "password",
    constrains: {
      required: true,
      minLength: 6,
      pattern: /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/,
    },
  },
];
