export function InvitationCard({ cardVisible, vests, onClose }) {
    return (
        <>
            <button
                className={`fixed top-6 right-6 z-120 flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(174,217,224,0.25)] bg-[rgba(13,35,71,0.82)] text-lg text-[#e8f4f8] shadow-[0_8px_20px_rgba(0,0,0,0.35)] backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-[rgba(26,58,110,0.9)] cursor-pointer ${cardVisible ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
                    }`}
                onClick={onClose}
            >
                ✕
            </button>

            <div
                className={`fixed inset-0 z-100 flex items-center justify-center overflow-y-auto p-4 transition-opacity duration-700 ${cardVisible ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
                    }`}
            >
                <div
                    className={`relative my-auto w-full max-w-180 overflow-hidden rounded-xl bg-linear-to-br from-[#f0f7fb] via-[#e4f0f6] to-[#ddedf5] shadow-[0_60px_120px_rgba(0,0,0,0.6),0_0_0_1px_rgba(174,217,224,0.3),inset_0_1px_0_rgba(255,255,255,0.8)] transition-transform duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${cardVisible ? "translate-y-0 scale-100" : "translate-y-20 scale-90"
                        }`}
                >
                    <div className="relative overflow-hidden bg-linear-to-br from-[#1A3A6E] to-[#0D2347] px-8 pt-12 pb-16 text-center md:px-12">
                        <div
                            className="absolute inset-0"
                            style={{
                                background:
                                    "radial-gradient(ellipse at 50% 120%, rgba(174,217,224,0.1) 0%, transparent 60%)",
                            }}
                        />
                        <div className="animate-shimmer absolute top-4 right-5 text-[28px] text-[rgba(255,255,255,0.08)]">🐚</div>
                        <div className="animate-shimmer2 absolute bottom-14 left-5 text-[22px] text-[rgba(255,255,255,0.08)]">🪸</div>

                        <h1 className="font-montserrat relative mb-5 text-[10px] tracking-[6px] text-[#AED9E0CC] uppercase">
                            Convite de Aniversário
                        </h1>
                        <p className="font-cormorant relative text-[52px] leading-[0.9] font-light tracking-[-1px] text-white md:text-[64px]">
                            Isabelly
                            <span className="block mt-2 text-[26px] tracking-[2px] text-[#AED9E0] uppercase md:text-[32px]">
                                Diva
                            </span>
                        </p>

                        <div className="relative mx-auto mt-7 flex size-23 flex-col items-center justify-center rounded-full border border-[rgba(174,217,224,0.4)] bg-[radial-gradient(circle,#2E5BA8_0%,#1A3A6E_70%)] shadow-[0_8px_24px_rgba(0,0,0,0.35),inset_0_1px_2px_rgba(255,255,255,0.15)]">
                            <span className="font-cormorant text-[38px] leading-none text-white">15</span>
                            <span className="font-montserrat mt-0.5 text-[10px] tracking-[2px] text-[#AED9E0E6] uppercase">anos</span>
                        </div>

                        <div className="relative mt-6 flex items-center justify-center gap-4">
                            <div className="h-px w-15 bg-linear-to-r from-transparent to-[rgba(174,217,224,0.4)]" />
                            <div className="size-1.5 rotate-45 bg-[rgba(174,217,224,0.5)]" />
                            <div className="h-px w-15 bg-linear-to-r from-[rgba(174,217,224,0.4)] to-transparent" />
                        </div>

                        <svg
                            className="absolute right-0 -bottom-px left-0 h-12 w-full"
                            viewBox="0 0 1440 48"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                        >
                            <path d="M0,24 C240,48 480,0 720,24 C960,48 1200,0 1440,24 L1440,48 L0,48 Z" fill="#f0f7fb" />
                        </svg>
                    </div>

                    <div className="px-4 py-6 md:px-10 md:pt-10 md:pb-11">
                        <div className="mb-8">
                            <div className="font-montserrat mb-4 text-[10px] font-medium tracking-[4px] text-[#2E5BA8CC] uppercase">
                                Detalhes do evento
                            </div>
                            <div className="grid gap-3 md:grid-cols-2">
                                <div className="rounded-lg border border-[rgba(46,91,168,0.14)] bg-white/60 p-4 text-center">
                                    <span className="mb-1 block text-[20px]">🗓️</span>
                                    <p className="font-montserrat text-[10px] tracking-[2px] text-[#2E5BA8B3] uppercase">Data</p>
                                    <p className="font-cormorant mt-0.5 text-[24px] text-[#1A3A6E]">09 de Maio</p>
                                    <p className="font-montserrat text-[11px] text-[#2C4A7C99]">Sábado, 2026</p>
                                </div>
                                <div className="rounded-lg border border-[rgba(46,91,168,0.14)] bg-white/60 p-4 text-center">
                                    <span className="mb-1 block text-[20px]">🕖</span>
                                    <div className="font-montserrat text-[10px] tracking-[2px] text-[#2E5BA8B3] uppercase">Horário</div>
                                    <div className="font-cormorant mt-0.5 text-[24px] text-[#1A3A6E]">20:00h</div>
                                    <div className="font-montserrat text-[11px] text-[#2C4A7C99]">Início do evento</div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-8">
                            <div className="font-montserrat mb-4 text-[10px] font-medium tracking-[4px] text-[#2E5BA8CC] uppercase">Local</div>
                            <div className="flex flex-col md:flex-row items-center md:items-start gap-3 rounded-lg border border-[rgba(46,91,168,0.14)] bg-white/60 p-4">
                                <p className="grid size-12 shrink-0 place-items-center rounded-full bg-[#e8f4f8] text-lg">📍</p>
                                <div>
                                    <h3 className="font-cormorant text-[24px] text-[#1A3A6E]">Espaço de Festas Renascer</h3>
                                    <p className="font-montserrat text-[13px] leading-relaxed text-[#2C4A7CCC]">
                                        <span className="font-medium text-[#2E5BA8]">Portal das Águas Quentes 2. <br /> Final da Avenida do Caldas Parque</span>
                                        <br />
                                        Av. D QD. 92 LF 11 Antigo Bougainville próximo a entrada do Ovos Caldas
                                        <br />
                                        Caldas Novas - GO
                                    </p>
                                    <a className="flex flex-row items-center justify-center p-2 bg-[#e8f4f8] rounded-lg hover:bg-[#d1e8f0] transition font-montserrat font-bold text-xs md:text-md text-blue-600" target="_blank" href=""><img className="size-8" src="svg/Google-Maps.svg" alt="" />Visualizar Localização</a>
                                </div>
                            </div>
                        </div>

                        <div className="mb-8">
                            <div className="font-montserrat mb-4 text-[10px] font-medium tracking-[4px] text-[#2E5BA8CC] uppercase">
                                Vestimentas Sugeridas
                            </div>
                            <div className="grid grid-cols-2 gap-2.5 md:grid-cols-3">
                                {vests.map((vest) => (
                                    <div
                                        key={vest.name}
                                        className="flex items-center gap-2 rounded-lg border border-[rgba(46,91,168,0.14)] bg-white/70 px-3 py-2"
                                    >
                                        <span className="text-[17px]">{vest.emoji}</span>
                                        <div className="font-montserrat text-[12px] text-[#1A3A6E]">{vest.name}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <div className="font-montserrat mb-4 text-[10px] font-medium tracking-[4px] text-[#2E5BA8CC] uppercase">
                                Informações Importantes
                            </div>
                            <div className="grid gap-3 md:grid-cols-2">
                                <div className="flex flex-col md:flex-row items-center md:items-start gap-3 rounded-lg border border-[rgba(46,91,168,0.14)] bg-white/60 p-3.5">
                                    <p className="grid size-12 text-xl place-items-center rounded-full bg-[#e8f4f8]">🍾</p>
                                    <div className="w-full">
                                        <p className="font-montserrat text-[10px] tracking-[1.5px] text-[#2E5BA8CC] uppercase">Não serviremos bebidas</p>
                                        <p className="font-montserrat text-[13px] text-[#1A3A6E]">Não serviremos bebidas alcoólicas no local.</p>
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row items-center md:items-start gap-3 rounded-lg border border-[rgba(46,91,168,0.14)] bg-white/60 p-3.5">
                                    <p className="grid size-12 text-xl place-items-center rounded-full bg-[#e8f4f8]">🍻</p>
                                    <div className="w-full">
                                        <p className="font-montserrat text-[10px] tracking-[1.5px] text-[#2E5BA8CC] uppercase">Pode trazer bebidas</p>
                                        <p className="font-montserrat text-[13px] text-[#1A3A6E]">Caso desejar, você pode trazer bebidas alcoólicas sem problemas.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-linear-to-r from-[#dcecf5] to-[#e8f2f7] px-8 py-6 text-center">
                        <p className="font-cormorant text-[26px] leading-[1.3] text-[#1A3A6E]">
                            "O mar me chama e eu sempre vou —
                            <br />
                            venha celebrar comigo."
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}