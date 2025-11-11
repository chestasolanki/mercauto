import { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";


const images = [
  "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=1600",
];


function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {images.map((img, i) => (
        <Box
          key={i}
          component="div"
          sx={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            transition: "opacity 1s ease-in-out",
            opacity: index === i ? 1 : 0,
          }}
        />
      ))}

      {/* dark overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.3)",
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "#fff",
        }}
      >
      <Typography
  sx={{
    fontSize: { xs: "18px", sm: "22px", md: "26px" },
    fontWeight: 300,
    letterSpacing: "0.5px",
    mb: 2,
    lineHeight: 1.2,
    fontFamily: "'SF Pro Display','Roboto',sans-serif",
  }}
>
  Find your Perfect Car with Intelligence
</Typography>

<Typography
  sx={{
    fontSize: { xs: "12px", sm: "14px", md: "16px" },
    fontWeight: 300,
    opacity: 0.85,
    letterSpacing: "0.3px",
    mb: 4,
    fontFamily: "'SF Pro Display','Roboto',sans-serif",
  }}
>
  AI powered car buying and selling experience
</Typography>


<Button
  component={Link}
  to="/catalog"
  variant="contained"
  size="large"
  sx={{
    background: "rgba(255,255,255,0.18)",
    borderRadius: "14px",
    padding: "12px 32px",
    textTransform: "none",
    fontSize: "17px",
    fontWeight: 400,
    letterSpacing: "0.5px",
    border: "1px solid rgba(255,255,255,0.25)",
    boxShadow: "0 6px 25px rgba(0,0,0,0.2)",
    transition: "0.3s ease",
    "&:hover": {
      background: "rgba(255,255,255,0.32)",
      boxShadow: "0 8px 32px rgba(0,0,0,0.25)"
    }
  }}
>
  Explore Cars
</Button>


      </Box>
      
    </Box>
    
  );
}

export default Home;
