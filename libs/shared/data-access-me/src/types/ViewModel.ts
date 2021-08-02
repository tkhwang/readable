export type ViewModel<T extends (...args: any) => any> = ReturnType<T>;
