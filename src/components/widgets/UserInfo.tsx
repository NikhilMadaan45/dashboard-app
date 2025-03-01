import { useState } from "react";
import { Box, Typography, Avatar, Divider } from "@mui/material";
import { useThemeContext } from "../../context/ThemeContext";

const UserInfo = () => {
  const { mode } = useThemeContext(); // Get current theme mode

  // Mock User Data
  const [user] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    bio: "Full Stack Developer at TechCorp",
    avatar: "https://i.pravatar.cc/100", // Random avatar placeholder
  });

  return (
    <Box
      sx={{
        p: 3,
        minWidth: 350,
        height: 250, // Fixed height for consistency
        textAlign: "center",
        bgcolor: mode === "dark" ? "#333" : "white",
        color: mode === "dark" ? "white" : "black",
        borderRadius: 2,
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Avatar src={user.avatar} sx={{ width: 80, height: 80, mb: 1 }} />
      <Typography variant="h6">{user.name}</Typography>
      <Typography variant="body2">{user.email}</Typography>
      <Divider sx={{ my: 1, width: "100%" }} />
      <Typography variant="body1" sx={{ fontStyle: "italic" }}>
        {user.bio}
      </Typography>
    </Box>
  );
};

export default UserInfo;
