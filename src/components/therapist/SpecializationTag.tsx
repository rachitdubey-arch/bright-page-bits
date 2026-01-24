interface SpecializationTagProps {
  label: string;
  variant?: 'default' | 'highlight';
}

export const SpecializationTag = ({ label, variant = 'default' }: SpecializationTagProps) => {
  return (
    <span
      className={`
        inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium
        transition-all duration-200 cursor-default
        border border-tag-border bg-tag
        hover:border-primary/40
        ${variant === 'highlight' ? 'border-primary/30 bg-primary/5 text-primary' : 'text-foreground'}
      `}
    >
      {label}
    </span>
  );
};
