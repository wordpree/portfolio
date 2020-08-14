import cvdTracking from "./assets/project/covid-19-tracking.jpg";
import qldScenery from "./assets/project/qld-scenery.jpg";
import travelus from "./assets/project/travelus.jpg";
import weather from "./assets/project/weather-app.jpg";

export const portfolio = [
  {
    link: "https://inspiring-weather.netlify.app/",
    img: weather,
    title: "Weather Forecast",
    content:
      "A RESTful comsuming Application based on Google Place Api & Open weather map",
  },
  {
    link: "https://travelus.life/",
    img: travelus,
    title: "Travel Guiding",
    content:
      "consuming different web services,this SPA displays useful travel information ",
  },
  {
    link: "https://qld-natureside.netlify.app",
    img: qldScenery,
    title: "Qld Recreational Area",
    content:
      "A website showing Qld parks, fetching data from a preset content via Contentful",
  },
  {
    link: "https://covids.social",
    img: cvdTracking,
    title: "Covid-19 Tracking",
    content:
      "A SPA, utilizing Google Map API and coronavirus service, provides clean UI ",
  },
];

export const skills = [
  { label: "HTML", percentage: 92 },
  { label: "CSS", percentage: 90 },
  { label: "ES6", percentage: 90 },
  { label: "Reactjs", percentage: 90 },
  { label: "Typescript", percentage: 75 },
  { label: "Redux", percentage: 70 },
  { label: "Redux-Saga", percentage: 70 },
];
