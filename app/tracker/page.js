"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { firestore } from "@/firebase";
import {
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
} from "firebase/firestore";

export default function Tracker() {
  const [pantry, setPantry] = useState([]);
  const [openAdd, setOpenAdd] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const updateInventory = async () => {
    const snapshot = query(collection(firestore, "inventory"));
    const docs = await getDocs(snapshot);
    const pantryList = [];
    docs.forEach((doc) => {
      pantryList.push({
        name: doc.id,
        ...doc.data(),
      });
    });
    setPantry(pantryList);
  };

  const addItem = async (item) => {
    const docRef = doc(collection(firestore, "inventory"), item);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const { quantity } = docSnap.data();
      await setDoc(docRef, { quantity: quantity + 1 });
    } else {
      await setDoc(docRef, { quantity: 1 });
    }
    await updateInventory();
  };

  const removeItem = async (item) => {
    const docRef = doc(collection(firestore, "inventory"), item);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const { quantity } = docSnap.data();
      if (quantity === 1) {
        await deleteDoc(docRef);
      } else {
        await setDoc(docRef, { quantity: quantity - 1 });
      }
    }
    await updateInventory();
  };

  const handleUpdate = async () => {
    if (selectedItem && itemQuantity) {
      const docRef = doc(collection(firestore, "inventory"), selectedItem);
      await setDoc(docRef, { quantity: parseInt(itemQuantity) });
      await updateInventory();
      setOpenUpdate(false);
      setItemQuantity("");
      setSelectedItem(null);
    }
  };

  const filteredPantry = pantry.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    updateInventory();
  }, []);

  return (
    <Box
      width="100vw"
      height="90vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      gap={2}
      bgcolor="#fff"
    >
      {/* Add Item Modal */}
      <Modal open={openAdd} onClose={() => setOpenAdd(false)}>
        <Box
          position="absolute"
          top="50%"
          left="50%"
          width={400}
          bgcolor="white"
          border="2px solid #000"
          boxShadow={24}
          p={4}
          display="flex"
          flexDirection="column"
          gap={3}
          sx={{
            transform: "translate(-50%, -50%)",
          }}
        >
          <Typography variant="h6">Add Item</Typography>
          <Stack width="100%" direction="row" spacing={2}>
            <TextField
              variant="outlined"
              fullWidth
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              label="Item Name"
            />
            <Button
              variant="outlined"
              onClick={() => {
                addItem(itemName);
                setItemName("");
                setOpenAdd(false);
              }}
            >
              Add
            </Button>
          </Stack>
        </Box>
      </Modal>

      {/* Update Item Modal */}
      <Modal open={openUpdate} onClose={() => setOpenUpdate(false)}>
        <Box
          position="absolute"
          top="50%"
          left="50%"
          width={400}
          bgcolor="white"
          border="2px solid #000"
          boxShadow={24}
          p={4}
          display="flex"
          flexDirection="column"
          gap={3}
          sx={{
            transform: "translate(-50%, -50%)",
          }}
        >
          <Typography variant="h6">Update Item Quantity</Typography>
          <Stack width="100%" direction="row" spacing={2}>
            <TextField
              variant="outlined"
              fullWidth
              value={itemQuantity}
              onChange={(e) => setItemQuantity(e.target.value)}
              label="New Quantity"
              type="number"
            />
            <Button variant="outlined" onClick={handleUpdate}>
              Update
            </Button>
          </Stack>
        </Box>
      </Modal>

      {/* Search Field */}
      <TextField
        variant="outlined"
        fullWidth
        placeholder="Search items"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ mb: 2, width: "800px" }}
      />

      <Button
        variant="contained"
        color="secondary"
        onClick={() => setOpenAdd(true)}
      >
        Add New Item
      </Button>

      <Box border="1px solid #fff">
        <Box
          width="800px"
          height="100px"
          bgcolor="#fff"
          alignItems="center"
          justifyContent="center"
          display="flex"
          flexDirection="column"
        >
          <Typography variant="h3" color="#000" textDecoration="underline">
            Pantry Tracker
          </Typography>
          <Typography variant="p" color="#000">
            Feel free to add your items below
            </Typography>
        </Box>

        <Stack width="800px" height="300px" spacing={2} overflow="auto">
          {filteredPantry.map((item) => (
            <Box
              key={item.name}
              width="100%"
              minHeight="150px"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              bgcolor="#fff"
              padding={5}
              border="1px solid #000"
              borderRadius={2}
            >
              <Typography variant="h4" color="#000" textAlign="center">
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              </Typography>
              <Typography variant="h4" color="#000" textAlign="center">
                {item.quantity}
              </Typography>
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    addItem(item.name);
                  }}
                >
                  Add
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    removeItem(item.name);
                  }}
                >
                  Remove
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    setSelectedItem(item.name);
                    setOpenUpdate(true);
                  }}
                >
                  Update
                </Button>
              </Stack>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
