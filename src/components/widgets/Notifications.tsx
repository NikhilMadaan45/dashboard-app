import { useState } from "react";
import { Box, Typography, List, ListItem, ListItemText, Divider } from "@mui/material";
import { useThemeContext } from "../../context/ThemeContext";

const Notifications = () => {
  const { mode } = useThemeContext(); // Get current theme mode

  // Mock Notification Data
  const [notifications] = useState([
    { id: 1, message: "New message from Alice", time: "10 min ago" },
    { id: 2, message: "Your report is ready to download", time: "1 hour ago" },
    { id: 3, message: "System maintenance scheduled for midnight", time: "Yesterday" },
    { id: 4, message: "Reminder: Project deadline tomorrow", time: "Today" },
    { id: 5, message: "Security alert: Unusual login detected", time: "2 days ago" },
  ]);

  return (
    <Box
      sx={{
        p: 3,
        minWidth: 400,
        minheight: 250, // Fixed height for consistency
        bgcolor: mode === "dark" ? "#333" : "white",
        color: mode === "dark" ? "white" : "black",
        borderRadius: 2,
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h6" sx={{ mb: 1 }}>
        Notifications
      </Typography>
      <Box
        sx={{
          flex: 1, // Allows scrolling inside this section
          overflowY: "auto", // Enables vertical scrolling
        }}
      >
        <List>
          {notifications.map((notif, index) => (
            <Box key={notif.id}>
              <ListItem>
                <ListItemText
                  primary={notif.message}
                  secondary={notif.time}
                  sx={{ wordWrap: "break-word" }} // Prevents text overflow
                />
              </ListItem>
              {index !== notifications.length - 1 && <Divider />}
            </Box>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Notifications;
