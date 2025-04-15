//? STYLESHEET | Bootstrap scss
import "@/styles/scss/bootstrap.scss";
import "@/styles/scss/globals.scss";
import "./style.scss";

export default function NextMDXBlogsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <main className="container">{children}</main>;
}