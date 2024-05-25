import { yupResolver } from "@hookform/resolvers/yup";
import { AxiosError } from "axios";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import InputErrorMsg from "../components/ui/InputErrorMsg";
import axiosInstance from "../config/axios.config";
import { RegisterData } from "../data";
import { IErrorForm } from "../interfaces";
import { RegisterSchema } from "../validation";

interface IFormInput {
  username: string;
  email: string;
  password: string;
}

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ resolver: yupResolver(RegisterSchema) });

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setIsLoading(true);
    try {
      const { status } = await axiosInstance.post("/auth/local/register", data);
      if (status === 200) {
        toast.success("you will be navigated to login page after 4 seconds", {
          position: "bottom-center",
          duration: 4000,
          style: {
            backgroundColor: "black",
            color: "white",
            width: "fit-content",
          },
        });
        setTimeout(() => {
          location.replace('/login')
        }, 2000);
      }
    } catch (error) {
      const errorObj = error as AxiosError<IErrorForm>;
      toast.error(`${errorObj.response?.data.error.message}`, {
        position: "bottom-center",
        duration: 4000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const renderFormData = RegisterData.map(
    ({ placeholder, name, constrains }, idx) => (
      <div key={idx}>
        <Input placeholder={placeholder} {...register(name, constrains)} />
        {errors[name] && <InputErrorMsg msg={errors[name]?.message} />}
      </div>
    )
  );

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-center mb-4 text-3xl font-semibold">
        Register to get access!
      </h2>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        {renderFormData}
        <Button isLoading={isLoading} fullWidth>
          Register
        </Button>
      </form>
      <Toaster />
    </div>
  );
};

export default RegisterPage;
