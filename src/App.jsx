import React, { useState, useEffect } from "react";
import { Container, Title, Group, Button } from "@mantine/core";
import FormatButton from "./components/FormatButton";
import TextAreaInput from "./components/TextAreaInput";
import FormattedTextDisplay from "./components/FormattedTextDisplay";
import ColorPalette from "./components/ColorPalette"; 
import { CopyToClipboard } from "react-copy-to-clipboard";

function App() {
  const [text, setText] = useState("");
  const [formattedText, setFormattedText] = useState("");
  const [isBold, setIsBold] = useState(false);
  const [isUnderlined, setIsUnderlined] = useState(false);
  const [copied, setCopied] = useState(false);
  const [fgColor, setFgColor] = useState("#ffffff"); 
  const [bgColor, setBgColor] = useState("#000000"); 

  // Colors options
  const fgColors = ["#ffffff", "#ff0000", "#00ff00", "#0000ff"];
  const bgColors = ["#000000", "#333333", "#666666", "#999999"];

  useEffect(() => {
    let newText = text;
    if (isBold) newText = `**${newText}**`;
    if (isUnderlined) newText = `__${newText}__`;
    setFormattedText(newText);
  }, [text, isBold, isUnderlined]);

  const handleReset = () => {
    setText("");
    setFormattedText("");
    setIsBold(false);
    setIsUnderlined(false);
    setFgColor("#ffffff");
    setBgColor("#000000");
  };

  return (
    <Container style={{ textAlign: "center", marginTop: "50px" }}>
      <Title order={2} style={{ marginBottom: "20px" }}>
        Discord Text Formatter
      </Title>

      <TextAreaInput text={text} setText={setText} />

      {/* Color Palettes */}
      <Group position="center" style={{ margin: "15px 0" }}>
        <ColorPalette 
          colors={fgColors} 
          onSelect={setFgColor} 
          selected={fgColor}
          label="Foreground"
        />
        <ColorPalette 
          colors={bgColors} 
          onSelect={setBgColor} 
          selected={bgColor}
          label="Background"
        />
      </Group>

      <Group position="center" style={{ marginBottom: "20px" }}>
        <FormatButton label="Bold" onClick={() => setIsBold(!isBold)} isActive={isBold} />
        <FormatButton label="Underline" onClick={() => setIsUnderlined(!isUnderlined)} isActive={isUnderlined} />
        <Button color="red" onClick={handleReset}>Reset</Button>
      </Group>

      <CopyToClipboard text={formattedText} onCopy={() => setCopied(true)}>
        <Button color={copied ? "green" : "blue"}>
          {copied ? "Copied!" : "Copy to Clipboard"}
        </Button>
      </CopyToClipboard>

      <FormattedTextDisplay 
        formattedText={formattedText} 
        fgColor={fgColor} 
        bgColor={bgColor} 
      />
    </Container>
  );
}

export default App;