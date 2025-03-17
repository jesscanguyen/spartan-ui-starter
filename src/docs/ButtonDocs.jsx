import React from "react";
import Button from "../components/Button/Button";
import CodePreview from "../CodePreview";

const ButtonDocs = () => {
  return (
    <div className="content">
      <h1>Button</h1>
      <p>
        The Button component is a key interactive element, designed to provide
        clear and consistent actions throughout the interface.
      </p>

      {/* Example Section */}
      <h3>Example</h3>
      <CodePreview>
        <Button label="Button" />
      </CodePreview>

      {/* Variants Section */}
      <h3>Variants</h3>
      <CodePreview>
        <Button label="Primary" />
        <Button label="Secondary" variant="secondary" />
        <Button label="Tertiary" variant="tertiary" />
        <Button label="Destructive" variant="destructive" />
        <Button label="Disabled" disabled />
      </CodePreview>

      {/* Sizes Section */}
      <h3>Sizes</h3>
      <CodePreview>
        <Button label="Small" size="small" />
        <Button label="Medium" size="medium" />
        <Button label="Large" size="large" />
      </CodePreview>

      {/* Events Section */}
      <h3>Events</h3>
      <CodePreview>
        <Button label="Click me!" onClick={() => alert("Button clicked!")} />
      </CodePreview>

      {/* Width Section */}
      <h3>Width</h3>
      <CodePreview>
        <Button label="Full Width" width="full" />
        <Button label="Half Width" width="half" />
        <Button label="Half Width" width="half" />
      </CodePreview>
    </div>
  );
};

export default ButtonDocs;
