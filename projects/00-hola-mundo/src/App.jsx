import './app.css';
import {SpotifyListRow} from './SpotifyListRow.jsx';

let songs = [
  {
    imgUrl: 'https://i.scdn.co/image/ab67616d0000b273da5d5aeeabacacc1263c0f4b',
    nameSong: 'Dress',
    artistName: 'Taylor Swift',
    songTime: 3.50,
    isLike: true
  },
  {
    imgUrl: 'https://i.scdn.co/image/ab67616d0000b27308ccf011ad52680964601764',
    nameSong: 'Lipstick',
    artistName: 'Charlie Puth',
    songTime: 3.28,
    isLike: false
  },
  {
    imgUrl: 'https://i.scdn.co/image/ab67616d0000b273700f7bf79c9f063ad0362bdf',
    nameSong: 'Bet U Wanna',
    artistName: 'Sabrina Carpenter',
    songTime: 3.11,
    isLike: true
  }
]

export function App () {
  return (
    <>
      {
        songs.map(({imgUrl, nameSong, artistName, songTime, isLike}, index) => {
          return(
            <SpotifyListRow
              key = {index}
              imgUrl = {imgUrl}
              nameSong = {nameSong}
              artistName = {artistName}
              songTime = {songTime.toFixed(2)}
              initialIsLike = {isLike}
            />
          );
        })
      }
    </>
  )
}