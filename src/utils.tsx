import React from "react";
import { TMap, IIProps, TSkillIcons } from "./type";

export const indexRang = (
  min: number,
  max: number,
  index: number,
  slider: number
) => {
  // 0 as a start
  if (Math.abs(index) > max - slider) return -(max - slider);
  if (index > min) return min;
  return index;
};

export const navMenu: TMap = {
  About: "/about",
  Projects: "/projects",
  Portfolio: "/portfolio",
  Blog: "/blog",
};

// export const withProjects = (slice: TSlice) => (Wrapper: React.FC) => {
//   return (props: any) => (
//     <Wrapper {...props} projects={(data: IPCProps[]) => slice(data)} />
//   );
// };

export const mapToComponent = (list: TSkillIcons) => (Com: React.FC<IIProps>) =>
  list.map((l) => <Com {...l} key={l.name} />);
