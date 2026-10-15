export default function TraitBadge({ label, color, textColor }) {
  return (
    <span className={`rounded-full px-3 py-1 text-xs ${color} ${textColor}`}>
      {label}
    </span>
  );
}
