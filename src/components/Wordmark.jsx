// Text logo set in the header font (Hanken Grotesk via font-sans).
// Size is controlled by the caller via `className` (e.g. text-lg / text-xl).
export default function Wordmark({ className = "" }) {
  return (
    <span
      className={`font-sans font-bold tracking-tight leading-none whitespace-nowrap text-ink-900 ${className}`}
    >
      NineOneNine
    </span>
  );
}
