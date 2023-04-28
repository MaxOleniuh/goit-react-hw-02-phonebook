const Filter = ({onChange}) => {
    return (
        <label>
            Find contacts by name
            <input type="text" onChange={e => onChange(e.currentTarget.value)} />
        </label>
    )
}
export default Filter;