import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// Function to dynamically extract all props from JSX elements
const formatJsxCode = (elements) => {
  return React.Children.map(elements, (element) => {
    if (!React.isValidElement(element)) return "";

    // Extract all props dynamically, filtering out undefined/null values
    const props = Object.entries(element.props)
      .filter(([key, value]) => key !== "children" && value !== undefined && value !== null)
      .map(([key, value]) => {
        if (typeof value === "string") return `${key}="${value}"`;
        if (typeof value === "boolean" && value) return key; // Boolean props without `=true`
        if (typeof value === "function") return `${key}={${value.toString()}}`; // Convert function to string
        return `${key}={${JSON.stringify(value)}}`; // Handle objects, numbers, arrays
      })
      .join(" ");

    return `<${element.type.name} ${props} />`.trim();
  })
    .join("\n")
    .replace(/\s+/g, " ") // Cleanup spacing
    .replace(/> </g, ">\n<"); // Format multi-line properly
};

// CodePreview Component
const CodePreview = ({ children }) => {
  const codeString = formatJsxCode(children);

  return (
    <div style={{ marginBottom: "24px" }}>
      {/* Render all components inside the previewer */}
      <div className="component-previewer">{children}</div>

      {/* Syntax Highlighter Block */}
      <SyntaxHighlighter language="jsx" style={oneDark}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodePreview;
