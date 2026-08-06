import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <script defer src="https://fleetcount.pibulus.deno.net/beacon.js" data-site="nibnab.app"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>nibnab-site</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
