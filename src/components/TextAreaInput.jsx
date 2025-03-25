import React from "react";
import { Textarea } from "@mantine/core";

function TextAreaInput({ text, setText }) {
  return (
    <Textarea
      placeholder="Type your text here..."
      value={text}
      onChange={(e) => setText(e.target.value)}
      autosize
      minRows={3}
      style={{ marginBottom: "20px" }}
    />
  );
}

export default TextAreaInput;