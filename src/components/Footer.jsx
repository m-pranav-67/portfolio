import {
  Box,
  Container,
  Typography,
  Stack,
  IconButton,
  Link,
  Divider,
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { useTheme } from "../context/ThemeContext";

function Footer() {
  const { darkMode } = useTheme();
  return (
    <Box
      sx={{
        mt: 10,
        py: 5,
        backgroundColor: darkMode ? "#0B1120" : "#F8FAFC",
        borderTop: darkMode ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.08)",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          spacing={3}
          alignItems="center"
          textAlign="center"
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ color: darkMode ? "#fff" : "#0F172A" }}
          >
            {"<Pranav />"}
          </Typography>

          <Typography
            sx={{
              color: darkMode ? "#94A3B8" : "#64748B",
              maxWidth: "650px",
            }}
          >
            Innovation doesn't end with invention; every improvement
            creates the foundation for the next breakthrough.
          </Typography>

          <Stack direction="row" spacing={2}>
            <IconButton
              component={Link}
              href="https://github.com/m-pranav-67"
              target="_blank"
              sx={{
                color: "#3B82F6",
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.15)",
                  color: "#60A5FA",
                },
              }}
            >
              <GitHubIcon />
            </IconButton>

            <IconButton
              component={Link}
              href="https://www.linkedin.com/in/mpranav67"
              target="_blank"
              sx={{
                color: "#3B82F6",
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.15)",
                  color: "#60A5FA",
                },
              }}
            >
              <LinkedInIcon />
            </IconButton>

            <IconButton
              component={Link}
              href="mailto:pranavm132@gmail.com"
              sx={{
                color: "#3B82F6",
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.15)",
                  color: "#60A5FA",
                },
              }}
            >
              <EmailIcon />
            </IconButton>
          </Stack>

          <Divider
            sx={{
              width: "100%",
              borderColor: darkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)",
            }}
          />

          <Typography
            variant="body2"
            sx={{
              color: "#64748B",
            }}
          >
            © {new Date().getFullYear()} Pranav M • Built with React & Material UI
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;