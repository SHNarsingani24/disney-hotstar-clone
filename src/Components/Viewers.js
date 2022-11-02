import styled from "styled-components";

const Viewers = () => {
    return (
        <Container>
            <Wrap>
                <img className="logo" src="/images/viewers-disney.png" alt="disney"/>
                <img className="logo-gif" src="/videos/disney.gif" alt="disney"/>
            </Wrap>

            <Wrap>
                <img className="logo" src="/images/viewers-pixar.png" alt="pixar"/>
                <img className="logo-gif" src="/videos/pixar.gif" alt="pixar"/>
            </Wrap>

            <Wrap>
                <img className="logo" src="/images/viewers-marvel.png" alt="marvel"/>
                <img className="logo-gif" src="/videos/marvel.gif" alt="marvel-intro"/>
            </Wrap>

            <Wrap>
                <img className="logo" src="/images/viewers-national.png" alt="national-geographic"/>
                <img className="logo-gif" src="/videos/national.gif" alt="national-geographic"/>
            </Wrap>

            <Wrap>
                <img className="logo" src="/images/viewers-starwars.png" alt="starwars"/>
                <img className="logo-gif" src="/videos/star-wars.gif" alt="starwars"/>
            </Wrap>
        </Container>
    )
}

const Container = styled.div`
  margin-top: 1em;
  padding: .75em 0px 1em;
  display: grid;
  grid-gap: .6em;
  grid-template-columns: repeat(5, minmax(0, 1fr));
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  margin-bottom: 2em;
  border-radius: .5em;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;


  .logo {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 3;
    top: 0;
    background-color: rgba(35,47,74, 1);

    &:hover{
        background-color: transparent;
    }

  }

  .logo-gif {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    opacity: 0;
    z-index: 2;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border: none;
    .logo-gif {
      opacity: 1;
    }
  }
`;

export default Viewers;