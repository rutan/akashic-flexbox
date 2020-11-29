import Yoga, { Node, YogaNode } from 'yoga-layout-prebuilt';
import { Component } from './Component';
import { FlexAlign, FlexDirection, FlexJustify, FlexWrap } from './types';
import {
  fromYogaAlign,
  fromYogaFlexDirection,
  fromYogaJustify, fromYogaWrap,
  toYogaAlign,
  toYogaFlexDirection,
  toYogaJustify, toYogaWrap
} from './convertValue';

type Class<T> = new (...args: any[]) => T;

export interface ViewParameterObject<T extends g.E> {
  scene: g.Scene;
  entityClass?: Class<T>;
  entityParameterObject?: Partial<T>;
}

type Percent = `${number}%`;

export class View<T extends g.E> implements Component {
  static create<T extends g.E>(param: ViewParameterObject<T>) {
    return new View<T>(param);
  }

  private readonly _scene: g.Scene;
  private readonly _entityClass: Class<g.E>;
  private readonly _entityParameterObject: any;
  private readonly _children: Component[] = [];

  private _node: YogaNode = Node.create();
  private _entity?: g.E;

  constructor(params: ViewParameterObject<T>) {
    this._scene = params.scene;
    this._entityClass = params.entityClass || g.E;
    this._entityParameterObject = params.entityParameterObject || {};
  }

  get scene() {
    return this._scene;
  }

  get children() {
    return this._children;
  }

  get entity() {
    return this._entity;
  }

  get node() {
    return this._node;
  }

  child(child: Component) {
    this._children.push(child);
    this._node.insertChild(child.node, this._node.getChildCount());
    return this;
  }

  position(value: 'relative' | 'absolute') {
    if (value === 'absolute') {
      this._node.setPositionType(Yoga.POSITION_TYPE_ABSOLUTE);
    } else {
      this._node.setPositionType(Yoga.POSITION_TYPE_RELATIVE);
    }
    return this;
  }

  top(value: number | Percent | 'auto') {
    this._node.setPosition(Yoga.EDGE_TOP, value);
    return this;
  }

  right(value: number | Percent | 'auto') {
    this._node.setPosition(Yoga.EDGE_RIGHT, value);
    return this;
  }

  bottom(value: number | Percent | 'auto') {
    this._node.setPosition(Yoga.EDGE_BOTTOM, value);
    return this;
  }

  left(value: number | Percent | 'auto') {
    this._node.setPosition(Yoga.EDGE_LEFT, value);
    return this;
  }

  width(value: number | Percent | 'auto') {
    this._node.setWidth(value);
    return this;
  }

  minWidth(value: number | Percent | 'auto') {
    this._node.setMinWidth(value);
    return this;
  }

  maxWidth(value: number | Percent | 'auto') {
    this._node.setMaxWidth(value);
    return this;
  }

  height(value: number | Percent | 'auto') {
    this._node.setHeight(value);
    return this;
  }

  minHeight(value: number | Percent | 'auto') {
    this._node.setMinHeight(value);
    return this;
  }

  maxHeight(value: number | Percent | 'auto') {
    this._node.setMaxHeight(value);
    return this;
  }

  margin(value: number) {
    this._node.setMargin(Yoga.EDGE_ALL, value);
    return this;
  }

  marginTop(value: number) {
    this._node.setMargin(Yoga.EDGE_TOP, value);
    return this;
  }

  marginRight(value: number) {
    this._node.setMargin(Yoga.EDGE_RIGHT, value);
    return this;
  }

  marginBottom(value: number) {
    this._node.setMargin(Yoga.EDGE_BOTTOM, value);
    return this;
  }

  marginLeft(value: number) {
    this._node.setMargin(Yoga.EDGE_LEFT, value);
    return this;
  }

  padding(value: number) {
    this._node.setPadding(Yoga.EDGE_ALL, value);
    return this;
  }

  paddingTop(value: number) {
    this._node.setPadding(Yoga.EDGE_TOP, value);
    return this;
  }

  paddingRight(value: number) {
    this._node.setPadding(Yoga.EDGE_RIGHT, value);
    return this;
  }

  paddingBottom(value: number) {
    this._node.setPadding(Yoga.EDGE_BOTTOM, value);
    return this;
  }

  paddingLeft(value: number) {
    this._node.setPadding(Yoga.EDGE_LEFT, value);
    return this;
  }

  direction(value: FlexDirection) {
    this._node.setFlexDirection(toYogaFlexDirection(value));
    return this;
  }

  getDirection() {
    return fromYogaFlexDirection(this._node.getFlexDirection());
  }

  alignContent(value: FlexAlign) {
    this._node.setAlignContent(toYogaAlign(value));
    return this;
  }

  getAlignContent() {
    return fromYogaAlign(this._node.getAlignContent());
  }

  alignItems(value: FlexAlign) {
    this._node.setAlignItems(toYogaAlign(value));
    return this;
  }

  getAlignItems() {
    return fromYogaAlign(this._node.getAlignItems());
  }

  justifyContent(value: FlexJustify) {
    this._node.setJustifyContent(toYogaJustify(value));
    return this;
  }

  getJustifyContent() {
    return fromYogaJustify(this._node.getJustifyContent());
  }

  flexWrap(value: FlexWrap) {
    this._node.setFlexWrap(toYogaWrap(value));
    return this;
  }

  getFlexWrap() {
    return fromYogaWrap(this._node.getFlexWrap());
  }

  flexGrow(value: number) {
    this._node.setFlexGrow(value);
    return this;
  }

  getFlexGrow() {
    return this._node.getFlexGrow();
  }

  build() {
    this._node.calculateLayout();
    return this.buildEntity();
  }

  buildEntity(parent?: g.E) {
    const entity = new this._entityClass(this.buildEntityParameterObject());
    if (parent) parent.append(entity);
    this._children.forEach((c) => c.buildEntity(entity));
    this._entity = entity;
    return entity;
  }

  buildEntityParameterObject() {
    const layout = this._node.getComputedLayout();
    return Object.assign({}, this._entityParameterObject, {
      scene: this._scene,
      x: layout.left,
      y: layout.top,
      width: layout.width,
      height: layout.height
    });
  }
}
