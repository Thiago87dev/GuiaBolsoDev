"use client";
import Modal from "@/components/Modal";
import { aulasJavascript } from "@/aulasJavascript";
import { aulasPython } from "@/aulasPython";
import Link from "next/link";
import { useState } from "react";
import { StaticImageData } from "next/image";

interface Nivel3Props {
  params: { nivel2: string };
}

const Nivel3 = ({ params }: Nivel3Props) => {
  const dividindoParams = params.nivel2.split("-");
  const aulas = dividindoParams[0] === "Python" ? aulasPython : aulasJavascript;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState({ title: "", content: "", image: null as StaticImageData | null });

  const openModal = (title: string, content: string, image:StaticImageData) => {
    setModalInfo({ title, content, image });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <div>
        {aulas.map((item) => {
          return (
            <div key={item.id}>
              {item.nivel2.map((item2) => (
                <div key={item2.id}>
                  {item2.nivel3.map((item3) => (
                    <div key={item3.id}>
                      <ul>
                        <li>
                        {item3.conteudoModal.titulo &&
                            item3.conteudoModal.texto && (
                              <button
                                onClick={() =>
                                  openModal(
                                    item3.conteudoModal.titulo,
                                    item3.conteudoModal.texto,
                                    item3.conteudoModal.img
                                  )
                                }
                              >
                                {item3.nome3}
                              </button>
                            )}
                        </li>
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          );
        })}
      </div>
      <div className="mt-20">
        <Link href={`/${params.nivel2}`}>Voltar</Link>
      </div>
      {isModalOpen && modalInfo.image && (
        <Modal
          imagem={modalInfo.image}
          title={modalInfo.title}
          text={modalInfo.content}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default Nivel3;
