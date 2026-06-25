import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Link, useLocation } from "react-router-dom";
import { useTheme as useCustomTheme } from "../context/ThemeContext";

function Navbar() {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { darkMode, toggleTheme } = useCustomTheme();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Resume", path: "/profile" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <Box
      sx={{
        width: 250,
        backgroundColor: darkMode ? "#0F172A" : "#FFFFFF",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          p: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            color: darkMode ? "#F8FAFC" : "#0F172A",
          }}
        >
          Menu
        </Typography>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon sx={{ color: darkMode ? "#F8FAFC" : "#0F172A" }} />
        </IconButton>
      </Box>
      <List sx={{ flexGrow: 1 }}>
        {navItems.map((item) => (
          <ListItem
            key={item.name}
            component={Link}
            to={item.path}
            onClick={handleDrawerToggle}
            sx={{
              color: darkMode ? "#CBD5E1" : "#475569",
              textDecoration: "none",
              "&:hover": {
                backgroundColor: darkMode
                  ? "rgba(59, 130, 246, 0.1)"
                  : "rgba(59, 130, 246, 0.05)",
              },
              borderBottom:
                location.pathname === item.path
                  ? `2px solid #3B82F6`
                  : "2px solid transparent",
            }}
          >
            <ListItemText
              primary={item.name}
              sx={{
                "& .MuiTypography-root": {
                  fontWeight: location.pathname === item.path ? 600 : 400,
                  color:
                    location.pathname === item.path
                      ? "#3B82F6"
                      : darkMode
                      ? "#CBD5E1"
                      : "#475569",
                },
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: darkMode ? "#0F172A" : "#FFFFFF",
        borderBottom: `1px solid ${
          darkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"
        }`,
        backdropFilter: scrolled ? "blur(10px)" : "none",
        backgroundColor: scrolled
          ? darkMode
            ? "rgba(15, 23, 42, 0.9)"
            : "rgba(255, 255, 255, 0.9)"
          : darkMode
          ? "#0F172A"
          : "#FFFFFF",
        transition: "all 0.3s ease",
      }}
    >
      <Toolbar
        sx={{
          maxWidth: "1200px",
          width: "100%",
          mx: "auto",
          py: 1,
        }}
      >
        {/* Logo */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexGrow: 1,
            cursor: "pointer",
          }}
        >
          <Typography
            className="logo-icon"
            sx={{
              color: darkMode ? "primary.main" : "#3B82F6",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "2rem",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(1.15)",
                textShadow: "0 0 15px rgba(59,130,246,0.8)",
              },
            }}
          >
            {"<>"}
          </Typography>

          <Typography
            className="logo-text"
            sx={{
              ml: 1,
              color: darkMode ? "#FFFFFF" : "#0F172A",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "1.6rem",
              letterSpacing: 1,
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(1.08)",
                textShadow: darkMode
                  ? "0 0 12px rgba(255,255,255,0.5)"
                  : "0 0 12px rgba(0,0,0,0.2)",
              },
            }}
          >
            Pranav
          </Typography>
        </Box>

        {/* Desktop Navigation */}
        {!isMobile && (
          <Box
            sx={{
              display: "flex",
              gap: 2,
              alignItems: "center",
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.name}
                component={Link}
                to={item.path}
                color="inherit"
                sx={{
                  position: "relative",
                  borderRadius: 0,
                  color: darkMode ? "#CBD5E1" : "#475569",
                  fontWeight: location.pathname === item.path ? 600 : 400,
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "0%",
                    height: "2px",
                    backgroundColor: "#3B82F6",
                    transition: "width 0.3s ease",
                  },
                  "&:hover::after": {
                    width: "100%",
                  },
                  "&:hover": {
                    color: "#3B82F6",
                  },
                  ...(location.pathname === item.path && {
                    "&::after": {
                      width: "100%",
                    },
                    color: "#3B82F6",
                  }),
                }}
              >
                {item.name}
              </Button>
            ))}

            {/* Theme Toggle */}
            <IconButton
              onClick={toggleTheme}
              sx={{
                ml: 2,
                color: darkMode ? "#F8FAFC" : "#0F172A",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: darkMode
                    ? "rgba(59, 130, 246, 0.1)"
                    : "rgba(59, 130, 246, 0.1)",
                  transform: "rotate(180deg)",
                },
              }}
            >
              {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Box>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconButton
              onClick={toggleTheme}
              sx={{
                color: darkMode ? "#F8FAFC" : "#0F172A",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: darkMode
                    ? "rgba(59, 130, 246, 0.1)"
                    : "rgba(59, 130, 246, 0.1)",
                },
              }}
            >
              {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
            <IconButton
              onClick={handleDrawerToggle}
              sx={{
                color: darkMode ? "#F8FAFC" : "#0F172A",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: darkMode
                    ? "rgba(59, 130, 246, 0.1)"
                    : "rgba(59, 130, 246, 0.1)",
                },
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        )}
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: darkMode ? "#0F172A" : "#FFFFFF",
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </AppBar>
  );
}

export default Navbar;