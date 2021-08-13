import React from "react";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { useWeb3React } from "@web3-react/core";
import "./App.css";

export enum SupportedChainId {
  MAINNET = 1,
}

const NETWORK_URLS: { [key in SupportedChainId]: string } = {
  [SupportedChainId.MAINNET]: "https://main-light.eth.linkpool.io/",
};

export const walletconnect = new WalletConnectConnector({
  rpc: NETWORK_URLS,
  qrcode: true,
});

export const App = () => {
  const { activate } = useWeb3React();

  return (
    <div className="App">
      {import.meta.env.DEV && (
        <p>You're in dev mode, so clicking the button below shows a QR code</p>
      )}

      {import.meta.env.PROD && (
        <>
          <p>You're in prod mode, so clicking the button below fails with:</p>
          <pre>
            ReferenceError: require is not defined <br />
            at index.6c14cda2.js:11138
          </pre>
        </>
      )}

      <button
        onClick={() => {
          activate(walletconnect, (error) => console.error(error));
        }}
      >
        Click to Reproduce
      </button>
    </div>
  );
};

export default App;
