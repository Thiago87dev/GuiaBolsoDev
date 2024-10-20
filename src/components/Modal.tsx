import Image, { StaticImageData } from "next/image";

interface ModalProps {
  onClose: () => void;
  title: string;
  text: string;
  imagem: StaticImageData
}
const Modal = ({ onClose, title, text, imagem }: ModalProps) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0, 0, 0, 0.5)] flex justify-center items-center">
      <div className="bg-zinc-700 px-5 py-2 rounded-lg max-w-md max-h-[600px] w-full text-center overflow-y-auto">
        <div className="flex justify-end ">
          <button className="text-3xl fixed " onClick={onClose}>
            ❌
          </button>
        </div>
        <div className="mt-10">
          <h2 className="text-2xl mb-4">{title}</h2>
          <p className="text-lg mb-4">{text}</p>
          <Image src={imagem} alt="imagem"></Image>
        </div>
      </div>
    </div>
  );
};

export default Modal;
