import React, { useEffect } from "react";
import wheelImg from "../styles/assets/wheel.png";
import markerImg from "../styles/assets/marker.png";
import { Box, Button, Text, Stack } from "grommet";
import Image from "next/image";
import "../styles/Home.module.css";
import { useSpring, animated, Controller } from "react-spring";
import * as easings from "d3-ease";
import { useState } from "react";
import { ClientRequest } from "http";

function WheelComponent() {
  const [show, setShow] = useState(false);
  const animations = useSpring(
    show
      ? {
          from: { rotateZ: 0 },
          to: { rotateZ: 3500 },
          config: { duration: 10000, easing: easings.easeQuadOut },
        }
      : {}
  );

  return (
    <>
      <Box direction="column" gap="medium">
        <Box height="medium" width="medium" margin="0px">
          <Stack anchor="top">
            <animated.div
              style={{
                width: 390,
                height: 390,

                borderRadius: 16,
                ...animations,
              }}
            >
              <Image
                className="wheel"
                height="470px"
                width="470px"
                src={wheelImg}
              />
            </animated.div>

            <Box height="100px" width="40px" margin={{ top: "-20px" }}>
              <Image className="marker" fit="cover" src={markerImg} />
            </Box>
          </Stack>
        </Box>
        <Button
          alignSelf="center"
          secondary
          type="submit"
          label={
            <Text align="center" size="xlarge" color="#fff">
              Spin!
            </Text>
          }
          color="#9933FF"
          onClick={() => {
            setShow((show) => !show);
          }}
        />
      </Box>
    </>
  );
}

export default WheelComponent;
