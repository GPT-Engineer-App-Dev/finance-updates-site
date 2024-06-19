import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Box bg="gray.100" p={4} borderRadius="md">
          <Heading as="h1" size="xl">Financial Times</Heading>
          <Text fontSize="lg">Your source for the latest financial news and analysis.</Text>
        </Box>
        <Box>
          <Heading as="h2" size="lg" mb={4}>Headlines</Heading>
          <VStack spacing={4} align="stretch">
            <Box bg="white" p={4} borderRadius="md" boxShadow="md">
              <Heading as="h3" size="md">Headline 1</Heading>
              <Text>Summary of the first headline...</Text>
            </Box>
            <Box bg="white" p={4} borderRadius="md" boxShadow="md">
              <Heading as="h3" size="md">Headline 2</Heading>
              <Text>Summary of the second headline...</Text>
            </Box>
          </VStack>
        </Box>
        <Box>
          <Heading as="h2" size="lg" mb={4}>Latest Articles</Heading>
          <VStack spacing={4} align="stretch">
            <Box bg="white" p={4} borderRadius="md" boxShadow="md">
              <Heading as="h3" size="md">Article 1</Heading>
              <Text>Summary of the first article...</Text>
            </Box>
            <Box bg="white" p={4} borderRadius="md" boxShadow="md">
              <Heading as="h3" size="md">Article 2</Heading>
              <Text>Summary of the second article...</Text>
            </Box>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;