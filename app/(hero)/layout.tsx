import Footer from "@/components/Footer/Footer";
import Menu from "@/components/Menu/Menu";
import Head from "@/components/Head/Head";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Menu />
      <Head />
      {children}
      <Footer />
    </>
  );
}
