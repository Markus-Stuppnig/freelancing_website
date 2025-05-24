import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";
import Header from "@/components/navbar/navbar";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <div className="h-screen">
      <Header />
      <Contact />
      <Footer />
    </div>
  );
}
