import { Router } from "@/routing";
import { AuthMenu } from "@/components/organisms/user-management/containers/AuthMenu";
import { useTheme } from "@mui/material";

function App() {
  const theme = useTheme();

  return (
    <Router>
      <AuthMenu
        containerStyle={{
          position: "absolute",
          top: theme.spacing(2),
          left: theme.spacing(2),
        }}
      />
    </Router>
  );
}

export default App;
