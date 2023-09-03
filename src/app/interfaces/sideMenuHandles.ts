export interface SideMenuHandles {
    toggleMenu: (open?: boolean) => void;
    getMenuNode: () => HTMLDivElement | null;
  }