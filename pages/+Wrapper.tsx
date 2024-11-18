export { Wrapper }

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { Provider } from "../components/ui/provider";
import { ReactNode } from "react";

function Wrapper({ children }: { children: ReactNode }) {
    return <Provider defaultTheme="light">{children}</Provider>
}