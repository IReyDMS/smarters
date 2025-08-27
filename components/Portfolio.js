export default function Portfolio() {
  return (
    <section id="portfolio" className="container py-20 text-center">
      <h3 className="text-3xl md:text-4xl font-bold mb-12">Our Work</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1,2,3,4,5,6].map(i => (
          <div key={i} className="rounded-2xl overflow-hidden shadow-md hover:scale-[1.02] transition">
            <img src={`https://picsum.photos/800/500?random=${i}`} alt="portfolio" className="w-full h-full object-cover"/>
          </div>
        ))}
      </div>
    </section>
  );
}
