import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
// import Button from "./components/Button";
import Card from "./components/Card";
import { Users } from "./Users";

function App() {
  const [arrayUsers, setArrayUsers] = useState(Users);

  return (
    <ChakraProvider resetCSS>
      {arrayUsers.map((user) => {
        return <Card key={user.id} user={user} />;
      })}
      {/* <Button /> */}
    </ChakraProvider>
  );
}

export default App;
