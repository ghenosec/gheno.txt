import React, { useEffect, useState } from "react";

const ResumePage: React.FC = () => {
  const [isFadingIn, setIsFadingIn] = useState(false);

  useEffect(() => {
    setIsFadingIn(true);
  }, []);

  return (
    <div
      className={`p-4 transition-opacity duration-1000 ${
        isFadingIn ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="text-center mb-8">
        <img
          src="/pc-art.png"
          alt="Logo"
          height={355}
          className="mx-auto w-56"
        />
        <h1 className="text-5xl font-bold mt-4">GH.txt</h1>
      </div>
      <h1 className="text-4xl font-bold mb-4">Propósito</h1>
      <p>
        Precisava de um site para ser meu currículo e portfólio, depois de
        observar vários websites e portfólios, encontrei um seguindo o estilo
        de sistemas operacionais antigos e gostei demais da ideia, então decidi
        recriar com uma ideia que eu tinha em mente. Ainda não está 100% como
        eu gostaria, mas estou trabalhando nisso.
      </p>
      <h1 className="text-4xl font-bold mt-8 mb-4">Aviso</h1>
      <pre className="bg-gray-200 p-4">
        <code>
          {`Esse projeto está sendo desenvolvido para aprendizado.
É possível encontrar erros, caso encontre, por favor, me avise.
A ideia é testar novos conceitos, ideias e aprender, então não garanto um código perfeito.`}
        </code>
      </pre>

      <h1 className="text-4xl font-bold mt-8 mb-4">Descrição</h1>
      <ul className="list-disc pl-8">
        <li>
          Esse projeto imita o start de um Sistema Operacional, aonde após
          "ligar", automaticamente abre um .txt que mostra algumas informações
          que englobam a minha pessoa.
        </li>
        <li>
          A parte inicial do projeto é com base em{" "}
          <a
            href="https://svelte.dev"
            className="text-green-500 hover:text-green-700"
          >
            Svelte
          </a>{" "}
          mas, convertido para{" "}
          <a
            href="https://www.typescriptlang.org/"
            className="text-green-500 hover:text-green-700 "
          >
            TypeScript
          </a>
          , pois é aonde tenho mais familiaridade.
        </li>
        <li>
          A base do projeto é feita com{" "}
          <a
            href="https://nextjs.org/"
            className="text-green-500 hover:text-green-700"
          >
            Next
          </a>{" "}
          o que me permite testar vários frameworks além de ter suporte nativo
          para TypeScript e futuras integrações simplificadas com APIs.
        </li>
      </ul>

      <h1 className="text-4xl font-bold mt-8 mb-4">Licença</h1>
      <p>
        Este projeto está sob licença do MIT, fique à vontade para usá-lo como
        quiser.
      </p>
    </div>
  );
};

export default ResumePage;
