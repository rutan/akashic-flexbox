# @rutan/akashic-flexbox

> use [yoga-layout](https://github.com/facebook/yoga) in [Akashic Engine](https://akashic-games.github.io/)

## install
```
npm install @rutan/akashic-flexbox
```

## Usage
```typescript
import {View} from '@rutan/akashic-flexbox';

export function main() {
  const scene = new g.Scene({ game: g.game });
  scene.loaded.add(() => {
    const root = View.create()
      .width(g.game.width)
      .height(g.game.height)
      .direction('row')
      .justifyContent('center')
      .alignItems('center');

    root.child(
      View.create({
          entityClass: g.FilledRect,
          entityParameterObject: { cssColor: '#f00' }
       })
         .width(100)
         .height(50)
    );

    root.child(
      View.create({
          entityClass: g.FilledRect,
          entityParameterObject: { cssColor: '#0f0' }
       })
         .width(200)
         .height(100)
         .marginLeft(50)
    );

    scene.append(root.build(scene));
  });
  g.game.pushScene(scene);
}
```

## demo
please see `demo/`
