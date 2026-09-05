import type { ElementType, ReactNode } from "react";

interface ContainerProps {
  as?: ElementType;
  id?: string;
  className?: string;
  children: ReactNode;
}

export function Container({ as: Tag = "div", id, className = "", children }: ContainerProps) {
  return (
    <Tag id={id} className={`mx-auto w-full max-w-310 px-5 sm:px-8 lg:px-10 ${className}`}>
      {children}
    </Tag>
  );
}
