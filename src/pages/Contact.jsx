import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Container maxW="container.md" p={4}>
      <VStack spacing={8} align="stretch">
        <Box bg="gray.100" p={4} borderRadius="md">
          <Heading as="h1" size="xl">Contact Us</Heading>
          <Text fontSize="lg">Get in touch with the Financial Times team for any inquiries or feedback.</Text>
        </Box>
        <Box bg="white" p={4} borderRadius="md" boxShadow="md">
          <Heading as="h2" size="lg">Contact Information</Heading>
          <Text>Email: contact@financialtimes.com</Text>
          <Text>Phone: (123) 456-7890</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Contact;