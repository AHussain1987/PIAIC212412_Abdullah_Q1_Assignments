"use strict";
/*
Album:
Write a function called makeAlbum() that builds a Object describing a music album.
The function should take in an artist name and an album title,
and it should return a Object containing these two pieces of information.
Use the function to make three dictionaries representing different albums.
Print each return value to show that Objects are storing the album information correctly.
Add an optional parameter to makeAlbum() that allows you to store the number of tracks on an album.
If the calling line includes a value for the number of tracks, add that value to the album’s Object.
Make at least one new function call that includes the number of tracks on an album.
*/
function makeAlbum(artistName, albumTitle, numberOfTracks) {
    return {
        object_nameOfArtist: artistName,
        object_titleOfAlbum: albumTitle,
        object_numberOfTracks: numberOfTracks,
    };
}
let albumobject1 = makeAlbum("Atif Aslam", "Jal Pari");
console.log(`Name of artist is: ${albumobject1.object_nameOfArtist}`);
console.log(`Name of album is: ${albumobject1.object_titleOfAlbum}\n`);
let albumobject2 = makeAlbum("Ali Azmat", "Junoon");
console.log(`Name of artist is: ${albumobject2.object_nameOfArtist}`);
console.log(`Name of album is: ${albumobject2.object_titleOfAlbum}\n`);
let albumobject3 = makeAlbum("Junaid Jamshed", "Us Rah Par");
console.log(`Name of artist is: ${albumobject3.object_nameOfArtist}`);
console.log(`Name of album is: ${albumobject3.object_titleOfAlbum}\n`);
let albumobject4 = makeAlbum("Rahat", "Charkha", 7);
console.log(`Name of artist is: ${albumobject4.object_nameOfArtist}`);
console.log(`Name of album is: ${albumobject4.object_titleOfAlbum}`);
console.log(`Number of trackes in album are: ${albumobject4.object_numberOfTracks}`);
