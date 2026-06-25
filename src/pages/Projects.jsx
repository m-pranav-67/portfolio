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
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTheme } from "../context/ThemeContext";

function Projects() {
  const { darkMode } = useTheme();
  const projects = [
    {
      name: "Smart Wheelchair-Bed Platform",
      tagline: "Reimagining Patient Transportation",
      problem:
        "Patient transfers between wheelchairs, hospital beds, ambulances and scan beds require multiple manual movements.",
      solution:
        "A modular docking platform allowing seamless transfer using a unified mobility system.",
      features: [
        "Modular docking system",
        "Seamless patient transfer",
        "Unified mobility platform",
        "Healthcare optimized",
      ],
      technologies: ["Blender", "Mechanical Design", "Healthcare", "Innovation"],
      github: "https://github.com/m-pranav-67",
    },
    {
      name: "Driver Drowsiness Detection System",
      tagline: "AI Powered Road Safety",
      problem: "Drivers often experience fatigue leading to accidents.",
      solution:
        "Detect eye closure using facial landmark detection and alert the driver in real time.",
      features: [
        "Real-time detection",
        "Facial landmark analysis",
        "Instant driver alerts",
        "Accident prevention",
      ],
      technologies: ["Python", "Django", "OpenCV", "MongoDB"],
      github: "https://github.com/m-pranav-67",
    },
    {
      name: "Freelancer Collaboration Platform",
      tagline: "Real-Time Project Collaboration",
      problem:
        "Managing freelance teams across different projects is difficult.",
      solution:
        "A MERN platform supporting authentication, project management and real-time messaging.",
      features: [
        "User authentication",
        "Project management",
        "Real-time messaging",
        "Team collaboration",
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
      github: "https://github.com/m-pranav-67",
    },
  ];

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
            Featured Projects
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
            Real-world software and hardware solutions built through learning,
            innovation, and problem solving.
          </Typography>
        </Box>

        {projects.map((project, index) => (
          <Box key={index} sx={{ mb: { xs: 6, md: 8 } }}>
            <Card
              sx={{
                backgroundColor: darkMode ? "#1E293B" : "#FFFFFF",
                borderRadius: 3,
                overflow: "hidden",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 12px 24px rgba(59, 130, 246, 0.15)",
                },
                border: "1px solid rgba(59, 130, 246, 0.1)",
              }}
            >
              <Grid container>
                {index % 2 === 0 ? (
                  <>
                    <Grid
                      size={{ xs: 12, md: 6 }}
                      sx={{
                        backgroundColor: darkMode ? "#0F172A" : "#F1F5F9",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        minHeight: { xs: 200, md: 300 },
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#3B82F6",
                          fontSize: "1.2rem",
                          fontWeight: 500,
                        }}
                      >
                        Project Image Placeholder
                      </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                        <Typography
                          variant="h4"
                          sx={{
                            fontSize: { xs: "1.5rem", md: "1.75rem" },
                            fontWeight: 700,
                            color: darkMode ? "#F8FAFC" : "#0F172A",
                            mb: 1,
                          }}
                        >
                          {project.name}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            fontSize: { xs: "1rem", md: "1.1rem" },
                            fontWeight: 500,
                            color: "#3B82F6",
                            mb: 3,
                          }}
                        >
                          {project.tagline}
                        </Typography>

                        <Box sx={{ mb: 3 }}>
                          <Typography
                            variant="subtitle2"
                            sx={{
                              fontSize: "0.95rem",
                              fontWeight: 600,
                              color: "#3B82F6",
                              mb: 1,
                            }}
                          >
                            Problem
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              fontSize: "0.9rem",
                              color: darkMode ? "#94A3B8" : "#64748B",
                              lineHeight: 1.6,
                            }}
                          >
                            {project.problem}
                          </Typography>
                        </Box>

                        <Box sx={{ mb: 3 }}>
                          <Typography
                            variant="subtitle2"
                            sx={{
                              fontSize: "0.95rem",
                              fontWeight: 600,
                              color: "#3B82F6",
                              mb: 1,
                            }}
                          >
                            Solution
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              fontSize: "0.9rem",
                              color: darkMode ? "#94A3B8" : "#64748B",
                              lineHeight: 1.6,
                            }}
                          >
                            {project.solution}
                          </Typography>
                        </Box>

                        <Box sx={{ mb: 3 }}>
                          <Typography
                            variant="subtitle2"
                            sx={{
                              fontSize: "0.95rem",
                              fontWeight: 600,
                              color: darkMode ? "#F8FAFC" : "#0F172A",
                              mb: 2,
                            }}
                          >
                            Key Features
                          </Typography>
                          <Box
                            sx={{
                              display: "grid",
                              gridTemplateColumns: {
                                xs: "1fr",
                                sm: "repeat(2, 1fr)",
                              },
                              gap: 1.5,
                            }}
                          >
                            {project.features.map((feature, featureIndex) => (
                              <Box
                                key={featureIndex}
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <Box
                                  sx={{
                                    width: 6,
                                    height: 6,
                                    borderRadius: "50%",
                                    backgroundColor: "#3B82F6",
                                    mr: 2,
                                    flexShrink: 0,
                                  }}
                                />
                                <Typography
                                  variant="body2"
                                  sx={{
                                    fontSize: "0.85rem",
                                    color: darkMode ? "#CBD5E1" : "#475569",
                                  }}
                                >
                                  {feature}
                                </Typography>
                              </Box>
                            ))}
                          </Box>
                        </Box>

                        <Box sx={{ mb: 4 }}>
                          <Typography
                            variant="subtitle2"
                            sx={{
                              fontSize: "0.95rem",
                              fontWeight: 600,
                              color: darkMode ? "#F8FAFC" : "#0F172A",
                              mb: 2,
                            }}
                          >
                            Technologies
                          </Typography>
                          <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                            {project.technologies.map((tech, techIndex) => (
                              <Chip
                                key={techIndex}
                                label={tech}
                                sx={{
                                  backgroundColor: "rgba(59, 130, 246, 0.1)",
                                  color: "#3B82F6",
                                  border: "1px solid rgba(59, 130, 246, 0.3)",
                                  fontWeight: 500,
                                  fontSize: "0.8rem",
                                }}
                              />
                            ))}
                          </Stack>
                        </Box>

                        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                          <Button
                            variant="contained"
                            startIcon={<GitHubIcon />}
                            href={project.github}
                            target="_blank"
                            sx={{
                              backgroundColor: "#3B82F6",
                              color: darkMode ? "#F8FAFC" : "#0F172A",
                              fontWeight: 600,
                              py: 1.2,
                              px: 2.5,
                              textTransform: "none",
                              borderRadius: 2,
                              transition: "all 0.3s ease",
                              "&:hover": {
                                backgroundColor: "#2563EB",
                                transform: "translateY(-2px)",
                                boxShadow: "0 8px 20px rgba(59, 130, 246, 0.3)",
                              },
                            }}
                          >
                            GitHub
                          </Button>
                          <Button
                            variant="outlined"
                            startIcon={<LaunchIcon />}
                            disabled
                            sx={{
                              borderColor: "rgba(59, 130, 246, 0.5)",
                              color: darkMode ? "#94A3B8" : "#64748B",
                              fontWeight: 600,
                              py: 1.2,
                              px: 2.5,
                              textTransform: "none",
                              borderRadius: 2,
                              transition: "all 0.3s ease",
                              "&:hover": {
                                borderColor: "#3B82F6",
                                backgroundColor: "rgba(59, 130, 246, 0.05)",
                              },
                            }}
                          >
                            Live Demo
                          </Button>
                        </Stack>
                      </CardContent>
                    </Grid>
                  </>
                ) : (
                  <>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                        <Typography
                          variant="h4"
                          sx={{
                            fontSize: { xs: "1.5rem", md: "1.75rem" },
                            fontWeight: 700,
                            color: darkMode ? "#F8FAFC" : "#0F172A",
                            mb: 1,
                          }}
                        >
                          {project.name}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            fontSize: { xs: "1rem", md: "1.1rem" },
                            fontWeight: 500,
                            color: "#3B82F6",
                            mb: 3,
                          }}
                        >
                          {project.tagline}
                        </Typography>

                        <Box sx={{ mb: 3 }}>
                          <Typography
                            variant="subtitle2"
                            sx={{
                              fontSize: "0.95rem",
                              fontWeight: 600,
                              color: "#3B82F6",
                              mb: 1,
                            }}
                          >
                            Problem
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              fontSize: "0.9rem",
                              color: darkMode ? "#94A3B8" : "#64748B",
                              lineHeight: 1.6,
                            }}
                          >
                            {project.problem}
                          </Typography>
                        </Box>

                        <Box sx={{ mb: 3 }}>
                          <Typography
                            variant="subtitle2"
                            sx={{
                              fontSize: "0.95rem",
                              fontWeight: 600,
                              color: "#3B82F6",
                              mb: 1,
                            }}
                          >
                            Solution
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              fontSize: "0.9rem",
                              color: darkMode ? "#94A3B8" : "#64748B",
                              lineHeight: 1.6,
                            }}
                          >
                            {project.solution}
                          </Typography>
                        </Box>

                        <Box sx={{ mb: 3 }}>
                          <Typography
                            variant="subtitle2"
                            sx={{
                              fontSize: "0.95rem",
                              fontWeight: 600,
                              color: darkMode ? "#F8FAFC" : "#0F172A",
                              mb: 2,
                            }}
                          >
                            Key Features
                          </Typography>
                          <Box
                            sx={{
                              display: "grid",
                              gridTemplateColumns: {
                                xs: "1fr",
                                sm: "repeat(2, 1fr)",
                              },
                              gap: 1.5,
                            }}
                          >
                            {project.features.map((feature, featureIndex) => (
                              <Box
                                key={featureIndex}
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <Box
                                  sx={{
                                    width: 6,
                                    height: 6,
                                    borderRadius: "50%",
                                    backgroundColor: "#3B82F6",
                                    mr: 2,
                                    flexShrink: 0,
                                  }}
                                />
                                <Typography
                                  variant="body2"
                                  sx={{
                                    fontSize: "0.85rem",
                                    color: darkMode ? "#CBD5E1" : "#475569",
                                  }}
                                >
                                  {feature}
                                </Typography>
                              </Box>
                            ))}
                          </Box>
                        </Box>

                        <Box sx={{ mb: 4 }}>
                          <Typography
                            variant="subtitle2"
                            sx={{
                              fontSize: "0.95rem",
                              fontWeight: 600,
                              color: darkMode ? "#F8FAFC" : "#0F172A",
                              mb: 2,
                            }}
                          >
                            Technologies
                          </Typography>
                          <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                            {project.technologies.map((tech, techIndex) => (
                              <Chip
                                key={techIndex}
                                label={tech}
                                sx={{
                                  backgroundColor: "rgba(59, 130, 246, 0.1)",
                                  color: "#3B82F6",
                                  border: "1px solid rgba(59, 130, 246, 0.3)",
                                  fontWeight: 500,
                                  fontSize: "0.8rem",
                                }}
                              />
                            ))}
                          </Stack>
                        </Box>

                        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                          <Button
                            variant="contained"
                            startIcon={<GitHubIcon />}
                            href={project.github}
                            target="_blank"
                            sx={{
                              backgroundColor: "#3B82F6",
                              color: darkMode ? "#F8FAFC" : "#0F172A",
                              fontWeight: 600,
                              py: 1.2,
                              px: 2.5,
                              textTransform: "none",
                              borderRadius: 2,
                              transition: "all 0.3s ease",
                              "&:hover": {
                                backgroundColor: "#2563EB",
                                transform: "translateY(-2px)",
                                boxShadow: "0 8px 20px rgba(59, 130, 246, 0.3)",
                              },
                            }}
                          >
                            GitHub
                          </Button>
                          <Button
                            variant="outlined"
                            startIcon={<LaunchIcon />}
                            disabled
                            sx={{
                              borderColor: "rgba(59, 130, 246, 0.5)",
                              color: darkMode ? "#94A3B8" : "#64748B",
                              fontWeight: 600,
                              py: 1.2,
                              px: 2.5,
                              textTransform: "none",
                              borderRadius: 2,
                              transition: "all 0.3s ease",
                              "&:hover": {
                                borderColor: "#3B82F6",
                                backgroundColor: "rgba(59, 130, 246, 0.05)",
                              },
                            }}
                          >
                            Live Demo
                          </Button>
                        </Stack>
                      </CardContent>
                    </Grid>
                    <Grid
                      size={{ xs: 12, md: 6 }}
                      sx={{
                        backgroundColor: darkMode ? "#0F172A" : "#F1F5F9",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        minHeight: { xs: 200, md: 300 },
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#3B82F6",
                          fontSize: "1.2rem",
                          fontWeight: 500,
                        }}
                      >
                        Project Image Placeholder
                      </Typography>
                    </Grid>
                  </>
                )}
              </Grid>
            </Card>
          </Box>
        ))}
      </Container>
      </Box>
      <Footer />
    </Box>
  );
}

export default Projects;