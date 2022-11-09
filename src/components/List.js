import Item from './Item'

export default function List () {
    return (
        <>
            <h5>Minha Lista!</h5>
            <ul>
                <Item marca="Ferrary" ano_lancamento={1985}/>
                <Item marca="Porche" ano_lancamento={2005}/>
                <Item/>
            </ul>
        </>
    )
}