"use client";

import { useRouter } from "next/navigation";
import { Button, Box, Typography } from "@mui/material";

export default function Home() {
  const router = useRouter();

  const navigateToTracker = () => {
    router.push("/tracker");
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="90vh"
      padding={2}
      sx={{ textAlign: "center" }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to Pantry Tracker
      </Typography>
      <Typography
        variant="p"
        component="p"
        gutterBottom
        width={{ xs: "90%", sm: "70%" }}
        fontWeight={500}
      >
        The Pantry Tracker is a comprehensive tool designed to streamline the
        management of your kitchen inventory. With features for adding,
        deleting, and updating items, it ensures that your pantry is always
        accurately reflected. The built-in search functionality allows you to
        quickly find specific items, making it easier to keep track of what you
        have on hand. Whether you are stocking up on essentials or managing a
        large collection of ingredients, the Pantry Tracker simplifies inventory
        management with its intuitive interface and efficient features.
      </Typography>
      <Button variant="contained" color="secondary" onClick={navigateToTracker}>
        Go to Tracker
      </Button>
    </Box>
  );
}
