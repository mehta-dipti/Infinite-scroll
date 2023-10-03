import { Paper } from "@mui/material";
import React from "react";

export const FeedList = ({ node }) => {
  const lastUpdate = new Date(node.last_update);

  function formatTime(timeString) {
    const [hourString, minute] = timeString.split(":");
    const hour = +hourString % 24;
    return (hour % 12 || 12) + ":" + minute + (hour < 12 ? "AM" : "PM");
  }

  const time = `${lastUpdate.toDateString().slice(3)} ` + formatTime(lastUpdate.toLocaleTimeString());

  return (
    <div className="feedList-container">
      <Paper
        elevation={4}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          m: 1,
          width: "20%",
          height: 128,
          borderRadius: "15px",
          backgroundColor: "#fff0",
        }}
      >
        <img src={node.field_photo_image_section} height="100%" width="100%" />
      </Paper>
      <Paper
        elevation={0}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          m: 1,
          pl: 2,
          width: "30%",
          height: 128,
        }}
      >
        <h3>{node.title}</h3>
        <p>{`${time} IST`}</p>
      </Paper>
    </div>
  );
};
