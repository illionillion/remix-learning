import type { MetaFunction } from "@remix-run/node";
import { Button, Container, Heading, HStack } from "@yamada-ui/react";
import { useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [count, setCount] = useState(0)
  const handlePlus = () => setCount(prev => prev + 1)
  const handleMinus = () => setCount(prev => prev - 1)
  return (
    <Container>
      <Heading>Hello Remix{` ${count}`}</Heading>
      <HStack>
        <Button onClick={handlePlus}>+</Button>
        <Button onClick={handleMinus}>-</Button>
      </HStack>
    </Container>
  );
}
