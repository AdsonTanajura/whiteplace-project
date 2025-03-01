// custom.d.ts ou types/custom.d.ts
declare module '*.svg' {
  import { FC, SVGProps } from 'react';
  const ReactComponent: FC<SVGProps<SVGSVGElement>>;
  export { ReactComponent };
  export default ReactComponent;
}
