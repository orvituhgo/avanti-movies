import { Container } from "./styles"
import {Movies} from "../../@types/Movies"

type Props = {
    children: Movies 
}

export default function Container({movies}){
    return (
        {movies?.lenght ?(
            movies.map((movie) => (
                <Container>
                    <p>{movies.id}</p>
                </Container>
            )
            )
        )}
    )
}