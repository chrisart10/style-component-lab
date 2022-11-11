import { StyledHeader,Nav,Logo,Image } from "./styles/Header.styled";
import {Button} from './styles/Button'
import { Container } from './styles/Container.styled'
import { Flex } from "./styles/Flex.styled";
function Header() {
    return ( 
        <StyledHeader>
            <Container>
                <Nav>
                    <Logo src='./images/logo.svg'/>
                    <Button>Try it Free!</Button>
                </Nav>
                <Flex>
                    <div>
                        <h1>Build The Comunity Your Fans Will Love</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti non molestias blanditiis similique sed, reiciendis iusto eligendi facilis vero id maxime labore nobis quo quaerat enim perspiciatis, dignissimos aut. Soluta?
                            Unde corporis blanditiis suscipit itaque aperiam, adipisci quaerat minus fugiat dolore iure quasi praesentium! Distinctio unde culpa ullam saepe, explicabo debitis. Obcaecati iste natus ipsa? Eligendi quod numquam dolor quos.
                            Ad quisquam laudantium optio, aut libero quae enim, ratione eum, perferendis fuga tempora doloribus ducimus provident nostrum dolores itaque dolorem esse! Porro, adipisci. Cupiditate eum autem quidem, saepe minima aliquid!
                            Debitis architecto accusamus, delectus sit magnam, ratione minus inventore reprehenderit dolores consectetur quam quis, doloremque maiores molestias in vel. Doloremque porro deserunt molestias amet nihil, qui inventore non eveniet necessitatibus!
                        </p>
                        <Button>Get Started For Free</Button>
                    </div>
                    <Image src='./images/illustration-mockups.svg' alt=''/>
                </Flex>
            </Container>
        </StyledHeader>
     );
}

export default Header;