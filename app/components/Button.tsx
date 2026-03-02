import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color: string;
}

const Button = ({ children, color }: Props) => {
  return (
    <button
      className={`${color} rounded-sm px-4 py-2 font-semibold whitespace-nowrap cursor-pointer lg:text-xl text-xs hover:brightness-115`}
    >
      {children}
    </button>
  );
};

export default Button;
