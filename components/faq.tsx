import { FaqItems } from "@/data/data";
import Heading from "./ui/heading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const Faq = ({ }) => {
  return (
    <section className="py-10"
    >
      <div className="container space-y-6">
        <Heading
          title="Preguntas frecuentes"
          highlightWords={["preguntas frecuentes"]}
        />
        <Accordion
          type="single"
          collapsible
          className="max-w-3xl mx-auto space-y-3"
        >
          {
            FaqItems.map(({ question, answer, id }) => (
              <AccordionItem
                key={id}
                value={`item-${id}`}
                className="border border-border rounded-lg"
              >
                <AccordionTrigger
                  className=" font-bold rounded-lg px-6 text-left hover:text-[#0faab6] data-[state=open]:rounded-b-none  data-[state=open]:border-b  data-[state=open]:text-[#0faab6]"
                >
                  {question}
                </AccordionTrigger>
                <AccordionContent
                  className="bg-background px-6 py-4 rounded-lg text-[1.1em] text-muted-foreground"
                >
                  {answer}
                </AccordionContent>
              </AccordionItem>
            ))
          }
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
