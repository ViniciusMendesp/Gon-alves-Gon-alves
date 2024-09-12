import { Container } from "../ui/container";

export const About = () => {
  return (
    <Container className="flex justify-center bg-background">
      <div className="text-center justify-center flex flex-col gap-5 lg:w-[900px]">
        <h1 id="sobre" className="text-2xl font-bold">
          Sobre nós
        </h1>
        <p className="text-base leading-8">
          Bem-vindo ao Escritório de Advocacia Gonçalves & Gonçalves, localizado
          em Suzano. Fundado em 11 de agosto de 2020 pelos advogados e irmãos
          Juliana de Sousa Gonçalves e Willian de Sousa Gonçalves, nosso
          escritório é dedicado a atender suas necessidades legais com
          excelência.
        </p>
        <p className="text-base leading-8">
          Nossa abordagem é centrada no cliente. Cada caso é tratado com
          respeito e atenção individualizada, garantindo orientação jurídica
          especializada para sua situação específica. Estamos preparados para
          lidar com uma ampla gama de questões legais, desde cobranças abusivas
          até processos de separação.
        </p>
        <p>
          Entendemos que questões jurídicas podem ser complexas e desafiadoras.
          Por isso, oferecemos um atendimento personalizado, para que você se
          sinta confortável e confiante em cada etapa do processo. Se você tem
          dúvidas jurídicas ou enfrenta um problema legal, não hesite em nos
          contatar. Estamos aqui para oferecer a orientação necessária e
          ajudá-lo a tomar decisões informadas sobre o seu futuro.
        </p>
        <p className="text-base leading-8">
          Agende uma consulta conosco pelo formulário abaixo ou pelo WhatsApp.
          Estamos ansiosos para ajudá-lo a alcançar a justiça que você merece.
        </p>
      </div>
    </Container>
  );
};
