// Complete the Index page component for a doctor's application
import { Box, Button, Container, Flex, Heading, Image, Input, Stack, Text, VStack } from "@chakra-ui/react";
import { FaUserMd, FaSearch, FaCalendarAlt, FaClipboardList } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Flex justifyContent="space-between" alignItems="center" py={4}>
        <Heading as="h1" size="xl" color="teal.400">
          <FaUserMd /> Doctor's Dashboard
        </Heading>
        <Button colorScheme="teal" leftIcon={<FaUserMd />}>
          Sign In
        </Button>
      </Flex>

      <Stack spacing={8} my={8}>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Flex alignItems="center">
            <FaSearch />
            <Input placeholder="Search patient records" ml={2} />
          </Flex>
        </Box>

        <VStack spacing={4} align="stretch">
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Flex alignItems="center" justifyContent="space-between">
              <Text fontSize="xl">Upcoming Appointments</Text>
              <FaCalendarAlt />
            </Flex>
          </Box>

          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Flex alignItems="center" justifyContent="space-between">
              <Text fontSize="xl">Patient History</Text>
              <FaClipboardList />
            </Flex>
          </Box>
        </VStack>
      </Stack>

      <Flex justifyContent="center" mt={10}>
        <Image src="https://images.unsplash.com/photo-1651008376811-b90baee60c1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkb2N0b3J8ZW58MHx8fHwxNzE0MDQ0MTk5fDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="full" boxSize="150px" />
      </Flex>
    </Container>
  );
};

export default Index;