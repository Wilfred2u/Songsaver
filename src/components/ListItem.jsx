const ListItem = ({ data, handleRemove }) => {

    return (
        <li>
            <p className="list-item--title">{data.title}</p>
            <p className="list-item--artist" > {data.artist}</p >
            <p className="list-item--rating" > {data.rating}
                <button onClick={() => handleRemove(data.title)}>
                    <span className="material-symbols-outlined">delete</span>
                </button>
            </p >
        </li >
    )
};

export default ListItem;