import { Button, HStack, Heading, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  return (
    <>
      <Heading fontSize={'2xl'} marginBottom={'5px'}>Genres</Heading>
      {error && null}
      {isLoading && <GenreListSkeleton />}
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="7px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit={'cover'}
                src={getCroppedImageUrl(genre.image_background, 600, 400)}
              ></Image>
              <Button
                whiteSpace={"normal"}
                textAlign={"left"}
                fontSize={"lg"}
                variant={"link"}
                onClick={() => {
                  onSelectGenre(genre);
                }}
                fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
