import { VideosTestimonials } from "@/data/data";
import Heading from "./ui/heading";
import { Separator } from "./ui/separator";

const VideoTestimonials = () => {
  return (
    <>
      <section>
        <div className="container my-20">
          <div className="mb-5">
            <Heading title="Testimoniales" highlightWords={["Testimoniales"]} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-18 sm:gap-y-28 gap-16">
            {VideosTestimonials.map((video) => (
              <div
                key={video.id}
                className={`${
                  video.id === 7 && "col-span-1 sm:col-span-2 md:col-span-3"
                } `}
              >
                <iframe
                  src={video.src}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="rounded-lg w-full mx-auto max-w-sm aspect-video"
                ></iframe>
                <p className="text-center mt-4 font-semibold text-lg sm:text-2xl max-w-sm mx-auto">
                  {video.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Separator className="container bg-gray-200" />
    </>
  );
};

export default VideoTestimonials;
