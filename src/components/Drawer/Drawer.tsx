import { Drawer } from "antd";
import { MenuComponent } from "../Menu/Menu";

export const DrawerMobile = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  return (
    <>
      <Drawer open={open} onClose={onClose} width={400}>
        <MenuComponent />
      </Drawer>
    </>
  );
};
