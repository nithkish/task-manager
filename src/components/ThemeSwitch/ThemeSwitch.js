import { StyledSwitch } from "./StyledSwitch";
import useLocalStorageState from "use-local-storage-state";

export const ThemeSwitch = () => {
  const [theme, setTheme] = useLocalStorageState("theme", "light");

  const onChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <StyledSwitch
      sx={{ m: 1 }}
      checked={theme === "dark"}
      onChange={onChange}
    />
  );
};
