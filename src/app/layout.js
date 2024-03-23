import "./globals.css";

export const metadata = {
  title: "Vegan Bites",
  description: "Plant Based Carbon Neutral Catering",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-full h-full flex font-head text-justify text-[20px] ">{children}</body>
    </html>
  );
}
