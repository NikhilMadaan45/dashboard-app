import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Button, TextField, Typography } from "@mui/material";

interface User {
  id: number;
  name: string;
  email: string;
}

const EditUser = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Fetch user data (replace with actual API call if needed)
    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const foundUser = storedUsers.find((u: User) => u.id === Number(id));
    if (foundUser) setUser(foundUser);
  }, [id]);

  const handleSave = () => {
    if (!user) return;

    // Update user in local storage (replace with API call if needed)
    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const updatedUsers = storedUsers.map((u: User) =>
      u.id === user.id ? user : u
    );

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    navigate("/");
  };

  return user ? (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 5 }}>
      <Typography variant="h5">Edit User</Typography>
      <TextField
        fullWidth
        label="Name"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        sx={{ mt: 2 }}
      />
      <TextField
        fullWidth
        label="Email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        sx={{ mt: 2 }}
      />
      <Button variant="contained" color="primary" onClick={handleSave} sx={{ mt: 3 }}>
        Save Changes
      </Button>
    </Box>
  ) : (
    <Typography variant="h6" sx={{ textAlign: "center", mt: 5 }}>User Not Found</Typography>
  );
};

export default EditUser;
