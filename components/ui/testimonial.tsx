import Highlighter from "react-highlight-words";

interface TestimonialProps {
  video: string
  description: string
  highlightWords?: string[];
}

const Testimonial: React.FC<TestimonialProps> = ({ video, description, highlightWords = [] }) => {
  return (
    <article
      className="space-y-4 max-w-4xl mx-auto"
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