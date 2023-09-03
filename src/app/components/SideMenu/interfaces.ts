export interface IMenuItemProps {
    id: number;
    label: string;
    children?: IMenuItemProps[]; 
    depth?: number; // Using recursion here since children is an array of IMenuItemProps.
  }
  
  export interface ISideMenuProps {
    data: IMenuItemProps[];
  }
  
  export interface SideMenuHandles {
    toggleMenu: () => void;
  }