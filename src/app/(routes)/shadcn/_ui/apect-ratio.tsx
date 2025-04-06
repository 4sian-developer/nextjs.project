import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export function AspectRatioDemo() {
  return (
    <AspectRatio ratio={16 / 9} className="bg-muted">
      <Image
        src="/images/blog/blog-post-1.jpg"
        alt="Blog Post 1 Placeholder"
        fill
        className="h-full w-full rounded-md object-cover"
      />
    </AspectRatio>
  )
}
