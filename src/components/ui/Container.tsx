import type { ElementType, ReactNode } from "react";

interface ContainerProps {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}

export function Container({ as: Tag = "div", className = "", children }: ContainerProps) {
  return (
    <Tag className={`mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10 ${className}`}>
      {children}
    </Tag>
  );
}
