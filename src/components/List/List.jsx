const List = ({ contacts, handleDelete }) => {
    return (
        <ul>{contacts.map(({id, number, name}) => <li key={id}>
            {name}: {number}
            <button onClick={() => handleDelete(id)}>Delete</button>
        </li>)}
        </ul>
    )
}
export default List;