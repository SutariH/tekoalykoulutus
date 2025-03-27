import GlobalCTA from '@/components/GlobalCTA';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Tekoälykoulutus
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
            Valmistaudu tulevaisuuden teknologiaan ja oppi hyödyntämään tekoälyä liiketoiminnassasi
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
            Aloita matkasi
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition duration-300">
            <div className="text-blue-500 text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-bold mb-2">Tekoälyn perusteet</h3>
            <p className="text-gray-400">Ymmärrä tekoälyn toimintaperiaatteet ja sovellusalueet</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition duration-300">
            <div className="text-blue-500 text-4xl mb-4">💡</div>
            <h3 className="text-xl font-bold mb-2">Käytännön sovellukset</h3>
            <p className="text-gray-400">Opi hyödyntämään tekoälyä omassa työssäsi</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition duration-300">
            <div className="text-blue-500 text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-2">Tulevaisuuden teknologia</h3>
            <p className="text-gray-400">Pysy ajan tasalla uusimpien tekoälyteknologioiden kanssa</p>
          </div>
        </div>
      </section>

      {/* Global CTA Section */}
      <div className="container mx-auto px-4">
        <GlobalCTA />
      </div>
    </main>
  );
}
