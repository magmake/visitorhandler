import { useState, useEffect } from "react";

const useApi = () => {
  const [open, setOpen] = useState(false);
const [data, setData] = useState([]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      return jsonData;
    } catch (error) {
      console.log(error);
      return null; // Palautetaan null virhetilanteessa
    }
  };
const submitData = async (formData, url) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  return { open, handleOpen, handleClose, fetchData, submitData };
};

export default useApi;