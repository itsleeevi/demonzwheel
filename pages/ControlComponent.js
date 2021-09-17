import { Box, Form, Text, Heading, Spinner, Button } from "grommet";
import { React } from "react";
import { Grommet } from "grommet";
import { grommet } from "grommet/themes";
import { deepMerge } from "grommet/utils";
import "../styles/Home.module.css";
import ConnectMetaMask from "./ConnectMetaMask";
import PlaceBet from "./PlaceBet";

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
    font: {
      family: "Silkscreen",
    },
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

function ControlComponent(props) {
  return (
    <Grommet
      theme={deepMerge(grommet, customTheme)}
      style={{
        backgroundColor: "#140A1F",
      }}
    >
      <Form
        onSubmit={() => {
          props.setValueBet(undefined);
        }}
      >
        <Box
          direction="column"
          gap="xxsmall"
          pad="medium"
          animation={{ type: "fadeIn", duration: 390 }}
        >
          {props.connected === true ? (
            <>
              {props.state === State.NOTSTARTED && (
                <Box
                  width="300px"
                  height="300px"
                  align="center"
                  justify="center"
                >
                  <Heading textAlign="center">
                    Wait until the next round!
                  </Heading>
                </Box>
              )}
              {props.state === State.BETTING && (
                <PlaceBet
                  valueBet={props.valueBet}
                  setValueBet={props.setValueBet}
                  multiplier={props.multiplier}
                  setMultiplier={props.setMultiplier}
                  connected={props.connected}
                  setConnected={props.setConnected}
                  placeBet={props.placeBet}
                />
              )}
              {props.state === State.WAITING && (
                <Box
                  width="300px"
                  height="300px"
                  align="center"
                  justify="center"
                >
                  <Text size="large" textAlign="center">
                    Waiting For Transaction...
                  </Text>
                </Box>
              )}
              {props.state === State.SPINNING && (
                <Box
                  width="300px"
                  height="300px"
                  align="center"
                  justify="center"
                >
                  <Heading>Spinning...</Heading>
                  <Spinner size="xlarge" color="#9832FE" />
                </Box>
              )}
              {props.state === State.COMPLETED && (
                <Box
                  width="300px"
                  height="300px"
                  align="center"
                  justify="center"
                >
                  {props.placedBet === true && (
                    <>
                      {props.multiplier.toString() ===
                        props.winningMultiplier && (
                        <>
                          <Heading>You Won!</Heading>
                          <Text size="medium">
                            Your Multiplier: {props.multiplier}
                          </Text>
                          <Text size="medium">
                            {" "}
                            Winning Multiplier: {props.winningMultiplier}
                          </Text>
                          <Text size="small" textAlign="center">
                            {" "}
                            You will receive your prize within a few seconds.
                          </Text>
                        </>
                      )}
                      {props.multiplier.toString() !==
                        props.winningMultiplier && (
                        <>
                          <Heading textAlign="center">You Lost!</Heading>
                          <Text size="medium">
                            Your Multiplier: {props.multiplier}
                          </Text>
                          <Text size="medium">
                            Winning Multiplier: {props.winningMultiplier}
                          </Text>
                        </>
                      )}
                      <br />
                      <Box gap="small" animation={[{ type: "zoomOut" }]}>
                        <Button
                          secondary
                          fill={true}
                          type="submit"
                          label={
                            <Text align="center" size="xlarge" color="#fff">
                              New Game
                            </Text>
                          }
                          color="#9933FF"
                          onClick={() => props.setState(State.BETTING)}
                        />
                      </Box>
                    </>
                  )}
                  {props.placedBet === false && (
                    <>
                      <Heading>{"You have not placed bet!"}</Heading>
                      <Text size="medium">
                        Winning Multiplier: {props.winningMultiplier}
                      </Text>
                    </>
                  )}
                </Box>
              )}
            </>
          ) : (
            <ConnectMetaMask connect={props.connect} />
          )}
        </Box>
      </Form>
    </Grommet>
  );
}

export default ControlComponent;
