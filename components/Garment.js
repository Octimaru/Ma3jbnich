// Simple garment silhouettes used as product placeholders.
// Replace them with real photos (next/image) once you have them.

const shade = "rgba(4,7,5,0.38)";

export default function Garment({ kind, label }) {
  const common = {
    viewBox: "0 0 200 200",
    role: "img",
    "aria-label": label,
    xmlns: "http://www.w3.org/2000/svg",
  };

  if (kind === "hoodie") {
    return (
      <svg {...common}>
        <path
          fill="currentColor"
          d="M64 54 L136 54 L152 64 L180 152 L154 160 L142 104 L142 178 L58 178 L58 104 L46 160 L20 152 L48 64 Z"
        />
        <path fill="currentColor" d="M70 56 Q100 12 130 56 Q100 72 70 56 Z" />
        <path fill={shade} d="M80 54 Q100 28 120 54 Q100 66 80 54 Z" />
        <path
          fill="none"
          stroke={shade}
          strokeWidth="3"
          strokeLinejoin="round"
          d="M76 130 H124 L132 154 H68 Z"
        />
        <path
          fill="none"
          stroke={shade}
          strokeWidth="3"
          strokeLinecap="round"
          d="M92 66 V92 M108 66 V92"
        />
      </svg>
    );
  }

  if (kind === "tee") {
    return (
      <svg {...common}>
        <path
          fill="currentColor"
          d="M62 30 L86 20 Q100 36 114 20 L138 30 L174 64 L150 86 L138 74 L138 174 L62 174 L62 74 L50 86 L26 64 Z"
        />
        <path
          fill="none"
          stroke={shade}
          strokeWidth="3"
          strokeLinecap="round"
          d="M86 20 Q100 36 114 20"
        />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path
        fill="currentColor"
        d="M62 22 H138 L148 180 H108 L100 84 L92 180 H52 Z"
      />
      <path fill={shade} d="M62 22 H138 L139 38 H61 Z" />
      <path
        fill="none"
        stroke={shade}
        strokeWidth="3"
        strokeLinejoin="round"
        d="M62 104 H84 V132 H60 Z M138 104 H116 V132 H140 Z"
      />
    </svg>
  );
}
