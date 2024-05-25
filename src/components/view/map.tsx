import { Container } from "../ui/container";

export const Map = () => {
  return (
    <Container className="bg-background flex flex-col gap-4 items-center justify-center">
      <h1 id="map" className="text-2xl font-bold">
        Nosso endereço
      </h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.7692223649237!2d-46.31076259999999!3d-23.540801400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce7a71e7d2c953%3A0xd54d666bb2d2a052!2sR.%20Vinte%20e%20Sete%20de%20Outubro%2C%20n%C2%B0%20401%20-%201%C2%BA%20andar%2C%20sala%205%20-%20Centro%2C%20Suzano%20-%20SP%2C%2008674-200!5e0!3m2!1spt-BR!2sbr!4v1716597996828!5m2!1spt-BR!2sbr"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-96 lg:w-[600px] border rounded-xl shadow-md"
      ></iframe>
    </Container>
  );
};
