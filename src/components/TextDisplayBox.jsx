import React from "react";
import ReactMarkdown from "react-markdown";
import { Paper } from "@mantine/core";

function TextDisplayBox({ text }) {
  return (
    <Paper
      shadow="xs"
      p="md"
      style={{
        backgroundColor: "#fff",
        color: "#000",
        minHeight: "50px",
        fontSize: "18px",
        fontWeight: "bold",
      }}
    >
      <ReactMarkdown>{text}</ReactMarkdown>
    </Paper>
  );
}

export default TextDisplayBox;
