import { Box, Button, Text } from "@chakra-ui/react";
import { Toaster, toaster } from "../components/ui/toaster";
import { useState } from "react";
import { executeCode } from "../api";

const Output = ({ editorRef, language }) => {
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) {
      return;
    }
    setIsLoading(true);
    try {
      const { run: result } = await executeCode(language, sourceCode);
      setOutput(result.output.split("\n"));
      result.stderr ? setIsError(true) : setIsError(false);
    } catch (error) {
      console.error(error);
      toaster.create({
        title: "An error occurred.",
        description: error.message || "Unable to run code",
        type: "error",
        duration: 6000,
        closable: true,
        position: "top-right",
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
        overflowY="auto"
        borderColor={isError ? "#EF4444" : "#fff"}
        p={2}
        border="1px solid"
        color={isError ? "#EF4444" : "#fff"}
        borderRadius={4}
      >
        {output
          ? output.map((line, i) => <Text key={i}>{line}</Text>)
          : "Click 'Run Code' to see output"}
      </Box>
      <Toaster />
    </Box>
  );
};

export default Output;
