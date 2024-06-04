import { Layout } from "antd";
import { HeaderLayout } from "../Header/Header";
import { Main } from "../Main/Main";
import { Test } from "../test/Test";

export const Wrapper = () => {
  return (
    <Layout style={{ background: "#fff" }}>
      <HeaderLayout />
      <Main />
      <Test />
    </Layout>
  );
};
