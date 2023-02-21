import {  ComponentMeta } from '@storybook/react';
import { DataTree } from '../components/DataTree/DataTree';
import { speciesHierarchy } from '../mockBe';
import './demo-sync.css'

export const SpeciesDataTree= () => {

    return (
      <div className="App">
        <DataTree
          data={speciesHierarchy}
          indent={24}
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
