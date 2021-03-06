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

export interface ILProps {
  label: string[];
  color: string;
}

export type TRef =
  | ((instance: HTMLDivElement | null) => void)
  | React.RefObject<HTMLDivElement>
  | null
  | undefined;
