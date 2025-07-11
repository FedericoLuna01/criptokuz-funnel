import { cn } from "@/lib/utils";
import { CheckIcon, XIcon } from "lucide-react";

interface TestimonialProps {
  video: string
  user: string;
  badInfo: string;
  goodInfo: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ video, user, badInfo, goodInfo }) => {
  return (
    <article
      className={cn("space-y-4 max-w-2xl w-full mx-auto p-3 bg-black border border-[#444d55] rounded-lg")}
    >
      <iframe
        src={video}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="rounded-lg w-full aspect-video"
      ></iframe>
      <div
        className='flex flex-col gap-y-3 leading-none font-semibold'
      >
        <div className="flex items-center gap-2 text-gray-300 ">
          <p>{user}</p>
        </div>
        <div className="flex items-center gap-2">
          <XIcon className="size-5 text-red-500 stroke-3" />
          <p>{badInfo}</p>
        </div>
        <div className="flex items-center gap-2">
          <CheckIcon className="size-5 text-emerald-500 stroke-3" />
          <p>{goodInfo}</p>
        </div>
      </div>
    </article>
  )
}

export default Testimonial