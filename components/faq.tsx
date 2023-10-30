import { FaqItems } from "@/data/data"
import FaqItem from "./faq-item"
import Heading from "./ui/heading"
import { Separator } from "./ui/separator"

const Faq = ({}) => {
  return (
    <>
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
      <Separator className="container bg-gray-200" />
    </>
  )
}

export default Faq