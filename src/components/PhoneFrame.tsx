import Image from "next/image";

interface PhoneFrameProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}

export default function PhoneFrame({
  src,
  alt,
  priority = false,
  className = "",
}: PhoneFrameProps) {
  return (
    <div
      className={`relative mx-auto rounded-[42px] p-2 bg-gradient-to-b from-[#2E312F] via-[#1B221A] to-[#121612] shadow-[0_24px_50px_-12px_rgba(27,34,26,0.35),0_0_0_1px_rgba(255,255,255,0.08)] ${className}`}
    >
      {/* Screen container with clean rounded corners matching smartphone displays */}
      <div className="relative overflow-hidden rounded-[34px] bg-[#121612]">
        {/* Exact native aspect ratio 454/978 of Sajilo Khata mobile screens */}
        <div className="relative w-full aspect-[454/978]">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 340px"
            className="object-contain select-none"
            priority={priority}
          />
        </div>

        {/* Ultra-subtle glass reflection sheen */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.08] pointer-events-none" />
      </div>
    </div>
  );
}
