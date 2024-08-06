import { Button } from "@/components/ui/button";
import { MdFace3 } from "react-icons/md";
import { SiGoogledocs } from "react-icons/si";
import { PiWhatsappLogoDuotone } from "react-icons/pi";

function About() {
    return (
        <div className="flex w-full">
            <div className="flex flex-col gap-4 w-[90%] text-[--text] order-2 md:order-1 mb-4 md:mb-0 animate__fadeInUp duration-1000">
                <div className="flex items-center justify-between mb-8 rounded-lg p-4 border border-blue-900 shadow-md">
                    <h1 className="text-4xl md:text-6xl font-extrabold">
                        Sobre Mim
                    </h1>
                    <MdFace3 className="border border-blue-800 rounded-full w-12 h-12 md:w-14 md:h-14"/>
                </div>
                <span className="flex flex-col gap-6 text-xl md:text-2xl">
                    <p>
                        Olá! Meu nome é Sthefany Schroeder e sou estudante de Engenharia Civil com uma paixão por desenhar o futuro. Atualmente, atuo como desenhista de projetos, onde aplico meu conhecimento técnico e criatividade para transformar conceitos em soluções concretas.
                    </p>
                    <p>
                        Com uma trajetória marcada por uma rápida aprendizagem e um desempenho ótimo nos estudos, sempre busquei me destacar pela minha dedicação e capacidade de absorver novos conhecimentos de maneira eficiente. A comunicação clara e a proatividade são fundamentais para o sucesso em projetos complexos, e essas são características que valorizo e cultivo em meu dia a dia profissional.
                    </p>
                    <p>
                        Meu objetivo é continuar crescendo na área de Engenharia Civil, contribuindo com minha visão inovadora e habilidades técnicas para a criação de projetos que não apenas atendam às necessidades atuais, mas também antecipem desafios futuros. Estou entusiasmada com as oportunidades de colaboração e aprendizado contínuo e estou pronta para enfrentar novos desafios e oportunidades que surgirem.
                    </p>
                </span>
                <div className="flex gap-2">
                    <Button className="flex justify-center items-center mt-6 md:mt-10 w-1/2 2xl:w-1/5 h-16 bg-white text-yellow-700 transition duration-300 hover:bg-gray-100 border border-blue-800">
                        <a className="flex justify-center items-center gap-2 w-full h-full text-blue-800" href="https://drive.google.com/file/d/1eHEKhyWGJBgy-bo2JQrkAPsvt5O2wxll/view?usp=sharing" target="_blank">
                            <SiGoogledocs className="w-6 h-6 text-blue-800"/>
                            Currículo
                        </a>
                    </Button>
                    <Button className="flex justify-center items-center mt-6 md:mt-10 w-1/2 2xl:w-1/5 h-16 bg-white text-yellow-700 transition duration-300 hover:bg-gray-100 border border-blue-800">
                        <a className="flex justify-center items-center gap-2 w-full h-full text-blue-800" href="https://wa.me/5547988247518?text=Ol%C3%A1,%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20marcar%20um%20caf%C3%A9!" target="_blank">
                            <PiWhatsappLogoDuotone className="w-6 h-6 text-blue-800"/>
                            Contato
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default About;