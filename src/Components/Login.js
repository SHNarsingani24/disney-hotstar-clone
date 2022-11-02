import styled from "styled-components"
import "../index.css"

const Login = props => {
    return (
        <Container>
            <Content>
                <img
                    style={
                        {
                            marginBottom: "1em",
                            maxWidth: "500px",
                            minHeight: "1px",
                            display: "block",
                            width: "100%",
                            marginInline: "auto",
                            height: "auto"
                        }
                    }
                    src="/images/cta-logo-one.svg"
                    alt="CTA-logo-1"
                />
                <SignUp> GET ALL HERE </SignUp>
                <Description>
                    Get premier access to <b>Raya and the last dragon</b> for an
                    additional fee with a Disney+ subscription. As of 03/06/2022, the price
                    of Disney+ and The Disney Bundle will increase by 80Rs.
                </Description>
                <img
                    style={
                        {
                            marginBottom: "1em",
                            maxWidth: "600px",
                            minHeight: "1px",
                            display: "block",
                            width: "100%",
                            marginInline: "auto",
                            height: "auto"
                        }
                    }
                    src="/images/cta-logo-two.png"
                    alt="CTA-logo-2"
                />
            </Content>
        </Container>
    );
}

const Container = styled.section`
    overflow: hidden;
    height: 100vh;
    background-image: url("/images/login-background.jpg");
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const Content = styled.div`
    width: 60%;
    min-height: 60vh;
    padding: 4%;
    /* border: 2px solid red; */
    height: 60%;
    min-width: 400px;
`;

const SignUp = styled.button`
    font-weight: 600;
    color: #f9f9f9;
    display: block;
    background-color: #0063e5;
    width: 100%;
    max-width: 500px;
    margin-inline: auto;
    border: 1px solid transparent;
    border-radius: .25em;
    letter-spacing: 0.4em;
    font-size: 1.15em;
    padding: .5em .5em;
    margin-bottom: 1em;

    &:hover{
        background-color: #0483ee;
        cursor: pointer;
    }
`;

const Description = styled.p`
    color: hsla(0, 0, 95.3%, 1);
    font-size: .9em;
    font-weight: 400;
    line-height: 1.5em;
    letter-spacing: 2px;
    margin-bottom: 3em;
`;

export default Login;