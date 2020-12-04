import {YogaNode} from 'yoga-layout-prebuilt';

export interface Component {
  node: YogaNode;
  build(scene: g.Scene): g.E;
  buildEntity(scene: g.Scene, parent?: g.E): g.E;
}
