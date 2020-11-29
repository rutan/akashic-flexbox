import {YogaNode} from 'yoga-layout-prebuilt';

export interface Component {
  node: YogaNode;
  build(): g.E;
  buildEntity(parent?: g.E): g.E;
}
