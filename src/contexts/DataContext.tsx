import React, { createContext, useContext } from "react";
import { useQuery } from "react-query";
import useSound from "use-sound";

import { OrderT, ResponseT } from "../interfaces/DataTypes";
import { getData } from "../utils/queries";
import { ConfigContext } from "./ConfigContext";

export type ThemeMode = "light" | "dark";

type ContextProps = {
  isLoading: boolean;
  dataUpdatedAt: number;
  isFetching: boolean;
  orders: OrderT[] | undefined;
  pending: number | undefined;
  accepted: number | undefined;
};

export const DataContext = createContext<Partial<ContextProps>>({});

const DataProvider: React.FC = ({ children }) => {
  const { volume, fetchInterval } = useContext(ConfigContext);
  const [play] = useSound("/bell.mp3", {
    volume,
  });
  const { isLoading, data, dataUpdatedAt, isFetching } = useQuery<ResponseT>(
    "data",
    getData,
    {
      refetchInterval: fetchInterval * 1000,
      refetchOnWindowFocus: false,

      isDataEqual: (oldData, newData) => {
        if (!oldData) {
          return false;
        } else {
          if (newData?.data.length > oldData?.data.length) {
            play();
            return false;
          }

          return false;
        }
      },
    }
  );
  return (
    <DataContext.Provider
      value={{
        orders: data?.data,
        pending: data?.pending,
        accepted: data?.accepted,
        isLoading,
        dataUpdatedAt,
        isFetching,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
