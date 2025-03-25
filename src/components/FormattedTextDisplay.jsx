import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

function FormattedTextDisplay({ formattedText, fgColor, bgColor }) {
  return (
    <div
      style={{
        marginTop: "20px",
        padding: "15px",
        border: "1px solid gray",
        backgroundColor: bgColor,
        color: fgColor,
        minHeight: "60px",
        borderRadius: "5px",
      }}
    >
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>
        {formattedText}
      </ReactMarkdown>
    </div>
  );
}

export default FormattedTextDisplay;