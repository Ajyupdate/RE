import dynamic from "next/dynamic";
import * as React from "react";

export interface INoSsrProps {
	children: React.ReactNode;
}

const NoSsr = ({ children }: INoSsrProps) => <>{children}</>;

export default dynamic(() => Promise.resolve(NoSsr), { ssr: false });
