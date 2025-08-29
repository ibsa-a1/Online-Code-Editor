import { Box, Flex } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import React, { useState, useRef } from "react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "../constants";
import Output from "./Output";

const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("javascript");

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  return (
    <Flex direction={{ base: "column", md: "row" }} gap={4} w="100%">
      <Box
        w={{ base: "100%", md: "50%" }}
        h={{ base: "80vh", md: "75vh" }}
        overflowY="auto"
      >
        <LanguageSelector language={language} onSelect={onSelect} />
        <Editor
          height="100%"
          theme="vs-dark"
          language={language}
          defaultValue={CODE_SNIPPETS[language]}
          onMount={onMount}
          value={value}
          onChange={(value) => setValue(value)}
        />
      </Box>

      <Output
        editorRef={editorRef}
        language={language}
        w={{ base: "100%", md: "50%" }}
        h={{ base: "80vh", md: "75vh" }}
      />
    </Flex>
  );
};

export default CodeEditor;
