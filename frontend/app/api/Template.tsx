import axios from "axios";
import React from "react";
interface formDataVal {
  [key: string]: string | [string] | number;
}
const token = localStorage.getItem("token");
const TemplateApi = {
  addTemplate: async (data: formDataVal) => {
    try {
      console.log(data);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/add`,
        { data },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 201) {
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  },
};

export default TemplateApi;
