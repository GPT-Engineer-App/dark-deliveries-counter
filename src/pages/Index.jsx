import { Box, Flex, Text, Link, Container, Image, Heading } from "@chakra-ui/react";
import { FaDownload, FaTree, FaStore, FaBriefcase, FaTruckMoving, FaHeadset } from "react-icons/fa";

const Index = () => {
  return (
    <>
      <Box bg="gray.800" px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box color="white">Airmee</Box>

          <Flex alignItems={"center"}>
            <Link px={2} color="white" href="#download-app">
              <FaDownload /> Download app
            </Link>
            <Link px={2} color="white" href="#about">
              <FaTree /> About Airmee
            </Link>
            <Link px={2} color="white" href="#sustainability">
              <FaTree /> Sustainability
            </Link>
            <Link px={2} color="white" href="#retailers">
              <FaStore /> For retailers
            </Link>
            <Link px={2} color="white" href="#careers">
              <FaBriefcase /> Airmee careers
            </Link>
            <Link px={2} color="white" href="#carriers">
              <FaTruckMoving /> For carriers
            </Link>
            <Link px={2} color="white" href="#support">
              <FaHeadset /> Support
            </Link>
          </Flex>
        </Flex>
      </Box>

      <Container maxW="container.xl" centerContent py={20}>
        <Box position="relative" textAlign="center">
          <Image src="https://images.unsplash.com/photo-1579785627790-59a81c99aab7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdGFja2VkJTIwcGFyY2Vsc3xlbnwwfHx8fDE3MDk4OTE4MjB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Stacked parcels" size="xl" fallbackSrc="https://via.placeholder.com/150" objectFit="cover" borderRadius="md" boxShadow="2xl" />
          <Heading as="h1" size="4xl" color="white" fontWeight="bold" position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
            21,042,391 deliveries.
            <br />
            And counting.
          </Heading>
        </Box>
      </Container>
    </>
  );
};

export default Index;
