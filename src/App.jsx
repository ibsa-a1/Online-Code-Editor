import { Box } from "@chakra-ui/react";
import CodeEditor from "./components/CodeEditor";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Box minH="90vh" bg="#0f0a19" color="gray.500" px={6} py={8}>
        <CodeEditor />
      </Box>
      <Footer />
    </div>
  );
}

export default App;
