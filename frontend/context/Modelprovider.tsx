import React, { ReactNode } from "react";
import { createContext, useRef } from "react";
type sectionName = "pricing" | "contact" | "features" | "ourClient" | string;
interface ModelContexType {
  handlescroll: (field: sectionName) => void;
  sectionRef: Record<sectionName, React.RefObject<HTMLDivElement>>;
}
export const modelContext = createContext<ModelContexType | null>(null);

const Modelprovider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const pricingRef = useRef<HTMLDivElement>(null!);
  const contactRef = useRef<HTMLDivElement>(null!);
  const featureRef = useRef<HTMLDivElement>(null!);
  const clientRef = useRef<HTMLDivElement>(null!)
  const sectionRef: Record<sectionName, React.RefObject<HTMLDivElement>> = {
    pricing: pricingRef,
    contact: contactRef,
    features: featureRef,
    ourClient : clientRef
  };

  const handlescroll = (field: sectionName) => {
    console.log("Checking field:", field);
    console.log(
      "Current ref:",
      sectionRef[field]?.current?.getAttribute("data-name")
    );
    if (sectionRef[field]?.current?.getAttribute("data-name") === field) {
      sectionRef[field].current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <modelContext.Provider value={{ handlescroll, sectionRef }}>
      {children}
    </modelContext.Provider>
  );
};

export default Modelprovider;
