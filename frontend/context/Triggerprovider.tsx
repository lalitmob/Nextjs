import React, { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { createContext } from "react";
interface Datavalidation {
  listView : boolean,
  setListView : Dispatch<SetStateAction<boolean>>
}
export const triggerContext = createContext<Datavalidation | undefined>(undefined);

const Triggerprovider: React.FC<{children : ReactNode}> = ({children}) => {
  const [listView, setListView] = useState<boolean>(false);
  const Data = {
    listView,
    setListView,
  };

  return <triggerContext.Provider value={Data}>{children}</triggerContext.Provider>;
};

export default Triggerprovider;
