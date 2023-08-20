import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  Button,
  Container,
  Input,
  Text,
} from "@chakra-ui/react";
import "./style.css";
import { RxCross2 } from "react-icons/rx";
export default function ChatModal({ isOpen, onClose }) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent height={{ base: "100vh", md: "52vh" }}>
          <ModalHeader
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Text fontSize={"1.5rem"}>Chat</Text>
            <RxCross2
              onClick={onClose}
              color="#fff"
              fontSize={"1.5rem"}
              display={{ base: "block", md: "block" }}
            />
          </ModalHeader>
          <Box width={"100%"}>
            <Box
              height={"410px"}
              borderBottom={"#fff"}
              width={"100%"}
              p={1}
              display={"flex"}
              flexDir={"column"}
              gap={"5px"}
            >
              <Box
                p={1}
                border={"1px solid #1ABCFC"}
                rounded={"sm"}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"start"}
                flexDir={"column"}
              >
                <Text color={"gray.500"} fontSize={".8rem"}>
                  0x3da1...233
                </Text>
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  width={"100%"}
                >
                  <Text color={"gray.300"} fontSize={".9rem"}>
                    Winng is quite easy for me now
                  </Text>
                  <Text color={"gray.300"} fontSize={".9rem"}>
                    {new Date().toLocaleDateString()}
                  </Text>
                </Box>
              </Box>
              <Box
                p={1}
                border={"1px solid #1ABCFC"}
                rounded={"sm"}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"start"}
                flexDir={"column"}
              >
                <Text color={"gray.500"} fontSize={".8rem"}>
                  0x3da1...233
                </Text>
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  width={"100%"}
                >
                  <Text color={"gray.300"} fontSize={".9rem"}>
                    Hell, yeah Go for it
                  </Text>
                  <Text color={"gray.300"} fontSize={".9rem"}>
                    {new Date().toLocaleDateString()}
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box pb={2}>
              <hr />
            </Box>
            <Box pr={1} pl={1}>
              <Input
                bg={"#1A2C38"}
                borderRadius={"md"}
                p={2}
                placeholder="Your Message"
              ></Input>
            </Box>
          </Box>

          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            p={2}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <svg class="blinking">
                <circle cx="10" cy="30" r="5" fill="#1ABCFC" />
              </svg>

              <Text color={"gray.500"} mt={3}>
                30 online
              </Text>
            </Box>
            <Button bg={"brand.100"}>Send</Button>
          </Box>

          {/* <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
}
