import * as React from 'react';
interface ITodoProps {
    addToList(name: string): void;
    items: [string];
    buttonLabel?: string;
}
interface ITodoState {
    name: string;
}
declare class TodoList extends React.Component<ITodoProps, ITodoState> {
    constructor(props: ITodoProps);
    addTodoItem: () => void;
    onInputChange: (e: any) => void;
    render(): JSX.Element;
}
declare const _default: import("react-redux").ConnectedComponentClass<typeof TodoList, Pick<ITodoProps, "buttonLabel">>;
export default _default;
