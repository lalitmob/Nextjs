import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { createContext } from "react";
import { template } from "@/constant/Userpage";
interface dataItem {
  id: number;
  image: string;
  name: string;
  price: number;
  category: string;
  description: string;
  features: string[];
  technologies: string[];
  rating: number;
  reviews: number;
  livePreview: string;
  documentation: string;
  author: string;
}
interface contentDataValidation {
  data: dataItem[];
}
interface Datavalidation {
  listView: boolean;
  setListView: Dispatch<SetStateAction<boolean>>;
  contentData: contentDataValidation | null;
  setContentData: Dispatch<SetStateAction<contentDataValidation | null>>;
  filteredData: contentDataValidation | null;
  setFilteredData: Dispatch<SetStateAction<contentDataValidation | null>>;
  prompt: string;
  setPrompt: Dispatch<SetStateAction<string>>;
  displayData: contentDataValidation | null;
  setDisplayData: Dispatch<SetStateAction<contentDataValidation | null>>;
}
export const triggerContext = createContext<Datavalidation | undefined>(
  undefined
);

const Triggerprovider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [listView, setListView] = useState<boolean>(false);
  const [contentData, setContentData] = useState<contentDataValidation | null>(
    template
  );
  const [filteredData, setFilteredData] =
    useState<contentDataValidation | null>(null);
  const [prompt, setPrompt] = useState<string>("");
  const [displayData, setDisplayData] = useState<contentDataValidation | null>(
    template || { data: [] }
  );
  useEffect(() => {
    setContentData(template);
  }, []);
  const Data = {
    listView,
    setListView,
    contentData,
    setContentData,
    filteredData,
    setFilteredData,
    prompt,
    setPrompt,
    displayData,
    setDisplayData,
  };

  return (
    <triggerContext.Provider value={Data}>{children}</triggerContext.Provider>
  );
};

export default Triggerprovider;
