import { FaqItems } from "@/data/data"
import FaqItem from "./faq-item"
import Heading from "./ui/heading"

const Faq = ({}) => {
  return (
    <section
      className="container my-10 space-y-6"
    >
      <Heading
        title='Preguntas frecuentes'
        highlightWords={['preguntas', 'frecuentes']}
      />
      {
        FaqItems.map(({ question, answer, id }) => (
          <FaqItem
            key={id}
            question={question}
            answer={answer}
          />
        ))
      }
    </section>
  )
}

export default Faq