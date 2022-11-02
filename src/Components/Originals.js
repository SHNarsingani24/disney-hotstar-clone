import styled from "styled-components"
import { Link } from "react-router-dom";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useSelector } from "react-redux";
import { selectOriginals } from "../features/movie/movieSlice";

const Originals = props => {
  const movies = useSelector(selectOriginals);

  return (
    <Container>
      <h3>Disney+ Hotstar Originals</h3>
      <Content>
        {
          movies &&
          movies.map((movie, key) => {
            return (
              <Wrap key={key}>
                <Link to={'/details/' + movie.id}>
                  <img
                    src={movie.cardImg}
                    alt={movie.title}
                  />
                </Link>
              </Wrap>
            );
          })
        }
      </Content>
    </Container>
  )
}

const Container = styled.div`
    padding: 0 0 2em;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin-top: 1.5em;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
  }
`;

export default Originals;