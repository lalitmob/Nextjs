import TemplateApi from "@/app/api/Template";
import { TemplateModelConst } from "@/constant/Userpage";
import React, { useState } from "react";
interface formDataVal {
  [key: string]: string | [string] | number;
}
const TemplateForm = () => {
  const [formData, setFormData] = useState<formDataVal>({
    productName: "",
    price: 0,
    category: "",
    description: "",
    features: [""],
    technologies: [""],
    imageUrl: "",
  });
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      if (name === "technologies" || name === "features") {
        return { ...prev, [name]: value.split(",").map((item) => item.trim()) };
      }
      if (name === "price") {
        return { ...prev, [name]: Number(value) };
      }
      return { ...prev, [name]: value };
    });
  };
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      productName: formData.productName,
      price: formData.price,
      about: {
        category: formData.category,
        description: formData.description,
        features: formData.features,
        technologies: formData.technologies,
      },
      imageUrl: formData.imageUrl,
    };
    TemplateApi.addTemplate(data);
  };

  return (
    <form
      onSubmit={(e) => submitHandler(e)}
      className="flex flex-col gap-4 p-4 border rounded-lg"
    >
      {TemplateModelConst.fields.map((data, index) => (
        <input
          key={index}
          name={data.name}
          value={formData[data.name]}
          onChange={(e) => onChangeHandler(e)}
          type={data.type}
          required
          placeholder={data.label}
          className="px-3 py-3 text-lg rounded-xl"
        />
      ))}

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default TemplateForm;
