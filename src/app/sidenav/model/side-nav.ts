class SideNavSectionElement {
  name?: string;
  url?: string;
  icon?: string;
}

export interface SideNavSection {
  id?: number;
  name?: string;
  icon?: string;
  sideNavSectionElement?: SideNavSectionElement[];
}