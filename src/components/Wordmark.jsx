// Text logo. Set in the UI face at display tracking so the mark shares a
// voice with the headlines rather than looking like a separate element.
// Size is controlled by the caller via `className` (e.g. text-lg / text-xl).
export default function Wordmark({ className = "" }) {
  return (
    <span
      className={`font-sans font-semibold tracking-[-0.045em] leading-none whitespace-nowrap text-ink-50 ${className}`}
    >
      NineOneNine
    </span>
  );
}
