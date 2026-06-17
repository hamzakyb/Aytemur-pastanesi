"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export default function Footer({ showMap = false }: { showMap?: boolean }) {
  const { t } = useTranslation();

  return (
    <>
      {/* Google Haritalar Entegrasyonu */}
      {showMap && (
        <div className="w-full h-[400px] md:h-[500px] grayscale hover:grayscale-0 transition-all duration-[1.5s] ease-in-out opacity-80 hover:opacity-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.9616610421203!2d34.8467!3d38.7186892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152a6125ac5f7083%3A0x6b92e0a8a016da71!2sAYTEMUR%20PASTANES%C4%B0!5e0!3m2!1str!2str!4v1781709457450!5m2!1str!2str"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Aytemur Pastanesi Konum"
        ></iframe>
      </div>
      )}

      {/* Footer */}
      <footer className="py-24 flex flex-col items-center justify-center text-center px-6 bg-white border-t border-gray-100" id="footer">
        <div className="w-px h-16 bg-gray-200 mb-12"></div>
        <div className="flex flex-col items-center gap-6 mb-12">
          <div className="h-16 w-auto flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Aytemur Logo"
              className="h-full w-auto object-contain"
              src="/logo.png"
            />
          </div>
        </div>
        <ScrollReveal className="flex flex-col md:flex-row gap-16 md:gap-32 w-full max-w-4xl mx-auto mt-8 px-6 text-left">
          {/* İletişim & Konum */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-display text-2xl text-black italic mb-6">{t("footer.locationTitle")}</h4>
            <p className="font-sans text-[14px] text-gray-500 mb-2">{t("footer.address")}</p>
            <p className="font-sans text-[14px] text-gray-500 mb-6">{t("footer.city")}</p>
            <a href="tel:+903845110000" className="font-sans text-[14px] text-black hover:text-gray-500 transition-colors mb-2">
              +90 (384) 511 XX XX
            </a>
            <a href="mailto:info@aytemurpastanesi.com" className="font-sans text-[14px] text-black hover:text-gray-500 transition-colors">
              info@aytemurpastanesi.com
            </a>
          </div>

          {/* Çalışma Saatleri */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left border-t md:border-t-0 md:border-l border-gray-100 pt-16 md:pt-0 md:pl-32">
            <h4 className="font-display text-2xl text-black italic mb-6">{t("footer.hoursTitle")}</h4>
            <div className="flex justify-between w-full max-w-[200px] mb-3 font-sans text-[14px] text-gray-500">
              <span>{t("footer.weekdays")}</span>
              <span className="text-black">07:00 - 22:00</span>
            </div>
            <div className="flex justify-between w-full max-w-[200px] mb-3 font-sans text-[14px] text-gray-500">
              <span>{t("footer.saturday")}</span>
              <span className="text-black">07:00 - 23:00</span>
            </div>
            <div className="flex justify-between w-full max-w-[200px] font-sans text-[14px] text-gray-500">
              <span>{t("footer.sunday")}</span>
              <span className="text-black">08:00 - 23:00</span>
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-24 font-sans text-[11px] text-gray-300">
          {t("footer.copy")}
        </div>
      </footer>
    </>
  );
}
