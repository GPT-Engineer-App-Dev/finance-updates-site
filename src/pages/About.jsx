import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

const About = () => {
  return (
    <Container maxW="container.md" p={4}>
      <VStack spacing={8} align="stretch">
        <Box bg="gray.100" p={4} borderRadius="md">
          <Heading as="h1" size="xl">About Us</Heading>
          <Text fontSize="lg">Learn more about the Financial Times and our mission to provide accurate and timely financial news.</Text>
        </Box>
        <Box bg="white" p={4} borderRadius="md" boxShadow="md">
          <Heading as="h2" size="lg">Our Mission</Heading>
          <Text>Our mission is to deliver the most reliable and comprehensive financial news to our readers...</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default About;