interface SpecializationTagProps {
  label: string;
  variant?: 'default' | 'highlight';
}

export const SpecializationTag = ({ label, variant = 'default' }: SpecializationTagProps) => {
  return (
    <span
      className={`
        inline-flex items-center px-4 py-1.5 text-sm font-medium rounded-full
        border border-primary/30 bg-primary/5 text-primary
        cursor-default transition-all duration-200
        hover:bg-primary/10 hover:border-primary/50 hover:scale-105
        active:scale-95
      `}
    >
      {label}
    </span>
  );
};
