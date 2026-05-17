import Image from "next/image";

type AnimatedAnointedLogoProps = {
  size?: number;
  className?: string;
  animated?: boolean;
};

export default function AnimatedAnointedLogo({
  size = 80,
  className = "",
  animated = true,
}: AnimatedAnointedLogoProps) {
  return (
    <span
      className={`anointed-logo-mark ${animated ? "anointed-logo-mark--animated" : ""} ${className}`.trim()}
      style={{ width: size, height: size }}
      aria-label="Anointed"
      role="img"
    >
      <Image
        src="/images/logo/anointed-logo-background.svg"
        alt=""
        aria-hidden="true"
        fill
        sizes={`${size}px`}
        className="anointed-logo-mark__background"
        priority
      />
      <Image
        src="/images/logo/anointed-logo-contents.svg"
        alt=""
        aria-hidden="true"
        fill
        sizes={`${size}px`}
        className="anointed-logo-mark__contents"
        priority
      />
    </span>
  );
}
