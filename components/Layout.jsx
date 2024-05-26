import { Navigation } from "./Navigation";

export function Layout({ children }) {
  return (
    <>
      <h1>Art Gallery</h1>
      <div>{children}</div>
      <Navigation />
    </>
  );
}
