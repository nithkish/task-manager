import Input from "@mui/material/Input";
import Stack from "@mui/material/Stack";

import { FilterByStatus } from "../../components/FilterByStatus";

export const TasksHead = ({ filter, handleFilterChange, handleSearch }) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      gap={8}
    >
      <Input
        placeholder="Search (min. 3 char)..."
        onChange={handleSearch}
        fullWidth={true}
        sx={{color:'inherit'}}
      />
      <FilterByStatus filter={filter} handleChange={handleFilterChange} />
    </Stack>
  );
};
