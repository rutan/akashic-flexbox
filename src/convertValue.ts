import Yoga from 'yoga-layout-prebuilt';
import { FlexAlign, FlexDirection, FlexJustify, FlexWrap } from './types';

export function toYogaFlexDirection(value: FlexDirection) {
  switch (value) {
    case 'column':
      return Yoga.FLEX_DIRECTION_COLUMN;
    case 'column-reverse':
      return Yoga.FLEX_DIRECTION_COLUMN_REVERSE;
    case 'row':
      return Yoga.FLEX_DIRECTION_ROW;
    case 'row-reverse':
      return Yoga.FLEX_DIRECTION_ROW_REVERSE;
  }
}

export function fromYogaFlexDirection(value: Yoga.YogaFlexDirection): FlexDirection {
  switch (value) {
    case Yoga.FLEX_DIRECTION_ROW:
      return 'row';
    case Yoga.FLEX_DIRECTION_ROW_REVERSE:
      return 'row-reverse';
    case Yoga.FLEX_DIRECTION_COLUMN:
      return 'column';
    case Yoga.FLEX_DIRECTION_COLUMN_REVERSE:
      return 'column-reverse';
    default:
      throw `not support YogaFlexDirection: ${value}`;
  }
}

export function toYogaAlign(value: FlexAlign): Yoga.YogaAlign {
  switch (value) {
    case 'auto':
      return Yoga.ALIGN_AUTO;
    case 'flexStart':
      return Yoga.ALIGN_FLEX_START;
    case 'center':
      return Yoga.ALIGN_CENTER;
    case 'flexEnd':
      return Yoga.ALIGN_FLEX_END;
    case 'stretch':
      return Yoga.ALIGN_STRETCH;
    case 'baseline':
      return Yoga.ALIGN_BASELINE;
    case 'spaceBetween':
      return Yoga.ALIGN_SPACE_BETWEEN;
    case 'spaceAround':
      return Yoga.ALIGN_SPACE_AROUND;
  }
}

export function fromYogaAlign(value: Yoga.YogaAlign): FlexAlign {
  switch (value) {
    case Yoga.ALIGN_AUTO:
      return 'auto';
    case Yoga.ALIGN_FLEX_START:
      return 'flexStart';
    case Yoga.ALIGN_CENTER:
      return 'center';
    case Yoga.ALIGN_FLEX_END:
      return 'flexEnd';
    case Yoga.ALIGN_STRETCH:
      return 'stretch';
    case Yoga.ALIGN_BASELINE:
      return 'baseline';
    case Yoga.ALIGN_SPACE_BETWEEN:
      return 'spaceBetween';
    case Yoga.ALIGN_SPACE_AROUND:
      return 'spaceAround';
    default:
      throw `not support YogaAlign: ${value}`;
  }
}

export function toYogaJustify(value: FlexJustify) {
  switch (value) {
    case 'flexStart':
      return Yoga.JUSTIFY_FLEX_START;
    case 'center':
      return Yoga.JUSTIFY_CENTER;
    case 'flexEnd':
      return Yoga.JUSTIFY_FLEX_END;
    case 'spaceBetween':
      return Yoga.JUSTIFY_SPACE_BETWEEN;
    case 'spaceAround':
      return Yoga.JUSTIFY_SPACE_AROUND;
    case 'spaceEvenly':
      return Yoga.JUSTIFY_SPACE_EVENLY;
  }
}

export function fromYogaJustify(value: Yoga.YogaJustifyContent): FlexJustify {
  switch (value) {
    case Yoga.JUSTIFY_FLEX_START:
      return 'flexStart';
    case Yoga.JUSTIFY_CENTER:
      return 'center';
    case Yoga.JUSTIFY_FLEX_END:
      return 'flexEnd';
    case Yoga.JUSTIFY_SPACE_BETWEEN:
      return 'spaceBetween';
    case Yoga.JUSTIFY_SPACE_AROUND:
      return 'spaceAround';
    case Yoga.JUSTIFY_SPACE_EVENLY:
      return 'spaceEvenly';
    default:
      throw `not support YogaJustify: ${value}`;
  }
}

export function toYogaWrap(value: FlexWrap) {
  switch (value) {
    case 'wrap':
      return Yoga.WRAP_WRAP;
    case 'noWrap':
      return Yoga.WRAP_NO_WRAP;
    case 'wrapReverse':
      return Yoga.WRAP_WRAP_REVERSE;
  }
}

export function fromYogaWrap(value: Yoga.YogaFlexWrap): FlexWrap {
  switch (value) {
    case Yoga.WRAP_WRAP:
      return 'wrap';
    case Yoga.WRAP_NO_WRAP:
      return 'noWrap';
    case Yoga.WRAP_WRAP_REVERSE:
      return 'wrapReverse';
    default:
      throw `not support YogaWrap: ${value}`;
  }
}
