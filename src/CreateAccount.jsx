import React from "react";
import { Button, Card } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ethers } from "ethers";

function CreateAccount(props) {
  const { setSeedPhrase, setWallet } = props;
  const [newSeedPhrase, setNewSeedPharse] = useState(null);
  const navigate = useNavigate();

  function genrateWallet() {
    const mnemonic = ethers.Wallet.createRandom().mnemonic.phrase;
    setNewSeedPharse(mnemonic);
  }
  function setWalletAndMnemonic() {
    setSeedPhrase(newSeedPhrase);
    setWallet(ethers.Wallet.fromPhrase(newSeedPhrase).address);
    // setWallet(ethers.Wallet.fromMnemonic(newSeedPhrase).address);
  }

  return (
    <>
      <div className="content">
        <div className="mnemonic">
          <ExclamationCircleOutlined style={{ fontSize: "20px" }} />
          <div>
            once you genrate the seed phrase,save it suerly in oder to recoverr
            your wallet
          </div>
        </div>
        <Button
          className="frontPageButton"
          type="primary"
          onClick={() => genrateWallet()}
        >
          Genrate seed Pharase
        </Button>
        <Card className="seedPhraseContainer">
          {newSeedPhrase && (
            <pre style={{ whiteSpace: "pre-wrap" }}>{newSeedPhrase}</pre>
          )}
        </Card>
        <Button
          className="frontPageButton"
          type="default"
          any
          onClick={() => {
            setWalletAndMnemonic();
            navigate("/walletview", {
              state: {
                newSeedPhrase,
              },
            });
          }}
        >
          Open your New Wallet 2
        </Button>
        <p className="frontPageBottom" onClick={() => navigate("/")}>
          Back Home
        </p>
      </div>
    </>
  );
}

export default CreateAccount;
