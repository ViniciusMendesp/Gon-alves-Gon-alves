import { Container } from "../ui/container";

interface AboutProps {
  className?: string;
}

export const About = ({ className }: AboutProps) => {
  return (
    <Container className={`flex flex-col gap-5 py-5 ${className}`}>
      <h1 id="sobre" className="text-2xl font-bold">
        Sobre nós
      </h1>
      <p className="text-base leading-8">
        Bem-vindo ao Escritório de Advocacia Gonçalves & Gonçalves, localizado
        na vibrante cidade de Suzano. Somos um escritório fundado com paixão e
        comprometimento pelos advogados e irmãos Juliana de Sousa Gonçalves e
        Willian de Sousa Gonçalves em 11 de agosto de 2020. Com uma sólida base
        de conhecimento e experiência, estamos aqui para atender às suas
        necessidades legais com excelência. Nossa abordagem é centrada no
        cliente, e cada pessoa que entra em nosso escritório é tratada com
        respeito e atenção individualizada. Entendemos que cada caso é único, e
        é por isso que nos dedicamos a ouvir atentamente sua situação antes de
        fornecer orientação jurídica especializada. Seja para um simples
        aconselhamento ou para representação legal perante os tribunais, estamos
        aqui para ajudar. Compreendemos que lidar com questões jurídicas pode
        ser complexo e desafiador. É por isso que estamos empenhados em fornecer
        um atendimento personalizado, para que você se sinta confortável e
        confiante em cada etapa do processo. Nossa equipe está preparada para
        lidar com uma ampla gama de questões legais, desde cobranças abusivas
        até processos de separação, e estamos aqui para ajudá-lo a encontrar as
        melhores soluções. Se você tem dúvidas jurídicas ou está enfrentando um
        problema legal, não hesite em entrar em contato conosco. Estamos aqui
        para oferecer orientação e esclarecer suas dúvidas, para que você possa
        tomar decisões informadas sobre o seu futuro. Entre em contato conosco
        hoje mesmo para agendar uma consulta, seja pelo formulário abaixo ou
        através do WhatsApp. Estamos ansiosos para ajudá-lo a resolver seus
        problemas legais e alcançar a justiça que você merece.
      </p>
    </Container>
  );
};
