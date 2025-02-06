import { model_ui } from "@/constant";
import React, { useState } from "react";
import Image from "next/image";
import { RefObject } from "react";
import { useAuth } from "@/app/api/Auth";
import { authValidation } from "@/constant";
interface modelType {
  model: boolean;
  modelref: RefObject<HTMLDivElement | null>;
}
interface authType {
  [key: string]: string;
}
const Authmodel: React.FC<modelType> = ({ model, modelref }) => {
  const [showmodel, setShowModel] = useState<boolean>(false);
  const [error, setError] = useState<authType>({});
  const {register , userLogin} =  useAuth()

  const [data, setData] = useState<authType>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [loginData, setLoginData] = useState<authType>({
    email: "",
    password: "",
  });
  const errorHandler = () => {
    const validation: authType = {};
    console.log(showmodel);
    if (showmodel) {
      if (!loginData.email.trim()) {
        validation.email = "Email is a required field";
      }
      if (!loginData.password.trim()) {
        validation.password = "Password is a required field";
      }
    } else {
      if (!data.firstName.trim()) {
        validation.firstName = authValidation.firstName_required;
      } else if (data.firstName.length < 3) {
        validation.firstName = authValidation.firstName_invalid;
      }

      if (!data.lastName.trim()) {
        validation.lastName = authValidation.lastName_required;
      } else if (data.lastName.length < 3) {
        validation.lastName = authValidation.lastName_invalid;
      }

      if (!data.email.trim()) {
        validation.email = authValidation.email_required;
      } else if (!authValidation.email_regex.test(data.email)) {
        validation.email = authValidation.email_invalid;
      }

      if (!data.password.trim()) {
        validation.password = authValidation.password_required;
      } else if (!authValidation.password_regex.test(data.password)) {
        validation.password = authValidation.password_invalid;
      }

      if (!data.confirmPassword.trim()) {
        validation.confirmPassword = authValidation.confirmPassword_required;
      } else if (data.password !== data.confirmPassword) {
        validation.confirmPassword = authValidation.confirmPassword_mismatch;
      }

      if (!data.phone.trim()) {
        validation.phone = authValidation.phone_required;
      } else if (!authValidation.phone_regex.test(data.phone)) {
        validation.phone = authValidation.phone_invalid;
      }
    }
    if (Object.keys(validation).length > 0) {
      setError(validation);
      return;
    }
  };

  const loginHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
    setError((prev) => {
      const newErrors = { ...prev };
      delete newErrors[name];
      return newErrors;
    });
  };
  const Signuphandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
    setError((prev) => {
      const newErrors = { ...prev };
      delete newErrors[name];
      return newErrors;
    });
  };
  const handleSignup = () => {
    errorHandler();
    if (Object.keys(error).length > 0) {
      return;
    }
    const payload = {
      fullName: {
        firstName: data.firstName,
        lastName: data.lastName,
      },
      email: data.email,
      phone: data.phone,
      password: data.password,
    };
    register(payload);
    
  };
  const handleLogin = () => {
    errorHandler();
    if (Object.keys(error).length > 0) {
      return;
    }
    userLogin(loginData)
  };
  return (
    <div className="w-full h-screen absolute top-0">
      {model && (
        <div>
          <div className="absolute z-40 h-screen w-full bg-black-1/80 "></div>
          <div
            ref={modelref}
            className={`absolute z-50 top-5 left-[38%] bg-white-1 rounded-2xl p-5 flex flex-col items-center border shadow-lg shadow-black-1 min-w-[400px] ${
              showmodel ? "min-h-[400px] h-auto" : "min-h-[700px] h-auto"
            }`}
          >
            <h1 className="text-3xl font-bold">
              {showmodel ? model_ui.login.heading : model_ui.sign_up.heading}
            </h1>
            {showmodel ? (
              <div className="mt-5">
                {model_ui.login_fields.map((fields, id) => (
                  <div className="relative" key={id}>
                    <input
                      value={loginData[fields.name]}
                      name={fields.name}
                      onChange={(e) => loginHandler(e)}
                      className="border border-black-4 rounded-xl my-3  px-5 py-3 bg-gray-100/30 w-full capitalize"
                      type={fields.type}
                      placeholder={fields.placeholder}
                    />
                   {error && error[fields.name] && (
                      <span className="text-red-500 text-sm font-semibold bg-red-100 border border-red-400 rounded-xl px-3 py-2 shadow-md animate-fade-in max-w-xs sm:max-w-sm whitespace-normal block">
                        {error[fields.name]}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-5">
                {model_ui.signup_fields.map((fields, id) => (
                  <div className="w-[400px] px-2" key={id}>
                    <input
                      value={data[fields.name]}
                      name={fields.name}
                      onChange={(e) => Signuphandler(e)}
                      className="border border-black-4 rounded-xl my-3 px-5 py-3 bg-gray-100/30 w-full capitalize"
                      type={fields.type}
                      placeholder={fields.placeholder}
                    />
                    {error && error[fields.name] && (
                      <span className="text-red-500 text-sm font-semibold bg-red-100 border border-red-400 rounded-xl px-3 py-2 shadow-md animate-fade-in max-w-xs sm:max-w-sm whitespace-normal block">
                        {error[fields.name]}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}
            <div className="w-full flex flex-col gap-3 items-center mt-2 border-b border-black-1 px-8">
              {showmodel ? (
                <button
                  onClick={handleLogin}
                  className="border w-full bg-blue-400 text-lg font-semibold text-white-1 rounded-xl bg- capitalize py-3"
                >
                  login
                </button>
              ) : (
                <button
                  onClick={handleSignup}
                  className="border w-full bg-blue-400 text-lg font-semibold text-white-1 rounded-xl bg- capitalize py-3"
                >
                  signup
                </button>
              )}
              <div className="flex gap-2 mb-2">
                <span className="text-sm text-gray-600">
                  {showmodel
                    ? model_ui.sign_up.comment
                    : model_ui.login.comment}
                </span>
                <button
                  onClick={() => setShowModel(!showmodel)}
                  className="text-xs text-red-500 capitalize"
                >
                  {showmodel ? "sign up " : "login"}
                </button>
              </div>
            </div>
            <div className="flex gap-3 mt-5 border w-full items-center justify-center border-black-2 rounded-xl py-3">
              <Image
                src={model_ui.google.icon}
                alt="google"
                width={20}
                height={20}
              />

              <span>{model_ui.google.comment}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Authmodel;
