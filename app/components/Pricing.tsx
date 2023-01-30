import {
  Box,
  Heading,
  Text,
  Flex,
  Button,
  StackProps,
  Icon,
  Stack,
  HStack,
} from "@chakra-ui/react";

import { CheckIcon } from "../icons/icon";

export const ListItem = (props: StackProps) => {
  const { children, ...rest } = props;

  return (
    <HStack as="li" spacing="5" alignItems={"start"} {...rest}>
      <Icon as={CheckIcon} minW="22px" minH="22px" />
      <Text
        textAlign={["left", "left", "center"]}
        fontSize={["md", "md", "lg"]}
      >
        {children}
      </Text>
    </HStack>
  );
};

export function Pricing() {
  return (
    <Box mx="6">
      <Box
        maxW={"994px"}
        margin="auto"
        mt="-64"
        borderRadius={"xl"}
        overflow="hidden"
        boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04);"
      >
        <Flex direction={["column", "column", "row"]}>
          <Box bg="#F0EAFB" p="60px">
            <Text fontSize={"2xl"} fontWeight={"extrabold"}>
              Premium PRO
            </Text>
            <Heading as="h3" fontSize={["5xl", "5xl", "6xl"]} mt="4">
              $329
            </Heading>
            <Text color="gray.900" fontSize="lg" fontWeight={"medium"} mt="2">
              billed just once
            </Text>
            <Button
              colorScheme={"purple"}
              size={["md", "lg", "lg"]}
              w={["128px", "282px", "282px"]}
              mt="6"
            >
              Get Started
            </Button>
          </Box>
          <Box p="60px" fontSize="lg" bg="white">
            <Text textAlign={"left"}>
              Access these features when you get this pricing package for your
              business.
            </Text>
            <Stack as="ul" spacing="5" pt="6">
              <ListItem>International calling and messaging API</ListItem>
              <ListItem>Additional phone numbers</ListItem>
              <ListItem>Automated messages via Zapier</ListItem>
              <ListItem>24/7 support and consulting</ListItem>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
