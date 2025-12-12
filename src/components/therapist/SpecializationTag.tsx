interface SpecializationTagProps {
  label: string;
  variant?: 'default' | 'highlight';
}

export const SpecializationTag = ({ label, variant = 'default' }: SpecializationTagProps) => {
  return (
    <span
      className={`
        inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium
        transition-all duration-200 cursor-default
        border border-tag-border bg-tag
        hover:scale-105 hover:shadow-soft
        ${variant === 'highlight' ? 'bg-success-light text-success border-success/30' : 'text-foreground/80'}
      `}
    >
      {label}
    </span>
  );
};
