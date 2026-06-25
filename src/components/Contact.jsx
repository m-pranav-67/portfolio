import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  Grid,
  Stack,
  IconButton,
  Link,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";
import { useTheme } from "../context/ThemeContext";

const Contact = () => {
  const { darkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: darkMode ? "#0F172A" : "#FFFFFF",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: 700,
              color: darkMode ? "#F8FAFC" : "#0F172A",
              mb: 2,
            }}
          >
            Let's Connect
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
            I'm always open to discussing projects, internships, collaboration
            opportunities, or simply connecting with fellow developers.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Card
              sx={{
                height: "100%",
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
                    mb: 4,
                  }}
                >
                  Contact Information
                </Typography>

                <Stack spacing={3}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 2,
                    }}
                  >
                    <Box
                      sx={{
                        p: 1.5,
                        backgroundColor: "rgba(59, 130, 246, 0.1)",
                        borderRadius: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <EmailIcon sx={{ color: "#3B82F6", fontSize: 24 }} />
                    </Box>
                    <Box>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontSize: "0.9rem",
                          fontWeight: 600,
                          color: darkMode ? "#94A3B8" : "#64748B",
                          mb: 0.5,
                        }}
                      >
                        Email
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: "1rem",
                          color: darkMode ? "#CBD5E1" : "#475569",
                        }}
                      >
                        pranavm132@gmail.com
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 2,
                    }}
                  >
                    <Box
                      sx={{
                        p: 1.5,
                        backgroundColor: "rgba(59, 130, 246, 0.1)",
                        borderRadius: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <GitHubIcon sx={{ color: "#3B82F6", fontSize: 24 }} />
                    </Box>
                    <Box>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontSize: "0.9rem",
                          fontWeight: 600,
                          color: darkMode ? "#94A3B8" : "#64748B",
                          mb: 0.5,
                        }}
                      >
                        GitHub
                      </Typography>
                      <Link
                        href="https://github.com/m-pranav-67"
                        target="_blank"
                        sx={{
                          fontSize: "1rem",
                          color: darkMode ? "#CBD5E1" : "#475569",
                          textDecoration: "none",
                          "&:hover": {
                            color: "#3B82F6",
                            textDecoration: "underline",
                          },
                        }}
                      >
                        github.com/m-pranav-67
                      </Link>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 2,
                    }}
                  >
                    <Box
                      sx={{
                        p: 1.5,
                        backgroundColor: "rgba(59, 130, 246, 0.1)",
                        borderRadius: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <LinkedInIcon sx={{ color: "#3B82F6", fontSize: 24 }} />
                    </Box>
                    <Box>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontSize: "0.9rem",
                          fontWeight: 600,
                          color: darkMode ? "#94A3B8" : "#64748B",
                          mb: 0.5,
                        }}
                      >
                        LinkedIn
                      </Typography>
                      <Link
                        href="https://www.linkedin.com/in/mpranav67"
                        target="_blank"
                        sx={{
                          fontSize: "1rem",
                          color: darkMode ? "#CBD5E1" : "#475569",
                          textDecoration: "none",
                          "&:hover": {
                            color: "#3B82F6",
                            textDecoration: "underline",
                          },
                        }}
                      >
                        linkedin.com/in/mpranav67
                      </Link>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 2,
                    }}
                  >
                    <Box
                      sx={{
                        p: 1.5,
                        backgroundColor: "rgba(59, 130, 246, 0.1)",
                        borderRadius: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <LocationOnIcon sx={{ color: "#3B82F6", fontSize: 24 }} />
                    </Box>
                    <Box>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontSize: "0.9rem",
                          fontWeight: 600,
                          color: darkMode ? "#94A3B8" : "#64748B",
                          mb: 0.5,
                        }}
                      >
                        Location
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: "1rem",
                          color: darkMode ? "#CBD5E1" : "#475569",
                        }}
                      >
                        Tamil Nadu, India
                      </Typography>
                    </Box>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Card
              sx={{
                height: "100%",
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
                    mb: 4,
                  }}
                >
                  Send a Message
                </Typography>

                <Box component="form" onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            backgroundColor: "rgba(15, 23, 42, 0.5)",
                            borderRadius: 2,
                            "&:hover fieldset": {
                              borderColor: "#3B82F6",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#3B82F6",
                            },
                          },
                          "& .MuiInputLabel-root": {
                            color: darkMode ? "#94A3B8" : "#64748B",
                            "&.Mui-focused": {
                              color: "#3B82F6",
                            },
                          },
                          "& .MuiOutlinedInput-input": {
                            color: darkMode ? "#F8FAFC" : "#0F172A",
                          },
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            backgroundColor: "rgba(15, 23, 42, 0.5)",
                            borderRadius: 2,
                            "&:hover fieldset": {
                              borderColor: "#3B82F6",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#3B82F6",
                            },
                          },
                          "& .MuiInputLabel-root": {
                            color: darkMode ? "#94A3B8" : "#64748B",
                            "&.Mui-focused": {
                              color: "#3B82F6",
                            },
                          },
                          "& .MuiOutlinedInput-input": {
                            color: darkMode ? "#F8FAFC" : "#0F172A",
                          },
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            backgroundColor: "rgba(15, 23, 42, 0.5)",
                            borderRadius: 2,
                            "&:hover fieldset": {
                              borderColor: "#3B82F6",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#3B82F6",
                            },
                          },
                          "& .MuiInputLabel-root": {
                            color: darkMode ? "#94A3B8" : "#64748B",
                            "&.Mui-focused": {
                              color: "#3B82F6",
                            },
                          },
                          "& .MuiOutlinedInput-input": {
                            color: darkMode ? "#F8FAFC" : "#0F172A",
                          },
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        multiline
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            backgroundColor: "rgba(15, 23, 42, 0.5)",
                            borderRadius: 2,
                            "&:hover fieldset": {
                              borderColor: "#3B82F6",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#3B82F6",
                            },
                          },
                          "& .MuiInputLabel-root": {
                            color: darkMode ? "#94A3B8" : "#64748B",
                            "&.Mui-focused": {
                              color: "#3B82F6",
                            },
                          },
                          "& .MuiOutlinedInput-input": {
                            color: darkMode ? "#F8FAFC" : "#0F172A",
                          },
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        size="large"
                        startIcon={<SendIcon />}
                        sx={{
                          backgroundColor: "#3B82F6",
                          color: darkMode ? "#F8FAFC" : "#0F172A",
                          fontWeight: 600,
                          py: 1.5,
                          textTransform: "none",
                          borderRadius: 2,
                          fontSize: "1rem",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            backgroundColor: "#2563EB",
                            transform: "translateY(-2px)",
                            boxShadow: "0 8px 20px rgba(59, 130, 246, 0.3)",
                          },
                        }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;