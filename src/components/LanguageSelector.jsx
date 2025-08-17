import { Box, Button, Text } from "@chakra-ui/react";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { LANGUAGE_VERSIONS } from "../contstants.js";

const languages = Object.entries(LANGUAGE_VERSIONS);

const LanguageSelector = ({ language, onSelect }) => {
  return (
    <Box ml={2} mb={4}>
      <Text mb={2} fontSize="lg">
        Language:
      </Text>
      <Menu isLazy>
        <MenuButton as={Button}>{language}</MenuButton>
        <MenuList
          zIndex={1500}
          // bg="#23263b"
          // color="white"
          border="none"
          boxShadow="lg"
          borderRadius="md"
          opacity={1}
          portalProps={{}}
        >
          {languages.map(([lang, version]) => (
            <MenuItem
              onClick={() => onSelect(lang)}
              key={lang}
              color={lang === language ? "#3B82F6" : "white"}
              bg={lang === language ? "#34374b" : "#43476a"}
              _hover={{ color: "#3B82F6", bg: "#34374b" }}
              minWidth="220px"
              px={6}
              py={4}
            >
              {lang}
              &nbsp;
              <Text as="span" color="gray.400" fontSize="sm">
                ({version})
              </Text>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default LanguageSelector;
