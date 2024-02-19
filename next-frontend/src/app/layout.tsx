import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeicons/primeicons.css';

import ProblemCard from "./ui/problemas/ProblemCard";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Banco de Problemas para Tesis - UDH",
  description: "Esta plataforma permite a las personas y empresas registrar sus necesidades o problemas para que los estudiantes de la Universidad De Huánuco puedan proponer soluciones en sus tesis."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PrimeReactProvider  value={{ unstyled: false }}>
      <html lang="es" >
        <body className={`${inter.className} bg-gray-100 min-h-screen antialiased  `}>{children}</body>    
      </html>
    </PrimeReactProvider>
  );
}


