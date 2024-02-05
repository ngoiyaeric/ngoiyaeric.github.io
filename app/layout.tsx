import "@styles/globals.css";
import { Sacramento , Handjet } from "next/font/google";

const ibm_plex_mono = Handjet({
  weight: ["400", "400", "400", "400"],
  subsets: ["latin"],
});

const poppins = Handjet({
  weight: ["400", "400", "400", "400", "400"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Eric",
  description: "E",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ibm_plex_mono.className}>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
