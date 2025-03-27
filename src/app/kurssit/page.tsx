import GlobalCTA from '@/components/GlobalCTA';

export default function Courses() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Tekoälykurssit
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Kurssi 1 */}
          <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition duration-300">
            <div className="text-blue-500 text-4xl mb-4">🤖</div>
            <h2 className="text-2xl font-bold mb-4">Tekoälyn perusteet</h2>
            <p className="text-gray-300 mb-4">Opi tekoälyn perusperiaatteet ja sovellusalueet.</p>
            <ul className="text-gray-400 mb-6">
              <li className="mb-2">• Tekoälyn historia ja kehitys</li>
              <li className="mb-2">• Koneoppimisen perusteet</li>
              <li className="mb-2">• Neuroverkot ja syväoppiminen</li>
            </ul>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300">
              Ilmoittaudu
            </button>
          </div>

          {/* Kurssi 2 */}
          <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition duration-300">
            <div className="text-blue-500 text-4xl mb-4">💡</div>
            <h2 className="text-2xl font-bold mb-4">Käytännön tekoälysovellukset</h2>
            <p className="text-gray-300 mb-4">Opi hyödyntämään tekoälyä omassa työssäsi.</p>
            <ul className="text-gray-400 mb-6">
              <li className="mb-2">• Chatbotit ja luonnollisen kielen käsittely</li>
              <li className="mb-2">• Kuvien tunnistus ja käsittely</li>
              <li className="mb-2">• Automaatio ja prosessien optimointi</li>
            </ul>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300">
              Ilmoittaudu
            </button>
          </div>

          {/* Kurssi 3 */}
          <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition duration-300">
            <div className="text-blue-500 text-4xl mb-4">🚀</div>
            <h2 className="text-2xl font-bold mb-4">Tekoäly ja liiketoiminta</h2>
            <p className="text-gray-300 mb-4">Opi hyödyntämään tekoälyä liiketoiminnassa.</p>
            <ul className="text-gray-400 mb-6">
              <li className="mb-2">• Tekoälyn vaikutus liiketoimintaan</li>
              <li className="mb-2">• Asiakaspalvelun tekoälyratkaisut</li>
              <li className="mb-2">• Tekoäly ja päätöksenteko</li>
            </ul>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300">
              Ilmoittaudu
            </button>
          </div>

          {/* Kurssi 4 */}
          <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition duration-300">
            <div className="text-blue-500 text-4xl mb-4">🔮</div>
            <h2 className="text-2xl font-bold mb-4">Tekoälyn tulevaisuus</h2>
            <p className="text-gray-300 mb-4">Tutustu tekoälyn uusimpiin trendeihin ja tulevaisuuden teknologioihin.</p>
            <ul className="text-gray-400 mb-6">
              <li className="mb-2">• Generatiivinen tekoäly</li>
              <li className="mb-2">• Tekoälyn etiikka ja vastuullisuus</li>
              <li className="mb-2">• Tekoälyn vaikutus yhteiskuntaan</li>
            </ul>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300">
              Ilmoittaudu
            </button>
          </div>
        </div>

        {/* Global CTA Section */}
        <GlobalCTA 
          title="Haluatko oppia lisää?"
          description="Valitse sopiva kurssi ja aloita matkasi tekoälyn maailmaan"
          buttonText="Katso kaikki kurssit"
          buttonLink="/kurssit"
        />
      </div>
    </main>
  );
} 