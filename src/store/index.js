import React from "react";
import { action, observable } from "mobx";
import AuthStore from "./auth";
import LoanStore from "./loan";

class Store {
  constructor(){
  this.auth= new AuthStore(this);
  this.loan= new LoanStore(this);
  }
}

export const stores = new Store();

/* Store helpers */
const StoreContext = React.createContext();
 
export const StoreProvider = ({ children}) => {
  return (
    <StoreContext.Provider value={stores}>{children}</StoreContext.Provider>
  );
};
 
/* Hook to use store in any functional component */
export const useStore = () => React.useContext(StoreContext);
 
