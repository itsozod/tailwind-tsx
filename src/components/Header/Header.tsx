import { Button, Flex, Row } from "antd";
import { Header } from "antd/es/layout/layout";
import { DrawerMobile } from "../Drawer/Drawer";
import { useState } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import { IconDown } from "../../assets/icons/IconDown";
import { IconUp } from "../../assets/icons/IconUp";

const links = [
  {
    id: 1,
    name: "Features",
    iconUp: <IconUp />,
    IconDown: <IconDown />,
  },
  {
    id: 2,
    name: "Company",
    iconUp: <IconUp />,
    IconDown: <IconDown />,
  },
  {
    id: 3,
    name: "Careers",
  },
  {
    id: 4,
    name: "About",
  },
];

export const HeaderLayout = () => {
  const [open, setOpen] = useState(false);
  const isSmallDevice = useMediaQuery("only screen and (max-width : 703px)");
  const [icon, setIcon] = useState(false);
  const [iconId, setIconId] = useState<string | number>("");

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Header className="flex justify-between items-center bg-[white] text-[black]">
        <Row className=" w-full m-auto max-w-screen-xl flex justify-between items-center bg-[white] text-[black]">
          <Flex className="flex justify-center items-center gap-7">
            <Row className="font-bold text-3xl">snap</Row>
            {isSmallDevice ? null : (
              <nav className="flex justify-center items-center">
                <ul className="flex gap-10">
                  {links?.map((link) => {
                    return (
                      <div
                        onClick={() => {
                          setIcon((prev) => !prev);
                          setIconId(link?.id);
                        }}
                        className="flex items-center gap-3 cursor-pointer"
                        key={link?.id}
                      >
                        <li>{link?.name}</li>
                        {icon && iconId === link?.id
                          ? link?.iconUp
                          : link?.IconDown}
                      </div>
                    );
                  })}
                </ul>
              </nav>
            )}
          </Flex>
          {isSmallDevice ? (
            <Flex className="w-5 cursor-pointer" onClick={() => setOpen(true)}>
              <img className="max-w-full" src="/burger-bar.png" alt="" />
            </Flex>
          ) : (
            <Flex className="flex gap-2">
              <Button>Login</Button>
              <Button className="border-2 border-black-500">Register</Button>
            </Flex>
          )}
        </Row>
      </Header>
      <DrawerMobile open={open} onClose={onClose} />
    </>
  );
};
