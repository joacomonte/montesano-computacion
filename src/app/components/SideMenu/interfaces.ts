export interface IMenuItemProps {
    id: number;
    label: string;
    children?: IMenuItemProps[]; 
  }
  
  export interface SideMenuProps {
    data: IMenuItemProps[];
  }
