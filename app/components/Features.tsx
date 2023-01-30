import { HStack, Icon, Text, StackProps, Box, Flex } from "@chakra-ui/react";
import { ElementType } from "react";
import {
  MoneyBackGuaranteeIcon,
  HastleFreeIcon,
  MonthlySubscriptionIcon,
} from "../icons/icon";

interface FeatureProps extends StackProps {
  icon: ElementType;
}

function Feature(props: FeatureProps) {
  const { icon, children, ...rest } = props;
  return (
    <HStack {...rest} spacing="6">
      <Icon as={icon} boxSize="12" />
      <Text textAlign={"left"} fontSize={"lg"} fontWeight="bold">
        {children}
      </Text>
    </HStack>
  );
}

export function Features() {
  return (
    <Box maxW={"1024px"} m="auto" pt="60px" pb="8">
      <Flex px="12" direction={["column", "column", "row"]} gap="4">
        <Feature icon={MoneyBackGuaranteeIcon}>
          30 days money back Guarantee
        </Feature>
        <Feature icon={HastleFreeIcon}>No setup fees 100% hastle-free</Feature>
        <Feature icon={MonthlySubscriptionIcon}>
          No monthly subscription Pay once and for all
        </Feature>
      </Flex>
    </Box>
  );
}
