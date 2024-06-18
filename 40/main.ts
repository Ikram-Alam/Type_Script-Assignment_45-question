// Define the function make_album with an optional parameter for the number of tracks
function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    let album: { artist: string, title: string, tracks?: number } = {
        artist: artist,
        title: title
    };

    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

// Call the function make_album with different album information
let album1 = make_album('Taylor Swift', 'Fearless');
let album2 = make_album('Ed Sheeran', '÷', 12);
let album3 = make_album('Beyoncé', 'Lemonade', 14);

// Print the return values to show that Objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);
