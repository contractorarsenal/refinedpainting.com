import { StaticRouter } from "react-router";
import App from "../App";

/** A real <head> ancestor is the only thing this wrapper exists for: React
 * 19 hoists every <title>/<meta>/<link>/<script> rendered anywhere in the
 * tree (here, via PageSEO deep inside a page component) up into the nearest
 * <head> ancestor, including during renderToString — verified directly
 * against this exact React version before relying on it. Without a <head>
 * in the tree at all, there's nowhere to hoist to and the tags just render
 * inline wherever PageSEO sits. */
export function Document({ url }: { url: string }) {
  return (
    <html lang="en">
      <head />
      <body>
        <div id="root">
          <StaticRouter location={url}>
            <App />
          </StaticRouter>
        </div>
      </body>
    </html>
  );
}
