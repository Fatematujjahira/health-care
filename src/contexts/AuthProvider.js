import { createContext } from "react";
// import useCart from "../hooks/useCart.js";
import useFirebase from "../hooks/useFirebase";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // hooks
  const AllContexts = useFirebase();
  
//   const { addToCart, selectedCourse, remove, setSelectedCourse } = useCart();

  const data = {
    AllContexts,
    // courses,
    // addToCart,
    // selectedCourse,
    // remove,
    // setSelectedCourse,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;