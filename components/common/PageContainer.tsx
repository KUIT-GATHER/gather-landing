import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type PageContainerProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function PageContainer<T extends ElementType = "div">({
  as,
  children,
  className = "",
  ...props
}: PageContainerProps<T>) {
  const Component = as ?? "div";

  return (
    <Component
      className={`mx-auto w-full max-w-[1232px] px-5 sm:px-8 ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
