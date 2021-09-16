import { Box } from "grommet";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import ControlComponent from "./ControlComponent";
import { grommet } from "grommet/themes";
import { Grommet, Heading } from "grommet";
import "../styles/Home.module.css";
import { deepMerge } from "grommet/utils";
import Web3 from "web3";
import Wheel from "../src/contracts/Wheel.json";
import LLTH from "../src/contracts/LLTH.json";

const State = {
  NOTSTARTED: 0,
  BETTING: 1,
  WAITING: 2,
  SPINNING: 3,
  COMPLETED: 4,
};

const customTheme = {
  rangeInput: {
    thumb: { color: "#29112c" },
    track: { color: "#fff" },
  },
  button: {
    border: {
      radius: "4px",
    },
    hover: {
      color: "#81FCED",
    },
  },

  global: {
    colors: {
      border: "#29112C",
      placeholder: "#fff",
      text: "#fff",
    },
    focus: {
      shadow: {
        color: "#33FFFF",
      },
      border: {
        color: "#9933FF",
      },
    },
    elevation: {
      light: {
        large: "#9933FF",
      },
      dark: {
        large: "#9933FF",
      },
    },
    drop: {
      background: "#29112C",
      elevation: "large",
      extend: `
     
          font-size: 14px;
          border-bottom-left-radius: 1px;
          border-bottom-right-radius: 1px;
          li {
            border-bottom: 1px solid rgba(0, 0, 0, 0.2);
          }
          overflow: hidden;
        `,
    },
  },
};

export default function Home() {
  const [valueBet, setValueBet] = useState(undefined);
  const [multiplier, setMultiplier] = useState(2);
  const [winningMultiplier, setWinningMultiplier] = useState(undefined);
  const [connected, setConnected] = useState(false);
  const [state, setState] = useState(State.BETTING);
  const [accounts, setAccounts] = useState([]);
  const [web3, setWeb3] = useState(undefined);
  const [contract, setContract] = useState(undefined);
  const [token, setToken] = useState(undefined);
  const [placedBet, setPlacedBet] = useState(false);
  const [owner, setOwner] = useState(undefined);
  const gameAddress = "0xA583Cb798ebe0f9C98Fb270a7C39109AD1ca9Fd7";
  const tokenAddress = "0xEf18BBAA98E55751c2983B976eB0540fe94E040D";

  useEffect(() => {
    const init = async () => {
      if (token !== undefined) {
        const balance = await token.methods.balanceOf(gameAddress).call();
        console.log("balance: ", balance);
      }
    };

    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      const owner = web3.eth.accounts.privateKeyToAccount(
        process.env.NEXT_PUBLIC_PRIVATE_KEY
      );
      setOwner(owner);
      setWeb3(web3);
      setContract(new web3.eth.Contract(Wheel.abi, gameAddress));
      setToken(new web3.eth.Contract(LLTH.abi, tokenAddress));

      init();
    }
  }, []);

  const connect = async () => {
    const accs = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setAccounts(accs);
  };

  useEffect(() => {
    if (accounts !== undefined && accounts.length > 0) {
      setConnected(true);
    } else {
      setConnected(false);
    }
  }, [accounts]);

  useEffect(() => {
    if (placedBet) setState(State.SPINNING);
  }, [placedBet]);

  useEffect(() => {
    if (state === State.BETTING) {
      setPlacedBet(false);
      setValueBet(undefined);
      setWinningMultiplier(undefined);
    } else if (state === State.SPINNING) {
      const getWinningMultiplier = async () => {
        const winningMultiplier = await contract.methods
          .winningMultiplierOf(accounts[0])
          .call();
        setWinningMultiplier(winningMultiplier);
      };
      getWinningMultiplier();
      const spinning = setTimeout(() => setState(State.COMPLETED), 5000);
      return () => clearTimeout(spinning);
    } else if (state === State.COMPLETED) {
      const closeRound = async () => {
        const tx = await contract.methods.closeRound(accounts[0]);
        await send(web3, owner, tx);
      };
      closeRound();
    }
  }, [state]);

  const placeBet = async () => {
    console.log("multi: ", multiplier);
    //setState(State.WAITING);

    if (
      (await token.methods.allowance(accounts[0], gameAddress).call()) <
      web3.utils.toWei(valueBet.toString(), "ether")
    ) {
      await token.methods
        .approve(
          gameAddress,
          web3.utils.toWei(web3.utils.toBN(100000000000), "ether")
        )
        .send({ from: accounts[0], gas: 3000000 });
    }
    await contract.methods
      .placeBet(web3.utils.toWei(valueBet.toString(), "ether"), multiplier)
      .send({ from: accounts[0], gas: 3000000 });

    setPlacedBet(true);
  };

  async function send(web3, account, transaction) {
    const options = {
      to: transaction._parent._address,
      data: transaction.encodeABI(),
      gas: 3000000,
    };
    const signed = await web3.eth.accounts.signTransaction(
      options,
      account.privateKey
    );
    const receipt = await web3.eth.sendSignedTransaction(signed.rawTransaction);
    return receipt;
  }

  return (
    <Grommet
      theme={deepMerge(grommet, customTheme)}
      style={{
        backgroundColor: "#000",
      }}
    >
      <Head>
        <title>Demonz Wheel</title>
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <Heading size="large" color="#fff">
            Demonz Wheel
          </Heading>

          <div className={styles.grid}>
            <Box
              direction="row"
              border={{ color: "#29112c", size: "large" }}
              pad="medium"
            >
              <ControlComponent
                valueBet={valueBet}
                setValueBet={setValueBet}
                multiplier={multiplier}
                setMultiplier={setMultiplier}
                connected={connected}
                setConnected={setConnected}
                state={state}
                setState={setState}
                connect={connect}
                placeBet={placeBet}
                winningMultiplier={winningMultiplier}
                placedBet={placedBet}
              />
            </Box>
          </div>
        </main>

        <footer className={styles.footer}>
          <a href="https://cryptodemonz.com/">Powered by Crypto Demonz</a>
        </footer>
      </div>
    </Grommet>
  );
}
