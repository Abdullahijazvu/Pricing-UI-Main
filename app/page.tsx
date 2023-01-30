"use client";

import { Box } from "@chakra-ui/react";
import { Features } from "./components/Features";
import { Header } from "./components/Header";
import { Pricing } from "./components/Pricing";

export default function Home() {
  return (
    <Box textAlign={"center"}>
      <Header />
      <Pricing />
      <Features />
    </Box>
  );
}
