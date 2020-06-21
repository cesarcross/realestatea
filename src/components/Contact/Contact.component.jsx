import React from "react";

import { ContactContainer, Title, Whatsapp, Form } from "./Contact.style";

import whatsapp from "../../assets/images/whatsappicon.png";

export const Contact = () => (
  <ContactContainer>
    <Title>Entre em contato para saber mais</Title>
    <Whatsapp
      href="https://web.whatsapp.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={whatsapp} alt="" />
    </Whatsapp>
    <Form>
      <form
        id="contactform"
        action="https://formsubmit.io/send/ebaf272f-0e6b-441c-8c2a-7881d541c7be"
        method="POST"
      >
        <input
          name="_redirect"
          type="hidden"
          id="name"
          value="https://restaurant-uva.now.sh"
        />
        <input name="name" type="text" id="name" placeholder="Nome" />
        <input name="email" type="email" id="email" placeholder="Email" />
        <textarea
          name="comment"
          id="comment"
          rows="10"
          placeholder="Escreva sua mensagem"
        />
        <input name="_formsubmit_id" type="text" style={{ display: "none" }} />
        <input type="submit" value="Enviar" />
      </form>
    </Form>
  </ContactContainer>
);

export default Contact;
