import { ReactNode } from 'react';

interface ProfileSectionProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

export const ProfileSection = ({ 
  title, 
  icon, 
  children,
  className = ''
}: ProfileSectionProps) => {
  return (
    <div className={`py-5 border-b border-border last:border-b-0 ${className}`}>
      <h3 className="flex items-center gap-2 text-base font-semibold text-primary mb-4 font-sans">
        {icon}
        {title}:
      </h3>
      <div>{children}</div>
    </div>
  );
};
