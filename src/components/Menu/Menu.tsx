import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "sub1",
    label: "Features",
    icon: <MailOutlined />,
    children: [
      {
        key: "g1",
        type: "group",
        children: [
          { key: "1", label: "Todo list" },
          { key: "2", label: "Calendar" },
          { key: "3", label: "Reminders" },
          { key: "4", label: "Reminders" },
        ],
      },
    ],
  },
  {
    key: "sub2",
    label: "Company",
    icon: <AppstoreOutlined />,
    children: [
      { key: "5", label: "History" },
      { key: "6", label: "Our team" },
      { key: "7", label: "Blog" },
    ],
  },

  {
    key: "sub4",
    label: "Careers",
    icon: <SettingOutlined />,
  },
  {
    key: "sub5",
    label: "About",
    icon: <SettingOutlined />,
  },
];

export const MenuComponent = () => {
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };

  return (
    <Menu
      onClick={onClick}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={items}
    />
  );
};
