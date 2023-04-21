import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <HStack>
      <Switch colorScheme="green" isChecked={isDark} onChange={toggleColorMode} />
      <Text>Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
