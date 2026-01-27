interface SpecializationTagProps {
  label: string;
  variant?: 'default' | 'highlight';
}

export const SpecializationTag = ({ label, variant = 'default' }: SpecializationTagProps) => {
  return (
    <span
      className={`
        inline-flex items-center px-2 py-1 text-sm font-medium cursor-default
        transition-colors duration-200
        ${variant === 'highlight' 
          ? 'text-foreground hover:text-primary' 
          : 'text-foreground hover:text-primary'
        }
      `}
    >
      {label}
    </span>
  );
};
