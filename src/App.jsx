// import { useState } from "react";
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import "./App.css";
import { useState } from "react";
import logo from "/icon32.png";
import { Select } from "antd";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home.jsx";
import RecoverAccount from "./RecoverAccount.jsx";
import CreateAccount from "./CreateAccount.jsx";
import WalletView from "./WalletView.jsx";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/createaccount",
//     element: <CreateAccount />,
//   },
//   {
//     path: "/recoveraccount",
//     element: <RecoverAccount />,
//   },
//   {
//     path: "/walletview",
//     element: <WalletView />,
//   },
// ]);

function App() {
  const [wallet, setWallet] = useState(null);
  const [seedPhrase, setSeedPhrase] = useState(null);
  const [selectedChain, setSelectedChain] = useState("0x1");

  return (
    <>
      <div className="App">
        <header>
          <img src={logo} className="headerLogo" alt="logo" />
          <Select
            onChange={(val) => {
              setSelectedChain(val);
            }}
            value={selectedChain}
            options={[
              {
                label: "Ethereum",
                value: "0x1",
              },
              {
                label: "Mumbai Testnet",
                value: "0x13881",
              },
              {
                label: "Polygon",
                value: "0x89",
              },
              {
                label: "Avalanche",
                value: "0xa86a",
              },
            ]}
            className="dropdown"
          />
        </header>
        {/* <RouterProvider router={router} /> */}
        {wallet && seedPhrase ? (
          <Routes>
            <Route
              path="/yourwallet"
              element={
                <WalletView
                  wallet={wallet}
                  setWallet={setWallet}
                  seedPhrase={seedPhrase}
                  setSeedPhrase={setSeedPhrase}
                  selectedChain={selectedChain}
                />
              }
            ></Route>
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/createaccount"
              element={
                <CreateAccount
                  setSeedPhrase={setSeedPhrase}
                  setWallet={setWallet}
                />
              }
            ></Route>
            <Route path="/recoveraccount" element={<RecoverAccount />}></Route>
            <Route
              path="/walletview"
              element={
                <WalletView
                  wallet={wallet}
                  setWallet={setWallet}
                  seedPhrase={seedPhrase}
                  setSeedPhrase={setSeedPhrase}
                  selectedChain={selectedChain}
                />
              }
            ></Route>
          </Routes>
        )}
      </div>
    </>
  );
}

export default App;
