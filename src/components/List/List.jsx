const List = ({ contacts }) => {
    console.log(contacts)
    return (
        <ul>{contacts.map(({id, number, name}) => <li key={id}>
            {name}: {number}
        </li>)}
        </ul>
    )
}
export default List;