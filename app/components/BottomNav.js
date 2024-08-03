"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";

export default function BottomNav() {
  const [value, setValue] = useState(0);
  const router = useRouter();

  const handleNavigationChange = (event, newValue) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        router.push("/");
        break;
      case 1:
        router.push("/tracker");
        break;
      default:
        break;
    }
  };

  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={handleNavigationChange}
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#804EA2",
        color: "#fff",
        borderTop: "1px solid #ddd",
      }}
    >
      <BottomNavigationAction
        sx={{ color: value === 0 ? "#000" : "#fff", "&.Mui-selected": {
          color: "#000",
        } }}
        label="Home"
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        sx={{ color: value === 1 ? "#000" : "#fff", "&.Mui-selected": {
          color: "#000",
        } }}
        label="Tracker"
        icon={<RestaurantMenuIcon />}
      />
    </BottomNavigation>
  );
}
