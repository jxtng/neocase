import "@/styles/globals.css";
import { Inter, Ubuntu } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata = {
  title: "Neocase",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ubuntu.className} antialiased`}>{children}</body>
    </html>
  );
}
