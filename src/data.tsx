import { Linkedin, Github, Email, Reddit } from "mdi-material-ui";
import eshopping from "./assets/project/eshopping.jpg";
import cvdTracking from "./assets/project/covid-19.jpg";
import qldScenery from "./assets/project/qld-scenery.jpg";
import travelus from "./assets/project/travelus.jpg";
import weather from "./assets/project/weather.jpg";

export const portfolio = [
  {
    id: 1,
    link: "",
    img: eshopping,
    title: "Bicycle Online",
    content: "A full stack aws severless online shopping website ",
  },
  {
    id: 2,
    link: "https://covids.social",
    img: cvdTracking,
    title: "Covid-19 Tracking",
    content:
      "A SPA, utilizing Google Map API and coronavirus service, provides clean UI ",
  },
  {
    id: 3,
    link: "https://travelus.life/",
    img: travelus,
    title: "Travel Guiding",
    content:
      "consuming different web services,this SPA displays useful travel information ",
  },
  {
    id: 4,
    link: "https://inspiring-weather.netlify.app/",
    img: weather,
    title: "Weather Forecast",
    content:
      "A RESTful comsuming Application based on Google Place Api & Open weather map",
  },
  {
    id: 5,
    link: "https://qld-natureside.netlify.app",
    img: qldScenery,
    title: "Qld Recreational Area",
    content:
      "A website showing Qld parks, fetching data from a preset content via Contentful",
  },
];

export const skills = [
  { label: "HTML", percentage: 90 },
  { label: "CSS", percentage: 85 },
  { label: "ES6", percentage: 75 },
  { label: "Reactjs", percentage: 75 },
  { label: "Typescript", percentage: 70 },
  { label: "Redux", percentage: 70 },
  { label: "Redux-Saga", percentage: 70 },
];

export const socials = [
  {
    Icon: Linkedin,
    id: 1,
    link: "https://www.linkedin.com/in/haijun-wang-8b4bab150/",
  },
  { Icon: Github, id: 2, link: "https://github.com/wordpree?tab=repositories" },
  { Icon: Email, id: 3, link: "mailto:wanghaijun04@gmail.com" },
  { Icon: Reddit, id: 4, link: "" },
];

export const details = [
  {
    id: 1,
    img: eshopping,
    title: "A online bicycle ecommerce website",
    technique: [
      "Full stack",
      "Typescript",
      "Serverless",
      "Custom Hooks",
      "Material-UI",
      "Framer-motion",
      "Responsive Design",
      "AWS",
    ],
    description:
      "Plan and develop from scratch for a ecommerce website. It implements AWS's Cognito, API Gateway, DynamoDB, lambda function as its back end. It integrates with paypal/strip payment gateway. --It is under developing",
    gitlink: "https://github.com/wordpree/e-shopper",
    weblink: "",
  },
  {
    id: 2,
    img: cvdTracking,
    title: "A covid-19 information providing and case tracking website",
    technique: [
      "create-react-app",
      "Typescript",
      "RESTful Application",
      "React Hooks",
      "Material-UI",
      "Framer-motion",
      "Responsive Design",
      "UI Design",
    ],
    description:
      "Organize and create covid-19 warning and tracking single page application. Utilize Google JavaScript Map API and RESTful coronavirus case web service to integrate data inside map application which provides net and clean UI.",
    gitlink: "https://github.com/wordpree/covid19_tracker",
    weblink: "https://covids.social",
  },
  {
    id: 3,
    img: travelus,
    title: "A Fully Data Consuming of Australia Travel Guide Website",
    technique: [
      "Create-react-app",
      "Typescript",
      "Redux-saga",
      "RESTful Application",
      "Custom Hooks",
      "React Router",
      "Material-UI",
      "Framer-motion",
      "Responsive Design",
      "UI Design",
    ],
    description:
      "Develop, plan & design, and manage travel guiding websites from scratch in compliance with Reactjs, hooks API, redux-saga and typescript. Deliver successful full data consuming project by fetching data from RESTful web services , such as open weather map, triposo, newsorg, and zomato to achieve functions structure goals. Utilize strong technical manner in establishing API calls to generate a website with design pattern of a popular react framework, material UI.",
    gitlink: "https://github.com/wordpree/weatherApp",
    weblink: "https://travelus.life",
    story:
      "The original idea of this project is to build a general weather forecast web application leveraging Context Api and Open weather map RESTful service. However,not long after the small functionilty finished, the similarity of the search address became a obstacle when integrating Google Place Api seemed to be a preferable option. Imagination didn't like to be end here. Hence, I decided to implement some travel POIs web service to show beautiful scenery around Australia. The first try was tripadvisor Api and they turned me out since they choose selected clients. After that I have got the permission to use sygic travel Api with limited quota. It took several weeks to learn the data structure and different data request with satisfied content. My requst quota ran out at the same time the RESTful Application fully built in the website. But I came from a known-nothing mind to be the one that can requst specific data to display inside website.",
  },
  {
    id: 4,
    img: weather,
    title: "A General Weather Forecast Application",
    technique: [
      "create-react-app",
      "typescript",
      "RESTful Application",
      "React Hooks",
      "Material-UI",
      "Framer-motion",
      "Responsive Design",
      "UI Design",
    ],
    description:
      "Plan, design and build a weather SPA with RESTful endpoint data service to display current and weekly weather data across various places. The scratch-built application leverages Google place API to enhance user experience by location autocompleting as well as implements useReducer & Context of React hook API for state management.",
    gitlink: "https://github.com/wordpree/local-weather",
    weblink: "https://inspiring-weather.netlify.app",
  },
  {
    id: 5,
    img: qldScenery,
    title: "A website is to display QLD parks with facilities and activities",
    technique: [
      "create-react-app",
      "contentful",
      "react redux",
      "React Hooks",
      "Material-UI",
      "Responsive Design",
    ],
    description:
      "Arranging content on back-end service through content management platform, Contentful, a SPA website has been created to display information of parks with data consuming from the headless CMS.",
    gitlink: "https://github.com/wordpree/qld-natureside",
    weblink: "https://qld-natureside.netlify.app",
  },
];
