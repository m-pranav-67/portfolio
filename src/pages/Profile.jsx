import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Button,
  Grid,
  Stack,
  Divider,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTheme } from "../context/ThemeContext";

function Profile() {
  const { darkMode } = useTheme();
  const technicalSkills = {
    languages: ["Python", "Java", "JavaScript", "C"],
    frontend: ["React", "HTML", "CSS", "Material UI"],
    backend: ["Node.js", "Express.js", "Django"],
    database: ["MongoDB", "MySQL"],
    tools: ["Git", "GitHub", "Linux", "Docker", "VS Code"],
  };

  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          backgroundColor: darkMode ? "#0F172A" : "#FFFFFF",
          minHeight: "calc(100vh - 80px)",
        }}
      >
        <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Box sx={{ textAlign: "center", mb: { xs: 8, md: 12 } }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: 700,
              color: darkMode ? "#F8FAFC" : "#0F172A",
              mb: 2,
            }}
          >
            Resume
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", md: "1.1rem" },
              color: darkMode ? "#CBD5E1" : "#475569",
              maxWidth: 700,
              mx: "auto",
            }}
          >
            A summary of my education, technical skills, achievements and career
            aspirations.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12 }}>
            <Card
              sx={{
                backgroundColor: darkMode ? "#1E293B" : "#FFFFFF",
                borderRadius: 3,
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 12px 24px rgba(59, 130, 246, 0.15)",
                },
                border: "1px solid rgba(59, 130, 246, 0.1)",
              }}
            >
              <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: { xs: "1.5rem", md: "1.75rem" },
                    fontWeight: 700,
                    color: darkMode ? "#F8FAFC" : "#0F172A",
                    mb: 3,
                  }}
                >
                  Career Objective
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "0.95rem", md: "1rem" },
                    color: darkMode ? "#CBD5E1" : "#475569",
                    lineHeight: 1.8,
                  }}
                >
                  I am a Computer Science and Business Systems student passionate
                  about DevOps, Linux, cloud technologies and software engineering.
                  I enjoy building practical solutions, learning modern technologies
                  and solving real-world problems through projects and continuous
                  learning.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Card
              sx={{
                backgroundColor: darkMode ? "#1E293B" : "#FFFFFF",
                borderRadius: 3,
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 12px 24px rgba(59, 130, 246, 0.15)",
                },
                border: "1px solid rgba(59, 130, 246, 0.1)",
              }}
            >
              <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: { xs: "1.5rem", md: "1.75rem" },
                    fontWeight: 700,
                    color: darkMode ? "#F8FAFC" : "#0F172A",
                    mb: 3,
                  }}
                >
                  Education
                </Typography>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: { xs: "1.1rem", md: "1.25rem" },
                      fontWeight: 600,
                      color: "#3B82F6",
                      mb: 1,
                    }}
                  >
                    B.Tech Computer Science and Business Systems
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: "0.95rem", md: "1rem" },
                      color: darkMode ? "#CBD5E1" : "#475569",
                    }}
                  >
                    Sri Eshwar College of Engineering
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Card
              sx={{
                backgroundColor: darkMode ? "#1E293B" : "#FFFFFF",
                borderRadius: 3,
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 12px 24px rgba(59, 130, 246, 0.15)",
                },
                border: "1px solid rgba(59, 130, 246, 0.1)",
              }}
            >
              <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: { xs: "1.5rem", md: "1.75rem" },
                    fontWeight: 700,
                    color: darkMode ? "#F8FAFC" : "#0F172A",
                    mb: 3,
                  }}
                >
                  Technical Skills
                </Typography>
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <Box sx={{ mb: 2 }}>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontSize: "1rem",
                          fontWeight: 600,
                          color: "#3B82F6",
                          mb: 2,
                        }}
                      >
                        Languages
                      </Typography>
                      <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                        {technicalSkills.languages.map((skill, index) => (
                          <Chip
                            key={index}
                            label={skill}
                            sx={{
                              backgroundColor: "rgba(59, 130, 246, 0.1)",
                              color: "#3B82F6",
                              border: "1px solid rgba(59, 130, 246, 0.3)",
                              fontWeight: 500,
                              fontSize: "0.85rem",
                            }}
                          />
                        ))}
                      </Stack>
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <Box sx={{ mb: 2 }}>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontSize: "1rem",
                          fontWeight: 600,
                          color: "#3B82F6",
                          mb: 2,
                        }}
                      >
                        Frontend
                      </Typography>
                      <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                        {technicalSkills.frontend.map((skill, index) => (
                          <Chip
                            key={index}
                            label={skill}
                            sx={{
                              backgroundColor: "rgba(59, 130, 246, 0.1)",
                              color: "#3B82F6",
                              border: "1px solid rgba(59, 130, 246, 0.3)",
                              fontWeight: 500,
                              fontSize: "0.85rem",
                            }}
                          />
                        ))}
                      </Stack>
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <Box sx={{ mb: 2 }}>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontSize: "1rem",
                          fontWeight: 600,
                          color: "#3B82F6",
                          mb: 2,
                        }}
                      >
                        Backend
                      </Typography>
                      <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                        {technicalSkills.backend.map((skill, index) => (
                          <Chip
                            key={index}
                            label={skill}
                            sx={{
                              backgroundColor: "rgba(59, 130, 246, 0.1)",
                              color: "#3B82F6",
                              border: "1px solid rgba(59, 130, 246, 0.3)",
                              fontWeight: 500,
                              fontSize: "0.85rem",
                            }}
                          />
                        ))}
                      </Stack>
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <Box sx={{ mb: 2 }}>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontSize: "1rem",
                          fontWeight: 600,
                          color: "#3B82F6",
                          mb: 2,
                        }}
                      >
                        Database
                      </Typography>
                      <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                        {technicalSkills.database.map((skill, index) => (
                          <Chip
                            key={index}
                            label={skill}
                            sx={{
                              backgroundColor: "rgba(59, 130, 246, 0.1)",
                              color: "#3B82F6",
                              border: "1px solid rgba(59, 130, 246, 0.3)",
                              fontWeight: 500,
                              fontSize: "0.85rem",
                            }}
                          />
                        ))}
                      </Stack>
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <Box sx={{ mb: 2 }}>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontSize: "1rem",
                          fontWeight: 600,
                          color: "#3B82F6",
                          mb: 2,
                        }}
                      >
                        Tools
                      </Typography>
                      <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                        {technicalSkills.tools.map((skill, index) => (
                          <Chip
                            key={index}
                            label={skill}
                            sx={{
                              backgroundColor: "rgba(59, 130, 246, 0.1)",
                              color: "#3B82F6",
                              border: "1px solid rgba(59, 130, 246, 0.3)",
                              fontWeight: 500,
                              fontSize: "0.85rem",
                            }}
                          />
                        ))}
                      </Stack>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Card
              sx={{
                backgroundColor: darkMode ? "#1E293B" : "#FFFFFF",
                borderRadius: 3,
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 12px 24px rgba(59, 130, 246, 0.15)",
                },
                border: "1px solid rgba(59, 130, 246, 0.1)",
              }}
            >
              <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: { xs: "1.5rem", md: "1.75rem" },
                    fontWeight: 700,
                    color: darkMode ? "#F8FAFC" : "#0F172A",
                    mb: 3,
                  }}
                >
                  Achievements
                </Typography>
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Box
                      sx={{
                        p: 2,
                        backgroundColor: "rgba(59, 130, 246, 0.05)",
                        borderRadius: 2,
                        border: "1px solid rgba(59, 130, 246, 0.1)",
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: "1.1rem",
                          fontWeight: 600,
                          color: "#3B82F6",
                          mb: 1,
                        }}
                      >
                        Special Mention
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: "0.9rem",
                          color: darkMode ? "#CBD5E1" : "#475569",
                        }}
                      >
                        SNS International MUN
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Box
                      sx={{
                        p: 2,
                        backgroundColor: "rgba(59, 130, 246, 0.05)",
                        borderRadius: 2,
                        border: "1px solid rgba(59, 130, 246, 0.1)",
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: "1.1rem",
                          fontWeight: 600,
                          color: "#3B82F6",
                          mb: 1,
                        }}
                      >
                        Elite Gold
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: "0.9rem",
                          color: darkMode ? "#CBD5E1" : "#475569",
                        }}
                      >
                        NPTEL Python - Score 94%
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Card
              sx={{
                backgroundColor: darkMode ? "#1E293B" : "#FFFFFF",
                borderRadius: 3,
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 12px 24px rgba(59, 130, 246, 0.15)",
                },
                border: "1px solid rgba(59, 130, 246, 0.1)",
              }}
            >
              <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: { xs: "1.5rem", md: "1.75rem" },
                    fontWeight: 700,
                    color: darkMode ? "#F8FAFC" : "#0F172A",
                    mb: 3,
                  }}
                >
                  Areas of Interest
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" gap={1.5}>
                  {["DevOps", "Linux", "Cloud Computing", "Automation", "Web Development"].map(
                    (interest, index) => (
                      <Chip
                        key={index}
                        label={interest}
                        sx={{
                          backgroundColor: "rgba(59, 130, 246, 0.1)",
                          color: "#3B82F6",
                          border: "1px solid rgba(59, 130, 246, 0.3)",
                          fontWeight: 600,
                          fontSize: "0.9rem",
                          py: 1,
                          px: 1.5,
                        }}
                      />
                    )
                  )}
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Card
              sx={{
                backgroundColor: darkMode ? "#1E293B" : "#FFFFFF",
                borderRadius: 3,
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 12px 24px rgba(59, 130, 246, 0.15)",
                },
                border: "1px solid rgba(59, 130, 246, 0.1)",
              }}
            >
              <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: { xs: "1.5rem", md: "1.75rem" },
                    fontWeight: 700,
                    color: darkMode ? "#F8FAFC" : "#0F172A",
                    mb: 3,
                  }}
                >
                  Languages
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" gap={1.5}>
                  {["English", "Tamil", "German (A1 Learning)"].map(
                    (language, index) => (
                      <Chip
                        key={index}
                        label={language}
                        sx={{
                          backgroundColor: "rgba(59, 130, 246, 0.1)",
                          color: "#3B82F6",
                          border: "1px solid rgba(59, 130, 246, 0.3)",
                          fontWeight: 600,
                          fontSize: "0.9rem",
                          py: 1,
                          px: 1.5,
                        }}
                      />
                    )
                  )}
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Card
              sx={{
                backgroundColor: darkMode ? "#1E293B" : "#FFFFFF",
                borderRadius: 3,
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 12px 24px rgba(59, 130, 246, 0.15)",
                },
                border: "1px solid rgba(59, 130, 246, 0.1)",
              }}
            >
              <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: { xs: "1.5rem", md: "1.75rem" },
                    fontWeight: 700,
                    color: darkMode ? "#F8FAFC" : "#0F172A",
                    mb: 3,
                  }}
                >
                  Career Goals
                </Typography>
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Box
                      sx={{
                        p: 2,
                        backgroundColor: "rgba(59, 130, 246, 0.05)",
                        borderRadius: 2,
                        border: "1px solid rgba(59, 130, 246, 0.1)",
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: "1.1rem",
                          fontWeight: 600,
                          color: "#3B82F6",
                          mb: 2,
                        }}
                      >
                        Short-Term Goal
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: "0.9rem",
                          color: darkMode ? "#CBD5E1" : "#475569",
                          lineHeight: 1.6,
                        }}
                      >
                        Master DevOps, Linux, Cloud and Automation through
                        real-world projects.
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <Box
                      sx={{
                        p: 2,
                        backgroundColor: "rgba(59, 130, 246, 0.05)",
                        borderRadius: 2,
                        border: "1px solid rgba(59, 130, 246, 0.1)",
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: "1.1rem",
                          fontWeight: 600,
                          color: "#3B82F6",
                          mb: 2,
                        }}
                      >
                        Long-Term Goal
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: "0.9rem",
                          color: darkMode ? "#CBD5E1" : "#475569",
                          lineHeight: 1.6,
                        }}
                      >
                        Become a DevOps Engineer contributing to impactful global
                        engineering teams.
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: "center", mt: { xs: 8, md: 10 } }}>
          <Button
            variant="outlined"
            startIcon={<DownloadIcon />}
            size="large"
            sx={{
              borderColor: "#3B82F6",
              color: "#3B82F6",
              fontWeight: 600,
              py: 2,
              px: 4,
              textTransform: "none",
              borderRadius: 2,
              fontSize: "1rem",
              transition: "all 0.3s ease",
              "&:hover": {
                borderColor: "#2563EB",
                backgroundColor: "rgba(59, 130, 246, 0.05)",
                transform: "translateY(-2px)",
                boxShadow: "0 8px 20px rgba(59, 130, 246, 0.2)",
              },
            }}
          >
            Download Resume
          </Button>
        </Box>
      </Container>
      </Box>
      <Footer />
    </Box>
  );
}

export default Profile;