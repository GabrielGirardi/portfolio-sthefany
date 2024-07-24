import { Button } from "@/components/ui/button.tsx";
import { Link } from "react-router-dom";

function LandingPage() {
    return (
        <div className="flex flex-col md:flex-row justify-between w-full">
            <div className="flex flex-col gap-4 w-full md:w-1/2 text-[--text] order-2 md:order-1 mb-4 md:mb-0">
                <p className="text-xl md:text-3xl">
                    Olá, eu sou Sthefany,
                </p>
                <h2 className="text-5xl md:text-7xl font-extrabold">
                    Desenhista de Projetos
                </h2>
                <p className="text-xl md:text-3xl">
                    Engenharia Civil
                </p>
                <Button className="relative mt-6 md:mt-10 w-1/2 2xl:w-2/5 h-16 bg-yellow-300 text-yellow-700 transition duration-300 hover:bg-yellow-400">
                    <Link className="flex justify-center items-center w-full h-full" to="/sobre">Sobre Mim</Link>
                    <span className="absolute -translate-y-2 -translate-x-2 w-full h-full border border-yellow-700 rounded-md transition duration-300 hover:-translate-y-0 hover:-translate-x-0 "/>
                </Button>
            </div>
            <div className="flex flex-col gap-4 w-full md:w-1/2 text-[--text] max-h-[500px] order-1 md:order-2 mb-6 md:mb-0">
                <div className="flex min-w-[100%] min-h-[100%] relative">
                    <img className="object-contain min-w-[100%] min-h-[100%]" src="/assets/perfil.png"
                         alt="Foto de perfil" width={400} height={400}/>
                    <img className="absolute left-[4%] md:left-[18%] bottom-10 md:bottom-20" src="/assets/bar.png" alt="bars" width={96}
                         height={96}/>
                    <img className="absolute right-[4%] md:right-[20%] top-0" src="/assets/plus.png" alt="plus" width={48}
                         height={48}/>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;