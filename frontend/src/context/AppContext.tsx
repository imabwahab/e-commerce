import { createContext, useEffect, useMemo, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { dummyProducts, type Product } from "../assets/assets";

interface AppContextType {
  products: Product[],
  wishList: Record<string, boolean>,
  cartItems: Record<string, number>
  toggleWishList: (itemId: string) => void,
  addToCart: (itemId: string) => void,
  removeFromCart: (itemId: string) => void,
  deleteFromCart: (itemId: string) => void,
  navigate: ReturnType<typeof useNavigate>,
  search: string,
  setSearch: Dispatch<SetStateAction<string>>,
  filteredProducts: Product[],
  aToZ: () => void,
  zToA: () => void,
  lowestPrice: () => void,
  highestPrice: () => void
}

interface AppContextProviderProps {
  children: ReactNode
}

export const AppContext = createContext<AppContextType>({
  products: [],
  wishList: {},
  cartItems: {},
  toggleWishList: () => { },
  navigate: () => { },
  addToCart: () => { },
  removeFromCart: () => { },
  deleteFromCart: () => { },
  search: '',
  setSearch: () => { },
  filteredProducts: [],
  aToZ: () => { },
  zToA: () => { },
  lowestPrice: () => { },
  highestPrice: () => { }

});

export const AppContextProvider = ({ children }: AppContextProviderProps) => {

  const [products, setProducts] = useState<Product[]>([]);
  const [wishList, setWishList] = useState<Record<string, boolean>>({});
  const [cartItems, setCartItems] = useState<Record<string, number>>({});
  const [search, setSearch] = useState<string>('');

  const navigate = useNavigate();

  // function to get products
  const fetchProducts = async () => {
    setProducts(dummyProducts);
  }


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

  // Applying search filtering
  const filteredProducts = useMemo(() => {
    return products.filter(product =>
      product.name.toLowerCase().includes(search.toLowerCase())
    )
  }, [search, products]);

  // function to sort the products according to their name in ascending order
  const aToZ = () => {
    setProducts(prev =>
      [...prev].sort((a, b) => a.name.localeCompare(b.name))
    );
  }

  // function to sort products according to their name in descending order
  const zToA = () => {
    setProducts(prev =>
      [...prev].sort((a, b) => b.name.localeCompare(a.name))
    )
  }

  // function to sort products according to their prices from lowest to highest
  const lowestPrice = () => {
    setProducts(prev =>
      [...prev].sort((a, b) => a.offerPrice - b.offerPrice)
    );
  }

  // function to sort product according to their prices from highest to lowest
  const highestPrice = () => {
    setProducts(prev =>
      [...prev].sort((a, b) => b.offerPrice - a.offerPrice)
    )
  }


  useEffect(() => {
    fetchProducts();
  }, [search])

  const value: AppContextType = { products, wishList, toggleWishList, navigate, cartItems, addToCart, removeFromCart, deleteFromCart, search, setSearch, filteredProducts, aToZ, zToA, lowestPrice, highestPrice };
  return <AppContext.Provider value={value}>
    {children}
  </AppContext.Provider>
}