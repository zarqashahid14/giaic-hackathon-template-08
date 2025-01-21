
import "./globals.css";
import Footer from "./component/footer";
import Header from "./component/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
       <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
