// types/NavigationType.ts

export interface NavigationItem {
  path: string
  label: string
  icon: string // Assuming every item has an icon for simplicity
  subRoutes?: NavigationItem[]
}
