import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"
import { useEffect } from "react";

import { auth } from "../firebase";
import {
    selectUserName,
    selectUserPhoto,
    setSignOutState,
    setUserLoginDetails
} from "../features/user/userSlice";


const Header = props => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const username = useSelector(selectUserName);
    const userphoto = useSelector(selectUserPhoto);

    useEffect(() => {
        auth.onAuthStateChanged(async user => {
            if (user) {
                setUser(user);
                navigate('/home');
            }
        });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [username]);

    const setUser = (user) => {
        console.log(user.photoURL);
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL ? user.photoURL : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6V1PLaDgBri1XcEUW58FV8BMjsobNL71evCfuV_M&s"
            })
        )
    };

    const handleAuth = () => {
        if (!username) {
            const provider = new GoogleAuthProvider();
            signInWithPopup(auth, provider)
                .then(res => setUser(res.user))
                .catch(err => alert(err.message));
        } else {
            signOut(auth).then(() => {
                dispatch(setSignOutState());
                navigate("/");
            }).catch(err => alert(err.message));
        }
    }

    return (
        <Nav>
            <img
                src="/images/logo.svg"
                alt="logo"
                style={{
                    width: "4em",
                    margin: "0",
                    paddingBottom: ".7em"
                }}
            />
            {
                !username ?
                    <Login onClick={handleAuth}> Login </Login> :
                    <>
                        <NavList>
                            <a href="/home"> Home </a>
                            <a href="/home"> Search </a>
                            <a href="/home"> Watchlist </a>
                            <a href="/home"> Orignals </a>
                            <a href="/home"> Movies </a>
                            <a href="/home"> Series </a>
                        </NavList>
                        <SignOut>
                            <UserImg src={userphoto} alt={username} />
                            <DropDown>
                                <span onClick={handleAuth}> Sign Out </span>
                            </DropDown>
                        </SignOut>
                    </>
            }
        </Nav>
    );
}

const Nav = styled.nav`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 1em;
    background-color: #090B13;
    width: 100%;
    height: 4.5em;
    border-bottom: 2px solid #090B13;
    padding: 2em 1em;
`;


const Login = styled.button`
    font-weight: 600;
    font-size: 1em;
    border: 1px solid white;
    background-color: #090B13;
    color: white;
    padding: .4em 1em;
    border-radius: .25em;
    transition: all 0.25s ease-in-out 0s;
    letter-spacing: 1px;
    text-transform: uppercase;

    &:hover{
        color: #090B13;
        background-color: #f9f9f9;
        cursor: pointer;
    }
`;

const NavList = styled.div`
    display: flex;
    align-items: center;
    margin: 0; padding: 0;
    margin-right: auto;
    margin-left: 2.5em;
    /* padding-top: 1em; */
    a{
        padding: 0 1em;
        opacity: 0.6;

        &:hover{
            opacity: 1;
        }
    }

    @media(max-width: 700px){
        display: none;
    }
`;

const DropDown = styled.div`
    background-color: rgba(19, 19, 19, 0.5);
    letter-spacing: 1.5px;
    border: 1px solid rgba(151, 151, 151, 1);
    border-radius: .25em;
    padding: .25em;
    font-size: 14px;
    opacity: 0;
    cursor: pointer;
    position: absolute;
    top: 50%;
    margin-right: 0em;
    width: 5.3em;
    transition: opacity .75s ease-out 0s;
`;

const SignOut = styled.div`
    /* border: 2px solid red; */
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: nowrap;
    width: 3em;
    height: 3em;
    cursor: pointer;

    &:hover{
        ${DropDown}{
            opacity: 1;
        }
    }
`;

const UserImg = styled.img`
    border-radius: 50%;
    width: 100%;
    height: 100%;
`;


export default Header;