import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import emailjs from '@emailjs/browser';
import { ElementRef, useRef, useState, useEffect } from "react";

export const Contact = () => {
    const form = useRef<ElementRef<'form'>>(null);
    const [isThankYouPopupVisible, setThankYouPopupVisible] = useState(false);

    const sendEmail = (e: any) => {
        e.preventDefault();

        if (!form.current) return;

        emailjs.sendForm('service_cnmxh3b', 'template_qz67i8j', form.current, {
            publicKey: 'PdQb-PKZ4YAkVM2ut',
        })
        .then(
            () => {
                console.log('SUCCESS!');
                setThankYouPopupVisible(true); // Показываем всплывающее окно
            },
            (error) => {
                console.log('FAILED...', error.text);
            },
        );
        e.target.reset();
    };

    // Автоматическое закрытие через 10 секунд
    useEffect(() => {
        if (isThankYouPopupVisible) {
            const timer = setTimeout(() => {
                setThankYouPopupVisible(false); // Скрываем всплывающее окно
            }, 5000); // 5 секунд

            return () => clearTimeout(timer); // Очистка таймера при размонтировании
        }
    }, [isThankYouPopupVisible]);

    const closeThankYouPopup = () => {
        setThankYouPopupVisible(false); // Скрываем всплывающее окно вручную
    };

    return (
        <StyledContact id="contact">
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <StyledForm ref={form} onSubmit={sendEmail}>
                    <Field required placeholder="name" name={'user_name'} />
                    <Field required placeholder="email" name={'email'} />
                    <Field required placeholder="subject" name={'subject'} />
                    <Field required placeholder="message" as={'textarea'} name={'message'} />
                    <Button type="submit">SEND MESSAGE</Button>
                </StyledForm>
                {isThankYouPopupVisible && (
                    <ThankYouPopup>
                        <ThankYouContent>
                            <CloseButton onClick={closeThankYouPopup}>x</CloseButton>
                            <h3>Thank You!</h3>
                            <p>I will try to answer as quickly as possible!</p>
                        </ThankYouContent>
                    </ThankYouPopup>
                )}
            </Container>
        </StyledContact>
    );
};

const StyledContact = styled.section`
    position: relative;
`;

const StyledForm = styled.form`
    max-width: 520px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15ggpx;
    margin: 0 auto;
    align-items: center;

    textarea {
        resize: none;
        height: 145px;
    }
`;

const Field = styled.input`
    width: 100%;
    border: 1px solid #7376799b;
    background-color: ${theme.colors.formFon};
    padding: 7px 15px;
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 0.05em;
    color: ${theme.colors.font};
    border-radius: 5px;

    &::placeholder {
        color: #666363;
        text-transform: capitalize;
    }

    &:focus-visible {
        outline: 1px solid #4b6581;
    }
`;

const ThankYouPopup = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5); 
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ThankYouContent = styled.div`
    background: ${theme.colors.primaryBg};
    padding: 40px;
    border-radius: 10px;
    text-align: center;
    position: relative;
    max-width: 400px;
    width: 100%;

    h3 {
        font-size: 25px;
        text-transform: uppercase;
        font-weight: 600;
        color: ${theme.colors.font};
    }

    p {
        padding: 10px 0;
        color: ${theme.colors.font};
    }
`;

const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 20px;
    color: ${theme.colors.font};
    cursor: pointer;
`;