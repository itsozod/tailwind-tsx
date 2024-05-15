import { Button, Flex, Row, Typography } from "antd";

export const Main = () => {
  return (
    <>
      <Flex className="m-auto max-w-screen-xl w-full items-center justify-center p-10 gap-10 sm:gap-40 flex-col-reverse sm:flex-row">
        <Flex
          vertical={true}
          className="w-full sm:w-[400px]"
          gap={20}
          align="start"
        >
          <Typography.Title level={1}>
            <div>Make</div>
            <div>remote work</div>
          </Typography.Title>

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
        <Flex className="w-full sm:w-[300px]">
          <picture>
            <source
              srcSet="/image-hero-mobile.webp"
              media="(max-width: 700px)"
            ></source>
            <img src="/image-hero-desktop.webp" alt="Desktop Image" />
          </picture>
        </Flex>
      </Flex>
    </>
  );
};
