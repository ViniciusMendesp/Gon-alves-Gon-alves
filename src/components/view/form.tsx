import { useState } from "react";
import { Button } from "../ui/button";
import { Container } from "../ui/container";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

interface ContactProps {
  className?: string;
}

export const Form = ({ className }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleShareByEmail = () => {
    const recipientEmail = "goncalvesegoncalves.advconjur@gmail.com";
    const subject = encodeURIComponent(
      "Caso Jurídico - Formulário do Site - G&G"
    );
    const body = encodeURIComponent(
      `Email: ${formData.email}\nNome: ${formData.name}\nNúmero: ${formData.phone}\nAssunto: ${formData.message}`
    );
    const mailToLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
    window.location.href = mailToLink;
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const isFormValid =
    formData.name !== "" &&
    formData.email !== "" &&
    formData.phone !== "" &&
    formData.message !== "";

  return (
    <Container className={`flex flex-col gap-5 bg-background ${className}`}>
      <h1 id="form" className="text-2xl font-bold md:text-center">
        Ficha Cadastral pré-consulta
      </h1>
      <form className="items-center flex flex-col">
        <div className="mb-4 md:w-[600px] w-full">
          <Label htmlFor="name">Nome</Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Seu nome"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4 md:w-[600px] w-full">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Seu email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4 md:w-[600px] w-full">
          <Label htmlFor="phone">Telefone</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Seu telefone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4 md:w-[600px] w-full">
          <Label htmlFor="message">Mensagem</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Envie um resumo sobre o seu caso..."
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <Button
          type="button"
          className="w-full md:w-[600px]"
          onClick={handleShareByEmail}
          disabled={!isFormValid}
        >
          Enviar
        </Button>
      </form>
      <p className="text-muted-foreground text-center text-xs ">
        Um email será enviado para o advogado.
      </p>
    </Container>
  );
};
