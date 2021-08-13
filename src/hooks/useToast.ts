import { useContext } from "react";
import { ConfigContext } from "../contexts/ConfigContext";

const useToast = () => {
  const { toastStatus, handleCloseToast, setToastStatus } =
    useContext(ConfigContext);

  return {
    toastStatus,
    setToastStatus,
    handleCloseToast,
  };
};

export default useToast;
