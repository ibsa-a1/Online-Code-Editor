import { Box, Button, Text } from "@chakra-ui/react";
import { useState } from "react";
import { executeCode } from "../api";

const Output = ({ editorRef, language }) => {
  const [output, setOutput] = useState(null);
  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) {
      return;
    }
    try {
      const { run: result } = await executeCode(language, sourceCode);
      setOutput(result.output);
    } catch (error) {}
  };

  return (
    <Box w="50%">
      <Text mb={2} fontSize="lg">
        Output
      </Text>
      <Button
        onClick={runCode}
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
        {output ? output : "Click 'Run Code' to see output"}
      </Box>
    </Box>
  );
};

export default Output;
