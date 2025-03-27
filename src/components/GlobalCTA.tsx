import Link from 'next/link';

interface GlobalCTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function GlobalCTA({
  title = "Valmiina aloittamaan?",
  description = "Liity joukkoomme ja ota ensimmäinen askel kohti tekoälyosaamista",
  buttonText = "Ilmoittaudu nyt",
  buttonLink = "/kurssit"
}: GlobalCTAProps) {
  return (
    <section className="bg-blue-600 rounded-2xl p-8 md:p-12 text-center my-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      <p className="text-xl mb-8 text-blue-100">{description}</p>
      <Link 
        href={buttonLink}
        className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300"
      >
        {buttonText}
      </Link>
    </section>
  );
} 