import React, { useRef } from "react";
import { Button, ButtonGroup, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import customTheme from "../../styles/theme";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import {
  TiArrowBackOutline,
  TiDownloadOutline,
  TiStopwatch,
} from "react-icons/ti";

export default function Links() {
  return (
    <div id="links">
      <Flex
        justifyContent={"flex-start"}
        alignItems={"center"}
        bg="darkGrey"
        flexDir={"column"}
        pt="3rem"
        pb="5rem"
        w="100vw"
        role="complementary"
        aria-label="helpful links section"
      >
        <Text variant="subHeader" color="white">
          helpful links
        </Text>
        <Flex
          mt="1rem"
          justifyContent={"center"}
          w="90%"
          flexDir={{ sm: "row", base: "column" }}
          gap={"2rem"}
        >
          {/* WEBSITES */}
          <Flex
            flexDir={{ md: "row", base: "column" }}
            alignItems={"flex-start"}
            gap={"2rem"}
          >
            <Flex flexDir={"column"}>
              <Text variant="capitalBody" color="lightGrey" mb=".5rem">
                WEBSITES
              </Text>
              <Link
                to="https://canvas.brown.edu/courses/1094692"
                target="_blank"
              >
                <Button variant="solidLinkSmall" mb="1rem">
                  CANVAS
                </Button>
              </Link>
              <Link
                to="https://www.gradescope.com/courses/715064/assignments"
                target="_blank"
              >
                <Button variant="solidLinkSmall" mb="1rem">
                  GRADESCOPE
                </Button>
              </Link>
              <Link to="https://talie.town/cs1300_spring24/">
                <Button variant="solidLinkSmall">EDSTEM</Button>
              </Link>
            </Flex>

            {/* COURSE DOCS */}
            <Flex flexDir={"column"}>
              <Text variant="capitalBody" color="lightGrey" mb=".5rem">
                Course Docs
              </Text>
              <Link
                to="https://docs.google.com/document/d/1qvwOuIJ6BKtt3l-noSUTa553aQ1beHsMG6lk-qgg1Aw/edit?usp=sharing"
                target="_blank"
              >
                <Button variant="solidLinkSmall" mb="1rem">
                  Syllabus
                </Button>
              </Link>
              <Link to="https://talie.town/cs1300_spring24/">
                <Button variant="solidLinkSmall" mb="1rem">
                  Software Guide
                </Button>
              </Link>
              {/* <Link to="/">
                <Button variant="solidLinkSmall">Deployment Guide</Button>
              </Link> */}
            </Flex>
          </Flex>

          <Flex
            flexDir={{ md: "row", base: "column" }}
            alignItems={"flex-start"}
            gap={"2rem"}
          >
            {/* COURSE FORMS */}
            <Flex flexDir={"column"}>
              <Text variant="capitalBody" color="lightGrey" mb=".5rem">
                ASSIGNMENTS
              </Text>
              <Link
                to="https://www.gradescope.com/courses/715064/assignments"
                target="blank"
              >
                <Button variant="solidLinkSmall" gap=".2rem" mb=".5rem">
                  <TiDownloadOutline />
                  Assignment Handin
                </Button>
              </Link>
              <Link to="https://talie.town/cs1300_spring24/">
                <Button variant="solidLinkSmall" gap=".2rem" mb=".5rem">
                  <TiDownloadOutline />
                  Studio Handin
                </Button>
              </Link>
              <Link
                to="https://docs.google.com/forms/d/e/1FAIpQLScoFu1vYAtxhVZIvL0B-WATP2MN1nIcCCZlHvoowJsyWIia7A/viewform?usp=sharing"
                target="blank"
              >
                <Button variant="solidLinkSmall" gap=".2rem" mb=".5rem">
                  <TiDownloadOutline />
                  Regrade Request Form
                </Button>
              </Link>
            </Flex>

            {/* LOGISTICAL */}
            <Flex flexDir={"column"}>
              <Text variant="capitalBody" color="lightGrey" mb=".5rem">
                logistical
              </Text>
              <Link
                to="https://docs.google.com/forms/d/e/1FAIpQLSesjhFQuHG7uPBJiwYRmpkkr4PslO8xW1k6Pw_RDOGJdPJm6w/viewform?usp=sharing"
                target="_blank"
              >
                <Button variant="solidLinkSmall" gap=".2rem" mb=".5rem">
                  <TiDownloadOutline />
                  Studio Swap Form
                </Button>
              </Link>
              {/* <Link to="/">
                <Button variant="solidLinkSmall" gap=".2rem" mb=".5rem">
                  <TiDownloadOutline />
                  Feedback Form
                </Button>
              </Link> */}
              <Link
                to="https://docs.google.com/forms/d/e/1FAIpQLSfgVrzQTZfOgAs0w4DqSazlVh3fLqg9GRdGhvG2vAqaOaXXTw/viewform?usp=sharing"
                target="_blank"
              >
                <Button variant="solidLinkSmall" gap=".2rem" mb=".5rem">
                  <TiDownloadOutline />
                  Dean's/Doctor's Note
                </Button>
              </Link>
              <Link to="https://forms.gle/iGGBaaumNL9URRq8A" target="_blank">
                <Button variant="solidLinkSmall" gap=".2rem" mb=".5rem">
                  <TiDownloadOutline />
                  Accommodation Request Form
                </Button>
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
}
