import {
  chakra,
  ChakraProvider,
  Heading,
  Image,
  ListItem,
  Stack,
  UnorderedList,
} from "@chakra-ui/react";
import * as React from "react";
import { render } from "react-dom";
import { Paginate } from "react-paginate-chakra-ui";
// import "focus-visible";
import car from "../../assets/hotewheel.png";
function PaginateApp() {
  const [page, setPage] = React.useState(0);
  const handlePageClick = (p: number) => setPage(p);
  const names = [
    "John Doe",
    "Jordan Smith",
    "michal Smith",
    "John Smith",
    "Mike jacob",
    "John Smith",
    "Sara Smith",
    "John Smith",
    "Ali jane",
    "John Smith",
    "Dave Smith",
    "John Smith",
    "Jane Doe",
    "John Smith",
    "Mike jacob",
    "John Smith",
    "Sara Smith",
    "John Smith",
    "Ali jane",
    "John Smith",
    "Dave Smith",
    "John Smith",
    "Jane Doe",
    "John Smith",
    "Mike jacob",
    "John Smith",
    "Sara Smith",
    "John Smith",
    "Ali jane",
    "John Smith",
    "Dave Smith",
    "John Smith",
    "Jane Doe",
    "John Smith",
    "Mike jacob",
    "John Smith",
    "Sara Smith",
    "John Smith",
    "Ali jane",
    "John Smith",
    "Dave Smith",
    "John Smith",
    "Jane Doe",
  ];
  const pageSize = 20;
  const pageCount = Math.ceil(names.length / pageSize); // Calculate the number of pages

  return (
    <Stack
      p={5}
      // overflow={"hidden"}
      w={"200px"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"start"}
      alignItems={"center"}
    >
      <Heading fontSize={"1.1rem"} textAlign={"left"} ml={-5}>
        Previous Winners
      </Heading>
      <chakra.div
        display={"flex"}
        flexDirection={"column"}
        p={2}
        gap={"1rem"}
        sx={{
          height: "100%", // Set the height to 100% to fill the available space
          overflowY: "auto", // Enable vertical scrolling when content overflows
          "&::-webkit-scrollbar": {
            width: "0.5rem",
          },
          "&::-webkit-scrollbar-track": {
            width: "0.5rem",
            background: "#171923",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "transparent",
            borderRadius: "24px",
          },
        }}
      >
        {names
          .slice(page * pageSize, page * pageSize + pageSize)
          .map((name) => (
            <UnorderedList fontSize={".8rem"} listStyleType={"none"}>
              <ListItem
                bg={"#1A202C"}
                p={1}
                pl={4}
                pr={4}
                rounded={"full"}
                display={"flex"}
                justifyContent={"space-between"}
                width={"200px"}
                alignItems={"center"}
                cursor={"pointer"}
                _hover={{
                  color: "gray.400",
                }}
              >
                <Image src={car} width={"60px"} height={"40px"} />
                {name}
              </ListItem>
            </UnorderedList>
          ))}
      </chakra.div>
      {/* <Paginate
        // required props 👇
        page={page}
        count={pageCount} // Use the calculated pageCount here
        pageSize={1}
        onPageChange={handlePageClick}
        // optional props 👇
        margin={2}
        shadow="lg"
        fontWeight="normal"
        variant="outline"
        // ...border and other props also work 💪
        border="2px solid #1A9EFC"
        // you can use w to adjust to parent
        // container
        // w="full"
      /> */}
    </Stack>
  );
}

export default PaginateApp;
