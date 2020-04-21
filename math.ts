import { app } from 'electron';

const add = (a: number, b: number): number => a + b

const version = (): string => app.getVersion();

export {
    add,
    version,
};