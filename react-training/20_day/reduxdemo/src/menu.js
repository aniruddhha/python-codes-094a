import { useState } from "react";
import styled from "styled-components";

const Main = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
`
const MenuItem = styled.div`
    width: 100%;

    padding: 8px;
    border-bottom: 1px solid black;
    text-align: start;
    background-color: wheat;
    color: black;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`
const MenuItemTitle = styled.div`
    width: 100%;
    font-size: 1.5em;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
const SubMenuContainer = styled.div`
    width: 100%;
    background-color: beige;
    border-top: 1px solid black;
`
const Left = styled.div`
    width:20% ;
    height: 100%;

    background-color: gray;
    display: flex;
    flex-direction: column;
`
const Content = styled.div`
    width: 80%;
    height: 100%;

    display: flex;
    background-color: aqua;
`
export function MainContainer() {

    const [isShowSub, setShowSub] = useState(false)

    const onMnClk = (e) => { 
        setShowSub(!isShowSub) 
        //perform other operations
    }

    return(
        <Main>
            <Left>
                <MenuItem> 
                    <MenuItemTitle onClick={onMnClk}>Hi</MenuItemTitle>
                    { isShowSub && (
                            <SubMenuContainer>
                                    <MenuItemTitle>123</MenuItemTitle>
                                    <MenuItemTitle>456</MenuItemTitle>
                            </SubMenuContainer>
                        )
                    }           
                </MenuItem>
                <MenuItem> 
                    <MenuItemTitle >Wow</MenuItemTitle>
                </MenuItem>
            </Left>
            <Content/>
        </Main>
    )
}