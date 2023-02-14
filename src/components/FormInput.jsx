const FormInput = ({
    songList,
    genres,
    handleChange,
    handleSubmit,
    emptyList }) => {

    return (
        <form
            className="form"
            onSubmit={handleSubmit}>
            <input
                name="title"
                type="text"
                value={songList.title}
                onChange={handleChange}
                placeholder="Song Title"
            />
            <input
                name="artist"
                type="text"
                value={songList.artist}
                onChange={handleChange}
                placeholder="Artist"
            />
            <select
                id="genre"
                name="genre"
                value={songList.genre}
                onChange={handleChange}
            >
                <option value="">-- Genre --</option>
                <option value="pop">{genres[0]}</option>
                <option value="rock">{genres[1]}</option>
                <option value="dance">{genres[2]}</option>
                <option value="classical">{genres[3]}</option>
                <option value="country">{genres[4]}</option>
                <option value="metal">{genres[5]}</option>
                <option value="jazz">{genres[6]}</option>
                <option value="hiphop">{genres[7]}</option>
            </select >
            <select
                id="rating"
                name="rating"
                value={songList.rating}
                onChange={handleChange}
            >
                <option value="">-- Rating --</option>
                <option value="1">1 star</option>
                <option value="2">2 stars</option>
                <option value="3">3 stars</option>
                <option value="4">4 stars</option>
                <option value="5">5 stars</option>
            </select >
            <button>Add song</button>
            <button onClick={emptyList} id="empty-list">Empty List</button>

        </form>
    )
};

export default FormInput;