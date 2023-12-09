import React from 'react';
import { Stack, Heading, Text } from '@chakra-ui/react';

const ComingSoon = () => {
  return (
    <Stack
      spacing={8}
      p={{ base: 4, md: 8 }}
      borderWidth="1px"
      borderRadius="md"
      maxW="100%" // Set max width to 100% for full-width on all screen sizes
      mx="auto"
      textAlign="center"
      justifyContent="center"
      align="center"
      h="100vh"
      bgColor="#F5E1FF"
    >
      <Heading
        as="h1"
        size="2xl"
        mt={{ base: 4, md: 0 }} // Adjust margin-top for both base and medium screens
        color="#2980b9"
        letterSpacing="0.1em"
      >
        COMING SOON !
      </Heading>
      <Text
        fontSize="lg"
        color="#333333"
        mt={{ base: 4, md: 0 }} // Adjust margin-top for both base and medium screens
      >
        Welcome to Hextrend! The website is under construction and will be
        live soon. Get ready for an exciting experience!
      </Text>
    </Stack>
  );
};

export default ComingSoon;
