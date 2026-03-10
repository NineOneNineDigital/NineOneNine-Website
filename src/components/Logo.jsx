export default function Logo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 280 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="NineOneNine"
    >
      <defs>
        {/* Gold gradient for the badge */}
        <linearGradient id="goldGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E8C840" />
          <stop offset="50%" stopColor="#CDA400" />
          <stop offset="100%" stopColor="#A88500" />
        </linearGradient>
        {/* Subtle fill for badge interior */}
        <linearGradient id="badgeFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#CDA400" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#CDA400" stopOpacity="0.02" />
        </linearGradient>
      </defs>

      {/* Shield badge — clean symmetrical shape */}
      <path
        d="M28 2
           L50 2
           Q54 2 54 6
           L54 34
           Q54 38 50 42
           L28 52
           L6 42
           Q2 38 2 34
           L2 6
           Q2 2 6 2
           Z"
        fill="url(#badgeFill)"
        stroke="url(#goldGrad)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Inner border for depth */}
      <path
        d="M28 6
           L47 6
           Q50 6 50 9
           L50 33
           Q50 36 47 39
           L28 48
           L9 39
           Q6 36 6 33
           L6 9
           Q6 6 9 6
           Z"
        fill="none"
        stroke="#CDA400"
        strokeWidth="0.5"
        strokeOpacity="0.3"
        strokeLinejoin="round"
      />

      {/* 919 text */}
      <text
        x="28"
        y="33"
        textAnchor="middle"
        fontFamily="ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, monospace"
        fontWeight="700"
        fontSize="20"
        fill="url(#goldGrad)"
        letterSpacing="1.5"
      >
        919
      </text>

      {/* Decorative line above text */}
      <line x1="14" y1="14" x2="42" y2="14" stroke="#CDA400" strokeWidth="0.5" strokeOpacity="0.4" />
      {/* Decorative line below text */}
      <line x1="14" y1="40" x2="42" y2="40" stroke="#CDA400" strokeWidth="0.5" strokeOpacity="0.4" />

      {/* NINEONENINE wordmark */}
      <text
        x="72"
        y="28"
        fontFamily="ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, monospace"
        fontWeight="600"
        fontSize="16"
        fill="url(#goldGrad)"
        letterSpacing="3"
      >
        NINEONENINE
      </text>

      {/* Subtitle */}
      <text
        x="72"
        y="44"
        fontFamily="ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, monospace"
        fontWeight="400"
        fontSize="7.5"
        fill="#CDA400"
        opacity="0.45"
        letterSpacing="4.5"
      >
        RALEIGH, NC
      </text>
    </svg>
  );
}
