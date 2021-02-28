import Frank from './img/testimonial/frank.jpg'
import Angelo from './img/testimonial/angelo.jpg'

import chinesepod from './img/portfolios/1chinesepod.jpg'
import reactScss from './img/portfolios/1react-scss.jpg'
import WWT from './img/portfolios/1wwt.jpg'
import MSGsafe from './img/portfolios/1MSGsafe.jpg'
import responsiveReact from './img/portfolios/1responsive-react.jpg'
import racingManage from './img/portfolios/1racingManagement.jpg'
import canvasAnimator from './img/portfolios/1canvas-animator.jpg'
import frozenApp from './img/portfolios/1frozen-test-app.jpg'
import prodLanding from './img/portfolios/1prod-landing.png'
import Image3D from './img/portfolios/1image3d.jpg'
import ppeConnector from './img/portfolios/1ppeConnector.jpg'

const testiData = [
  {
    comment: 'I’ve worked closely with Jianxing for almost 2 years and feel fully confident in expressing my endorsement. As a React front-end developer in our company, he completed his assignments quickly and perfectly and always provided insight for a better solution. I highly recommend him for any of your React projects.',
    avatar: Frank,
    name: 'Frank Bracq',
    email: 'fbracq@eventstory.live',
    score: 5,
    company: 'EventStory.live ( KoT SAS Company, Paris )',
    link: 'https://eventstory.live/',
  },
  {
    comment: 'Appreciate the great work delivered by Jin for my many projects! He had been very supportive throughout the project and was always available to resolve all the queries and doubts for Talismania, Deste Prize, Museum of Cycladic Art Project. He had done greatest Artist Project such as Canvas-Musculsar Project.',
    avatar: Angelo,
    name: 'Angelo Plessas',
    email: 'angeloplessas@gmail.com',
    score: 5,
    company: 'Talismania, Deste Prize, Museum of Cycladic Art',
    link: 'https://angeloplessas.com/',
  },
]

const portfoliosData = [
  {
    showcase: chinesepod,
    title: 'Chinese-Pod Website',
    date: '2020.5-2020.8',
    link: 'https://cpod-dash2.netlify.app/',
    desc: 'ChinesePod is a web-based Chinese language-learning service composed of multiple key components: video and audio lessons, mobile apps and exercises for characters, pronunciation and dialogue. There are also virtual classroom sessions for private lessons with Mandarin Chinese teachers. The service was founded in June 2004 in Shanghai, by Ken Carroll, Hank Horkoff, and Steve Williams.',
  },
  {
    showcase: racingManage,
    title: 'Online Horse Racing Management',
    date: '2017.5-2017.11',
    link: 'https://theracingmanager.com',
    desc: 'This is a web application for horse racing management and the users can benefit from this application without attending at the real racing but online. As a full-stack developer, my role in this project was to build the endpoints using Node.js/Express combined with MongoDB and integrated the 3rd party API to fetch the local racing data and visualize them in the front end.For front-end, I used React/Redux and Material UI, of course customized the provided UI.',
  },
  {
    showcase: Image3D,
    title: 'eCommerce B2C website',
    date: '2019.11-2020.7',
    link: 'https://image3d.com',
    desc: 'This is a multistore ecommerce B2C website built with Magento. Customers can reserve, order, and purchase products through this site. I have worked to customize the Avatax module, Instagram module, and so on for back-end. And I have worked to customize the styles with css and less files for front-end.',
  },
  {
    showcase: ppeConnector,
    title: 'PPE Connector',
    date: '2020.6-2020.8',
    link: 'https://app.ppeconnector.com',
    desc: 'This is a website that people can purchase the personal protective equipment online. Customers can also purchase protective equipment for COVID-19 such as a mask and glove through this site. This site is built with Vue.js and Firebase.',
  },
  {
    showcase: reactScss,
    title: 'ReactJS with SCSS',
    date: '2019.3-2019.10',
    link: 'https://transl-eat.web.app/',
    desc: 'React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets me compose complex UIs from small and isolated pieces of code called “components”. I have studied ReactJS over 6 years to become an excellent front-end developer and with my skills, have developed this biggest project, transl-eat app as responsive with SCSS a year ago.',
  },
  {
    showcase: WWT,
    title: 'WWT-Work Well Together',
    date: '2020.9-2020.11',
    link: 'https://dev.workwelltogether.co',
    desc: 'This site is a questionnaire platform to check the users\' features, and the ability of team work of any two users. In this project, I have built several endpoints using Django rest framework, and have used postgresql for database. I have added the function of login with social accounts(google, linkedin, facebook), and used number of modules in frontend.',
  },
  {
    showcase: MSGsafe,
    title: 'MSGsafe',
    date: '2019.10-2019.11',
    link: 'https://www.msgsafe.io',
    desc: 'This is a mobile app that allows you to safely send and receive messages and emails between two users. Customers can do private, end-to-end encrypted, online communication throuth this app. This app protect your privacy and security.',
  },
  {
    showcase: responsiveReact,
    title: 'React Responsive page',
    date: '2020.5-2020.6',
    link: 'https://react-responsive.herokuapp.com/',
    desc: 'It\'s the React-responsive Desktop/Mobile test-page to show profile, only the test-frontend page. It was based on Figma design.',
  },
  {
    showcase: prodLanding,
    title: 'Production Landing Page',
    date: '2020.10-2020.11',
    link: 'https://prod-land.herokuapp.com/',
    desc: 'Production Landing Page was built based on React, styled-component, framer-motion basically from 2020.10 ~ 2020.11 by me. This kind of website should be used for Blog page, production store website, or shoping page, etc.',
  },
  {
    showcase: canvasAnimator,
    title: 'Canvas-Mascular Animation',
    date: '2020.1-2020.3',
    link: 'https://canvas-animation-muscular.herokuapp.com/',
    desc: 'It\'s HTML5/Canvas and Images based muscular animation project with Audio. I have built several animation projects with HTML5, Canvas, and CSS3. For more good understand, please click mouse in the page, then you should see that the muscular flows blood, and in that position, flower should be grown, ball should be rotated... There are so many animations respectively.',
  },
  {
    showcase: frozenApp,
    title: 'React-frozen Converter',
    date: '2020.3-2020.3',
    link: 'https://frozen-tor-81335.herokuapp.com/',
    desc: 'It was based on figma Design file and it was only for the test app in recent. Created only the first landing page.',
  },
]

const faqData = [
  {
    ques: 'What are the responsibilities of a web developer?',
    ans: 'A web developer designs, develops, enhances, tests and deploys web applications with an end goal of creating engaging and user-friendly site layout and function. I gather and define requirements, maintains websites, troubleshoots and fixes bugs, follows best practices and collaborates with other teams.',
    items: ['Clear understanding of web development processes', 'What tasks they emphasize', 'How they plan to contribute']
  },
  {
    ques: 'What sparked your interest in web development?',
    ans: 'I found the drag-and-drop feature buggy and discovered that I could achieve the look I was going for if I edited the HTML instead. I became fascinated the ability a web developer has to be imaginative, artistic and technical, while developing a product that benefits and inspires others.',
    items: ['Enthusiasm', 'Motivation', 'Experience']
  },
  {
    ques: 'What is W3C and why is it important?',
    ans: 'W3C stands for World Wide Consortium and it is an international community that focuses on developing and standardizing the web. As a web developer, enforcing these standards ensures that web content is accessible in all browsers to reach all audiences, as well as optimizes the user experience.',
    items: ['General knowledge', 'Consideration of standards', 'Specifics on how they adhere to standards']
  },
  {
    ques: 'Explain how you optimize web application load time.',
    ans: 'Although there are numerous techniques a web developer can use in reducing load time, I always rely on optimizing images, enabling browser caching and minimizing HTTP requests. In one instance, I successfully reduced page load time from 2.1 seconds to .7 seconds by soley enabling browser caching.',
    items: ['How much importance they place in optimizing web applications', 'Understanding of tools they can use to analyze website speed', 'Evidence they have successfully reduced load time']
  },
  {
    ques: 'In what programming languages are you proficient?',
    ans: 'I\'m proficient in HTML, CSS and JavaScript, and I have mid-level proficiency in TypeScript. I\'d love to expand my web developer skills to include best Python and am currently researching the right DRF course to take in my free time. I\'m also interested in Node.js and frameworks always.',
    items: ['Familiarity with coding languages', 'Level of interest in specific languages', 'Fit with the role and company']
  },
  {
    ques: 'What steps do you take to balance demanding client requirements?',
    ans: 'In balancing demanding requirements as a web developer, I take steps to fully understand what is expected of me, prioritize my tasks and keep an open line of communication with the client. I keep the client informed of my progress and work efficiently to complete the task.',
    items: ['Performance under pressure', 'Communication skills', 'Commitment to releasing high-quality products']
  },
]

const servicesData = [
  {
    icon: 'fa fa-deaf',
    title: 'Innovative Ideas',
    subtitle:
      'Innovative Ideas are the most important things in web development.',
  },
  {
    icon: 'fa fa-users',
    title: 'Team Work',
    subtitle:
      'Teamwork spirit and cooperation together should be more helpful to be success.',
  },
  {
    icon: 'fa fa-calendar',
    title: 'Punctuality',
    subtitle:
      'Punctuality is one of my Advantages, it\'s very important in all contracts.',
  },
  {
    icon: 'fa fa-cogs',
    title: 'Responsiveness',
    subtitle:
      'My all projects are responsive for Desktop/Mobile application.',
  },
  {
    icon: 'fa fa-eye',
    title: 'Pixel Perfect',
    subtitle:
      'Once the design is provided, the project will be completed as pixel perfectly.',
  },
  {
    icon: 'fa fa-fighter-jet',
    title: 'Fast Learner',
    subtitle:
      'For the latest tech, I\'m always trying to learn new and challengeable aspect.',
  },
]

const socialLinksData = [
  {
    href: 'https://www.linkedin.com/in/jianxing-chao-7427031ab/',
    name: 'linkedin',
  },
  {
    href: 'https://github.com/panda-stack/',
    name: 'github',
  },
  {
    href: 'https://join.skype.com/invite/q79Ct1ZMiYCP',
    name: 'skype',
  },
  {
    href: 'https://t.me/darkhorse2050/',
    name: 'telegram',
  },
  {
    href: 'https://discord.gg/BhjBjFJv',
    name: 'discord',
  },
  {
    href: 'https://jianxing-portfolio.herokuapp.com/',
    name: 'blogger',
  },
]

const contactItemsData = [
  {
    icon: 'fas fa-map-marker-alt',
    title: 'Location',
    subtitle: 'Haidian district, Beijing, 100086'
  },
  {
    icon: 'fas fa-envelope',
    title: 'Email',
    subtitle: 'jianxing.dev@gmail.com',
  },
  {
    icon: 'fas fa-phone-alt',
    title: 'Call on me',
    subtitle: '(+86) 151 4034 5091',
  },
]

const navItemsData = [
  {
    href: '#home',
    text: 'Home',
    isActive: true,
  },
  {
    href: '#about',
    text: 'About',
    isActive: false,
  },
  {
    href: '#services',
    text: 'Services',
    isActive: false,
  },
  {
    href: '#portfolios',
    text: 'Portfolios',
    isActive: false,
  },
  {
    href: '#testinomial',
    text: 'Testinomial',
    isActive: false,
  },
  // {
  //   href: '#tech',
  //   text: 'Tech',
  //   isActive: false,
  // },
  {
    href: '#contact',
    text: 'Contact',
    isActive: false,
  },
]

const colorPalettes = [
  {
    title: 'crimson',
    color: '#d70d25',
  },
  {
    title: 'blue',
    color: '#4948d4',
  },
  {
    title: 'indigo',
    color: '#6400ae',
  },
  {
    title: 'aqua',
    color: '#05b3b6',
  },
  {
    title: 'black',
    color: '#222222',
  },
]

export {
  faqData,
  testiData,
  portfoliosData,
  servicesData,
  socialLinksData,
  contactItemsData,
  navItemsData,
  colorPalettes,
}
