import {
  Stack,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import FilterListIcon from '@mui/icons-material/FilterList';

import { filterConfig } from "../../config/filter-config";

export const FilterByStatus = ({ filter, handleChange }) => {
  return (
    <Stack direction="row" alignItems="center">
      <FilterListIcon />
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel>Status</InputLabel>
        <Select
          value={filter}
          label="Status"
          onChange={handleChange}
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
