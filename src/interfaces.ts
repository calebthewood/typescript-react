/** Interfaces for type setting. */

interface IBox {
  id: string;
  width: string | number;
  height: string | number;
  backgroundColor: string;
}

interface IBoxComponent extends IBox {
  remove: (id:string)=> void;
}

interface ICreateBox {
  createBox: (box: IBox) => void;
}

export type { IBox, IBoxComponent, ICreateBox }

