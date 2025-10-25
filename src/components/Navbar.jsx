// components/Navbar.jsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, BookOpen, Users, Briefcase, Bell } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white/80 backdrop-blur-md border-b border-gray-200 fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <BookOpen className="text-blue-600" size={28} />
          <span className="text-2xl font-bold text-gray-800">StudyNet</span>
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
          <Link
            href="/feed"
            className="flex items-center gap-2 hover:text-blue-600 transition"
          >
            <Users size={18} /> Comunidade
          </Link>
          <Link
            href="/projetos"
            className="flex items-center gap-2 hover:text-blue-600 transition"
          >
            <Briefcase size={18} /> Projetos
          </Link>
          <Link
            href="/biblioteca"
            className="flex items-center gap-2 hover:text-blue-600 transition"
          >
            <BookOpen size={18} /> Biblioteca
          </Link>
          <Link
            href="/notificacoes"
            className="flex items-center gap-2 hover:text-blue-600 transition"
          >
            <Bell size={18} /> Notificações
          </Link>
        </div>

        {/* Ações (Login / Conta) */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/login"
            className="px-4 py-2 text-gray-700 hover:text-blue-600 transition"
          >
            Entrar
          </Link>
          <Link
            href="/register"
            className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            Criar Conta
          </Link>
        </div>

        {/* Botão Mobile */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
          <div className="flex flex-col items-center space-y-4 py-4 text-gray-700 font-medium">
            <Link href="/feed" onClick={() => setIsOpen(false)}>
              Comunidade
            </Link>
            <Link href="/projetos" onClick={() => setIsOpen(false)}>
              Projetos
            </Link>
            <Link href="/biblioteca" onClick={() => setIsOpen(false)}>
              Biblioteca
            </Link>
            <Link href="/notificacoes" onClick={() => setIsOpen(false)}>
              Notificações
            </Link>
            <Link href="/login" onClick={() => setIsOpen(false)}>
              Entrar
            </Link>
            <Link
              href="/register"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
            >
              Criar Conta
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
