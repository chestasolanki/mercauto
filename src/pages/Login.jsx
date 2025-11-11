import { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Button,
  TextField,
  Typography,
  Divider,
  InputAdornment,
  IconButton
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=1600",
];

export default function Login() {
  const [showPass, setShowPass] = useState(false);
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setFrame((f) => (f + 1) % images.length), 3500);
    return () => clearInterval(t);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("frontend only login submit");
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "520px 1fr" },
        background: "#0a0a0a"
      }}
    >
      {/* LEFT LOGIN PANEL */}
      <Box
        sx={{
          px: { xs: 3, sm: 6 },
          py: { xs: 6, sm: 8 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white"
        }}
      >
        <Card
          component={motion.div}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          sx={{
            width: "100%",
            maxWidth: 420,
            bgcolor: "rgba(18,18,18,0.9)",
            borderRadius: 4,
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(6px)",
          }}
          elevation={0}
        >
          <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
            <Typography variant="h5" fontWeight={700} color="white">
              Sign in to MercAuto
            </Typography>
            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.6)" }}>
              AI Powered Car Trading
            </Typography>

            <Divider sx={{ my: 3, borderColor: "rgba(255,255,255,0.08)" }} />

            <Box component="form" onSubmit={handleSubmit} sx={{ display: "grid", gap: 2 }}>
              <TextField label="Email" type="email" required fullWidth variant="outlined"
                InputLabelProps={{ style: { color: "rgba(255,255,255,0.7)" } }}
                InputProps={{ style: { color: "white" } }}
                sx={{
                  "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(255,255,255,0.2)" },
                  "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(255,255,255,0.3)" },
                }}
              />

              <TextField
                label="Password"
                type={showPass ? "text" : "password"}
                required
                fullWidth
                variant="outlined"
                InputLabelProps={{ style: { color: "rgba(255,255,255,0.7)" } }}
                InputProps={{
                  style: { color: "white" },
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton sx={{ color:"rgba(255,255,255,0.7)" }} onClick={() => setShowPass((s) => !s)}>
                        {showPass ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(255,255,255,0.2)" },
                  "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(255,255,255,0.3)" },
                }}
              />

              <Button type="submit" variant="contained" sx={{ py: 1.2, textTransform: "none", fontWeight: 700 }}>
                Continue
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>

      {/* RIGHT SIDE HERO */}
      <Box sx={{ position:"relative", display: { xs:"none", md:"block" }, overflow:"hidden" }}>
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={frame}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .8 }}
            style={{
              position:"absolute",
              inset:0,
              backgroundImage:`url(${images[frame]})`,
              backgroundSize:"cover",
              backgroundPosition:"center"
            }}
          />
        </AnimatePresence>
      </Box>
    </Box>
  );
}
