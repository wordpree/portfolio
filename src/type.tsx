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