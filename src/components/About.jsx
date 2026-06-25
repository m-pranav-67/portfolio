import { Container, Typography, Grid, Paper, Box, Stack, Divider } from "@mui/material";
import { useTheme } from "../context/ThemeContext";

function About() {
  const { darkMode } = useTheme();
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ mb: 5, textAlign: { xs: "center", md: "left" } }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, color: darkMode ? "#F8FAFC" : "#0F172A", mb: 1 }}
        >
          Get To Know Me
        </Typography>
        <Divider
          sx={{
            width: 72,
            height: 4,
            bgcolor: "primary.main",
            borderRadius: 2,
            mx: { xs: "auto", md: 0 },
            mb: 2,
          }}
        />
        <Typography
          variant="subtitle1"
          sx={{ color: "text.secondary", maxWidth: 700, mx: { xs: "auto", md: 0 } }}
        >
          The journey that shaped my passion for technology.
        </Typography>
      </Box>

      <Grid container spacing={4} alignItems="stretch">
        <Grid size={{ xs: 12, md: 5 }}>
          <Paper
            elevation={4}
            sx={{
              p: 4,
              borderRadius: 3,
              border: "1px solid rgba(59,130,246,0.18)",
              bgcolor: darkMode ? "#0F172A" : "#FFFFFF",
              height: "100%",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0 12px 24px rgba(59, 130, 246, 0.15)",
              },
            }}
          >
            <Stack spacing={3}>
              <Box>
                <Typography
                  variant="subtitle2"
                  sx={{ color: "primary.main", fontWeight: 700, mb: 0.75 }}
                >
                  🎓 Education
                </Typography>
                <Typography color="text.secondary">
                  B.Tech Computer Science and Business Systems
                </Typography>
              </Box>

              <Box>
                <Typography
                  variant="subtitle2"
                  sx={{ color: "primary.main", fontWeight: 700, mb: 0.75 }}
                >
                  💻 Projects
                </Typography>
                <Typography color="text.secondary">
                  Real-world software & hardware solutions
                </Typography>
              </Box>

              <Box>
                <Typography
                  variant="subtitle2"
                  sx={{ color: "primary.main", fontWeight: 700, mb: 0.75 }}
                >
                  🏆 Activities
                </Typography>
                <Typography color="text.secondary">
                  Hackathons • Technical Events • MUN
                </Typography>
              </Box>

              <Box>
                <Typography
                  variant="subtitle2"
                  sx={{ color: "primary.main", fontWeight: 700, mb: 0.75 }}
                >
                  🎯 Short-Term Goal
                </Typography>
                <Typography color="text.secondary">
                  Master DevOps, Linux, Cloud and Automation.
                </Typography>
              </Box>

              <Box>
                <Typography
                  variant="subtitle2"
                  sx={{ color: "primary.main", fontWeight: 700, mb: 0.75 }}
                >
                  🌍 Long-Term Goal
                </Typography>
                <Typography color="text.secondary">
                  Become a DevOps Engineer and contribute to impactful global engineering teams.
                </Typography>
              </Box>
            </Stack>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 7 }}>
          <Paper
            elevation={4}
            sx={{
              p: 4,
              borderRadius: 3,
              border: "1px solid rgba(59,130,246,0.18)",
              bgcolor: darkMode ? "#0F172A" : "#FFFFFF",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0 12px 24px rgba(59, 130, 246, 0.15)",
              },
            }}
          >
            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.8, mb: 3 }}
            >
              I'm Pranav M, a Computer Science and Business Systems student at Sri Eshwar College of Engineering with a strong interest in DevOps, Linux, cloud technologies, and modern web development. I enjoy transforming ideas into practical solutions, whether it's developing AI-powered applications, building full-stack web platforms, or designing technology that addresses real-world challenges.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "text.secondary", lineHeight: 1.8, mb: 3 }}
            >
              My learning philosophy is simple: Build. Learn. Improve. Every project I undertake strengthens my technical skills while helping me understand how technology creates meaningful impact.
            </Typography>

            <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.8 }}>
              In the short term, my goal is to master DevOps, Linux, cloud technologies, and automation through hands-on projects. In the long term, I aspire to become a DevOps Engineer, contribute to globally impactful products, and continuously innovate throughout my career.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;