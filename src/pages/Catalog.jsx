import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/** Simple fade carousel for each card */
function ImageCarousel({ images, height = 220, interval = 2000 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(id);
  }, [images, interval]);

  return (
    <Box sx={{ position: "relative", height, overflow: "hidden" }}>
      {images.map((src, i) => (
        <Box
          key={i}
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "opacity 0.8s ease-in-out",
            opacity: index === i ? 1 : 0,
          }}
        />
      ))}
    </Box>
  );
}

// 3 images per car (royalty-free/press images)
const CARS = [
  {
    id: 1,
    name: "Tata Nexon EV LR 2024",
    price: "₹ 17,50,000",
    images: [
        "https://imgd.aeplcdn.com/370x208/n/cw/ec/149123/nexon-ev-exterior-front-view.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/370x208/n/cw/ec/149123/nexon-ev-exterior-right-rear-three-quarter.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/370x208/n/cw/ec/149123/nexon-ev-interior-front-row-seats-45.jpeg?isig=0&q=80",
      
    ],
  },
  {
    id: 2,
    name: "Hyundai Creta SX 2024",
    price: "₹ 18,75,000",
    images: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/106815/creta-exterior-right-front-three-quarter-6.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/106815/creta-exterior-rear-view.jpeg?isig=0&q=80",
      "https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/Creta/Interior/pc/Hyundai-creta-suv-interior-big-1120x600-1.jpg",
    ],
  },

  {
    id: 3,
    name: "Mahindra Thar Roxx",
    price: "₹ 13,20,000",
    images: [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/124839/thar-roxx-exterior-right-front-three-quarter-2.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/370x208/n/cw/ec/124839/thar-roxx-exterior-rear-view.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/370x208/n/cw/ec/124839/thar-roxx-interior-dashboard-2.jpeg?isig=0&q=80",
    ],
  },

  {
    id: 4,
    name: "Honda City ZX 2024",
    price: "₹ 17,90,000",
    images: [
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Honda/City/12093/1755764990493/front-left-side-47.jpg?imwidth=420&impolicy=resize",
      "https://stimg.cardekho.com/images/carexteriorimages/630x420/Honda/City/12667/1750410975226/rear-right-side-48.jpg?imwidth=420&impolicy=resize",
      "https://stimg.cardekho.com/images/carinteriorimages/630x420/Honda/City/12092/1749198266412/interior-image-208.jpg?imwidth=420&impolicy=resize",
    ],
  },
];


export default function Catalog() {
  return (
    <Box
  sx={{
    minHeight: "100vh",
    pt: 12,
    pb: 6,
    position: "relative",
    background: "linear-gradient(180deg, #0a0a0a 0%, #050505 50%, #000000 100%)",
    "&::before": {
      content: '""',
      position: "absolute",
      inset: 0,
      background:
        "radial-gradient(circle at 30% 0%, rgba(40,40,40,0.55), transparent 60%), radial-gradient(circle at 90% 0%, rgba(18,40,60,0.35), transparent 60%)",
      pointerEvents: "none",
      zIndex: 0,
    },
  }}
>

      <Typography
        sx={{
          textAlign: "center",
          fontSize: "32px",
          fontWeight: 400,
          mb: 4,
          color: "#fff",
          letterSpacing: "0.3px",
        }}
      >
        Explore Cars
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
          gap: 4,
          width: "85%",
          mx: "auto",
        }}
      >
        {CARS.map((car, index) => (
          <motion.div
            key={car.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.12, ease: "easeOut" }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <Card
              sx={{
                background: "#141414",
                borderRadius: "18px",
                boxShadow: "0 6px 16px rgba(0,0,0,0.5)",
                overflow: "hidden",
                transition: "0.25s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 12px 24px rgba(0,0,0,0.6)",
                },
              }}
            >
              {/* Per-card slideshow */}
              <ImageCarousel images={car.images} height={220} interval={2000} />

              <CardContent>
                <Typography sx={{ fontSize: "18px", fontWeight: 500, color: "#fff" }}>
                  {car.name}
                </Typography>
                <Typography sx={{ fontSize: "15px", mt: 1, opacity: 0.85, color: "#ccc" }}>
                  {car.price}
                </Typography>

                <Button
                  component={Link}
                  to={`/car/${car.id}`}
                  variant="contained"
                  fullWidth
                  sx={{
                    mt: 2,
                    borderRadius: "12px",
                    textTransform: "none",
                    background: "#1976D2",
                  }}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
}
