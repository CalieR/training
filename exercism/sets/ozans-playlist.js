/**
 * Removes duplicate tracks from a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} new playlist with unique entries
 */
function removeDuplicates(playlist) {
  return Array.from(new Set(playlist));
}

//console.log(removeDuplicates(['a', 'b', 'c', 'a', 'b', 'c']));

/**
 * Checks whether a playlist includes a track.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {boolean} whether the track is in the playlist
 */
function hasTrack(playlist, track) {
  return new Set(playlist).has(track);
}

console.log(
  hasTrack(
    ['The Fashion Show - Grace Jones', 'Dr. Funkenstein - Parliament'],
    'Dr. Funkenstein - Parliament'
  )
);

/**
 * Adds a track to a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
function addTrack(playlist, track) {
  throw new Error('Please implement the addTrack function');
}

/**
 * Deletes a track from a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
function deleteTrack(playlist, track) {
  const set1 = new Set(playlist);
  set1.delete(track);
  return Array.from(set1);
}

//console.log(deleteTrack(['The Fashion Show - Grace Jones', 'Dr. Funkenstein - Parliament'],
//  'Dr. Funkenstein - Parliament'))

/**
 * Lists the unique artists in a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} list of artists
 */
function listArtists(playlist) {
  const artists = playlist.map((track) => track.split(' - ')[1]);
  return removeDuplicates(artists);
}

console.log(
  listArtists([
    'All Mine - Portishead',
    'Sight to Behold - Devendra Banhart',
    'Sour Times - Portishead',
  ])
);
