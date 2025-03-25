import React from "react";
import { Button } from "@mantine/core";

function FormatButton({ label, onClick, isActive }) {
  return (
    <Button color={isActive ? "green" : "blue"} onClick={onClick}>
      {label}
    </Button>
  );
}

export default FormatButton;