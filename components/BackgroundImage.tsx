import Image from "next/image";

type BackgroundImageProps = {
  image?: string;
};

function BackgroundImage({ image = "/images/bg01.webp" }: BackgroundImageProps) {
  return (
    <Image
      src={image}
      alt=""
      fill
      className="object-cover"
      priority
      sizes="100vw"
    />
  );
}

export function BackgroundImages({ image }: BackgroundImageProps) {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="relative w-full h-full">
        <BackgroundImage image={image} />
      </div>
    </div>
  );
}
