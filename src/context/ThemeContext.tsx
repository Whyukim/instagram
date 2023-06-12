"use client";

import { ThemeProvider } from "next-themes";
interface Props {
  children: React.ReactNode;
}
export default function ThemeContext({ children }: Props) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
