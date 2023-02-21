export interface DataItem {
    id: string;
    label: string;
    text?:string;
    img?:string;
    /**
     *  sync array of children data
     */
    children?: DataItem[];
  }


  export interface TreeNodeProps extends DataItem{
    onSelectItem:(id:string)=>void;
    imgVariant?: string;
     depth?:number;
     indent?:number;
     isOpen?:boolean;
     loadChildren?:null|((query:string)=> Promise<boolean>);
     /**
      * indicates there are children that could be loaded
      */
     hasChildren?:boolean,

  }
  export interface TreeProps {
    imgVariant?:string;
    data: DataItem[];
    indent?:number
    /**
     * node children loader func, runs on expand.
     * When not passed - indicates the component is not supposed
     * to fetch data.
     */
    loadChildren?:null|((query:string)=> Promise<boolean>);
    /**
     * cb to run on item select
     */
    onSelectItem:(id:string)=>void;
  }

  export interface ListItemContentProps {
    primary?:string;
    secondary?:string;
    imgVariant?: string
    img?:string
  }