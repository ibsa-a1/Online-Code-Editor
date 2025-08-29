import { Box, Button, Text } from "@chakra-ui/react";
import { Toaster, toaster } from "../components/ui/toaster";
import { useState } from "react";
import { executeCode } from "../api";

const Output = ({ editorRef, language, w, h }) => {
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;

    setIsLoading(true);
    try {
      const { run: result } = await executeCode(language, sourceCode);
      setOutput(result.output.split("\n"));
      setIsError(Boolean(result.stderr));
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
    <Box
      w={w}
      h={h}
      overflowY="auto"
      display="flex"
      flexDirection="column"
      gap={2}
    >
      <Text fontSize="lg">Output</Text>
      <Button
        onClick={runCode}
        isLoading={isLoading}
        color="#16A34A"
        borderColor="#16A34A"
        border="1px solid"
        _hover={{ bg: "#1F2937" }}
      >
        {isLoading ? "Running..." : "Run Code"}
      </Button>
      <Box
        flex="1"
        overflowY="auto"
        borderColor={isError ? "#EF4444" : "#fff"}
        border="1px solid"
        borderRadius={4}
        p={2}
        color={isError ? "#EF4444" : "#fff"}
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
