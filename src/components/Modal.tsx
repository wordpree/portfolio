import React, { useContext, createContext, useState } from "react";
import { Dialog, Slide } from "@material-ui/core";
import { TransitionProps } from "@material-ui/core/transitions";
import { TDialogCtx } from "../type";

const DialogContext = createContext<unknown>(null);

// const callAll = (...fns: any[]) => (...args: any[]) =>
//   fns.forEach((fn) => fn && fn(...args));

const useDialogContext = () => {
  const context = useContext(DialogContext) as TDialogCtx;
  if (!context) {
    throw new Error(`dialogContext should be used within its Provider`);
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
