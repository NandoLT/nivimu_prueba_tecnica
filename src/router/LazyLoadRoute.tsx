import React, { Suspense, ReactElement } from "react";
import { Spin } from "antd";

interface Props {
  children: ReactElement<any> | null;
}

const LazyLoadRouteRaw = ({ children }: Props) => {
  return <Suspense fallback={<Spin />}>{children}</Suspense>;
};


export default LazyLoadRouteRaw;