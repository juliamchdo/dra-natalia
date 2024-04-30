import "../style/hero.scss";

export default function Hero() {
  return (
    <section className="hero-background relative" id="hero">
      <div className="hero-container mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-2xl flex justify-start items-center">
            <div className="hero-content">
              <h1>Dra. Natália Bittencourt da Silva</h1>
              <span>Guiando jornadas de bem-estar</span>
              <button className="hero-button">
                <a
                  href="https://api.whatsapp.com/send?phone=554899114373"
                  target="_blank"
                >
                  Agende sua consulta!
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
