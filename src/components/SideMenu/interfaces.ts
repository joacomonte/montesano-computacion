export interface IMenuItemProps {
    id: string;
    label: string;
    children?: IMenuItemProps[]; 
    href?: string | null;
  }
  
  export interface SideMenuProps {
    data: IMenuItemProps[];
  }
