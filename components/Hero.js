import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600" />
      <div className="container relative py-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight max-w-5xl mx-auto"
        >
          Powering Businesses with API, Mobile, Web, and Secure Payment Solutions
        </motion.h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-90">
          At DMSMARTERS, we craft scalable, high‑performance solutions that help businesses integrate seamlessly,
          engage customers, and grow with confidence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-white text-indigo-600 rounded-full px-6 py-3 text-lg">Start a Project</Button>
          <Button className="border border-white bg-transparent text-white rounded-full px-6 py-3 text-lg">Learn More</Button>
        </div>
      </div>
      <div className="absolute inset-0 opacity-10"
           style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" }} />
    </section>
  );
}
