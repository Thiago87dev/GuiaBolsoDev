import { aulasJavascript } from "@/aulasJavascript";
import {aulasPython} from "@/aulasPython"
import Link from "next/link";

interface Linguagem {
  linguagem: string
}

const Lessons = ({linguagem}:Linguagem) => {
  const aulas = linguagem === 'Python' ? aulasPython :  aulasJavascript 
  return (
      <div>
      {aulas.map((item) => {
        return (
          <div key={item.id}>
            <ul>
              <li><Link href={`/${linguagem}-${item.id - 1}`}>{item.nome}</Link></li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Lessons;
