import { assetIds } from './assets';

// import { View } from '@rutan/akashic-flexbox';
import { View } from '../../esm/index';

export function main() {
  const scene = new g.Scene({
    game: g.game,
    assetIds: assetIds.map(String)
  });
  scene.onLoad.add(() => initScene(scene));
  g.game.pushScene(scene);
}

/**
 * シーンの初期化処理
 * @param scene
 */
function initScene(scene: g.Scene) {
  const root = View.create()
    .width(g.game.width)
    .height(g.game.height);

  // 背景画像
  root.child(createBackground(scene.asset));

  // メインボタン領域
  root.child(createMainArea(scene.asset));

  // フッター領域
  root.child(createFooter(scene.asset));

  // ルート要素をビルドして画面に貼り付け
  scene.append(root.build(scene));
}

/**
 * 背景画像の生成
 * @param asset
 */
function createBackground(asset: g.AssetAccessor) {
  return View.create({
    entityClass: g.Sprite,
    entityParameterObject: {
      src: asset.getImageById('scene_back')
    }
  })
    .position('absolute')
    .left(0)
    .top(0)
    .width('100%')
    .height('100%');
}

/**
 * メイン領域の生成
 * @param asset
 */
function createMainArea(asset: g.AssetAccessor) {
  const mainArea = View.create()
    .width('100%')
    .flexGrow(1)
    .direction('row')
    .flexWrap('wrap')
    .alignItems('center')
    .alignContent('center')
    .justifyContent('center');

  for (let i = 0; i < 4; ++i) {
    const mainButtonAsset = asset.getImageById('main_button');
    const button = View.create({
      entityClass: g.Sprite,
      entityParameterObject: {
        src: mainButtonAsset
      }
    })
      .width(mainButtonAsset.width)
      .height(mainButtonAsset.height)
      .margin(10);

    mainArea.child(button);
  }

  return mainArea;
}

/**
 * フッター領域の生成
 * @param asset
 */
function createFooter(asset: g.AssetAccessor) {
  const footerArea = View.create()
    .width('100%')
    .height(160)
    .direction('row')
    .alignItems('center')
    .justifyContent('spaceBetween')
    .paddingLeft(20)
    .paddingRight(20);

  // フッター背景
  const barAsset = asset.getImageById('menu_bar');
  const footerBar = View.create({
    entityClass: g.Sprite,
    entityParameterObject: {
      src: barAsset
    }
  })
    .position('absolute')
    .left(0)
    .top((160 - barAsset.height) / 2)
    .width(barAsset.width)
    .height(barAsset.height);
  footerArea.child(footerBar);

  // 左側メニュー
  const backButtonAsset = asset.getImageById('back_button');
  const leftButton = View.create({
    entityClass: g.Sprite,
    entityParameterObject: {
      src: backButtonAsset
    }
  })
    .width(backButtonAsset.width)
    .height(backButtonAsset.height);
  footerArea.child(leftButton);

  // 右側メニュー
  const rightButtonArea = View.create()
    .direction('row');
  footerArea.child(rightButtonArea);

  // 右側メニューの要素
  for (let i = 0; i < 3; ++i) {
    const circleButtonAsset = asset.getImageById('circle_button');
    const button = View.create({
      entityClass: g.Sprite,
      entityParameterObject: {
        src: circleButtonAsset
      }
    })
      .width(circleButtonAsset.width)
      .height(circleButtonAsset.height)
      .marginLeft(20);

    rightButtonArea.child(button);
  }

  return footerArea;
}
