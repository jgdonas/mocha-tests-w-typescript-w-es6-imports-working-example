import { app } from 'electron';

const add = (a: number, b: number): number => a + b;

const electronVersion = () => app.getVersion();

export { add, electronVersion };