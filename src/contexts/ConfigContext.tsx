import React, {
  ChangeEventHandler,
  createContext,
  useCallback,
  useState,
} from "react";

type ContextProps = {
  changeVolume: ChangeEventHandler<HTMLInputElement>;
  volume: number;
  fetchInterval: any;
  setFetch: (option: any) => void;
  toastStatus: TOAST_STATUS;
  setToastStatus: React.Dispatch<React.SetStateAction<TOAST_STATUS>>;
  handleCloseToast: () => void;
  handleToggleDrawer: () => void;
  drawerOpen: boolean;
};

export const ConfigContext = createContext<Partial<ContextProps>>({});
export type TOAST_STATUS = {
  open: boolean;
  text: string;
  fn: () => void;
  type: "success" | "error";
};
const ConfigProvider: React.FC = ({ children }) => {
  const [toastStatus, setToastStatus] = useState<TOAST_STATUS>({
    open: false,
    text: "",
    fn: () => {},
    type: "success",
  });
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [volume, setVolume] = useState(1);
  const [fetchInterval, setFetchInterval] = useState<number>(5);
  const setFetch = (option: any) => {
    setFetchInterval(parseInt(option));
  };
  const handleCloseToast = useCallback(() => {
    setToastStatus((prev) => ({
      ...prev,
      open: false,
    }));
  }, []);
  const changeVolume: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    setVolume(parseFloat(target.value));
  };
  const handleToggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <ConfigContext.Provider
      value={{
        changeVolume,
        fetchInterval,
        setFetch,
        volume,
        toastStatus,
        setToastStatus,
        handleCloseToast,
        drawerOpen,
        handleToggleDrawer,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
};

export default ConfigProvider;
