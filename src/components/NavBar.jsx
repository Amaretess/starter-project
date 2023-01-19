import styled from "styled-components";
import { Link } from 'react-router-dom'

const NavBar = () => {


    return (
            <Container>
                <ImgContainer>
                    <Link to="/"><img src="#" /></Link>
                </ImgContainer>
                <Ul>
                    <Li>
                        <Link to="/docs">Docs</Link>
                    </Li>
                    <Li>
                        <Link to="/about">About</Link>
                    </Li>
                    <Li>
                        <Link to="/support">Support Us</Link>
                    </Li>
                </Ul>
            </Container>
    );
}

export default NavBar;


const Container = styled.div `
    display: flex;
    justify-content: space-between;
    border: 5px solid blue;
    


`

const Ul = styled.ul `
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50vw;
    padding: 2rem;


`
const Li = styled.li`
    text-decoration: none;
    list-style: none;
    
`
const ImgContainer = styled.div `
    display: flex;
    align-items: center;
    padding: 2rem;
    `
