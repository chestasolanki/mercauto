// src/pages/CarDetails.jsx
import { useLocation, useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";

export default function CarDetails() {
  const { id } = useParams();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const city = params.get("city");

  return (
    <Box sx={{ minHeight: "60vh", p: 4 }}>
      <Typography variant="h5">Car Details #{id}</Typography>
      <Typography sx={{ mt: 1, opacity: 0.7 }}>
        Selected City: {city || "—"}
      </Typography>
      {/* Next step: showroom selector + date/time booking UI */}
    </Box>
  );
}
