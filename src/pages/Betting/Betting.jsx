import {
  Box,
  Flex,
  Heading,
  Image,
  ListItem,
  Text,
  UnorderedList,
  chakra,
} from "@chakra-ui/react";
import React from "react";
import Header from "../../components/Header/Header";
import SecondFooter from "../../components/SecondFooter/SecondFooter";
import car from "../../assets/hotewheel.png";
import "./style.css";
import LiveNowSingle from "../../components/TwitchLiveStream/TwitchLiveStream";
import ChatBox from "../../components/ChatBox/ChatBox";
import AnimatedHeadings from "../../components/AnimatedHeading/AnimatedHeading";
import BettingCard from "../../components/BettingCard/BettingCard";
import PlayerCard from "../../components/PlayerCard/PlayerCard";
const Betting = () => {
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
  const [page, setPage] = React.useState(0);
  return (
    <>
      <Header />
      <div class="flex-container">
        <aside>
          <Heading fontSize={"1.1rem"} textAlign={"center"}>
            Previous Winners
          </Heading>
          <chakra.div
            display={"flex"}
            flexDirection={"column"}
            // alignItems={"center"}
            width={"100%"}
            p={2}
            gap={"1rem"}
            sx={{
              height: "100%", // Set the height to 100% to fill the available space
              overflowY: "auto", // Enable vertical scrolling when content overflows
              overflowX: "hidden", // Disable horizontal scrolling
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
        </aside>
        <main>
          <div class="content">
            <LiveNowSingle channelName={"aswinrathees"} id={150314191} />
          </div>
          <div
            class="content"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AnimatedHeadings
              title={"Place your bets, race starts in: 00:00:20"}
            />
          </div>
          <div class="content">
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <BettingCard />
            </Box>
          </div>
          {/* <div class="content">
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <PlayerCard />
            </Box>
          </div> */}
          <SecondFooter />
        </main>
        <aside className="aside2">
          <ChatBox />
        </aside>
      </div>
    </>
  );
};

export default Betting;
