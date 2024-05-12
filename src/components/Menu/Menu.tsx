import type { MenuProps } from "antd";
import { Menu } from "antd";
import { IconTodo } from "../../assets/icons/IconTodo";
import { IconCalendar } from "../../assets/icons/IconCalendar";
import { IconReminders } from "../../assets/icons/IconReminders";
import { IconPlanning } from "../../assets/icons/IconPlanning";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "sub1",
    label: "Features",

    children: [
      {
        key: "g1",
        type: "group",
        children: [
          {
            key: "1",
            label: <h1 className="p-3">Todo</h1>,
            icon: <IconTodo />,
          },
          {
            key: "2",
            label: <h1 className="p-3">Calendar</h1>,
            icon: <IconCalendar />,
          },
          {
            key: "3",
            label: <h1 className="p-3">Reminders</h1>,
            icon: <IconReminders />,
          },
          {
            key: "4",
            label: <h1 className="p-3">Planning</h1>,
            icon: <IconPlanning />,
          },
        ],
      },
    ],
  },
  {
    key: "sub2",
    label: "Company",

    children: [
      { key: "5", label: "History" },
      { key: "6", label: "Our team" },
      { key: "7", label: "Blog" },
    ],
  },

  {
    key: "sub4",
    label: "Careers",
  },
  {
    key: "sub5",
    label: "About",
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
