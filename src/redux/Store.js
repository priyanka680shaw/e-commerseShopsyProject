import { configureStore } from "@reduxjs/toolkit";
import { homereducer } from "./slice/homeSlice";
import { cardreducer } from "./slice/addToCart";
export const store = configureStore(
    {
        reducer : {
           home : homereducer,
           cart  : cardreducer
        }
    }
)