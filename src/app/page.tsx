import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Christ Embassy Eindhoven Praise Festival Location</title>
        <meta name="description" content="Christ Embassy Eindhoven Google Map" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h1 className="text-4xl font-bold mb-8">Christ Embassy Eindhoven</h1>
        <p>Zaterdag 26 oktober 2024 CEST</p>
        <p>Tijd: 11:00 tot 15:00</p>
        <p>Locatie: Op de hoek tussen HERMANUS BOEXSTRAAT MARKSTRAAT NIEUWSTRAAT EINDHOVEN</p>

        <div className="relative w-full h-96">
          <iframe
            src="https://www.google.com/maps/place/Hermanus+Boex+Penthouse/@51.4402604,5.3955557,12z/data=!4m23!1m16!4m15!1m6!1m2!1s0x47c6d91cae9a627f:0x85085847c9eb6b00!2sHermanus+Boex+Penthouse,+Hermanus+Boexstraat+36A,+5611+AK+Eindhoven!2m2!1d5.4781266!2d51.4401824!1m6!1m2!1s0x47c6d91cae9a627f:0x85085847c9eb6b00!2sHermanus+Boex+Penthouse,+Hermanus+Boexstraat+36A,+5611+AK+Eindhoven!2m2!1d5.4781266!2d51.4401824!3e3!3m5!1s0x47c6d91cae9a627f:0x85085847c9eb6b00!8m2!3d51.4401824!4d5.4781266!16s%2Fg%2F11gf8h958t?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </main>
    </div>
  );
}
