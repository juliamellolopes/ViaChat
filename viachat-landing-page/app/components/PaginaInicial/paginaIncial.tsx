"use client";

import { useState, useEffect } from 'react';
import { Secular_One } from '@next/font/google';

const secularOne = Secular_One({
  subsets: ['latin'],
  weight: '400',
});

export default function PaginaInicial() {
    const [palavraAtual, setPalavraAtual] = useState('simultânea');
    const palavras = ['simultânea', 'automática'];

    useEffect(() => {
        const intervalo = setInterval(() => {
        setPalavraAtual((prevPalavra) => 
            prevPalavra === 'simultânea' ? 'automática' : 'simultânea'
        );
        }, 1000); 

        return () => clearInterval(intervalo);
    }, []);


    return (
        <div className="w-full h-auto bg-gradient-to-r from-[#099DE9] to-[#3AE2C3]">
            <header className="flex justify-between items-center px-8 py-4">
                <div className="flex items-center space-x-4 md:ml-36">
                    <img src="/images/logo_viachat.png" alt="Logo ViaChat" className="h-12 w-12" />
                    <span className={`${secularOne.className} text-white text-4xl`}>ViaChat</span>
                </div>

                <nav className=" hidden md:flex  space-x-8">
                    <a href="#" className="text-white text-lg hover:text-gray-200">Início</a>
                    <a href="#" className="text-white text-lg hover:text-gray-200">Planos e Orçamentos</a>
                    <a href="#" className="text-white text-lg hover:text-gray-200">Saiba Mais</a>
                    <a href="#" className="text-white text-lg hover:text-gray-200">Dúvidas Frequentes</a>
                </nav>

                <button className="border border-white text-white px-6 py-2 rounded-lg  md:mr-56 hover:bg-white hover:text-blue-500">
                    Entrar
                </button>
            </header>

            {/* Versão para Mobile */}
            <main className="flex flex-col items-center px-4 md:hidden space-y-6 mt-12">
                <div className="text-center space-y-6">
                <h2 className="text-white text-5xl font-bold leading-tight">
                    Atenda de forma 
                    <span className="block text-5xl font-bold text-[#004B76]">{palavraAtual}</span>
                    no ViaChat
                </h2>
                </div>

                <div className="w-[80%] flex justify-center">
                    <img src="/images/Frame1.png" alt="Frame1" className="w-full h-auto" />
                </div>

                <p className="text-white text-xl leading-relaxed max-w-lg text-center">
                    Mude seu negócio e passe a vender mais com uma solução completa e integrada de atendimento e vendas.
                </p>

                <button className="border-2 border-white text-white px-14 py-3 p-3 rounded-lg hover:bg-white hover:text-blue-500">
                    FALE CONOSCO
                </button>
            </main>

            {/* Versão para Desktop */}
            <main className="hidden md:flex flex-row items-start px-20 mt-30 space-y-6 ml-20">
                <div className="w-[90vw] max-w-[516px] h-[70vh] max-h-[484px] space-y-6 mt-40">
                <h2 className="text-white text-6xl font-bold leading-tight">
                    Atenda de forma 
                    <span className="block text-6xl font-bold text-[#004B76]">{palavraAtual}</span>
                    no ViaChat
                </h2>
                <p className="text-white text-2xl leading-relaxed max-w-lg">
                    Mude seu negócio e passe a vender 
                    <span className="block">mais com uma solução completa e integrada</span>
                    de atendimento e vendas.
                </p>
                <button className="border-2 border-white text-white px-14 py-3 rounded-lg hover:bg-white hover:text-blue-500">
                    FALE CONOSCO
                </button>
                </div>

                <div className="w-[100%]">
                    <img src="/images/Frame1.png" alt="Frame1" className="w-full h-auto" />
                </div>
            </main>
        </div>
    );
}
