import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {createWrapper} from "next-redux-wrapper";

const rootReducer = combineReducers({})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(
            ),
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>

// @ts-ignore
export const wrapper = createWrapper<AppStore>(setupStore);
