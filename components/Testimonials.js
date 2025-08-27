import { Card, CardContent } from '@/components/ui/Card';

export default function Testimonials() {
  const quotes = [
    "Amazing service and top‑notch results!",
    "They transformed our online presence.",
    "Professional, creative, and reliable team!",
    "Our go‑to agency for web solutions."
  ];
  return (
    <section id="testimonials" className="container py-20 text-center bg-gray-50">
      <h3 className="text-3xl md:text-4xl font-bold mb-12">What Clients Say</h3>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {quotes.map((q, i) => (
          <Card key={i} className="shadow-sm">
            <CardContent>
              <p className="italic text-gray-700 mb-4">“{q}”</p>
              <h5 className="font-semibold text-gray-900">Client {i+1}</h5>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
