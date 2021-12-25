
export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category)}&limit=10&api_key=No39tHkHgw7UxhLqzZUl6CB7wQ2V4L3t`;

    const resp = await fetch( url );
    const {data} = await resp.json();

    const gifs = data.map ( img => {

        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifs;
}