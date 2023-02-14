import ListItem from "./ListItem";

const List = ({ songList, genres, handleSort, handleRemove }) => {

    return (
        <div className="list">
            <div className="list--header">
                <h1 className="list--header--title">Song Title</h1>
                <h1 className="list--header--artist">Artist</h1>
                <h1 className="list--header--rating">Rating</h1>
            </div>
            <div className="list--sorts">
                <button onClick={handleSort} className="button-sort" value="title_a-z">Sort a-z</button>
                <button onClick={handleSort} className="button-sort" value="title_z-a">Sort z-a</button>
                <button onClick={handleSort} className="button-sort" value="artist_a-z">Sort a-z</button>
                <button onClick={handleSort} className="button-sort" value="artist_z-a">Sort z-a</button>
                <button onClick={handleSort} className="button-sort" value="rating_1-5">Sort 1-5</button>
                <button onClick={handleSort} className="button-sort" value="rating_5-1">Sort 5-1</button>
            </div>

            {
                songList.map(data => data.genre).includes(genres[0].toLowerCase()) &&
                <ul>
                    <h1 className="list--header--genre">{genres[0]}</h1>
                    <div>
                        {songList
                            .filter(data => data.genre === genres[0].toLowerCase())
                            .map(data => (
                                <ListItem key={data.title} data={data} handleRemove={handleRemove} />
                            ))}
                    </div>
                </ul>
            }
            {
                songList.map(data => data.genre).includes(genres[1].toLowerCase()) &&
                <ul>
                    <h1 className="list--header--genre">{genres[1]}</h1>
                    <div>
                        {songList
                            .filter(data => data.genre === genres[1].toLowerCase())
                            .map(data => (
                                <ListItem key={data.title} data={data} handleRemove={handleRemove} />
                            ))}
                    </div>
                </ul>
            }
            {
                songList.map(data => data.genre).includes(genres[2].toLowerCase()) &&
                <ul>
                    <h1 className="list--header--genre">{genres[2]}</h1>
                    <div>
                        {songList
                            .filter(data => data.genre === genres[2].toLowerCase())
                            .map(data => (
                                <ListItem key={data.title} data={data} handleRemove={handleRemove} />
                            ))}
                    </div>
                </ul>
            }
            {
                songList.map(data => data.genre).includes(genres[3].toLowerCase()) &&
                <ul>
                    <h1 className="list--header--genre">{genres[3]}</h1>
                    <div>
                        {songList
                            .filter(data => data.genre === genres[3].toLowerCase())
                            .map(data => (
                                <ListItem key={data.title} data={data} handleRemove={handleRemove} />
                            ))}
                    </div>
                </ul>
            }
            {
                songList.map(data => data.genre).includes(genres[4].toLowerCase()) &&
                <ul>
                    <h1 className="list--header--genre">{genres[4]}</h1>
                    <div>
                        {songList
                            .filter(data => data.genre === genres[4].toLowerCase())
                            .map(data => (
                                <ListItem key={data.title} data={data} handleRemove={handleRemove} />
                            ))}
                    </div>
                </ul>
            }
            {
                songList.map(data => data.genre).includes(genres[5].toLowerCase()) &&
                <ul>
                    <h1 className="list--header--genre">{genres[5]}</h1>
                    <div>
                        {songList
                            .filter(data => data.genre === genres[5].toLowerCase())
                            .map(data => (
                                <ListItem key={data.title} data={data} handleRemove={handleRemove} />
                            ))}
                    </div>
                </ul>
            }
            {
                songList.map(data => data.genre).includes(genres[6].toLowerCase()) &&
                <ul>
                    <h1 className="list--header--genre">{genres[6]}</h1>
                    <div>
                        {songList
                            .filter(data => data.genre === genres[6].toLowerCase())
                            .map(data => (
                                <ListItem key={data.title} data={data} handleRemove={handleRemove} />
                            ))}
                    </div>
                </ul>
            }
            {
                songList.map(data => data.genre).includes(genres[7].toLowerCase()) &&
                <ul>
                    <h1 className="list--header--genre">{genres[7]}</h1>
                    <div>
                        {songList
                            .filter(data => data.genre === genres[7].toLowerCase())
                            .map(data => (
                                <ListItem key={data.title} data={data} handleRemove={handleRemove} />
                            ))}
                    </div>
                </ul>
            }
        </div>
    )
};

export default List;