import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Button,
  Grid,
  Divider,
  Stack,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with real-time inventory management and secure payment processing.",
      problemStatement:
        "Small businesses struggle with managing inventory and processing orders efficiently across multiple channels.",
      solution:
        "Built a centralized platform that integrates inventory tracking, order management, and payment gateway with real-time updates.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redis"],
      features: [
        "Real-time inventory sync",
        "Secure payment processing",
        "Admin dashboard",
        "Order tracking system",
      ],
      github: "https://github.com/m-pranav-67",
    },
    {
      title: "AI Task Manager",
      description:
        "An intelligent task management application that uses machine learning to prioritize and suggest optimal workflows.",
      problemStatement:
        "Users often feel overwhelmed by task lists and struggle to prioritize work effectively.",
      solution:
        "Implemented AI algorithms that analyze task patterns, deadlines, and user behavior to suggest optimal prioritization.",
      technologies: ["Python", "TensorFlow", "React", "FastAPI", "PostgreSQL"],
      features: [
        "AI-powered prioritization",
        "Smart scheduling",
        "Progress analytics",
        "Team collaboration",
      ],
      github: "https://github.com/m-pranav-67",
    },
    {
      title: "Health Tracker App",
      description:
        "A comprehensive health monitoring application with wearable device integration and personalized insights.",
      problemStatement:
        "Individuals lack a unified platform to track health metrics from various sources and receive actionable insights.",
      solution:
        "Created an aggregator that connects with multiple health APIs and provides personalized recommendations based on data analysis.",
      technologies: ["React Native", "Firebase", "HealthKit", "Google Fit", "Node.js"],
      features: [
        "Multi-device sync",
        "Health insights",
        "Goal tracking",
        "Data visualization",
      ],
      github: "https://github.com/m-pranav-67",
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "#0F172A",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: 700,
              color: "#F8FAFC",
              mb: 2,
            }}
          >
            Projects
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", md: "1.1rem" },
              color: "#CBD5E1",
              maxWidth: 600,
              mx: "auto",
            }}
          >
            A showcase of my technical projects and their impact.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} key={index}>
              <Card
                sx={{
                  backgroundColor: "#1E293B",
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
                <Box
                  sx={{
                    height: { xs: 200, md: 250 },
                    backgroundColor: "#0F172A",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderBottom: "1px solid rgba(59, 130, 246, 0.1)",
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
                </Box>

                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: { xs: "1.5rem", md: "1.75rem" },
                      fontWeight: 700,
                      color: "#F8FAFC",
                      mb: 2,
                    }}
                  >
                    {project.title}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: "0.95rem", md: "1rem" },
                      color: "#CBD5E1",
                      mb: 3,
                      lineHeight: 1.6,
                    }}
                  >
                    {project.description}
                  </Typography>

                  <Box sx={{ mb: 3 }}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: "#3B82F6",
                        mb: 1,
                      }}
                    >
                      Problem Statement
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: { xs: "0.9rem", md: "0.95rem" },
                        color: "#94A3B8",
                        lineHeight: 1.6,
                      }}
                    >
                      {project.problemStatement}
                    </Typography>
                  </Box>

                  <Box sx={{ mb: 3 }}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontSize: "1rem",
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
                        fontSize: { xs: "0.9rem", md: "0.95rem" },
                        color: "#94A3B8",
                        lineHeight: 1.6,
                      }}
                    >
                      {project.solution}
                    </Typography>
                  </Box>

                  <Box sx={{ mb: 3 }}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: "#F8FAFC",
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
                            fontSize: "0.85rem",
                          }}
                        />
                      ))}
                    </Stack>
                  </Box>

                  <Box sx={{ mb: 4 }}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: "#F8FAFC",
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
                              fontSize: "0.9rem",
                              color: "#CBD5E1",
                            }}
                          >
                            {feature}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>

                  <Divider
                    sx={{
                      my: 3,
                      borderColor: "rgba(255, 255, 255, 0.08)",
                    }}
                  />

                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={2}
                  >
                    <Button
                      variant="contained"
                      startIcon={<GitHubIcon />}
                      href={project.github}
                      target="_blank"
                      sx={{
                        backgroundColor: "#3B82F6",
                        color: "#F8FAFC",
                        fontWeight: 600,
                        py: 1.5,
                        px: 3,
                        textTransform: "none",
                        borderRadius: 2,
                        "&:hover": {
                          backgroundColor: "#2563EB",
                        },
                      }}
                    >
                      View on GitHub
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<LaunchIcon />}
                      disabled
                      sx={{
                        borderColor: "rgba(59, 130, 246, 0.5)",
                        color: "#94A3B8",
                        fontWeight: 600,
                        py: 1.5,
                        px: 3,
                        textTransform: "none",
                        borderRadius: 2,
                        "&:hover": {
                          borderColor: "#3B82F6",
                          backgroundColor: "rgba(59, 130, 246, 0.05)",
                        },
                      }}
                    >
                      Live Demo (Coming Soon)
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;