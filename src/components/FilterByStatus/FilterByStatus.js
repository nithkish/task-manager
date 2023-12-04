import {
  Stack,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";

import { filterConfig } from "../../config/filter-config";

export const FilterByStatus = ({ filter, handleChange }) => {
  return (
    <Stack direction="row" alignItems="center">
      <FilterListIcon />
      <FormControl sx={{ m: 1, minWidth: 120, color: "inherit" }} size="small">
        <InputLabel sx={{ color: "inherit" }}>Status</InputLabel>
        <Select
          value={filter}
          label="Status"
          onChange={handleChange}
          sx={{
            color: "inherit",
            backgroundColor: "inherit",
            '.MuiSelect-icon':{
              color:'inherit'
            },
            '.MuiOutlinedInput-notchedOutline' :{
              borderColor:'inherit'
            }
          }}
        >
          {filterConfig.map((filter) => (
            <MenuItem key={filter.key} value={filter.value}>
              {filter.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
};
