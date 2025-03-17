import Card from "../components/Card/Card";
import CodePreview from "../CodePreview";

const CardPage = () => {
  return (
    <div className="content">
      <h1>Card</h1>
      <p>
        The Card component is a flexible container used to group related
        content, making it easier to scan and interact with information.
      </p>

      {/* Example Section */}
      <h3>Example</h3>
      <CodePreview>
        <Card title="Card Title" description="This is a sample card." />
      </CodePreview>
    </div>
  );
};

export default CardPage;
