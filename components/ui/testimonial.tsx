import { cn } from "@/lib/utils";
import Highlighter from "react-highlight-words";

interface TestimonialProps {
  video: string
  description: string
  highlightWords?: string[];
  isLast?: boolean
}

const Testimonial: React.FC<TestimonialProps> = ({ video, description, highlightWords = [], isLast = false }) => {
  return (
    <article
      className={cn("space-y-4 max-w-2xl w-full mx-auto border-2 border-primary rounded-3xl bg-black p-4 sm:p-8", isLast ? "col-span-1 xl:col-span-2" : "")}
    >
      <iframe
        src={video}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="rounded-lg w-full aspect-video"
      ></iframe>
      <p
        className='text-xl sm:text-2xl font-semibold'
      >
        <Highlighter
          highlightStyle={{
            color: 'hsl(var(--primary))',
            backgroundColor: 'transparent',
          }}
          searchWords={highlightWords}
          autoEscape={true}
          textToHighlight={description}
        />
      </p>
    </article>
  )
}

export default Testimonial