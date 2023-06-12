interface IButton {
  text: string;
  onClick: () => void;
  red?: boolean;
  disabled?: boolean;
}

function Button({ text, onClick, red, disabled = false }: IButton) {
  return (
    <button
      className={`border-none rounded-md py-2 px-8 text-white font-bold ${
        red ? "bg-red-500" : "bg-sky-500"
      } ${disabled && "opacity-80"}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
