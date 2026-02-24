interface PlaceholderProps {
  label?: string;
  aspectRatio?: string;
  className?: string;
}

export default function Placeholder({
  label = "Image coming soon",
  aspectRatio = "16/9",
  className = "",
}: PlaceholderProps) {
  return (
    <div
      className={`flex items-center justify-center rounded-xl bg-neutral-800 ${className}`}
      style={{ aspectRatio }}
    >
      <span
        className="text-white/25 text-sm"
        style={{ fontFamily: '"PP Neue Machina", Arial, sans-serif' }}
      >
        [ {label} ]
      </span>
    </div>
  );
}
