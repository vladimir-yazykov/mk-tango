import { useState } from "react";
import "./App.css";
import { FirstScreen } from "./components/FirstScreen/FirstScreen";
import { AppContext } from "./lib/AppContext";
import { SubscribeModal } from "./components/SubscribeModal/SubscribeModal";

function App() {
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);
  const value = {
    showSubscribeModal,
    setShowSubscribeModal,
  };

  return (
    <AppContext.Provider value={value}>
      <FirstScreen />
      <SubscribeModal />
    </AppContext.Provider>
  );
}

export default App;
