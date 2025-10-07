import { createContext, useEffect, useState, type ReactNode } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

interface AppContextType {
  wishList: Record<string, boolean>,
  cartItems: Record<string, number>
  toggleWishList: (itemId: string) => void,
  addToCart: (itemId: string) => void,
  removeFromCart: (itemId: string) => void,
  deleteFromCart: (itemId: string) => void,
  navigate: ReturnType<typeof useNavigate>;
}

interface AppContextProviderProps {
  children: ReactNode
}

export const AppContext = createContext<AppContextType>({
  wishList: {},
  cartItems: {},
  toggleWishList: () => { },
  navigate: () => { },
  addToCart: () => { },
  removeFromCart: () => { },
  deleteFromCart: () => { }

});

export const AppContextProvider = ({ children }: AppContextProviderProps) => {

  const [wishList, setWishList] = useState<Record<string, boolean>>({});
  const [cartItems, setCartItems] = useState<Record<string, number>>({});

  const navigate = useNavigate();


  // function to handle wish list items
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

  // function to add items to cart
  const addToCart = (itemId: string) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = 1;
    }
    setCartItems(cartData);
    toast.success('added to cart')
  }

  // function to remove single item from cart
  const removeFromCart = (itemId: string) => {
    const cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      cartData[itemId] -= 1;
      if (cartData[itemId] === 0) {
        delete cartData[itemId];
      }
    }

    toast.success('removed from cart');
    setCartItems(cartData);
  }

  // function to delete item from cart
  const deleteFromCart = (itemId: string) => {
    const cartData = structuredClone(cartItems);

    delete cartData[itemId];

    setCartItems(cartData)

    toast.success('item deleted successfully.')
  }


  useEffect(() => {
    console.log(wishList);
    console.log(cartItems)
  }, [wishList, cartItems])

  const value: AppContextType = { wishList, toggleWishList, navigate, cartItems, addToCart, removeFromCart, deleteFromCart };
  return <AppContext.Provider value={value}>
    {children}
  </AppContext.Provider>
}