import { Box, Stack, TextField } from "@mui/material";
import React, { useRef, useState } from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Route = ({ google, Autocomplete,onDirectionsResponse  }) => {
  const [distance, setDistanace] = useState("");
  const [duration, setDuration] = useState("");

  const originRef = useRef();
  const destRef = useRef();

  const calculteRoute = async () => {
    if (originRef.current.value === "" || destRef.current.value === "") {
      return;
    }

    const directionService = new google.maps.DirectionsService();
    const results = await directionService.route({
      origin: originRef.current.value,
      destination: destRef.current.value,
      travelMode: "DRIVING",
    });
    console.log(results);
    console.log(results.request.destination.query);
    console.log(results.request.origin.query);

    onDirectionsResponse(results);
    setDistanace(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
    console.log(duration, distance);
  };

  const handleBlur = () => {
    calculteRoute();
  };

  return (
    <Box
      sx={{
        position: "absolute",
        top: "10vh",
        left: "50%",
        transform: "translate(-50%)",
        zIndex: "2",
        width: "30vw",
        padding: "0rem",
        backgroundColor: "#bbdefb",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "1rem",
      }}
    >
      <Stack direction="row" spacing={"1rem"} alignItems="center" >
        <Stack sx={{ flexGrow: 1, flexDirection: "row", alignItems: "center" }}>
          <CircleOutlinedIcon />
          <Autocomplete>
          <TextField
            id="start"
            variant="outlined"
            sx={{ borderRadius: "30px", padding: "5px" }}
            inputRef={originRef}
          />
        </Autocomplete>
        </Stack>
        <MoreHorizIcon />
        <Stack sx={{ flexGrow: 1, flexDirection: "row", alignItems: "center" }}>
          <LocationOnOutlinedIcon />
          <Autocomplete>
            <TextField
              id="destination"
              variant="outlined"
              sx={{ borderRadius: "30px", padding: "5px" }}
              inputRef={destRef}
              onBlur={handleBlur}
            />
          </Autocomplete>
        </Stack>
        <Stack>
        
        </Stack>
      </Stack>
    </Box>
  );
};

export default Route;
