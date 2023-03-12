class SideNavSectionElement {
  name?: string;
  url?: string;
  icon?: string;
  callback?: any;
}

export class SideNavSection {
  id?: number;
  name?: string;
  icon?: string;
  isHidden?: boolean;
  callback?: any;
  sideNavSectionElement?: SideNavSectionElement[];
}
