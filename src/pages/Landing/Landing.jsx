import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  useColorModeValue,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import "./style.css";
import car from "../../assets/bg.jpeg";
import ButtonAnimate from "../../components/Button/Button";
import { BsCoin } from "react-icons/bs";
import Card from "../../components/Card/Card";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
import animation_llfjeykt from "../../assets/animation_llfjeykt.json";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
export default function Landing() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="main_landing">
        <Container maxW={"7xl"}>
          <Stack
            align={"center"}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
            direction={{ base: "column", md: "row" }}
          >
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
              >
                <Text
                  as={"span"}
                  position={"relative"}
                  _after={{
                    content: "''",
                    width: "full",
                    height: "30%",
                    position: "absolute",
                    bottom: 1,
                    left: 0,
                    bg: "brand.100",
                    zIndex: -1,
                  }}
                >
                  Write once,
                </Text>
                <br />
                <Text as={"span"} color={"brand.100"}>
                  use everywhere!
                </Text>
              </Heading>
              <Text color={"gray.500"}>
                Snippy is a rich coding snippets app that lets you create your
                own code snippets, categorize them, and even sync them in the
                cloud so you can use them anywhere. All that is free!
              </Text>
              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={{ base: "column", sm: "row" }}
              >
                {/* <Button
                  rounded={"full"}
                  size={"lg"}
                  fontWeight={"normal"}
                  px={6}
                  bg={"brand.100"}
                  _hover={{ bg: "brand.300" }}
                >
                  Get started
                </Button> */}
                <ButtonAnimate title="Start Betting" />
                {/* <Button
                  rounded={"5px"}
                  size={"lg"}
                  fontWeight={"normal"}
                  bg={"brand.100"}
                  color={"#000"}
                  _hover={{ bg: "brand.300" }}
                  position={"relative"}
                  display="flex"
                  justifyContent={"center"}
                  alignContent={"center"}
                  px={6}
                >
                  <Text>Join the bet</Text>
                </Button> */}
              </Stack>
            </Stack>
            <Flex
              flex={1}
              justify={"center"}
              align={"center"}
              position={"relative"}
              w={"full"}
            >
              <Blob
                w={"100%"}
                h={"150%"}
                position={"absolute"}
                top={"-20%"}
                left={0}
                zIndex={-1}
                color={useColorModeValue("red.50", "brand.100")}
              />
              <Box
                position={"relative"}
                height={"300px"}
                rounded={"2xl"}
                boxShadow={"2xl"}
                width={"full"}
                overflow={"hidden"}
              >
                {/* <IconButton
                  aria-label={"Play Button"}
                  variant={"ghost"}
                  _hover={{ bg: "transparent" }}
                  icon={<PlayIcon w={12} h={12} />}
                  size={"lg"}
                  color={"white"}
                  position={"absolute"}
                  left={"50%"}
                  top={"50%"}
                  transform={"translateX(-50%) translateY(-50%)"}
                /> */}
                <Image
                  alt={"Hero Image"}
                  fit={"cover"}
                  align={"center"}
                  w={"100%"}
                  h={"100%"}
                  src={car}
                />
              </Box>
            </Flex>
          </Stack>
        </Container>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0099ff"
            fill-opacity="1"
            d="M0,0L80,10.7C160,21,320,43,480,96C640,149,800,235,960,261.3C1120,288,1280,256,1360,240L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
        <Container maxW={"8xl"} mt={{ base: "2rem", md: "8rem" }}>
          <Heading as={"h2"} fontSize={"2rem"} color={"#BECDE3"}>
            Recent Winners
          </Heading>
          <Text color={"#BECDE3"} mt={2} fontWeight={900} fontSize={".9rem"}>
            Event / game
          </Text>
          <TableContainer mt={4} rounded={"sm"} sx={{}}>
            <Table variant="simple" color={"#6B8088"} textAlign={"center"}>
              <Thead bg={"brand.100"} textAlign={"center"}>
                <Tr textAlign={"center"}>
                  <Th textAlign={"center"} color={"#000"}>
                    Name
                  </Th>
                  <Th textAlign={"center"} color={"#000"}>
                    User ID
                  </Th>
                  <Th textAlign={"center"} color={"#000"}>
                    Bet
                  </Th>
                  <Th textAlign={"center"} color={"#000"}>
                    Payout
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td textAlign={"center"}>James</Td>
                  <Td textAlign={"center"}>james_012</Td>
                  <Td textAlign={"center"}>1200 $</Td>
                  <Td textAlign={"center"}>1300 $</Td>
                </Tr>
                <Tr>
                  <Td textAlign={"center"}>Harsh</Td>
                  <Td textAlign={"center"}>kafka</Td>
                  <Td textAlign={"center"}>1300 $</Td>
                  <Td textAlign={"center"}>1900 $</Td>
                </Tr>
                <Tr>
                  <Td textAlign={"center"}>Mark</Td>
                  <Td textAlign={"center"}>dalvin12</Td>
                  <Td textAlign={"center"}>91444 $</Td>
                  <Td textAlign={"center"}>10000 $</Td>
                </Tr>
                <Tr>
                  <Td textAlign={"center"}>Dave</Td>
                  <Td textAlign={"center"}>Kraken21</Td>
                  <Td textAlign={"center"}>2323 $</Td>
                  <Td textAlign={"center"}>2900 $</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Container>
      </div>
      <Footer />
    </>
  );
}

const PlayIcon = createIcon({
  displayName: "PlayIcon",
  viewBox: "0 0 58 58",
  d: "M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z",
});

const Blob = (props) => {
  return (
    <Icon
      width={"100%"}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};
