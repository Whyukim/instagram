"use client";

interface IGradientClickBtn {
  href?: string;
  onClick?: any;
  round: string;
  padding: string;
  title: string;
}

function GradientClickBtn({
  onClick,
  round,
  padding,
  title,
}: IGradientClickBtn) {
  return (
    <button
      onClick={onClick}
      className={`bg-gradient-to-tr from-orange-300 via-red-500 to-indigo-600  p-[0.2rem] ${round} cursor-pointer`}
    >
      <div
        className={`bg-white ${padding} ${round} hover:opacity-90  dark:bg-black`}
      >
        {title}
      </div>
    </button>
  );
}

export default GradientClickBtn;
