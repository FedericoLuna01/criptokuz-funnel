import Highlighter from "react-highlight-words";

export interface HeadingProps {
  title: string;
  highlightWords: string[];
}

const Heading: React.FC<HeadingProps> = ({ title, highlightWords }) => {
  return (
    <div
      className="text-center max-w-2xl mx-auto space-y-4"
    >
      <h1
        className="text-xl sm:text-3xl font-bold"
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
    </div>
  )
}

export default Heading
