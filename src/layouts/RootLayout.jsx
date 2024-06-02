import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/providers/ThemeProvider";

export default function RootLayout({ children }) {
  return (
    <ThemeProvider defaultTheme="system" storageKey="theme">
      <Navbar />
      <div className="container mt-4">{children}</div>
      <Footer />
    </ThemeProvider>
  );
}
