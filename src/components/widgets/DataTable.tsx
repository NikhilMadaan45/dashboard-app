import { useState } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Pagination,
} from "@mui/material";
import { useThemeContext } from "../../context/ThemeContext";

// Define props for DataTable
interface DataTableProps {
  onRowClick: (rowData: { id: number; name: string; email: string }) => void;
}

// Mock Data
const mockData = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
  { id: 3, name: "Charlie", email: "charlie@example.com" },
  { id: 4, name: "David", email: "david@example.com" },
  { id: 5, name: "Emma", email: "emma@example.com" },
  { id: 6, name: "Frank", email: "frank@example.com" },
  { id: 7, name: "Grace", email: "grace@example.com" },
  { id: 8, name: "Henry", email: "henry@example.com" },
  { id: 9, name: "Ivy", email: "ivy@example.com" },
  { id: 10, name: "Jack", email: "jack@example.com" },
  { id: 11, name: "Kelly", email: "kelly@example.com" },
];

const ROWS_PER_PAGE = 4;

const DataTable: React.FC<DataTableProps> = ({ onRowClick }) => {
  const [page, setPage] = useState(1);
  const { mode } = useThemeContext();
  const isDarkMode = mode === "dark";

  const startIndex = (page - 1) * ROWS_PER_PAGE;
  const paginatedData = mockData.slice(startIndex, startIndex + ROWS_PER_PAGE);

  const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Box
      sx={{
        p: 3,
        minWidth: 300,
        bgcolor: isDarkMode ? "#1e1e1e" : "white",
        color: isDarkMode ? "white" : "black",
        borderRadius: 2,
        boxShadow: 2,
      }}
    >
      <Typography variant="h6" sx={{ mb: 2, color: isDarkMode ? "white" : "black" }}>
        Data Table
      </Typography>
      <TableContainer component={Paper} sx={{ bgcolor: isDarkMode ? "#2a2a2a" : "white" }}>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: isDarkMode ? "#333" : "lightgray" }}>
              <TableCell sx={{ color: isDarkMode ? "white" : "black" }}>ID</TableCell>
              <TableCell sx={{ color: isDarkMode ? "white" : "black" }}>Name</TableCell>
              <TableCell sx={{ color: isDarkMode ? "white" : "black" }}>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((row) => (
              <TableRow
                key={row.id}
                hover
                onClick={() => onRowClick(row)}
                sx={{
                  cursor: "pointer",
                  bgcolor: isDarkMode ? "#424242" : "white",
                  "&:hover": { bgcolor: isDarkMode ? "#535353" : "#f0f0f0" },
                }}
              >
                <TableCell sx={{ color: isDarkMode ? "#e0e0e0" : "black" }}>{row.id}</TableCell>
                <TableCell sx={{ color: isDarkMode ? "#e0e0e0" : "black" }}>{row.name}</TableCell>
                <TableCell sx={{ color: isDarkMode ? "#e0e0e0" : "black" }}>{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Pagination
          count={Math.ceil(mockData.length / ROWS_PER_PAGE)}
          page={page}
          onChange={handlePageChange}
          color="primary"
        />
      </Box>
    </Box>
  );
};

export default DataTable;
