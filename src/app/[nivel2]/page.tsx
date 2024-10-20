"use client";
import { aulasJavascript } from "@/aulasJavascript";
import { aulasPython } from "@/aulasPython";
import Modal from "@/components/Modal";
import { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Nivel2Props {
  params: { nivel2: string };
}

const Nivel2 = ({ params }: Nivel2Props) => {
  const dividindoParams = params.nivel2.split("-");
  const aulas = dividindoParams[0] === "Python" ? aulasPython : aulasJavascript;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState({
    title: "",
    content: "",
    image: null as StaticImageData | null,
  });

  const openModal = (
    title: string,
    content: string,
    image: StaticImageData
  ) => {
    setModalInfo({ title, content, image });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const paramsNum = Number(dividindoParams[1]) + 1;
  return (
    <div>
      <div className="my-[90px] mx-8">
        {aulas.map((item) => {
          return (
            <div key={item.id}>
              {item.nivel2.map((item2) => (
                <div className="my-8 font-semibold" key={item2.id}>
                  {item2.idPai === paramsNum && (
                    <ul>
                      {item2.nivel3.length > 0 ? (
                        <li>
                          <Link
                            href={`/${dividindoParams[0]}-${item.id - 1}/${
                              item2.id
                            }`}
                          >
                            <div className="flex justify-between mb-1">
                                  <div className="flex gap-4 ">
                                    <p>{item2.id}</p>
                                    <p>{item2.nome2}</p>
                                  </div>
                                  <p>➡️</p>
                                </div>
                                <hr />
                          </Link>
                        </li>
                      ) : (
                        <li>
                          {item2.conteudoModal.titulo &&
                            item2.conteudoModal.texto && (
                              <button className="w-full"
                                onClick={() =>
                                  openModal(
                                    item2.conteudoModal.titulo,
                                    item2.conteudoModal.texto,
                                    item2.conteudoModal.img
                                  )
                                }
                              >
                                <div className="flex justify-between mb-1">
                                  <div className="flex gap-4 ">
                                    <p>{item2.id}</p>
                                    <p>{item2.nome2}</p>
                                  </div>
                                  <p>➡️</p>
                                </div>
                                <hr />
                              </button>
                            )}
                        </li>
                      )}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          );
        })}
      </div>
      <div className="mt-20">
        <Link href={`/`}>Voltar</Link>
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

export default Nivel2;
