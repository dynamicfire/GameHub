import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useHotkeys } from "react-hotkeys-hook";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  // const keyBg = useColorModeValue("gray.200", "gray.600");

  // useHotkeys(
  //   "command+k",
  //   () => {
  //     ref.current && ref.current.focus();
  //   },
  //   [],
  //   { splitKey: "+" }
  // );

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) {
          onSearch(ref.current.value);
        }
      }}
    >
      <Flex justifyContent={"space-between"}>
        <InputGroup>
          <InputLeftElement children={<BsSearch />} />
          <Input
            ref={ref}
            borderRadius={20}
            placeholder="Search games..."
            variant="filled"
          />
        </InputGroup>
        {/* <Box mt={2} display="flex" alignItems="center">
          <Box as="kbd" bg={keyBg} borderRadius="md" px={2} mx={1}>
            cmd
          </Box>
          <Text>+</Text>
          <Box as="kbd" bg={keyBg} borderRadius="md" px={2} mx={1}>
            k
          </Box>
        </Box> */}
      </Flex>
    </form>
  );
};

export default SearchInput;
