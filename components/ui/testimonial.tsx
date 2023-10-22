import Highlighter from "react-highlight-words";

interface TestimonialProps {
  video: string
  description: string
  highlightWords?: string[];
}

const Testimonial: React.FC<TestimonialProps> = ({ video, description, highlightWords = [] }) => {
  return (
    <article
      className="space-y-4 max-w-2xl mx-auto"
    >
      <iframe
        width="560"
        height="315"
        src={video}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="rounded-lg w-full aspect-video "
      ></iframe>
      <p
        className='text-2xl font-semibold'
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
        {description}
      </p>
    </article>
  )
}

export default Testimonial