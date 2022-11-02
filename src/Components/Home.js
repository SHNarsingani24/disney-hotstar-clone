import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { query, collection, getDocs } from "firebase/firestore";

import ImgSlider from "./ImgSlider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommends from "./Recommends";
import Trending from "./Trending";
import Viewers from "./Viewers";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";
import db from "../firebase";

const Home = props => {
    const dispatch = useDispatch();
    const username = useSelector(selectUserName);

    const getMovies = async () => {
        const ref = collection(db, "/movies");
        const q = query(ref);
        const docs = await getDocs(q);

        let recommends = [];
        let trendings = [];
        let newDisney = [];
        let originals = [];
        docs.forEach(doc => {
            let data = doc.data();
            if (data.type === "recommend")
                recommends.push({ id: doc.id, ...data });

            if (data.type === "original")
                originals.push({ id: doc.id, ...data });

            if (data.type === "trending")
                trendings.push({ id: doc.id, ...data });

            if (data.type === "new")
                newDisney.push({ id: doc.id, ...data });
        });

        dispatch(
            setMovies({
                recommends,
                trendings,
                originals,
                newDisney
            })
        );
    };

    useEffect(() => {
        getMovies();
    }, [username, getMovies]);

    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Recommends />
            <NewDisney />
            <Trending />
            <Originals />
        </Container>
    );
}


const Container = styled.div`
    position: relative;
    top: 4.5em;
    padding: 0 1em;
    /* border: 2px solid red; */
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    z-index: -2;

    &::after{
        
        content: "";
        background-image: url("/images/home-background.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        position: absolute;
        inset: 0px;
        background-position: fixed;
        z-index: -1;
    }
`;
export default Home;