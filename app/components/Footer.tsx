import type { ReactNode } from "react";
import Image from "next/image";
import {
  FaCalendarAlt,
  FaEnvelope,
  FaHome,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

import Logo from "@/public/images/new-logo.png";

const DOCTORALIA_URL =
  "https://www.doctoralia.com.br/natalia-bittencourt-da-silva/medico-de-familia-endocrinologista-nutrologo/belo-horizonte";
const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5548996171515";
const INSTAGRAM_URL = "https://www.instagram.com/dranatalia.bittencourt/";
const CONTACT_EMAIL = "dranatalia.medicina@gmail.com";

function SocialIconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#5B4B45]/40 text-[#5B4B45] transition-colors hover:border-yellow-200 hover:text-yellow-200"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-yellow-100 text-[1.6rem] leading-relaxed text-[#5B4B45]"
    >
      <div className="mx-auto px-4 py-12 sm:px-6 lg:py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4 lg:gap-10">
          <div className="flex flex-col items-center sm:items-start">
            <Image
              src={Logo}
              alt="Dra. Natália Bittencourt"
              width={300}
              height={105}
              className="h-auto w-[min(100%,300px)] sm:w-[min(100%,340px)]"
            />
            <div className="mt-6 flex gap-3">
              <SocialIconLink href={INSTAGRAM_URL} label="Instagram">
                <FaInstagram className="text-2xl" />
              </SocialIconLink>
              <SocialIconLink href={WHATSAPP_URL} label="WhatsApp">
                <FaWhatsapp className="text-2xl" />
              </SocialIconLink>
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-[1.875rem] font-semibold uppercase tracking-wide text-[#5B4B45]">
              Sobre
            </h2>
            <p className="text-[#5B4B45]/85">
              <strong className="font-semibold text-[#5B4B45]">
                Dra. Natália Bittencourt da Silva
              </strong>{" "}
              é médica especialista em saúde da família, com pós-graduação em
              Endocrinologia, Nutrologia e Psiquiatria. Atende em{" "}
              <strong className="font-semibold text-[#5B4B45]">
                consultas 100% on-line
              </strong>
              {/* , com foco em emagrecimento e saúde metabólica com segurança e
              acolhimento. */}
            </p>
            <p className="mt-4 text-[1.45rem] leading-relaxed text-[#5B4B45]/70">
              CRM/SP - 234806 | CRM/SC - 39911 | RQE MFEC: 27528
            </p>
            <p className="mt-4 text-[1.45rem] leading-relaxed text-[#5B4B45]/70">
              RAZÃO SOCIAL: NATALIA BITTENCOURT DA SILVA
            </p>
            <p className="mt-4 text-[1.45rem] leading-relaxed text-[#5B4B45]/70">
              CNPJ: 48.897.095/0001-14
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-[1.875rem] font-semibold uppercase tracking-wide text-[#5B4B45]">
              Acesso rápido
            </h2>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="#hero"
                  className="text-[#5B4B45]/85 transition-colors hover:text-yellow-200"
                >
                  Home
                </a>
              </li>

              {/* <li>
                <a
                  href="#especialidades"
                  className="text-[#5B4B45]/85 transition-colors hover:text-yellow-200"
                >
                  Especialidades
                </a>
              </li> */}
              <li>
                <a
                  href="#hero"
                  className="text-[#5B4B45]/85 transition-colors hover:text-yellow-200"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-[1.875rem] font-semibold uppercase tracking-wide text-[#5B4B45]">
              Nossos contatos
            </h2>
            <ul className="flex flex-col gap-4 text-[#5B4B45]/85">
              {/* <li className="flex gap-3">
                <FaHome
                  className="mt-1 shrink-0 text-xl text-yellow-200"
                  aria-hidden
                />
                 <span>
                  Dra. Natália Bittencourt da Silva — médica para emagrecer com
                  saúde
                </span> 
              </li> */}
              <li className="flex gap-3">
                <FaWhatsapp
                  className="mt-1 shrink-0 text-xl text-yellow-200"
                  aria-hidden
                />
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-yellow-200"
                >
                  (48) 99617-1515
                </a>
              </li>
              <li className="flex gap-3">
                <FaEnvelope
                  className="mt-1 shrink-0 text-xl text-yellow-200"
                  aria-hidden
                />
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="break-all transition-colors hover:text-yellow-200"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
            </ul>
            <a
              href={DOCTORALIA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-teal-500 px-5 py-3.5 text-[1.65rem] font-medium text-white transition-colors hover:bg-teal-400 sm:w-auto"
            >
              <FaCalendarAlt className="text-xl" aria-hidden />
              Agende uma Consulta
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
