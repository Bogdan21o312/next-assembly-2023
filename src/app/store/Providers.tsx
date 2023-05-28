'use client';
import { Provider } from "react-redux";
import {ReactNode} from "react";
import {setupStore} from "@/app/store/store";

export function Providers({ children }: { children: ReactNode }) {
    return (
        <Provider store={setupStore()}>
            {children}
        </Provider>
    );
}
