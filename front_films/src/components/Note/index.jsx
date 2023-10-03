import  { Container } from './styles';

import { Tag } from '../Tag';

import { Rate } from '../Rate';

export function Note({ data, ...rest }) {
    return(
        <Container {...rest}>
            <h1>{data.title}</h1>

            <div>
                <Rate rate={data.rate} />
            </div>

            <p>{data.description}</p>

            {
                data.tags &&
                <footer>
                    {
                        data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
                    }
                </footer>
            }
        </Container>
    )
}