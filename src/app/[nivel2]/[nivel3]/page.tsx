"use client";
import Modal from "@/components/Modal";
import { aulasJavascript } from "@/aulasJavascript";
import { aulasPython } from "@/aulasPython";
import Link from "next/link";
import { useState } from "react";
import { StaticImageData } from "next/image";

interface Nivel3Props {
  params: {
    nivel2: string;
    nivel3: string;
  };
}

const Nivel3 = ({ params }: Nivel3Props) => {
  const dividindoParams = params.nivel2.split("-");
  const dividindoParams3 = params.nivel3.split("-");
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
  return (
    <div className="md:flex md:flex-col md:items-center">
      <div className="my-4 mx-8 text-4xl text-[#00a6ed] font-bold">
        <h1>{dividindoParams[0]}</h1>
      </div>
      <div className="my-[36px] mx-8 md:w-2/4">
        {aulas.map((item) => {
          return (
            <div key={item.id}>
              {item.nivel2.map((item2) => (
                <div key={item2.id}>
                  {item2.nivel3.map((item3) => (
                    <div className="my-8 font-semibold" key={item3.id}>
                      {item2.idPai - 1 === Number(dividindoParams[1]) && item3.nomeReferencia  === dividindoParams3[0]  && (
                        <ul>
                          <li>
                            {item3.conteudoModal.titulo &&
                              item3.conteudoModal.texto && (
                                <button
                                  className="w-full"
                                  onClick={() =>
                                    openModal(
                                      item3.conteudoModal.titulo,
                                      item3.conteudoModal.texto,
                                      item3.conteudoModal.img
                                    )
                                  }
                                >
                                  <div className="flex justify-between mb-1">
                                    <div className="flex gap-4 ">
                                      <p>{item3.id}</p>
                                      <p>{item3.nome3}</p>
                                    </div>
                                    <p>➡️</p>
                                  </div>
                                  <hr />
                                </button>
                              )}
                          </li>
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          );
        })}
      </div>
      <div className="mt-20 mx-8">
        <div className="flex justify-center items-center h-10 font-semibold rounded-2xl  w-20 border-solid border-2 border-white">
          <Link href={`/${params.nivel2}`}>Voltar</Link>
        </div>
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
