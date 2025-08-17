import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";

const Output = () => {
  return (
    <Box w="50%">
      <Text mb={2} fontSize="lg">
        Output
      </Text>
      <Button
        color="#16A34A"
        mb={4}
        borderColor="#16A34A"
        border="1px solid"
        _hover={{ bg: "#1F2937" }}
      >
        Run Code
      </Button>
      <Box
        height="75vh"
        borderColor="#333"
        p={2}
        border="1px solid"
        borderRadius={4}
      >
        test output
      </Box>
    </Box>
  );
};

export default Output;
