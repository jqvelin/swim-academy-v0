import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

const montserrat = Montserrat({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Школа плавания Swim Academy",
  description: "Школа плавания для начинающих и опытных пловцов. Более 100 бассейнов по всей стране. Опытные тренеры, с которыми интересно и полезно заниматься. Широкий выбор спортивного инвентаря. Начните тренировку уже сегодня!",
  icons: '/logo.png',
};

export default function RootLayout({
  children,
  modal
}: {
  children: React.ReactNode;
  modal: React.ReactNode
}) {
  return (
    <html lang="en" className="min-h-screen flex justify-center scroll-smooth">
      <body className={montserrat.className + ' ' + "w-[96%] md:w-[90%] pt-[3.5rem] flex flex-col gap-4 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[rgb(8,26,80)] to-[rgb(1,7,31)]"}>
          <Header/>
            {modal}
            {children}
          <Footer/>
      </body>
    </html>
  );
}
