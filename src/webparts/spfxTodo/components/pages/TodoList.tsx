import * as React from 'react';

import { IPageProps } from './IPageProps';

class TodoList extends React.Component<IPageProps> {

  constructor(props: IPageProps) {
    super(props);
  }

  public render() {
    return (
      <div>
        <p>TodoList</p>
      </div>
    );
  }

}
export default TodoList;