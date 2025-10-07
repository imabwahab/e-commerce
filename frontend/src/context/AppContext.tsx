import { createContext, useEffect, useState, type ReactNode } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

interface AppContextType {
  wishList: Record<string, boolean>,
  toggleWishList: (itemId: string) => void;
  navigate: ReturnType<typeof useNavigate>;
}

interface AppContextProviderProps {
  children: ReactNode
}

export const AppContext = createContext<AppContextType>({
  wishList: {},
  toggleWishList: () => { },
  navigate: () => { }
});

export const AppContextProvider = ({ children }: AppContextProviderProps) => {

  const [wishList, setWishList] = useState<Record<string, boolean>>({});

  const navigate = useNavigate();


  const toggleWishList = (itemId: string) => {
    setWishList((prev) => {
      const isInWishList = !!prev[itemId];
      const updatedWishList = { ...prev, [itemId]: !isInWishList };

      // Show toast after update
      setTimeout(() => {
        if (isInWishList) {
          toast.error("Removed from wishlist");
        } else {
          toast.success("Added to wishlist");
        }
      }, 0);

      return updatedWishList;
    });
  };


  useEffect(() => {
    console.log(wishList)
  }, [wishList])

  const value: AppContextType = { wishList, toggleWishList, navigate };
  return <AppContext.Provider value={value}>
    {children}
  </AppContext.Provider>
}