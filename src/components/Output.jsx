import { Box, Button, Text } from "@chakra-ui/react";
import { Toaster, toaster } from "../components/ui/toaster";
import { useState } from "react";
import { executeCode } from "../api";

const Output = ({ editorRef, language }) => {
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) {
      return;
    }
    setIsLoading(true);
    try {
      const { run: result } = await executeCode(language, sourceCode);
      setOutput(result.output);
    } catch (error) {
      console.error(error);
      toaster.create({
        title: "An error occurred.",
        description: error.message || "Unable to run code",
        type: "error",
        duration: 6000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box w="50%">
      <Text mb={2} fontSize="lg">
        Output
      </Text>
      <Button
        onClick={runCode}
        isLoading={isLoading}
        color="#16A34A"
        mb={4}
        borderColor="#16A34A"
        border="1px solid"
        _hover={{ bg: "#1F2937" }}
      >
        {isLoading ? "Running..." : "Run Code"}
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
      <Toaster />
    </Box>
  );
};

export default Output;
