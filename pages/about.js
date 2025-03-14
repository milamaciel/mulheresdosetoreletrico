import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Title from "../components/Title.js";
import MetaTags from "../components/Metatags.js";
import Analytics from "../components/Analytics.js";

const item = {
  hidden: { opacity: 0, y: "15%" },
  show: { opacity: 1, y: "0%" },
  transition: {
    easing: "easeInOut",
  },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Home({ designers }) {
  return (
    <div className="container">
      <Head>
        <title>Mulheres no setor elétrico | Sobre</title>
        <link rel="icon" href="/favicon.ico" />
        <MetaTags />
      </Head>

      <Link href="/" shallow={true}>
        <a className="auxNav arrowback">←</a>
      </Link>

      <Title
        className="title m0 p0"
        text="Mulheres*no&nbsp;setor&nbsp;elétrico&nbsp;é&nbsp;uma"
        noAnimation
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <p className="f1 extend">
          <motion.span variants={item}>plataforma para demonstrar </motion.span>{" "}
          <motion.span variants={item}>as mulheres profissionais</motion.span>{" "}
          <motion.span variants={item}>que trabalham no setor elétrico</motion.span>{" "}
          <motion.span variants={item}>brasileiro para o mundo. O propósito</motion.span>{" "}
          <motion.span variants={item}>é facilitar a busca rápida por mulheres</motion.span>{" "}
          <motion.span variants={item}>de diferentes áreas</motion.span>{" "}
          <motion.span variants={item}>
            para promover uma maior participação 
          </motion.span>{" "}
          <motion.span variants={item}>
            feminina em eventos e indicação de nomes no setor elétrico.
          </motion.span>
        </p>
      </motion.div>

      <div className="moreabout">
        <div className="col-left">
          <h3>Como posso incluir uma mulher na lista?</h3>
          <p>
            Se você conhece uma mulher que trabalha 
            no setor elétrico, é só {" "}
            <Link href="/nominate">
              <a className="link">preencher esse form</a>
            </Link>{" "}
           com essas poucas informações agora conseguiremos encontrar facilmente mulheres com experiência nas mais diversas áreas no setor elétrico. 
          Para acessar os detalhes profissionais de cada uma das mulheres é só acessar os seus Linkedins nos links .
          </p>

         <h3>Como você teve essa idéia?</h3>
          <p>
            Surgiu da insatisfação de sempre ouvir a mesma resposta de organizadores de eventos, que o motivo da falta de mulheres entre palestrantes e participantes de painéis, 
             é que não encontraram mulheres no setor elétrico com experiência no tema. A plataforma foi inspirada em outros sites:
          </p>
          <ul>
            <li>
              <a className="link" href="https://womenwho.design/">
                Women Who Design
              </a>
            </li>
            <li>
              <a className="link" href="https://www.womenwhodraw.com/">
                Women Who Draw
              </a>
            </li>
            <li>
              <a className="link" href="http://www.28blacks.com/">
                28 Black Designers
              </a>
            </li>
            <li>
              <a className="link" href="https://www.latinxswhodesign.com/">
                Latinx Who Design
              </a>
            </li>
            <li>
              <a className="link" href="https://brazilianswho.design/">
                Brazilian Who design
              </a>
            </li>
            </ul>

          <h3>Como você fez a plataforma?</h3>
          <p>
            Como uma autoditada nerd, aprendi a mexer na raça no github e fiz!Mulheres no setor elétrico é {" "}
            <a
              className="link"
              target="_blank"
              href="https://github.com/milamaciel/mulheresdosetoreletrico"
            >
              open source
            </a>{" "}
            para quem quiser criar sua própria plataforma. Foi inspirado no Brazilian Who design que getilmente colocaram disponível no Github{" "}
            <a
              className="link"
              target="_blank"
              href="https://github.com/zehfernandes/brazilianswhodesign"
            >
              Brazilians Who Design.
            </a>
            <br />
            <br />
            Sites built using our open-source platform:
          </p>
          <ul>
            <li>
              <a className="link" href="https://uruguayanswho.design/">
                uruguayanswho.design
              </a>
            </li>
            <li>
              <a className="link" href="https://spaniardswho.design/">
                spaniardswho.design
              </a>
            </li>
            <li>
              <a className="link" href="https://britswho.design/">
                britswho.design
              </a>
            </li>
          </ul>
          <br />
          <p>
            Agradeço à todos que possam contribuir com a plataforma e compartilhar para termos cada vez mais mulheres na lista.
          </p>

          <h3>Quem criou a plataforma?</h3>
          <ul>
            <li>
              <a className="link" href="https://www.linkedin.com/in/milamaciel/">
                Camila Maciel
              </a>
            </li>
            </ul>
        </div>
        <div className="col-right">
          <h3>Como posso remover um nome?</h3>
          <p>
            Para remover um nome na plataforma, gentileza manda mensgem para:
            engcamilamaciel@gmail.com.
          </p>
          <h3>Quando é feita a atualização dos nomes indicados?</h3>
          <p>
            A plataforma é atualizada com os nomes indicados quinzenalmente.
          </p>
        </div>

        <Analytics />
      </div>

      <style jsx>{`
        .extend {
          margin: 0;
          max-width: 17ch;
        }

        .moreabout {
          font-weight: normal;
          font-size: 1.5rem;
          line-height: 140%;
          letter-spacing: 0.01em;
          display: flex;
          margin-top: 8rem;
        }

        .moreabout > div {
          width: 50%;
          max-width: 50ch;
        }

        .col-right {
          padding-left: 3rem;
        }
        .col-left {
          padding-right: 3rem;
        }

        .moreabout p {
          margin: 0;
          padding: 0;
        }

        .moreabout h3 {
          padding: 0;
          margin: 0;
          font-size: 1.5rem;
        }

        .moreabout h3 {
          margin: 4rem 0 0 0;
        }

        ul,
        li {
          padding: 0;
          margin: 0;
          list-style: none;
          margin-top: 0.3rem;
        }

        @media (max-width: 480px) {
          .moreabout {
            display: block;
          }

          .moreabout > div {
            width: 100%;
            max-width: 100%;
            display: block;
            padding: 0;
          }
        }
      `}</style>
    </div>
  );
}
