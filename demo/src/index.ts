import { View } from '../../esm/View';

export function main(_params: any) {
  const scene = new g.Scene({ game: g.game });
  scene.loaded.add(() => {
    const root = View.create({ scene })
      .width(g.game.width)
      .height(g.game.height)
      .direction('column')

    // 背景
    root.child(
      View.create({
        scene,
        entityClass: g.FilledRect,
        entityParameterObject: {
          cssColor: '#fff'
        }
      })
        .position('absolute')
        .width('100%')
        .height('100%')
    );

    // 設問
    root.child(
      View.create({
        scene,
        entityClass: g.FilledRect,
        entityParameterObject: {
          cssColor: '#999'
        }
      })
        .width('100%')
        .height(50)
        .justifyContent('center')
        .alignContent('center')
        .alignItems('center')
    );

    // 選択肢エリア
    const choices = View.create({ scene })
      .direction('row')
      .width('100%')
      .flexGrow(1)
      .justifyContent('center')
      .alignItems('center')
      .alignContent('center')
      .flexWrap('wrap');
    root.child(choices);

    // それぞれの選択肢
    [
      '#f00',
      '#ff0',
      '#0ff',
      '#00f',
      '#f0f'
    ].forEach((cssColor) => {
      choices.child(
        View.create({
          scene,
          entityClass: g.FilledRect,
          entityParameterObject: {
            cssColor
          }
        })
          .width(180)
          .height(120)
          .margin(10)
      );
    });

    // 右下のボタン
    // （本当はそんなものないけど……）
    root.child(
      View.create({
        scene,
        entityClass: g.FilledRect,
        entityParameterObject: {
          cssColor: '#ccf'
        }
      })
        .position('absolute')
        .right(10)
        .bottom(10)
        .width(56)
        .height(56)
    )

    scene.append(root.build());
  });
  g.game.pushScene(scene);
}
