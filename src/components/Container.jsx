import { useState } from "react";
import FormInput from "./FormInput";
import List from "./List";
import initialSongList from "../initialSongList"

const Container = () => {
    const [songList, setSongList] = useState(initialSongList);

    const [formInputData, setFormInputData] = useState(
        {
            id: "",
            title: "",
            artist: "",
            genre: "",
            rating: "",
        }
    );

    const genres = ["Pop", "Rock", "Dance", "Classical", "Country", "Metal", "Jazz", "Hip-hop"];

    const handleChange = event => {
        const newInput = data => ({ ...data, [event.target.name]: event.target.value })
        setFormInputData(newInput)
    };

    const handleSubmit = event => {
        event.preventDefault();
        const checkEmptyInput = !Object.values(formInputData).every(result => result === "")
        if (checkEmptyInput) {
            const newData = data => ([...data, formInputData])
            setSongList(newData);
            const emptyInput = { title: "", artist: "", genre: "", rating: "" }
            setFormInputData(emptyInput)
        }
    };

    const handleSort = event => {
        switch (event.target.value) {
            case "title_a-z":
                const sortedTitleDataAz = [...songList].sort((a, b) => a.title > b.title ? 1 : -1)
                setSongList(sortedTitleDataAz)
                break
            case "title_z-a":
                const sortedTitleDataZa = [...songList].sort((a, b) => a.title > b.title ? -1 : 1)
                setSongList(sortedTitleDataZa)
                break
            case "artist_a-z":
                const sortedArtistDataAz = [...songList].sort((a, b) => a.artist > b.artist ? 1 : -1)
                setSongList(sortedArtistDataAz)
                break
            case "artist_z-a":
                const sortedArtistDataZa = [...songList].sort((a, b) => a.artist > b.artist ? -1 : 1)
                setSongList(sortedArtistDataZa)
                break
            case "rating_1-5":
                const sortedRatingDataAz = [...songList].sort((a, b) => a.rating > b.rating ? 1 : -1)
                setSongList(sortedRatingDataAz)
                break
            case "rating_5-1":
                const sortedRatingDataZa = [...songList].sort((a, b) => a.rating > b.rating ? -1 : 1)
                setSongList(sortedRatingDataZa)
                break
        }
    };

    const emptyList = () => {
        setSongList([])
    };

    const handleRemove = title => {
        const newSongList = songList.filter(data => data.title !== title);
        setSongList(newSongList);
    }

    return (
        <div className="container">
            <FormInput
                songList={songList}
                genres={genres}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                emptyList={emptyList}
            />
            <List
                songList={songList}
                genres={genres}
                handleSort={handleSort}
                handleRemove={handleRemove}
            />
        </div>
    );
}

export default Container;