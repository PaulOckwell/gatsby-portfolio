import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Paul Ockwell', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Paul Ockwell',
  subtitle: 'Front-End Web Developer.',
  cta: 'More Info',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Hi my name is Paul, Im a Front-End Developer based in South London.',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://resume.io/r/DRVmMCidp', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'skdTyres.png',
    title: 'SKD-Tyres',
    info:
      'The website was developed for a Local tryre shop business. The main goals of this website were to increase sales and provide customers with any information they may need. The website is also a fully responsive allowing viewing from all mediums.',
    info2: '',
    url: 'https://tender-kepler-0def26.netlify.app/',
    repo: 'https://github.com/PaulOckwell/SKD-tyres', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'sc40.png',
  //   title: 'ISO SC40',
  //   info:
  //     'Main duties being developing and altering the layout, uploading new content for the blog. This website site still under development stages and not yet live. ISO uses their own Software for developing their sites, with the ability to edit the source code. As the sole developer of this website and being my first role in the profession; I have learned what it means to be a web developer in a professional environment.',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
  {
    id: nanoid(),
    img: 'snake.png',
    title: 'Snake Game',
    info:
      'Remake of the original snake game. Allows the user to controll the snake using the arrow keys. Game was developed using Vanilla JavaScript',
    info2: '',
    url: 'https://mystifying-hodgkin-894c9a.netlify.app/',
    repo: 'https://github.com/PaulOckwell/snake', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'weatherapp.png',
    title: 'Weather App',
    info:
      'My simple watch list application allows the user to add, remove and store films they want to watch.',
    info2:
      'This JavaScript application was developed using vanilla is to demonstrate some of my knowledge with this language.',
    url: 'https://agitated-meninsky-bb7ff8.netlify.app/',
    repo: 'https://github.com/PaulOckwell/weatherApp', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'watchlist.png',
    title: 'Watch List App',
    info:
      'My simple watch list application allows the user to add, remove and store films they want to watch.',
    info2:
      'This JavaScript application was developed using vanilla is to demonstrate some of my knowledge with this language.',
    url: 'https://eloquent-joliot-61e465.netlify.app/',
    repo: 'https://github.com/PaulOckwell/WatchList', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'paulcharlesockwell@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'href="https://www.linkedin.com/in/paul-ockwell-a74b74151/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/PaulOckwell',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
