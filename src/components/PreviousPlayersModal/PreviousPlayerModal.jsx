import {
  Heading,
  Image,
  ListItem,
  UnorderedList,
  chakra,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
} from "@chakra-ui/react";
import React from "react";
import car from "../../assets/hotewheel.png";
import { RxCross2 } from "react-icons/rx";

const PreviousPlayerModal = ({ open, close, setOpen }) => {
  const pageSize = 20;
  const [page, setPage] = React.useState(0);
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
  return (
    <>
      <Modal isOpen={open} onClose={open}>
        <ModalOverlay />
        <ModalContent
          height={{ base: "80vh", md: "50vh" }}
          sx={{
            overflowY: "auto",
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
          <ModalHeader
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Text fontSize={"1.5rem"}>Previous Winners</Text>
            <RxCross2
              onClick={() => setOpen(false)}
              color="#fff"
              fontSize={"1.5rem"}
              display={{ base: "block", md: "block" }}
            />
          </ModalHeader>
          <ModalCloseButton />

          <chakra.div
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            width={"100%"}
            p={2}
            gap={"1rem"}
            sx={
              {
                //   height: "100%", // Set the height to 100% to fill the available space
                //   overflowY: "auto", // Enable vertical scrolling when content overflows
                //   overflowX: "hidden", // Disable horizontal scrolling
              }
            }
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
                    textShadow={"0px 0px 2px #1A9EFC"}
                    fontWeight={600}
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
        </ModalContent>
      </Modal>
    </>
  );
};

export default PreviousPlayerModal;
