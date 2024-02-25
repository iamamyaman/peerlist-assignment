import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/layout/Layout";
import ContentView from "@/components/ui/ContentView/ContentView";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <ContentView />
    </Layout>
  );
}
