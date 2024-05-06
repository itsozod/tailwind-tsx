import { Button, Flex, Row } from "antd";
import { Header } from "antd/es/layout/layout";
import { DrawerMobile } from "../Drawer/Drawer";
import { useState } from "react";

export const HeaderLayout = () => {
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Header className="flex justify-between items-center bg-[white] text-[black]">
        <Row className=" w-full m-auto max-w-screen-xl flex justify-between items-center bg-[white] text-[black]">
          <Flex className="flex justify-center items-center gap-7">
            <Row className="font-bold text-3xl">Snap</Row>
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
            <Button onClick={() => setOpen(true)}>Login</Button>
            <Button className="border-2 border-black-500">Register</Button>
          </Flex>
        </Row>
      </Header>
      <DrawerMobile open={open} onClose={onClose} />
    </>
  );
};
