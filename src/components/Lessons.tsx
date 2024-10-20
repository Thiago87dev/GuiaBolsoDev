import { aulasJavascript } from "@/aulasJavascript";
import { aulasPython } from "@/aulasPython";
import Link from "next/link";

interface Linguagem {
  linguagem: string;
}

const Lessons = ({ linguagem }: Linguagem) => {
  const aulas = linguagem === "Python" ? aulasPython : aulasJavascript;
  return (
    <div>
      {aulas.map((item) => {
        return (
          <div className="my-8 font-semibold" key={item.id}>
            <ul>
              <li>
                <Link href={`/${linguagem}-${item.id - 1}`}>
                  <div className="flex justify-between mb-1">
                    <div className="flex gap-4 ">
                      <p>{item.id}</p>
                      <p>{item.nome}</p>
                    </div>
                    <p>➡️</p>
                  </div>
                  <hr />
                </Link>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Lessons;
