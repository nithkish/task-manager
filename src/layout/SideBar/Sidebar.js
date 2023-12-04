import { Sidebar as ReactSidebar, Menu, MenuItem } from "react-pro-sidebar";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { useState } from "react";
import useLocalStorageState from 'use-local-storage-state'

import Image from "../../assets/images/background-image.png";
import { MENU_CONFIG } from "../../config/menu-config";
import { menuItemStyles } from "./styles/menu-items-styles";
import { hexToRgba } from "../../utils/hex-to-rgba";
import { themes } from "../../themes";

export const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);
  const [broken, setBroken] = useState(false);
  const [theme] = useLocalStorageState('theme')
  return (
    <>
      <ReactSidebar
        onBreakPoint={setBroken}
        style={{ height: "100vh" }}
        collapsed={collapsed}
        breakPoint="md"
        toggled={toggled}
        onBackdropClick={() => setToggled(false)}
        backgroundColor={hexToRgba(themes[theme].sidebar.backgroundColor, 0.5)}
        image={Image}
      >
        <Menu menuItemStyles={menuItemStyles(theme)}>
          <MenuItem
            icon={<MenuOpenIcon />}
            onClick={() =>
              broken ? setToggled(!toggled) : setCollapsed(!collapsed)
            }
            style={{ textAlign: "center" }}
          >
            {" "}
            <h2>ZS</h2>
          </MenuItem>
          {MENU_CONFIG.map((menu) => (
            <MenuItem key={menu.name} icon={menu.icon}>
              {menu.name}
            </MenuItem>
          ))}
        </Menu>
      </ReactSidebar>
      {broken && !toggled && (
        <button className="sb-button" onClick={() => setToggled(!toggled)}>
          Toggle
        </button>
      )}
    </>
  );
};
