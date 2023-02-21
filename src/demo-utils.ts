import { DataItem } from "./types";

export const overrideTreeItem = (data:DataItem[], id:string, children:DataItem[]):DataItem[] => {
    const dataCopy = [...data];
    for (let i = 0; i < data.length; i++) {
      const currentNode = data[i];
      if (currentNode.id === id) {
        dataCopy[i].children = children;
        return dataCopy;
      }
      if (currentNode.children) {
        dataCopy[i].children = overrideTreeItem(
          currentNode.children,
          id,
          children
        );
      }
    }
    return dataCopy;
  };