import { PropsWithChildren, useEffect } from "react";

interface ISectionProps extends PropsWithChildren {
  // children: string;
}

export function Section(props: ISectionProps) {

  return <section className="mySection mbl3">
    {props.children}
  </section>
}