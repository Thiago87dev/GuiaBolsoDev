"use client";
import Lessons from "@/components/Lessons";
import { useEffect, useState } from "react";

export default function Home() {

  const [linguagemProgramacao, setLinguagemProgramacao] = useState("Python");
  const [isMounted, setIsMounted] = useState(false);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const linguagemSelecionada = e.target.value
    setLinguagemProgramacao(linguagemSelecionada);
    localStorage.setItem('linguagemProgramacao', linguagemSelecionada)
  };

  useEffect(()=>{
    // Atualiza o estado para indicar que o componente foi montado
    setIsMounted(true)
    // Recupera o valor do localStorage apenas após a montagem no cliente
    const linguagemSalva = localStorage.getItem('linguagemProgramacao')|| 'Python'
    setLinguagemProgramacao(linguagemSalva)
  }, [])

  if(!isMounted){
    return <div>Carregando...</div> 
  }

  return (
    <div className="font-semibold my-5 mx-8 md:flex md:flex-col md:items-center">
      <select
        className="bg-black p-2 text-center"
        name="linguagem"
        id="select-linguagem"
        value={linguagemProgramacao}
        onChange={handleSelectChange}
      >
        <option className="p-1" value="Python">
          PYTHON
        </option>
        <option className="p-1" value="Javascript">
          JAVASCRIPT
        </option>
        <option className="p-1" value="Typescript">
          TYPESCRIPT
        </option>
        <option className="p-1" value="PHP">
          PHP
        </option>
      </select> 
      
      {linguagemProgramacao === "Python" && (
        <div className="md:w-2/4">
          <Lessons linguagem={linguagemProgramacao}/>
        </div>
      )}
      {linguagemProgramacao === "Javascript" && (
        <div className="md:w-2/4">
          <Lessons linguagem={linguagemProgramacao}/>
        </div>
      )}
      {linguagemProgramacao === "Typescript" && (
        <div className="md:w-2/4">
          <p>vc escolheu Typescript</p>
        </div>
      )}
      {linguagemProgramacao === "PHP" && (
        <div className="md:w-2/4">
          <p>vc escolheu PHP</p>
        </div>
      )}
    </div>
  );
}
