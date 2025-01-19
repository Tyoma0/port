import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import emailjs from '@emailjs/browser';
import { ElementRef, useRef } from "react";

export const Contact = () => {
    const form = useRef<ElementRef<'form'>>(null);

  const sendEmail = (e:any) => {
    e.preventDefault();

    if(!form.current) return

    emailjs.sendForm('service_cnmxh3b', 'template_qz67i8j', form.current, {publicKey: 'PdQb-PKZ4YAkVM2ut',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },);
        e.target.reset()
  };

    return (
        <StyledContact>
            <Container>
            <SectionTitle>Contact</SectionTitle>  
            <StyledForm ref={form} onSubmit={sendEmail}>
            <Field required placeholder="name" name={'user_name'}/>
            <Field required placeholder="email" name={'email'}/>
            <Field required placeholder="subject" name={'subject'}/>
            <Field required placeholder="message" as={'textarea'} name={'message'}/>
            <Button type="submit">SEND MESSAGE </Button>
        </StyledForm>
            </Container>          
        </StyledContact>
    );
};

const StyledContact = styled.section`
    position: relative;
    
`

const StyledForm = styled.form`
    max-width:520px;
    width:100%;
    display: flex;
    flex-direction:column;
    gap:16px;
    margin:0 auto;
    align-items:center;
textarea {
    resize:none;
    height:145px;
}
`
const Field = styled.input`
    width: 100%;
    border:1px solid #4b6581;
    background-color:${theme.colors.formFon};
    padding:7px 15px;
    font-family:'Poppins';
    font-weight:400;
    font-size:16px;
    letter-spacing:0.05em;
    color:${theme.colors.font};
    border-radius:5px;

    &::placeholder{
color:#666363;
text-transform:capitalize;
    }

    &:focus-visible{
        outline:1px solid #4b6581;
    }
`