import { Box } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import React from "react";

const CodeEditor = () => {
  return (
    <Box>
      <Editor
        height="90vh"
        defaultLanguage="javascript"
        defaultValue="// some comment"
      />
      ;
    </Box>
  );
};

export default CodeEditor;
