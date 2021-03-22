import { Linkedin, Github, Codepen } from "mdi-material-ui";
import eshopping from "./assets/project/eshopping.jpg";
import cvdTracking from "./assets/project/covid-19.jpg";
import qldScenery from "./assets/project/qld-scenery.jpg";
import travelus from "./assets/project/travelus.jpg";
import weather from "./assets/project/weather.jpg";
import computer from "./assets/project/computer.png";
import * as icon from "./components/IconComponents";

const color = [
  "#AA750D",
  "#0672A6",
  "#4D30A4",
  "#994831",
  "#52225D",
  "#26233D",
];

export const portfolio = [
  {
    id: 1,
    link: "https://bicycle-ecommerce.netlify.app",
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

export const projects = [
  {
    id: 0,
    label: ["web", "ux/ui"],
    link: "https://bicycle-ecommerce.netlify.app",
    img: computer,
    title: "LANDING PAGE",
    subtitle: "Computer Service",
    content: "Updating and Modernizing design of a Local Store.",
    bgColor: color[0],
  },
  {
    id: 1,
    label: ["web", "planning"],
    link: "https://bicycle-ecommerce.netlify.app",
    img: eshopping,
    title: "ONLINE SHOP",
    subtitle: "AWS Application",
    content: "Building a Severless Online Shopping Website.",
    bgColor: color[1],
  },
  {
    id: 2,
    label: ["ux/ui", "web"],
    link: "https://covids.social",
    img: cvdTracking,
    title: "COVID19 Statistics",
    subtitle: "Restful API",
    content:
      "Utilizing Google Map API and coronavirus service to build a clean UI.",
    bgColor: color[2],
  },
  {
    id: 3,
    label: ["redux/saga", "ux/ui"],
    link: "https://travelus.life/",
    img: travelus,
    title: "Travel Guiding",
    subtitle: "Multiple Integrate",
    content:
      "consuming different web services,this SPA displays useful travel information.",
    bgColor: color[3],
  },
  {
    id: 4,
    label: ["restfull", "design"],
    link: "https://inspiring-weather.netlify.app/",
    img: weather,
    title: "Weather Forecast",
    subtitle: "Open Weather Maps",
    content: "Display hourly,daily and weekly weather on different locations.",
    bgColor: color[4],
  },
  {
    id: 5,
    label: ["web", "headless"],
    link: "https://qld-natureside.netlify.app",
    img: qldScenery,
    title: "Qld Parks",
    subtitle: "Headless CMS",
    content:
      "A website showing Qld parks which data is based on Contentful CMS",
    bgColor: color[5],
  },
];

export type T = typeof projects;

export const projectArticle = {
  title: "My Projects",
  content:
    "Check out some featured projects, which the progress can be seen clearly, I have been working on",
};

export const skillArticle = {
  title: "What Can I Provide",
  content:
    "I had five years’ experience in software development of which three years were in commercial environments of large international ICT companies. I have a deep understanding of commercial goals and software development life cycle.",
};

export const skills = [
  { label: "HTML", percentage: 95 },
  { label: "CSS", percentage: 90 },
  { label: "ES6", percentage: 85 },
  { label: "Reactjs", percentage: 80 },
  { label: "Typescript", percentage: 70 },
  { label: "Redux", percentage: 70 },
  { label: "Redux-Saga", percentage: 70 },
  { label: "Bootstrap", percentage: 75 },
  { label: "Material Css", percentage: 85 },
];

export const socials = [
  {
    Icon: Linkedin,
    id: 1,
    description: "linkedin",
    link: "https://www.linkedin.com/in/haijun-wang-8b4bab150/",
  },
  {
    Icon: Github,
    id: 2,
    description: "github",
    link: "https://github.com/wordpree?tab=repositories",
  },
  {
    Icon: icon.DribbbleIcon,
    id: 3,
    description: "dribbble",
    // link: "mailto:wanghaijun04@gmail.com",
    link: "https://dribbble.com/hai111",
  },
  {
    Icon: Codepen,
    id: 4,
    description: "codesandbox",
    link: "https://codesandbox.io/u/wordpree",
  },
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
    weblink: "https://bicycle-ecommerce.netlify.app",
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

export const skillLists = [
  { Icon: icon.HtmlIcon, name: "html" },
  { Icon: icon.CssIcon, name: "css" },
  { Icon: icon.MongodbIcon, name: "noSql" },
  { Icon: icon.JSIcon, name: "JS" },
  { Icon: icon.GraphqlIcon, name: "graphQl" },
  { Icon: icon.ReactIcon, name: "react" },
  { Icon: icon.ReduxIcon, name: "redux" },
  { Icon: icon.MaterialIcon, name: "material" },
  { Icon: icon.AWSIcon, name: "aws" },
  { Icon: icon.PhpIcon, name: "Php" },
];

export const skillLable = [
  "Web Design",
  "Adobe Suite",
  "UX/UI Design",
  "Web Development",
];

export const codeBlog = [
  {
    brief:
      "Build customized Modal wrapper with Context API based on Material-UI component.",
    snippet: `
import React, { useContext, createContext, useState } from "react";
import { Dialog, Slide } from "@material-ui/core";
import { TransitionProps } from "@material-ui/core/transitions";
import { TDialogCtx } from "../type";

const DialogContext = createContext<unknown>(null);
const useDialogContext = () => {
  const context = useContext(DialogContext) as TDialogCtx;
  if (!context) {
    throw new Error(dialogContext should be used within its Provider);
  }
  return context;
};

const ModalProvider: React.FC = (props) => {
  const [open, setOpen] = useState(false);
  const handleModal = () => setOpen((prev) => !prev);
  const value = { open, setOpen, handleModal } as TDialogCtx;
  return <DialogContext.Provider value={value} {...props} />;
};

const Transition = React.forwardRef(
  (
    props: TransitionProps & { children?: React.ReactElement<any, any> },
    ref: React.Ref<unknown>
  ) => {
    return <Slide ref={ref} {...props} />;
  }
);

const ModalBase: React.FC = (props) => {
  const { open, setOpen } = useDialogContext();
  return (
    <Dialog
      {...props}
      open={open}
      onClose={() => setOpen(false)}
      fullWidth
      TransitionComponent={Transition}
      keepMounted
      transitionDuration={300}
    />
  );
};

export { ModalBase, ModalProvider, useDialogContext }; 
`,
    refer:
      "https://github.com/wordpree/portfolio/blob/master/src/components/Modal.tsx",
  },
  {
    brief: "How to build a custom React Hook for local storage?",
    snippet: `
import { useState, useEffect, useRef } from "react";

const useLocalStorage = (initialState = {}, key: string) => {
  const [storage, setStorage] = useState(() => {
    const storageInit = window.localStorage.getItem(key);
    if (storageInit) {
      return JSON.parse(storageInit);
    }
    return initialState;
  });
  const prevKeyRef = useRef(key);
  useEffect(() => {
    const prevKey = prevKeyRef.current;
    if (prevKey !== key) {
      window.localStorage.removeItem(prevKey);
    }
    prevKeyRef.current = key;
    window.localStorage.setItem(key, JSON.stringify(storage));
  }, [key, storage]);
  return { storage, setStorage };
};
        
export default useLocalStorage;
    `,
    refer:
      "https://github.com/wordpree/local-weather/blob/master/src/useLocalStorage.tsx",
  },
  {
    brief: "Write your own asynchronous fetching custom hook using useReducer.",
    snippet: `
import { useReducer, useCallback } from "react";
import { reducer } from "./util";

function useAsync<T>() {
  const [state, dispatch] = useReducer(reducer, {
    data: null,
    status: "idle",
    error: null,
  });
  const run = useCallback(
    (promise: Promise<T>) => {
      dispatch({ type: "pending", data: null, error: null });
      promise.then(
        (data) => dispatch({ type: "resolved", data, error: null }),
        (error) => dispatch({ type: "rejected", error, data: null })
      );
    },
    [dispatch]
  );
  const selectData = useCallback(
    (data) => dispatch({ type: "resolved", data, error: null }),
    [dispatch]
  );
  const clearData = useCallback(
    () => dispatch({ type: "clear", data: null, error: null }),
    [dispatch]
  );
  return { state, run, selectData, clearData };
}

export default useAsync;
    `,
    refer:
      "https://github.com/wordpree/local-weather/blob/master/src/useAsync.tsx",
  },
  {
    brief:
      "Build a neat and clean scroll trigger to determine whether an animation will apply.",
    snippet: `
import { useState, useEffect } from "react";
import { throttle } from "throttle-debounce";

type Animation = [boolean, React.Dispatch<React.SetStateAction<boolean>>];

const getAnimate = (ref: React.RefObject<HTMLDivElement>) => {
  if (ref && ref.current) {
    const eleTop = ref.current.getBoundingClientRect().top; //element top to viewport
    const eleHeight = ref.current.offsetHeight; //element height
    const height = window.innerHeight;
    return height - eleTop > eleHeight / 3;
  }
  return false;
};

const useAnimation = (ref: React.RefObject<HTMLDivElement>): Animation => {
  const [animation, setAnimation] = useState(false);
  useEffect(() => {
    const handleScroll = throttle(200, () =>
      setAnimation(() => getAnimate(ref))
    );
    setAnimation(() => getAnimate(ref));
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref]);

  return [animation, setAnimation];
};

export default useAnimation;
    `,
    refer:
      "https://github.com/wordpree/portfolio/blob/master/src/components/useAnimation.tsx",
  },
  {
    brief:
      "The following snippet is a Context that share data of the covid-19 real-time case.",
    snippet: `
import React, { useContext, useState, useEffect } from "react";
import { IGMaps } from "../util/type";
import { fetchData } from "../util";

interface IBCProps {
  children: React.ReactNode;
}

const casesWithMaps = React.createContext<IGMaps | null>(null);
export const CasesWithMapsProvider = ({ children }: IBCProps) => {
  const [cases, setCases] = useState<IGMaps | null>(null);
  const urlCountry = "https://corona.lmao.ninja/v2/countries";
  const urlAll = "https://corona.lmao.ninja/v2/all";
  useEffect(() => {
    const promises = async () => {
      const promise = [urlAll, urlCountry].map((url) => fetchData(url));
      const res = await Promise.all(promise);
      setCases({
        all: res[0],
        countries: res[1],
      });
    };
    promises();
  }, []);
  return (
    <casesWithMaps.Provider value={cases}>{children}</casesWithMaps.Provider>
  );
};

export const CasesWithMapsContext = () => useContext(casesWithMaps);
    `,
    refer:
      "https://github.com/wordpree/covid19_tracker/blob/master/src/components/context.tsx",
  },
  {
    brief: "It is to show more or fewer parks depends on user interaction",
    snippet: `
import React from "react";
import { Grow } from "@material-ui/core";
import { ITriposoPoi } from "../../util/type";
import ParkCard from "./ParkCard";

interface IPSProps {
  data: ITriposoPoi[];
  more: boolean;
}

const ParksSmall = ({ data, more }: IPSProps) => {
  const lists = (Component: React.SFC<{ data: ITriposoPoi }>) => (
    data: ITriposoPoi[]
  ) => data.map((item) => <Component key={item.id} data={item} />);
  return (
    <div>
      {lists(ParkCard)(data.slice(0, 3))}
      <Grow in={more}>
        <div
          style={{
            display: more ? "block" : "none",
            width: more ? "inherit" : 0,
          }}
        >
          {more && lists(ParkCard)(data.slice(3))}
        </div>
      </Grow>
    </div>
  );
};

export default ParksSmall;
    `,
    refer:
      "https://github.com/wordpree/weatherApp/blob/master/src/components/attractions/ParksSmall.tsx",
    improve:
      "This code was writing almost 9 months ago and something can be done to improve it. The boolean props `more` could lead to rendering a big number 0 when it is false if it isn't inside Grow component",
  },
  {
    brief:
      "Build own Framer-motion button based on Material-UI button component ",
    snippet: `
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@material-ui/core";

interface IMBProps {
  [key: string]: string | any;
  children: React.ReactNode;
}
//framer motion with mui
const FrMotionButton = ({ children, ...others }: IMBProps) => {
  const MotionBtnRef = React.forwardRef<any, any>((props, ref) => (
    <motion.button
      {...props}
      ref={ref}
      whileHover={{
        color: "#fff",
        scale: 1.05,
      }}
      transition={{ type: "spring", stiffness: 120 }}
    />
  ));
  return (
    <Button component={MotionBtnRef} {...others}>
      {children}
    </Button>
  );
};

export default FrMotionButton;
    `,
    refer:
      "https://github.com/wordpree/weatherApp/blob/master/src/components/FrMotionButton.tsx",
  },
];
