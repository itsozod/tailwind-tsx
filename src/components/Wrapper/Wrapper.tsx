import { Layout } from "antd";
import { HeaderLayout } from "../Header/Header";
import { Main } from "../Main/Main";

export const Wrapper = () => {
  return (
    <Layout style={{ background: "#fff" }}>
      <HeaderLayout />
      <Main />
    </Layout>
  );
};
