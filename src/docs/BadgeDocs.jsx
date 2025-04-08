import React from "react";
import Badge from "../components/Badge/Badge";
import CodePreview from "../CodePreview";

// 1. Add status variants in Badge.jsx
// 2. Stlye Badge in Badge.module.css
// 2. Update components in "Status" section

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

      {/* Status Section */}
      <h3>Status</h3>
      <CodePreview>
        {/* Success Variant */}
        <Badge label="Success" variant="success" />

        {/* Warning Variant */}
        <Badge label="Warning" variant="warning" />

        {/* Danger Variant */}
        <Badge label="Danger" variant="danger"/>
      </CodePreview>
    </div>
  );
};

export default BadgeDocs;