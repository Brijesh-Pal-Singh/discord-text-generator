import React from "react";
import { TextInput } from "@mantine/core";

function TextInputBox({ inputText, setInputText }) {
  return (
    <TextInput
      placeholder="Enter text here..."
      value={inputText}
      onChange={(event) => setInputText(event.target.value)}
      style={{
        marginBottom: "20px",
        backgroundColor: "#333",
        color: "#fff",
        border: "1px solid #555",
      }}
    />
  );
}

export default TextInputBox;
