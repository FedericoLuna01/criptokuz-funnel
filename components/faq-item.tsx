import { ChevronRight } from "lucide-react"

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({
  question,
  answer
}) => {
  return (
    <article
      className="bg-secondary p-6 rounded-xl max-w-4xl mx-auto"
    >
      <div
        className="flex items-center"
      >
        <ChevronRight className="mr-1" strokeWidth={4} />
        <h2 className="text-2xl font-semibold">{question}</h2>
      </div>
      <p
        className="text-md text-gray-300 mt-2"
      >
        {answer}
      </p>
    </article>
  )
}

export default FaqItem