import { useContext } from "react";
import { MyContext } from "./ContextProvider";

const useAll = () => useContext(MyContext);

export default useAll;
