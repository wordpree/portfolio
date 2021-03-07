import React from "react";
import { Icon } from "@iconify/react";
import mongodbIcon from "@iconify-icons/cib/mongodb";
import fileTypeHtml from "@iconify-icons/vscode-icons/file-type-html";
import fileTypeCss from "@iconify-icons/vscode-icons/file-type-css";
import nodejsIcon from "@iconify-icons/logos/nodejs";
import fileTypeReactjs from "@iconify-icons/vscode-icons/file-type-reactjs";
import reduxIcon from "@iconify-icons/logos/redux";
import graphqlIcon from "@iconify-icons/logos/graphql";
import materialUi from "@iconify-icons/logos/material-ui";
import awsIcon from "@iconify-icons/logos/aws";

const MongodbIcon = (props: any) => {
  return <Icon {...props} color="#589636" icon={mongodbIcon}></Icon>;
};

const HtmlIcon = (props: any) => {
  return <Icon {...props} icon={fileTypeHtml}></Icon>;
};

const CssIcon = (props: any) => {
  return <Icon {...props} icon={fileTypeCss}></Icon>;
};
const JSIcon = (props: any) => {
  return <Icon {...props} icon={nodejsIcon}></Icon>;
};

const ReactIcon = (props: any) => {
  return <Icon {...props} icon={fileTypeReactjs}></Icon>;
};
const ReduxIcon = (props: any) => {
  return <Icon {...props} icon={reduxIcon}></Icon>;
};
const GraphqlIcon = (props: any) => {
  return <Icon {...props} icon={graphqlIcon}></Icon>;
};
const MaterialIcon = (props: any) => {
  return <Icon {...props} icon={materialUi}></Icon>;
};
const AWSIcon = (props: any) => {
  return <Icon {...props} icon={awsIcon}></Icon>;
};
export {
  MongodbIcon,
  HtmlIcon,
  CssIcon,
  JSIcon,
  ReactIcon,
  ReduxIcon,
  GraphqlIcon,
  MaterialIcon,
  AWSIcon,
};
