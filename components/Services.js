import { Card, CardContent } from '@/components/ui/Card';
import { Link, Smartphone, Globe, CreditCard } from 'lucide-react';

export default function Services() {
  const items = [
    { icon: <Link className="w-10 h-10 text-indigo-600" />, title: "API Integration Services",
      desc: "Seamlessly integrate and customize APIs to automate workflows, enhance functionality, and build connected experiences across Discord, Telegram, and other platforms." },
    { icon: <Smartphone className="w-10 h-10 text-indigo-600" />, title: "Mobile App Development",
      desc: "Design and develop intuitive, high‑performing mobile applications that drive engagement and align fully with your business goals." },
    { icon: <Globe className="w-10 h-10 text-indigo-600" />, title: "Web Design & Development",
      desc: "Responsive, high‑performing websites that balance form with function to deliver seamless experiences across all devices." },
    { icon: <CreditCard className="w-10 h-10 text-indigo-600" />, title: "Secure Payment Systems",
      desc: "Custom, secure payment gateways for WHMCS and WordPress for seamless, reliable transactions tailored to your requirements." },
  ];
  return (
    <section id="services" className="container py-20 text-center bg-gray-50">
      <h3 className="text-3xl md:text-4xl font-bold mb-12">Our Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((s, i) => (
          <Card key={i} className="hover:shadow-lg transition">
            <CardContent className="flex flex-col items-center text-center">
              {s.icon}
              <h4 className="text-xl font-semibold mt-4">{s.title}</h4>
              <p className="text-gray-600 mt-2 text-sm md:text-base">{s.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
