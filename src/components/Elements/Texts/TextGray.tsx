interface ITextGray {
  children: React.ReactNode;
  effect?: string;
}

function TextGray({ children, effect }: ITextGray) {
  return (
    <p className={`text-gray-500 ${effect} dark:text-gray-300`}>{children}</p>
  );
}

export default TextGray;
