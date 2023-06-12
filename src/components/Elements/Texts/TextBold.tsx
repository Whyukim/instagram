interface ITextBold {
  children: React.ReactNode;
  effect?: string;
}

function TextBold({ children, effect }: ITextBold) {
  return <b className={`font-bold ${effect}`}>{children}</b>;
}

export default TextBold;
