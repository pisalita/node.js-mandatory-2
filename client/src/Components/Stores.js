import { writable } from "svelte/store";

export const user = writable(null);
export const id = writable(0);
export const cart = writable([]);
