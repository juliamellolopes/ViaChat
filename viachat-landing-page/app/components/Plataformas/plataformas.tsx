import { Secular_One } from '@next/font/google';

const secularOne = Secular_One({
  subsets: ['latin'],
  weight: '400',
});

export default function plataformas() {
    return (
        <div className="w-full h-auto bg-gradient-to-r p-20 from-[#0698EC] to-[#3BE4C2]">
            
            <div className="flex justify-center text-white px-20 py-12 space-x-28">
                <div className="jusyify-start mt-52">
                    <p className="font-semibold text-[25px] leading-[45px]">Plataformas sociais do</p>
                    <h1 className={`${secularOne.className} font-black text-[92.1962px] leading-[112px]`}>ViaChat</h1>
                    <p className='font-medium text-[20px] leading-[30px] w-[367px] h-[60px] '>Conheça todos os canais de atendimento que o ViaChat integra.</p>
                    <div className="relative mt-6">
                        <button className="w-[309px] h-[67px] border-[3px] border-white rounded-[15.5px] flex items-center justify-center">
                            <span className="font-inter font-bold text-[25px] leading-[42px] text-white">Experimente agora!</span>
                        </button>
                    </div>
                </div>

                <div>
                    <img src="/images/Frame 5.png" alt="" />
                </div>
            </div>
        </div>
    );
}