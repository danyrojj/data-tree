import React from "react";
import { TreeProps } from "../../types";
import { TreeNode } from "../TreeNode/TreeNode";
import "./DataTree.css";

export const DataTree: React.FC<TreeProps> = ({
  data,
  indent,
  loadChildren,
  imgVariant,
  onSelectItem,
}) => {
  return (
    <div className="data-tree">
      {data.map((item) => (
        <TreeNode
          key={item.id}
          indent={indent}
          {...item}
          loadChildren={loadChildren}
          imgVariant={imgVariant}
          onSelectItem={onSelectItem}
        />
      ))}
    </div>
  );
};
