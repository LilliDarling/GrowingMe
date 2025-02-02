import Navbar from "@/ui/Navbar";
import Footer from "@/ui/Footer";
import '@/globals.css';

export const metadata = {
  title: 'Growing Me',
  description: 'A blog site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
