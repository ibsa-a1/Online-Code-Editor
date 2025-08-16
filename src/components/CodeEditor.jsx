import { Box } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import React, { useState } from "react";

const CodeEditor = () => {
  const [value, setValue] = useState("");
  return (
    <Box>
      <Editor
        height="75vh"
        theme="vs-dark"
        defaultLanguage="javascript"
        defaultValue="// some comment"
        value={value}
        onChange={(value) => setValue(value)}
      />
      ;
    </Box>
  );
};

export default CodeEditor;
