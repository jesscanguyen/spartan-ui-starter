import React from "react";
import Badge from "../components/Badge/Badge";
import CodePreview from "../CodePreview";

const BadgeDocs = () => {
  return (
    <div className="content">
      <h1>Badge</h1>
      <p>{/* Add Description */}</p>

      {/* Example Section */}
      <h3>Example</h3>
      <CodePreview>
        <Badge label="Badge" />
      </CodePreview>

      {/* Add Status Section */}
    </div>
  );
};

export default BadgeDocs;