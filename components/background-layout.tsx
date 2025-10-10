import { cn } from "@/lib/utils"

const BackgroundLayout = ({ children, className }: {
  children: React.ReactNode,
  className?: string
}) => {
  return (
    <div
      className={cn("border-b border-input bg-white dark:bg-[#111] relative before:z-0 before:opacity-70 before:absolute before:inset-0 before:bg-hero-pattern flex items-center flex-col min-h-fit sm:min-h-screen dark:[background-image:url('/background.webp')] dark:bg-cover dark:bg-[top_center]", className)}
    >
      {children}
    </div>
  )
}

export default BackgroundLayout