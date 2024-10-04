import React, { useEffect, useState } from "react";

import {
  Divider,
  Tooltip,
  List,
  Avatar,
  Spin,
  Tabs,
  Input,
  Button,
} from "antd"; // Remove these if they are unused
// import { symbol } from "prop-types";
import { LogoutOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

// import axios from "axios";

const tokens = [
  {
    symbol: "ETH",
    name: "Ethereum",
    balance: 10000000000,
    decimals: 18,
  },
  {
    symbol: "LINK",
    name: "Chainlink",
    balance: 10000000000,
    decimals: 18,
  },
  {
    symbol: "UNI",
    name: "Uniswap",
    balance: 10000000000,
    decimals: 18,
  },
];

// const [setTokens] = useState(null);
// const [nfts, setNfts] = useState(null);
// const [balance, setBalance] = useState(0);
// const [fetching, setFetching] = useState(false);

// const getAccountTokens = async () => {
//   setFetching(true);

//   const res = await axios.get("http://localhost:3001/getTokens", {
//     params: {
//       userAddress: wallet,
//       chain: selectedChain,
//     },
//   });

//   const response = res.data;

//   if (response.tokens.length > 0) {
//     setTokens(response.tokens.length); // Updated to set the correct value
//   }

//   if (response.nfts.length > 0) {
//     setNfts(response.nfts.length); // Updated to set the correct value
//   }

//   setBalance(response.balance);
//   setFetching(false);
// };

// useEffect(() => {
//   if (!wallet || !selectedChain) return;
//   setNfts(null);
//   setTokens(null);
//   setBalance(0);
//   getAccountTokens();
// }, [wallet, selectedChain]); // Added wallet and selectedChain as dependencies

function WalletView({
  wallet,
  setWallet,
  seedPhrase,
  setSeedPhrase,
  selectedChain,
}) {
  const navigate = useNavigate();

  function logout() {
    setSeedPhrase(null); // Corrected the typo from setSeedPharase to setPhrase
    setWallet(null);
    navigate("/");
  }

  return (
    <>
      <div className="content">
        <div className="logoutButton" onClick={logout}>
          <LogoutOutlined />
        </div>
        {wallet}
      </div>
    </>
  );
}

export default WalletView;
