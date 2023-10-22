import Highlighter from "react-highlight-words";

export interface HeadingProps {
  title: string;
  subtitle: string;
  highlightWords: string[];
}

const Heading: React.FC<HeadingProps> = ({ title, subtitle, highlightWords }) => {
  return (
    <div
      className="text-center max-w-lg mx-auto space-y-4"
    >
      <h1
        className="text-5xl font-bold"
      >
        <Highlighter
          highlightStyle={{
            color: 'hsl(var(--primary))',
            backgroundColor: 'transparent',
          }}
          searchWords={highlightWords}
          autoEscape={true}
          textToHighlight={title}
        />
      </h1>
      <p
        className="text-gray-200 text-xl"
      >
        {subtitle}
      </p>
    </div>
  )
}

export default Heading
