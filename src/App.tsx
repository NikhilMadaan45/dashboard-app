import { useState } from "react";
import { Box, Modal } from "@mui/material";
import Navbar from "./components/Navbar";
import UserInfo from "./components/widgets/UserInfo";
import Notifications from "./components/widgets/Notifications";
import DataTable from "./components/widgets/DataTable";
import { WidgetProvider } from "./context/WidgetContext";

const drawerWidth = 240;

const App = () => {
  const [activeWidgets, setActiveWidgets] = useState<string[]>([]);

  // Toggle widgets dynamically (allow multiple)
  const toggleWidget = (widget: string) => {
    setActiveWidgets((prev) =>
      prev.includes(widget) ? prev.filter((w) => w !== widget) : [...prev, widget]
    );
  };

  return (
    <WidgetProvider>
      <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        {/* Sidebar with Widget Toggle */}
        <Navbar onWidgetToggle={toggleWidget} activeWidgets={activeWidgets} />

        {/* Main Content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            marginLeft: `${drawerWidth}px`,
            marginRight: `${drawerWidth}px`,
          }}
        >
          <h2>Welcome to the Dashboard</h2>
          <p>Select widgets from the sidebar to open multiple at the same time.</p>
        </Box>
      </Box>

      {/* Modal to Show Multiple Widgets */}
      <Modal open={activeWidgets.length > 0} onClose={() => setActiveWidgets([])}>
        <Box
          sx={{
            bgcolor: "white",
            mx: "auto",
            mt: "10%",
            width: "80%",
            maxWidth: 600,
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          {/* Dynamically Render Widgets Based on Active State */}
          {activeWidgets.includes("userInfo") && <UserInfo />}
          {activeWidgets.includes("notifications") && <Notifications />}
          {activeWidgets.includes("dataTable") && <DataTable onRowClick={() => {}} />}
        </Box>
      </Modal>
    </WidgetProvider>
  );
};

export default App;
