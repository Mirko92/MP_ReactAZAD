import { PropsWithChildren, useEffect } from "react";

interface ISectionProps extends PropsWithChildren {
  // children: string;
}

export function Section(props: ISectionProps) {

  let children = props.children;
  let header = null; 

  if (Array.isArray(children)) {
    header = children.find(c => c.type === SectionHeader);
    children = children.filter( c => c.type !== SectionHeader);
  } else {
    if ((children as any).type === SectionHeader) {
      header = children;
      children = null;
    }
  }

  return <section className="mySection mbl3">
    <header>
      {header}
    </header>

    <div>
      {children}
    </div>
  </section>
}


export interface ISectionHeaderProps extends PropsWithChildren {}
export function SectionHeader(props: ISectionHeaderProps) {
  return <>{props.children}</>
}