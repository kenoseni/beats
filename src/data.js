import { v4 as uuidv4 } from 'uuid';

function naijaSongs() {
  return [
    {
      name: 'Jerusalema Remix',
      artist: 'Master KG ft. Burna Boy and Nomcebo',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/07/db956cc3e3bb2d3725d0ce3f9aaf7190671c9451-300x300.jpg',
      id: uuidv4(),
      active: true,
      color: ['#3D2C26', '#BC7A80'],
      audio: `${process.env.REACT_APP_API_KEY}/video/upload/v1632583299/Master_KG_-_Jerusalema_Remix_Feat._Burna_Boy_and_Nomcebo_Official_Music_Audio.mp3`,
    },
    {
      name: 'Lenu Remix',
      artist: 'Buju ft. Burna Boy',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-300x300.jpg',
      id: uuidv4(),
      active: false,
      color: ['#49241B', '#92543A'],
      audio: `${process.env.REACT_APP_API_KEY}/video/upload/v1605219115/Buju_ft._Burna_Boy_-_Lenu_Remix_Official_Video.mp3`,
    },
    {
      name: 'Pami',
      artist: 'Dj Tunez ft. WizKid, Adekunle Gold, Omah Lay',
      cover:
        'https://chillhop.com/wp-content/uploads/2021/02/08cbb0848f669e1bd8b5a5152c4b7d20edf1b499-300x300.jpg',
      id: uuidv4(),
      active: false,
      color: ['#EABC9C', '#C25D60'],
      audio: `${process.env.REACT_APP_API_KEY}/video/upload/v1632582045/DJ_Tunez_-_PAMI_ft_Wizkid_Adekunle_Gold_Omah_Lay_Official_Audio.mp3`,
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
      name: '7 rings',
      artist: 'Ariana Grande',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/06/d9d8ae69141cb7838e3c53bbf393c6218285e384-300x300.jpg',
      id: uuidv4(),
      active: false,
      color: ['#07004E', '#313D9C'],
      audio: `${process.env.REACT_APP_API_KEY}/video/upload/v1632582656/Ariana_Grande_-_7_rings_Lyrics.mp3`,
    },
    {
      name: 'Shout',
      artist: 'Sean Paul',
      cover:
        'https://chillhop.com/wp-content/uploads/2021/05/94a210b97ac05e5f05e1ce784a1a9ecf90168d03-300x300.jpg',
      id: uuidv4(),
      active: false,
      color: ['#444848', '#2D434E'],
      audio: `${process.env.REACT_APP_API_KEY}/video/upload/v1632584333/Sean_Paul_-_Shout.mp3`,
    },
    {
      name: 'Thriller',
      artist: 'Michael Jackson',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/06/49f6e32ca521fbad46a1b281e3893cf6254bf11d-300x300.jpg',
      id: uuidv4(),
      active: false,
      color: ['#FDF1D8', '#C8BCC8'],
      audio: `${process.env.REACT_APP_API_KEY}/video/upload/v1604982681/Thriller_-_Michael_Jackson_Lyrics.mp3`,
    },
    {
      name: 'Dangote',
      artist: 'Burna Boy',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/07/2a048a5780723e66fff64c3a60814ea64761284f-300x300.jpg',
      id: uuidv4(),
      active: false,
      color: ['#E15733', '#87C6D5'],
      audio: `${process.env.REACT_APP_API_KEY}/video/upload/v1604982104/Burna_Boy_-_Dangote_Official_Music_Video.mp3`,
    },
    {
      name: 'Ginger',
      artist: 'WizKid ft. Burna Boy',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/07/b2e2c1fca3e00a74402969e0a9e98d4849f38aef-300x300.jpg',
      id: uuidv4(),
      active: false,
      color: ['#532449', '#30374A'],
      audio: `${process.env.REACT_APP_API_KEY}/video/upload/v1604981534/WizKid_-_Ginger_ft._Burna_Boy.mp3`,
    },
    {
      name: 'Ye',
      artist: 'Burna Boy',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/07/858b533ba20ff95bf5b401089b195d1a8cb43870-300x300.jpg',
      id: uuidv4(),
      active: false,
      color: ['#1970B0', '#172444'],
      audio: `${process.env.REACT_APP_API_KEY}/video/upload/v1604900457/Burna_Boy_-_Ye_mod.ng_.mp3`,
    },
    {
      name: 'Mood',
      artist: 'WizKid ft. Buju',
      cover:
        'https://chillhop.com/wp-content/uploads/2021/09/6a9ef8ac00e168d3308fdf9e336874c03fab829d-300x300.jpg',
      id: uuidv4(),
      active: false,
      color: ['#81D2A2', '#8356D0'],
      audio: `${process.env.REACT_APP_API_KEY}/video/upload/v1632580813/WizKid_-_Mood_Audio_ft._Buju.mp3`,
    },
  ];
}

export default naijaSongs;
