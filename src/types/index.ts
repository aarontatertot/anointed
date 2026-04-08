export interface Product {
  id: string;
  handle: string;
  collaboration?: string;
  brand: string;
  title: string;
  price: string;
  comparePrice?: string;
  image: string;
  hoverImage?: string;
  soldOut?: boolean;
  label?: string;
  currency?: string;
}

export interface SlideImage {
  url: string;
  alt: string;
}

export interface NavDropdownItem {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavDropdownItem[];
}

export interface FooterColumn {
  heading: string;
  href?: string;
  links: Array<{ label: string; href: string }>;
}
