import { Sidebar as ReactSidebar, Menu, MenuItem } from "react-pro-sidebar";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import SettingsIcon from "@mui/icons-material/Settings";
import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import { Divider, Stack, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Image from "../../assets/images/background-image.png";
import { MENU_CONFIG } from "../../config/menu-config";
import { menuItemStyles } from "./menu-items-styles";
import { hexToRgba } from "../../utils/hex-to-rgba";
import { themes } from "../../themes";

export const SideBar = ({ toggled, broken, setToggled, setBroken }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [theme] = useLocalStorageState("theme");

  const navigate = useNavigate();
  return (
    <>
      <ReactSidebar
        onBreakPoint={setBroken}
        style={{
          height: "100vh",
          borderColor: themes[theme].primary.backgroundColor,
        }}
        collapsed={collapsed}
        collapsedWidth="70px"
        breakPoint="md"
        toggled={toggled}
        onBackdropClick={() => setToggled(false)}
        backgroundColor={hexToRgba(themes[theme].sidebar.backgroundColor, 0.2)}
        image={Image}
      >
        <Stack direction="column" justifyContent="space-between" height="100%">
          <Box>
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
              <Divider variant="middle" />
              {MENU_CONFIG.map((menu) => (
                <MenuItem
                  key={menu.name}
                  icon={menu.icon}
                  onClick={() => navigate("/")}
                >
                  {menu.name}
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box>
            <Menu menuItemStyles={menuItemStyles(theme)}>
              <MenuItem icon={<SettingsIcon />}>Settings</MenuItem>
              <Divider variant="middle" />
              <MenuItem icon={<InfoOutlinedIcon />}>About</MenuItem>
              <Divider variant="middle" />
              <MenuItem icon={<PowerSettingsNewIcon />}>Log Out</MenuItem>
            </Menu>
          </Box>
        </Stack>
      </ReactSidebar>
    </>
  );
};
