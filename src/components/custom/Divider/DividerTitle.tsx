"use client";

type DividerProps = React.ComponentProps<"h2">;

const DividerTitle = ({ children, ...props }: DividerProps) => {
  return (
    <div className="w-full flex justify-start items-center mb-4 pl-4">
      <h2 {...props}>{children}</h2>
    </div>
  );
};

export default DividerTitle;
