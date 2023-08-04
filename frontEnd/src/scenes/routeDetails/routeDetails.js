import { Box, Stack } from "@mui/material";
import React from "react";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Route from "../../components/Route/Route";
import { Typography } from "@mui/material";

const routeDetails = () => {
  return (
    <div>
      <Box
        sx={{
          position: "absolute",
          top: "55px",
          left: "66px",
          zIndex: "3",
          width: "20vw",
          height: "100vh",
          backgroundColor: "#e3f2fd",
        }}
      >
        <Stack sx={{ flexDirection: "row", padding: 6 }}>
          <Stack spacing={1}>
            <CircleOutlinedIcon />
            <MoreVertIcon />
            <LocationOnOutlinedIcon />
          </Stack>
          <Stack justifyContent="space-between">
            <Typography variant="h6" sx={{ paddingLeft: 2 }}>
            </Typography>
            <Typography variant="h6" sx={{ paddingLeft: 2 }}>
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </div>
  );
};

export default routeDetails;
