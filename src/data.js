import { v4 as uuidv4 } from 'uuid';

function naijaSongs() {
  return [
    {
      name: 'Lenu Remix',
      artist: 'Buju ft. Burna Boy',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-300x300.jpg',
      id: uuidv4(),
      active: true,
      color: ['#AB3527', '#92543A'],
      audio: `${process.env.REACT_APP_API_KEY}/video/upload/v1605219115/Buju_ft._Burna_Boy_-_Lenu_Remix_Official_Video.mp3`,
    },
    {
      name: 'As E Dey Go',
      artist: 'Naira Marley',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-300x300.jpg',
      id: uuidv4(),
      active: false,
      color: ['#6A4B36', '#B2766A'],
      audio: `${process.env.REACT_APP_API_KEY}/video/upload/v1605198866/Naira_Marley_-_As_E_Dey_GO_OFFICIAL_AUDIO.mp3`,
    },
    {
      name: 'No Stress',
      artist: 'WizKid',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/07/ccad9b1271d1a9701f84380bb217da7d923a6c4f-300x300.jpg',
      id: uuidv4(),
      active: false,
      color: ['#EABC9C', '#B6837A'],
      audio: `${process.env.REACT_APP_API_KEY}/video/upload/v1605182339/WizKid_-_No_Stress_Visualizer.mp3`,
    },
    {
      name: 'Loading',
      artist: 'Olamide ft. Bad Boy Timz',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-300x300.jpg',
      id: uuidv4(),
      active: false,
      color: ['#485D92', '#9477AD'],
      audio: `${process.env.REACT_APP_API_KEY}/video/upload/v1605088862/Olamide_feat._Bad_Boy_Timz_-_Loading_Audio.mp3`,
    },
    {
      name: 'Thriller',
      artist: 'Michael Jackson',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/06/49f6e32ca521fbad46a1b281e3893cf6254bf11d-300x300.jpg',
      id: uuidv4(),
      active: false,
      color: ['#FDF1D8', '#C8BCC8'],
      audio:
        `${process.env.REACT_APP_API_KEY}/video/upload/v1604982681/Thriller_-_Michael_Jackson_Lyrics.mp3`,
    },
    {
      name: 'Dangote',
      artist: 'Burna Boy',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/07/2a048a5780723e66fff64c3a60814ea64761284f-300x300.jpg',
      id: uuidv4(),
      active: false,
      color: ['#E15733', '#87C6D5'],
      audio:
        `${process.env.REACT_APP_API_KEY}/video/upload/v1604982104/Burna_Boy_-_Dangote_Official_Music_Video.mp3`,
    },
    {
      name: 'Ginger',
      artist: 'WizKid ft. Burna Boy',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/07/2a048a5780723e66fff64c3a60814ea64761284f-300x300.jpg',
      id: uuidv4(),
      active: false,
      color: ['#532449', '#30374A'],
      audio:
        `${process.env.REACT_APP_API_KEY}/video/upload/v1604981534/WizKid_-_Ginger_ft._Burna_Boy.mp3`,
    },
    {
      name: 'Ye',
      artist: 'Burna Boy',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/07/858b533ba20ff95bf5b401089b195d1a8cb43870-300x300.jpg',
      id: uuidv4(),
      active: false,
      color: ['#1970B0', '#172444'],
      audio:
        `${process.env.REACT_APP_API_KEY}/video/upload/v1604900457/Burna_Boy_-_Ye_mod.ng_.mp3`,
    },
  ];
}

export default naijaSongs;
