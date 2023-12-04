import { menuClasses } from "react-pro-sidebar";
import { themes } from "../../themes";
import { hexToRgba } from "../../utils/hex-to-rgba";

export const menuItemStyles = (theme) => ({
  root: {
    fontSize: "13px",
    fontWeight: 600,
  },
  icon: {
    color: themes[theme].menu.icon,
    [`&.${menuClasses.disabled}`]: {
      color: themes[theme].menu.disabled.color,
    },
  },
  button: {
    [`&.${menuClasses.disabled}`]: {
      color: themes[theme].menu.disabled.color,
    },
    "&:hover": {
      backgroundColor: hexToRgba(themes[theme].menu.hover.backgroundColor, 0.7),
      color: themes[theme].menu.hover.color,
    },
  },
  label: ({ open }) => ({
    fontWeight: open ? 600 : undefined,
  }),
});
