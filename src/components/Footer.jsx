// components/Footer.jsx
"use client";

import Link from "next/link";
import { BookOpen, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-white/80 backdrop-blur-md border-t border-gray-200 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo e descrição */}
        <div className="flex items-center space-x-2">
          <BookOpen className="text-blue-600" size={26} />
          <span className="text-xl font-semibold text-gray-800">StudyNet</span>
        </div>

        <p className="text-gray-600 text-sm text-center md:text-left max-w-md">
          Conectando estudantes, pesquisadores e ideias. Compartilhe seus
          projetos, artigos e conhecimentos com o mundo.
        </p>

        {/* Links rápidos */}
        <div className="flex space-x-6 text-gray-700 text-sm font-medium">
          <Link href="/sobre" className="hover:text-blue-600 transition">
            Sobre
          </Link>
          <Link href="/ajuda" className="hover:text-blue-600 transition">
            Ajuda
          </Link>
          <Link href="/contato" className="hover:text-blue-600 transition">
            Contato
          </Link>
          <Link href="/politica" className="hover:text-blue-600 transition">
            Privacidade
          </Link>
        </div>

        {/* Social icons */}
        <div className="flex space-x-4 text-gray-700">
          <Link
            href="https://github.com"
            target="_blank"
            className="hover:text-blue-600 transition"
          >
            <Github size={20} />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            className="hover:text-blue-600 transition"
          >
            <Linkedin size={20} />
          </Link>
          <Link
            href="mailto:contato@studynet.com"
            className="hover:text-blue-600 transition"
          >
            <Mail size={20} />
          </Link>
        </div>
      </div>

      <div className="text-center text-gray-500 text-xs border-t border-gray-100 py-3">
        © {new Date().getFullYear()} StudyNet — Todos os direitos reservados.
      </div>
    </footer>
  );
}
