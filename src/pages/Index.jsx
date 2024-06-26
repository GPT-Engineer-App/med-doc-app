// Complete the Index page component for a doctor's application
import { Box, Button, Container, Flex, Heading, Image, Input, Stack, Text, VStack, useToast } from "@chakra-ui/react";
import { FaUserMd, FaSearch, FaCalendarAlt, FaClipboardList } from "react-icons/fa";
import { useRef, useState } from "react";

// Removed axios import as external dependencies are not allowed

const Index = () => {
  const [physicalExam, setPhysicalExam] = useState("");
  const fileInputRef = useRef(null);

  const handleFileSelect = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      // Simulate file processing and setting the result
      setTimeout(() => {
        setPhysicalExam("Simulated content from PDF file.");
      }, 1000);
    }
  };

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
            <Text fontSize="lg">First Name</Text>
            <Input placeholder="Enter first name" ml={2} />
          </Flex>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Flex alignItems="center">
            <Text fontSize="lg">Last Name</Text>
            <Input placeholder="Enter last name" ml={2} />
          </Flex>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Flex alignItems="center">
            <Text fontSize="lg">Birthdate</Text>
            <Input placeholder="YYYY-MM-DD" ml={2} type="date" />
          </Flex>
        </Box>

        <VStack spacing={4} align="stretch">
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Flex alignItems="center">
              <Text fontSize="lg">Physical Examination</Text>
              <Input placeholder="Enter details of physical examination" ml={2} value={physicalExam} />
              <Button onClick={handleFileSelect} ml={2}>
                Upload PDF
              </Button>
              <input type="file" ref={fileInputRef} onChange={handleFileChange} style={{ display: "none" }} accept=".pdf" />
            </Flex>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Flex alignItems="center">
              <Text fontSize="lg">Patient History</Text>
              <Input placeholder="Enter patient history details" ml={2} />
            </Flex>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Flex alignItems="center">
              <Text fontSize="lg">Family History</Text>
              <Input placeholder="Enter family history details" ml={2} />
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
