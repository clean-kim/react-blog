function List() {
    const liStyle = {
        margin: '10px',
        borderBottom: '1px solid gray',
        listStyle: 'none'
    }
    return (
        <ul style={{marginTop: '30px'}}>
            <li style={liStyle}>one</li>
            <li style={liStyle}>two</li>
            <li style={liStyle}>three</li>
        </ul>
    );
}

export default List;