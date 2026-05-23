import "./globals.css";

export const metadata = {
  title: "PhysicsPro - Online Physics Classes",
  description:
    "Modern online Physics classes for Class 10th & 12th students.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#020617] text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}