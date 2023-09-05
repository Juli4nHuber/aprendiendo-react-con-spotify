import './app.css';
import {SpotifyListRow} from './SpotifyListRow.jsx';

export function App () {
  return (
    <>
      <SpotifyListRow
        imgUrl='https://i.scdn.co/image/ab67616d0000b273da5d5aeeabacacc1263c0f4b'
        nameSong='Dress'
        artistName='Taylor Swift'
        songTime='3.14'
      />
      <SpotifyListRow
        imgUrl='https://i.scdn.co/image/ab67616d0000b27308ccf011ad52680964601764'
        nameSong='Lipstick'
        artistName='Charlie Puth'
        songTime='3.04'
      />
      <SpotifyListRow
        imgUrl='https://i.scdn.co/image/ab67616d0000b273700f7bf79c9f063ad0362bdf'
        nameSong='Bet U Wanna'
        artistName='Sabrina Carpenter'
        songTime='3.12'
      />
    </>
  )
}