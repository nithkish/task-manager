import { Suspense, useState, useMemo, createContext } from "react";
import { RouterProvider } from "react-router-dom";
import { CircularProgress, Box } from "@mui/material";
import  GlobalStyles from "@mui/material/GlobalStyles";
import useLocalStorageState from "use-local-storage-state";

import { createRouter } from "./router/router";
import { TASK_LIST } from "./constants/taskList";
import { themes } from "./themes";

export const TaskContext = createContext();

export function App({ baseHref = "/" }) {
  const [tasks, setTasks] = useState(TASK_LIST);
  const value = { tasks, setTasks };

  const basename = useMemo(() => {
    /* React Router insists on *no* trailing slash */
    return baseHref.slice(0, baseHref.length - 1) || "/";
  }, [baseHref]);

  const router = useMemo(() => createRouter(basename), [basename]);

  const [theme] = useLocalStorageState("theme");

  return (
    <Suspense
      fallback={
        <Box
          display="flex"
          width="100vw"
          height="100vh"
          alignItems="center"
          justifyContent="center"
        >
          <CircularProgress />
        </Box>
      }
    >
      <TaskContext.Provider value={value}>
      <GlobalStyles
        styles={{
          body: { backgroundColor: themes[theme].body.backgroundColor }
        }}
      />
        <RouterProvider router={router} />
      </TaskContext.Provider>
    </Suspense>
  );
}
