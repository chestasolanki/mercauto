import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar
      position="absolute"
      elevation={0}
      sx={{
        background: "transparent",
        boxShadow: "none",
        paddingTop: 2,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: 600, letterSpacing: 1, color: "#fff" }}
        >
          Mercauto
        </Typography>

        <Box sx={{ display: "flex", gap: 3 }}>
          <Button component={Link} to="/" sx={{ color: "#fff" }}>
            Home
          </Button>
          <Button component={Link} to="/catalog" sx={{ color: "#fff" }}>
            Catalogue
          </Button>
          <Button component={Link} to="/match" sx={{ color: "#fff" }}>
            AI Match
          </Button>
          <Button component={Link} to="/login" sx={{ color: "#fff" }}>
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
