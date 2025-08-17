function ListGroup() {
    const items = ["New York", "San Francisco", "Los Angeles", "Chicago", "Houston"];

    return (
        <>
            <h1>List Group</h1>
            <ul className="list-group">
                { items.map((item, index) => (<li className="list-group-item" key={item} onClick={() => console.log(item, index)}>{item}</li>))}
            </ul>
        </>
    );
}

export default ListGroup;