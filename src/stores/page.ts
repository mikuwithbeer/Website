import {defineStore} from "pinia";
import type {PageName} from "@/types";

export const usePageStore = defineStore("page", {
    state: (): {
        page: PageName,
    } => ({page: "home"})
})
