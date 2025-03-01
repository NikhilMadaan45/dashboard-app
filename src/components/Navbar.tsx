import {
    Drawer,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Box,
    Divider,
    Typography,
} from "@mui/material";
import { Person, Notifications, TableChart, DarkMode, LightMode } from "@mui/icons-material";
import { useThemeContext } from "../context/ThemeContext";

const drawerWidth = 240;

interface NavbarProps {
    onWidgetToggle: (widget: string) => void;
    activeWidgets: string[];
}

const Navbar = ({ onWidgetToggle, activeWidgets }: NavbarProps) => {
    const { toggleTheme, mode } = useThemeContext();

    const isDarkMode = mode === "dark";

    const widgets = [
        { label: "User Info", icon: <Person />, key: "userInfo" },
        { label: "Notifications", icon: <Notifications />, key: "notifications" },
        { label: "Data Table", icon: <TableChart />, key: "dataTable" },
    ];

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {
                    width: drawerWidth,
                    boxSizing: "border-box",
                    background: isDarkMode ? "linear-gradient(180deg, #333, #000)" : "linear-gradient(180deg, #09555c, #12063b)",
                    color: "white",
                },
            }}
        >
            <Toolbar />
            <Box
                sx={{
                    width: 240,
                    height: "100vh",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    paddingTop: 2,
                    boxShadow: 3,
                }}
            >
                 <Typography
                    variant="body2"
                    sx={{
                        textAlign: "center",
                        mt: 2,
                        fontSize: "24px",
                        color: isDarkMode ? "#ccc" : "#fff",
                    }}
                >
                    Dashboard App
                </Typography>

                <Divider sx={{ my: 2 }} />
                
                <List>
                    {widgets.map(({ label, icon, key }) => (
                        <ListItemButton
                            key={key}
                            onClick={() => onWidgetToggle(key)}
                            sx={{
                                backgroundColor: activeWidgets.includes(key)
                                    ? "rgba(0, 0, 255, 0.2)"
                                    : "transparent",
                                "&:hover": { backgroundColor: "rgba(0, 0, 255, 0.1)" },
                            }}
                        >
                            <ListItemIcon
                                sx={{ color: activeWidgets.includes(key) ? "blue" : "inherit" }}
                            >
                                {icon}
                            </ListItemIcon>
                            <ListItemText primary={label} />
                        </ListItemButton>
                    ))}
                </List>

               

                {/* Theme Toggle */}
                <List>
                    <ListItemButton onClick={toggleTheme}>
                        <ListItemIcon sx={{ color: "inherit" }}>
                            {isDarkMode ? <LightMode /> : <DarkMode />}
                        </ListItemIcon>
                        <ListItemText primary="Toggle Theme" />
                    </ListItemButton>
                </List>

               
            </Box>
        </Drawer>
    );
};

export default Navbar;
