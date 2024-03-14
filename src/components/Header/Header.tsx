import { Button, Flex } from "antd";
import { Header } from "antd/es/layout/layout";

export const HeaderLayout = () => {
  return (
    <>
      <Header className="flex justify-between items-center bg-[white] text-[black]">
        <Flex className="flex justify-center items-center gap-7">
          <div className="font-bold text-3xl">Snap</div>
          <nav className="flex justify-center items-center">
            <ul className="flex gap-3">
              <li>Features</li>
              <li>Company</li>
              <li>Carreer</li>
              <li>About</li>
            </ul>
          </nav>
        </Flex>
        <Flex className="flex gap-2">
          <Button>Login</Button>
          <Button className="border-2 border-black-500">Register</Button>
        </Flex>
      </Header>
    </>
  );
};
