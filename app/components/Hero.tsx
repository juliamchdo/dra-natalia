import "../style/hero.scss";

import { FaCalendarAlt, FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="hero-background relative" id="hero">
      <div className="hero-container mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-2xl flex justify-start items-center">
            <div className="hero-content">
              <h1 className="font-bold">Dra. Natália Bittencourt da Silva</h1>
              <h2 className="text-xl">CRM/SP - 234806 | CRM/GO - 31795</h2>
              <span>Médica especialista em saúde da família</span>
              <span>
                Pós graduada em Endocrinologia, Nutrologia e Psiquiatria
              </span>
              <div className="buttons">
                <button className="hero-button schedule">
                  <a
                    href="https://www.doctoralia.com.br/natalia-bittencourt-da-silva/medico-de-familia-endocrinologista-nutrologo/belo-horizonte"
                    target="_blank"
                    className="flex justify-center items-center sm:gap-7"
                  >
                    <FaCalendarAlt className="text-3xl" />
                    Agende sua consulta
                  </a>
                </button>
                <button className="hero-button bg-green-500">
                  <a
                    href="https://api.whatsapp.com/send?phone=554899114373"
                    target="_blank"
                    className="flex justify-center items-center gap-1 sm:gap-7"
                  >
                    <FaWhatsapp className="text-3xl" />
                    Fale conosco
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
