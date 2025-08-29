import { Box, Flex } from "@chakra-ui/react";
import CodeEditor from "./components/CodeEditor";
import Footer from "./components/Footer";

function App() {
  return (
    <Flex direction="column" minH="100vh" bg="#0f0a19" color="gray.500">
      <Box flex="1" px={6} py={8}>
        <CodeEditor />
      </Box>
      <Footer />
    </Flex>
  );
}

export default App;
