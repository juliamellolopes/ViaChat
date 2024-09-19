"use client";

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

// Importação dos componentes do Swiper e seus estilos
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/swiper-bundle.css'; // Estilos completos do Swiper
import 'swiper/css/pagination'; // Estilos da paginação
import { Navigation, Pagination } from 'swiper/modules'; // Módulo de paginação


export default function PlanosOrcamentos() {
    const [selectedOption, setSelectedOption] = useState("assine");

    return (
        <div className="w-full h-auto bg-gray-100 p-10">
            <header className="text-center mb-12 pt-40">
                <h2 className="text-[#004B76] font-bold text-3xl  md:text-4xl">Conheça os planos do ViaChat</h2>
                <p className="text-[#004B76] font-normal text-xl md:text-2xl mt-4">
                    Centralize todos os seus atendimentos em um só lugar, integrando todos os seus canais no ViaChat.
                </p>
            </header>

            <main className="flex flex-col items-center">
                <div className="flex justify-center space-x-8 mb-6">
                    <button
                        className={`${
                            selectedOption === "assine" ? "text-black border-b-4 border-[#02D1C0]" : "text-gray-500"
                        } font-medium text-2xl px-4 py-2`}
                        onClick={() => setSelectedOption("assine")}
                    >
                        Assine Já!
                    </button>
                    <button
                        className={`${
                            selectedOption === "simular" ? "text-black border-b-4 border-[#02D1C0]" : "text-gray-500"
                        } font-medium text-2xl px-4 py-2`}
                        onClick={() => setSelectedOption("simular")}
                    >
                        Simular Orçamento
                    </button>
                </div>

                <div className="w-full">
                    {selectedOption === "assine" ? (
                        <>
                            {/* Versão Desktop */}
                            <div className="hidden md:flex justify-center mt-12 items-start bg-gray-100 space-x-14 px-60">
                                <div className="w-full h-auto border border-black rounded-[30px] p-10">
                                    <p className="text-[#24C4D4] font-medium">PARA VOCÊ COMEÇAR</p>
                                    <h3 className="text-black font-bold text-2xl">Plano Básico</h3>
                                    <div className="flex items-baseline mt-4">
                                        <img src="/images/planoBasico.png" alt="Plano Básico" />
                                    </div>
                                    <button className="mt-4 bg-[#24C4D4] text-white px-16 py-3 rounded-lg font-bold hover:bg-[#1da5b5]">
                                        ASSINE JÁ!
                                    </button>
                                    <ul className="mt-6 space-y-2">
                                        <li><FontAwesomeIcon icon={faCheck} className="text-[#000000] mr-2" />5 Atendentes simultâneos</li>
                                         <li><FontAwesomeIcon icon={faCheck} className="text-[#000000] mr-2" />1 Bot</li>
                                        <li><FontAwesomeIcon icon={faTimes} className="text-[#000000] mr-2" />Chat no site</li>
                                        <li><FontAwesomeIcon icon={faCheck} className="text-[#000000] mr-2" />1 WhatsApp</li>
                                        <li><FontAwesomeIcon icon={faTimes} className="text-[#000000] mr-2" />Telegram</li>
                                        <li><FontAwesomeIcon icon={faTimes} className="text-[#000000] mr-2" />Instagram</li>
                                        <li><FontAwesomeIcon icon={faTimes} className="text-[#000000] mr-2" />Messenger</li>
                                    </ul>
                                </div>
                                <div className="w-full h-auto border border-black rounded-[30px] p-10">
                                    <p className="text-[#24C4D4] font-medium">PARA VOCÊ EVOLUIR</p>
                                    <h3 className="text-black font-bold text-2xl">Plano Avançado</h3>
                                    <div className="flex items-baseline mt-4">
                                        <img src="/images/planoAvancado.png" alt="Plano Avançado" />
                                    </div>
                                    <button className="mt-4 bg-[#24C4D4] text-white px-16 py-3 rounded-lg font-bold hover:bg-[#1da5b5]">
                                            ASSINE JÁ!
                                    </button>
                                    <ul className="mt-6 space-y-2">
                                        <li><FontAwesomeIcon icon={faCheck} className="text-[#000000] mr-2" />10 Atendentes simultâneos</li>
                                        <li><FontAwesomeIcon icon={faCheck} className="text-[#000000] mr-2" />1 Bot</li>
                                        <li><FontAwesomeIcon icon={faCheck} className="text-[#000000] mr-2" />Chat no site</li>
                                        <li><FontAwesomeIcon icon={faCheck} className="text-[#000000] mr-2" />1 WhatsApp</li>
                                        <li><FontAwesomeIcon icon={faCheck} className="text-[#000000] mr-2" />1 Telegram</li>
                                        <li><FontAwesomeIcon icon={faCheck} className="text-[#000000] mr-2" />1 Instagram</li>
                                        <li><FontAwesomeIcon icon={faCheck} className="text-[#000000] mr-2" />1 Messenger</li>
                                    </ul>
                                </div>
                                <div className="w-full h-auto bg-gradient-to-b from-[#099DE9] to-[#39E1C4] rounded-[30px] p-10">
                                    <p className="text-white font-medium">GERAL</p>
                                    <h3 className="text-white font-bold text-2xl">Personalizado</h3>
                                    <div className="flex items-baseline mt-8">
                                        <img src="/images/planoPersonalizado.png" alt="Plano Personalizado" />
                                    </div>
                                    <button className="mt-6 border border-white text-white px-16 py-3 rounded-lg font-bold hover:bg-[#1da5b5] hover:text-white">
                                        FALE CONOSCO
                                    </button>
                                    <ul className="text-white mt-6 space-y-2">
                                        <li><FontAwesomeIcon icon={faCheck} className="mr-2" />Atendentes simultâneos</li>
                                        <li><FontAwesomeIcon icon={faCheck} className="mr-2" />Bots</li>
                                        <li><FontAwesomeIcon icon={faCheck} className="mr-2" />Chat no site</li>
                                        <li><FontAwesomeIcon icon={faCheck} className="mr-2" />WhatsApp</li>
                                        <li><FontAwesomeIcon icon={faCheck} className="mr-2" />Telegram</li>
                                        <li><FontAwesomeIcon icon={faCheck} className="mr-2" />Instagram</li>
                                        <li><FontAwesomeIcon icon={faCheck} className="mr-2" />Messenger</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Versão Mobile */}
                            <div className="block md:hidden w-full">
                                <Swiper
                                    modules={[Pagination, Navigation]} 
                                    spaceBetween={20}
                                    slidesPerView={1}
                                    pagination={{ clickable: true }}
                                    navigation
                                >
                                    <SwiperSlide>
                                        <div className="w-full h-auto border border-black rounded-[30px] p-6">
                                            <p className="text-[#24C4D4] font-medium">PARA VOCÊ COMEÇAR</p>
                                            <h3 className="text-black font-bold text-2xl">Plano Básico</h3>
                                            <div className="flex items-baseline mt-4">
                                                <img src="/images/planoBasico.png" alt="Plano Básico" />
                                            </div>
                                            <button className="mt-4 bg-[#24C4D4] text-white px-16 py-3 rounded-lg font-bold hover:bg-[#1da5b5]">
                                                ASSINE JÁ!
                                            </button>
                                            <ul className="mt-6 space-y-2">
                                                <li><FontAwesomeIcon icon={faCheck} className="text-[#000000] mr-2" />5 Atendentes simultâneos</li>
                                                <li><FontAwesomeIcon icon={faCheck} className="text-[#000000] mr-2" />1 Bot</li>
                                                <li><FontAwesomeIcon icon={faTimes} className="text-[#000000] mr-2" />Chat no site</li>
                                                <li><FontAwesomeIcon icon={faCheck} className="text-[#000000] mr-2" />1 WhatsApp</li>
                                                <li><FontAwesomeIcon icon={faTimes} className="text-[#000000] mr-2" />Telegram</li>
                                                <li><FontAwesomeIcon icon={faTimes} className="text-[#000000] mr-2" />Instagram</li>
                                                <li><FontAwesomeIcon icon={faTimes} className="text-[#000000] mr-2" />Messenger</li>
                                            </ul>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="w-full h-auto border border-black rounded-[30px] p-6">
                                            <p className="text-[#24C4D4] font-medium">PARA VOCÊ EVOLUIR</p>
                                            <h3 className="text-black font-bold text-2xl">Plano Avançado</h3>
                                            <div className="flex items-baseline mt-4">
                                                <img src="/images/planoAvancado.png" alt="Plano Avançado" />
                                            </div>
                                            <button className="mt-4 bg-[#24C4D4] text-white px-16 py-3 rounded-lg font-bold hover:bg-[#1da5b5]">
                                                ASSINE JÁ!
                                            </button>
                                            <ul className="mt-6 space-y-2">
                                                <li><FontAwesomeIcon icon={faCheck} className="text-[#000000] mr-2" />10 Atendentes simultâneos</li>
                                                <li><FontAwesomeIcon icon={faCheck} className="text-[#000000] mr-2" />1 Bot</li>
                                                <li><FontAwesomeIcon icon={faCheck} className="text-[#000000] mr-2" />Chat no site</li>
                                                <li><FontAwesomeIcon icon={faCheck} className="text-[#000000] mr-2" />1 WhatsApp</li>
                                                <li><FontAwesomeIcon icon={faCheck} className="text-[#000000] mr-2" />1 Telegram</li>
                                                <li><FontAwesomeIcon icon={faCheck} className="text-[#000000] mr-2" />1 Instagram</li>
                                                <li><FontAwesomeIcon icon={faCheck} className="text-[#000000] mr-2" />1 Messenger</li>
                                            </ul>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="w-full h-auto bg-gradient-to-b from-[#099DE9] to-[#39E1C4] rounded-[30px] p-6">
                                            <p className="text-white font-medium">GERAL</p>
                                            <h3 className="text-white font-bold text-2xl">Personalizado</h3>
                                            <div className="flex items-baseline mt-8">
                                                <img src="/images/planoPersonalizado.png" alt="Plano Personalizado" />
                                            </div>
                                            <button className="mt-6 border border-white text-white px-12 py-3 rounded-lg font-bold hover:bg-[#1da5b5] hover:text-white">
                                                FALE CONOSCO
                                            </button>
                                            <ul className="text-white mt-6 space-y-2">
                                                <li><FontAwesomeIcon icon={faCheck} className="mr-2" />Atendentes simultâneos</li>
                                                <li><FontAwesomeIcon icon={faCheck} className="mr-2" />Bots</li>
                                                <li><FontAwesomeIcon icon={faCheck} className="mr-2" />Chat no site</li>
                                                <li><FontAwesomeIcon icon={faCheck} className="mr-2" />WhatsApp</li>
                                                <li><FontAwesomeIcon icon={faCheck} className="mr-2" />Telegram</li>
                                                <li><FontAwesomeIcon icon={faCheck} className="mr-2" />Instagram</li>
                                                <li><FontAwesomeIcon icon={faCheck} className="mr-2" />Messenger</li>
                                            </ul>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </>
                    ) : (
                        <div>teste 2</div>
                    )}
                </div>
            </main>
        </div>
    );
}
