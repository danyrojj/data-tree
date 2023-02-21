import {  ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import { DataTree } from '../components/DataTree/DataTree';
import { overrideTreeItem } from '../demo-utils';
import { asyncMock, childrenMapFs } from '../mockBe';
import { DataItem } from '../types';
import './demo-async.css'


export const DataTreeFileSystem = () => {
  const [data, setData] = useState<DataItem[]>(asyncMock);

  // loads children of the expanded item, finds item in tree and
  // adds children to the data state
  const loadChildren = (id: string): Promise<boolean> =>
    new Promise((resolve) => {
      const children = childrenMapFs[id];
      setTimeout(() => {
        setData((data) => overrideTreeItem(data, id, children));
        resolve(true);
      }, 500);
    });
  return (
    <div className="App">
      <DataTree
        data={data}
        indent={24}
        loadChildren={loadChildren}
        imgVariant="square"
        onSelectItem={(id) => console.log(id, "selected")}
      />
    </div>
  );
}

export default {
  title: 'Demo',
  component: DataTree,
} as ComponentMeta<typeof DataTree>;
