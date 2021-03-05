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
type TSet = React.Dispatch<React.SetStateAction<boolean>>;
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

export interface IPCProps {
  title: string;
  subtitle: string;
  img: string;
  label: string[];
  content: string;
  id: number;
  bgColor: string;
}

export interface ILProps {
  label: string[];
  color: string;
}
