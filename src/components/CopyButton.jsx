import React from "react";
import { Button } from "@mantine/core";

function CopyButton({ text }) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(text.replace(/<\/?[^>]+(>|$)/g, "")); // Removes HTML tags before copying
    alert("Copied to Clipboard!");
  };

  return <Button onClick={copyToClipboard}>Copy to Clipboard</Button>;
}

export default CopyButton;
