// Define the function make_album with an optional parameter for the number of tracks
function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Call the function make_album with different album information
var album1 = make_album('Taylor Swift', 'Fearless');
var album2 = make_album('Ed Sheeran', '÷', 12);
var album3 = make_album('Beyoncé', 'Lemonade', 14);
// Print the return values to show that Objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);
