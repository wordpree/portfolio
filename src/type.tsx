import { Variants, AnimationProps } from "framer-motion";

export type TDetail = {
  id: number;
  img: string;
  title: string;
  technique: string[];
  description: string;
  gitlink: string;
  weblink: string;
  story?: string;
};

export type TMap = { [key: string]: string };
export type TSet = React.Dispatch<React.SetStateAction<boolean>>;
export type TDialogCtx = {
  open: boolean;
  setOpen: TSet;
  handleModal(): void;
};
export interface IMProps {
  height: number;
  width: number;
  duration: number;
}

export interface IBGProps {
  bgColor: string;
  children: React.ReactNode;
  fullWidth: boolean;
}

export interface IAProps {
  content: string;
  title: string;
  subtitle?: string;
}

export interface ICAProps {
  title: string;
  subtitle: string;
  label: string[];
  content: string;
  bgColor: string;
}

export interface IPCProps extends ICAProps {
  img: string;
  id: number;
}

export interface IPCSProps {
  projects: IPCProps[];
}

export interface ILProps {
  label: string[];
  borderColor?: string;
  color?: string;
  flexPos?: string;
}

export type TRef =
  | ((instance: HTMLDivElement | null) => void)
  | React.RefObject<HTMLDivElement>
  | null
  | undefined;

export interface IMWProps {
  children: React.ReactNode;
  variants: Variants;
  initial: string;
  isAnimate(animate: boolean): AnimationProps["animate"];
  hover: string;
  tap: string;
}

export interface IIProps {
  Icon(props: any): JSX.Element;
  name: string;
}
export type TSkillIcons = IIProps[];

export interface ISSProps {
  brief: string;
  snippet: string;
  refer: string;
  improve?: string;
}
