export interface NavItem {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
  icon?: React.ElementType // Change to React component type
  // icon?: keyof typeof Icons
  label?: string
}

export interface NavItemWithChildren extends NavItem {
  items?: NavItemWithChildren[]
}

export interface MainNavItem extends NavItem {}

export interface SidebarNavItem extends NavItemWithChildren {}
