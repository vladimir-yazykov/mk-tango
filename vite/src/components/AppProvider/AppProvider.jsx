import { useState } from "react";
import { AppContext } from "../../lib/AppContext";
import { Provider } from "react-redux";
import { store } from "../../store";

export function AppProvider({ children }) {
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);
  const value = {
    showSubscribeModal,
    setShowSubscribeModal,
  };
  return (
    <Provider store={store}>
      <AppContext.Provider value={value}>{children}</AppContext.Provider>
    </Provider>
  );
}
