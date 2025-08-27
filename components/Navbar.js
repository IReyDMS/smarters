import { Button } from "@/components/ui/Button";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between container py-4 shadow-sm bg-white sticky top-0 z-50">
      <h1 className="text-2xl md:text-3xl font-bold text-indigo-600">DMSMARTERS</h1>
      <div className="hidden md:flex gap-6 text-gray-700 font-medium">
        <a href="#services" className="hover:text-indigo-600">Services</a>
        <a href="#portfolio" className="hover:text-indigo-600">Portfolio</a>
        <a href="#testimonials" className="hover:text-indigo-600">Testimonials</a>
        <a href="#contact" className="hover:text-indigo-600">Contact</a>
      </div>
      <Button className="bg-indigo-600 text-white rounded-full px-5 py-2">Get Started</Button>
    </nav>
  );
}
