import { Box, Flex, Link, Spacer, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="gray.800" color="white" px={4} py={2}>
      <Flex align="center">
        <Text fontSize="xl" fontWeight="bold">Financial Times</Text>
        <Spacer />
        <Link as={RouterLink} to="/" mx={2}>Home</Link>
        <Link as={RouterLink} to="/about" mx={2}>About</Link>
        <Link as={RouterLink} to="/contact" mx={2}>Contact</Link>
      </Flex>
    </Box>
  );
};

export default Navbar;