import { writable } from "svelte/store";

const now = new Date();

export const activeDay = writable(now.getDate());
export const activeMonth = writable(now.getMonth());
export const activeYear = writable(now.getUTCFullYear());
export const activePane = writable("calendar");
