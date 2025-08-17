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
      <Menu>
        <MenuButton as={Button}>{language}</MenuButton>
        <MenuList
          zIndex={1500}
          bg="#23263b"
          color="white"
          border="none"
          boxShadow="lg"
          borderRadius="md"
          opacity={1}
          portalProps={{}}
        >
          {languages.map(([language, version]) => (
            <MenuItem
              onClick={() => onSelect(language)}
              key={language}
              _hover={{ bg: "#363a5c", color: "white" }}
              bg="#23263b"
              color="white"
              minWidth="220px"
              px={6}
              py={4}
            >
              {language}
              &nbsp;
              <Text as="span" color="gray.600" fontSize="sm">
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
