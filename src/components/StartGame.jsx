import styled from 'styled-components'
import { Button } from './styled/Button';


const StartGame = ({toggle}) => {

    return(
        <Container>
           <div><img src="/images/dices.png" /></div>
           <div className="content">
            <h1>Dice Game</h1>
            <h4>~By Sapna Sharma</h4>
            <Button onClick={toggle}>
                Play Now</Button>
           </div>
        </Container>
    );
};

export default StartGame;

const Container = styled.div`
    max-width: 1180px;
    height: 100vh;
    display: flex;
    margin: 0 auto;
    align-items: center;
    

    .content {
        h1{
            font-size: 96px;
            white-space: nowrap;
            margin-bottom: 0 ;
        }

        h4{
            display: flex;
            margin-left: 350px;
            margin-bottom: 50px;
            margin-top: 0;
            white-space: nowrap;
            align-self: flex-end;
        }

    }
`;

