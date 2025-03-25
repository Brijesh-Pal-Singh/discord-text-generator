import React from "react";
import { Group, Text } from "@mantine/core";

function ColorPalette({ colors, onSelect, selected, label }) {
  return (
    <Group spacing="xs">
      <Text size="sm">{label}:</Text>
      {colors.map((color) => (
        <button
          key={color}
          onClick={() => onSelect(color)}
          style={{
            width: "25px",
            height: "25px",
            borderRadius: "50%",
            backgroundColor: color,
            border: selected === color ? "2px solid #fff" : "none",
            cursor: "pointer",
          }}
        />
      ))}
    </Group>
  );
}

export default ColorPalette;