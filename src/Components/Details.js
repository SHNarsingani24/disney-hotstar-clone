import styled from "styled-components";
import { FaPlay } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { IoAddSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import { useParams } from "react-router";
import db from "../firebase";

export const Details = () => {

    const { id } = useParams();
    const [detail, setDetail] = useState({});

    useEffect(() => {
        const docRef = doc(db, "/movies", id);
        getDoc(docRef).then(doc => setDetail(doc.data()));
    }, [id])
    return (
        <Container>
            <Background>
                <img
                    src={detail.backgroundImg}
                    alt={detail.title}
                />
            </Background>
            <ImageTitle>
                <img
                    src={detail.titleImg}
                    alt={detail.title}
                />
            </ImageTitle>
            <ContentMeta>
                <Controls>
                    <Player>
                        <FaPlay />
                        <span>Play</span>
                    </Player>
                    <Trailer>
                        <FaPlay />
                        <span>Trailer</span>
                    </Trailer>
                    <Share>
                        <IoAddSharp />
                    </Share>
                    <Share>
                        <IoIosPeople />
                    </Share>
                </Controls>
                <SubTitle>
                    {detail.subTitle}
                </SubTitle>
                <Description>
                    {detail.description}
                </Description>
            </ContentMeta>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    min-height: calc(100vh-250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
    left: 0px;
    right: 0px;
    top: 0px;
    z-index: -1;
    opacity: .8;
    position: fixed;

    img{
        width: 100vw;
        height: 100vh;

        @media (max-width: 768px) {
            width: initial;
        }
    }
`;

const ImageTitle = styled.div`
  align-items: flex-start;
  /* border: 2px solid green; */
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 24px auto;
  height: 3vw;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;
  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;


const ContentMeta = styled.div`
  max-width: 874px;
`;

const Controls = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin: 0 auto;
  margin-top: 9em;
  min-height: 56px;
`;

const Player = styled.div`
    color: black;
    display: flex;
    margin-right: 1em;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, .8);
    padding: 1em 2em;
    opacity: 1;
    letter-spacing: .25em;
    font-weight: bold;
    border-radius: .25em;
    cursor: pointer;
    transition: all 0.5s;

    span {
        margin-left: .25em;
    }

    &:hover{
        background-color: rgba(255, 255, 255, .9);
    }

    @media (max-width: 480px){
        font-size: 12px;
    }
`;

const Trailer = styled(Player)`
    color: white;
    background-color: rgba(0, 0, 0, .4);
    &:hover{
        background-color: rgba(0, 0, 0, .8);
    }
`;

const Share = styled.div`
    background-color: rgba(0, 0, 0, .4);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .35em .4em;
    border-radius: 50%;
    cursor: pointer;
    font-size: 2em;
    margin-right: .4em;
    font-weight: bold;
    border: 2px solid white;

    &:hover{
        background-color: rgba(0, 0, 0, .8);
    }

    @media (max-width: 480px){
        font-size: 22px;
    }
`;

const SubTitle = styled.div`
    margin-top: 2em;
    font-size: 1.25em;

    @media (max-width: 768px){
        font-size: 1em;
    }
`;
const Description = styled.div`
    margin-top: .75em;
    font-size: 1.25em;

    @media (max-width: 768px){
        font-size: 1em;
    }
`;
export default Details;