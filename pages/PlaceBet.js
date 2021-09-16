import {
  Box,
  RangeInput,
  Button,
  TextInput,
  FormField,
  Text,
  Heading,
} from "grommet";
import { React } from "react";
import "../styles/Home.module.css";

export default function PlaceBet(props) {
  const suggestionsBet = ["1k $LLTH", "10k $LLTH", "100k $LLTH"];

  const onSuggestionSelectBet = (event) => {
    switch (event.suggestion) {
      case "1k $LLTH":
        props.setValueBet(1000);
        break;
      case "10k $LLTH":
        props.setValueBet(10000);
        break;
      case "100k $LLTH":
        props.setValueBet(100000);
        break;
      default:
        props.setValueBet("");
    }
  };

  return (
    <Box width="300px" height="300px">
      <FormField required={true} name="betAmount" htmlFor="textinput-id">
        <TextInput
          suggestions={suggestionsBet}
          onSuggestionSelect={onSuggestionSelectBet}
          size="small"
          name="betAmount"
          placeholder="Bet Amount"
          value={props.valueBet}
          onChange={(event) => props.setValueBet(event.target.value)}
          icon={
            <Text color="#fff" weight="bold" size="medium">
              $LLTH
            </Text>
          }
          reverse
        />
      </FormField>
      <FormField name="autoCashOut" htmlFor="textinput-id">
        <RangeInput
          min="2"
          max="25"
          value={props.multiplier}
          onChange={(value) => {
            props.setMultiplier(value.target.value);
          }}
        />
        <Heading color="#fff" textAlign="center">
          {props.multiplier + "x"}
        </Heading>
      </FormField>
      <Box gap="small" animation={[{ type: "zoomOut" }]}>
        <Button
          secondary
          fill={true}
          type="submit"
          label={
            <Text align="center" size="xlarge" color="#fff">
              SPIN!
            </Text>
          }
          color="#9933FF"
          onClick={() => props.placeBet()}
        />
      </Box>
    </Box>
  );
}
