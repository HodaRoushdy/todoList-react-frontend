import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "../validation";
import { useState } from "react";
import { AxiosError } from "axios";
import toast, { Toaster } from "react-hot-toast";
import InputErrorMsg from "../components/ui/InputErrorMsg";
import axiosInstance from "../config/axios.config";
import { LoginInputData } from "../data";
import { IErrorForm } from "../interfaces";

interface IFormInput {
  identifier: string;
  password: string;
}

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ resolver: yupResolver(LoginSchema) });

  const [isLoading, setIsLoading] = useState(false);

  // login and navigate to home page
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setIsLoading(true);
    try {
      const { status, data: resData } = await axiosInstance.post(
        "/auth/local",
        data
      );
      if (status === 200) {
        toast.success("you will be navigated to home page after 2 seconds", {
          position: "bottom-center",
          duration: 4000,
          style: {
            backgroundColor: "black",
            color: "white",
            width: "fit-content",
          },
        });
        localStorage.setItem("loggedInUserData", JSON.stringify(resData));
        setTimeout(
          ()=>{location.replace("/")}
          , 2000)
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

  const renderFormData = LoginInputData.map(
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
        Login to get access!
      </h2>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        {renderFormData}

        <Button isLoading={isLoading} fullWidth>
          Login
        </Button>
      </form>
      <Toaster />
    </div>
  );
};

export default LoginPage;
