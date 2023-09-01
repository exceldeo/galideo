import React from "react";

import cx from "@/helper/cx";
import {
  StyleH1,
  StyleH2,
  StyleH3,
  StyleH4,
  StyleH5,
  StyleNavbar,
  StyleP,
} from "./styles";

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement>;
const H1: React.FC<HeadingProps> = ({ className, ...rest }) => {
  return <StyleH1 className={cx(className ?? "")} {...rest} />;
};

const H2: React.FC<HeadingProps> = ({ className, ...rest }) => {
  return <StyleH2 className={cx("", className ?? "")} {...rest} />;
};

const H3: React.FC<HeadingProps> = ({ className, ...rest }) => {
  return <StyleH3 className={cx(className ?? "")} {...rest} />;
};

const H4: React.FC<HeadingProps> = ({ className, ...rest }) => {
  return <StyleH4 className={cx(className ?? "")} {...rest} />;
};

const H5: React.FC<HeadingProps> = ({ className, ...rest }) => {
  return <StyleH5 className={cx(className ?? "")} {...rest} />;
};

type PProps = React.HTMLAttributes<HTMLParagraphElement>;
const P: React.FC<PProps> = ({ className, ...rest }) => {
  return <StyleP className={cx(className ?? "")} {...rest} />;
};

const NavbarText: React.FC<HeadingProps> = ({ className, ...rest }) => {
  return <StyleNavbar className={cx(className ?? "")} {...rest} />;
};

export { H1, H2, H3, H4, H5, P, NavbarText };
