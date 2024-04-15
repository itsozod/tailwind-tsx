import { Button, Flex, Row, Typography } from "antd";

export const Main = () => {
  return (
    <>
      <Flex className="m-auto max-w-screen-xl w-full items-center justify-center p-10 gap-40 ">
        <Flex
          vertical={true}
          style={{
            width: "400px",
          }}
          gap={20}
          align="start"
        >
          <Typography.Title level={1}>Make remote work</Typography.Title>
          <Row>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar
          </Row>
          <Button
            size="large"
            style={{
              background: "black",
              color: "#fff",
            }}
          >
            Learn more
          </Button>
        </Flex>
        <Flex style={{ width: "300px" }}>
          <img src="image-hero-desktop.png" alt="" />
        </Flex>
      </Flex>
    </>
  );
};
