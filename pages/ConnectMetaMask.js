import { Box, Button, Text } from "grommet";
import { useEffect, useState } from "react";

function ConnectMetaMask(props) {
  return (
    <Box
      gap="small"
      animation={[{ type: "zoomOut" }]}
      width="300px"
      height="250px"
      justify="center"
    >
      <Box alignSelf="center" justify="center">
        <Button
          secondary
          fill={true}
          type="submit"
          label={
            <Text size="xlarge" color="#fff">
              CONNECT
            </Text>
          }
          onClick={() => props.connect()}
          color="#9933FF"
        />
      </Box>
    </Box>
  );
}

export default ConnectMetaMask;
