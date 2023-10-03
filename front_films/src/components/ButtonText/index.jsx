import { Container } from "./styles";

export function ButtonText({ title = "Clique Aqui", isActive = false, ...rest }) {
    return(
        <Container 
            type="button"
            isActive={isActive}
            {...rest}
        >
            {title}
        </Container>
    );
};