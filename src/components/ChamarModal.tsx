'use client'
import Modal from "@/components/Modal";
import { useEffect, useState } from "react";
import python_comentario_linha from '@/assets/img/python_comentario_linha.png'

const ChamarModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true)
  const clseModal = () => setIsModalOpen(false)

  useEffect(()=>{
    <Modal imagem={python_comentario_linha} text="oi" title="ola" onClose={clseModal} isOpen={isModalOpen}/>
  },[isModalOpen])

  return (
    <div>
        <button onClick={() => openModal}>Abrir modal</button>
        <Modal imagem={python_comentario_linha} text="oi" title="ola" onClose={clseModal} isOpen={isModalOpen}/>
    </div>
  )
};

export default ChamarModal;
