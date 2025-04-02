//? STYLESHEET | Bootstrap scss
import "@/styles/scss/globals.scss";

export default function ReactBootstrapLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>{children}</section>;
}