import { Sprite } from "pixi.js";
import { initApp, initLink } from "./onLoadImage";

const onDomContentsLoaded = () => {
  const W = 800;
  const H = 600;
  const app = initApp(W, H);

  const img = Sprite.from("./150.png");
  app.stage.addChild(img);

  onLoadedImage(img).then((sprite) => {
    const baseTexture = sprite.texture.baseTexture;
    sprite.x = W / 2 - baseTexture.width / 2;
    sprite.y = H / 2 - baseTexture.height / 2;
  });

  initLink();
};

/**
 * Sprite.from("img")で生成されたSpriteの、画像ロード後の処理を指定する。
 * テクスチャバッファに保存されているか否かにかかわらず、実行されることを保証する。
 *
 * この関数はライブラリとして切り出してある。利用する場合はそちらをaddすること。
 * https://github.com/MasatoMakino/pixijs-loader-util
 *
 * @param sprite{Sprite}
 * @return {Promise<Sprite>}
 */
const onLoadedImage = (sprite) => {
  return new Promise((resolve, reject) => {
    if (sprite.texture.baseTexture.width !== 0) {
      resolve(sprite);
    } else {
      sprite.texture.baseTexture.once("loaded", () => {
        resolve(sprite);
      });
    }
  });
};

if (document.readyState !== "loading") {
  onDomContentsLoaded();
} else {
  document.addEventListener("DOMContentLoaded", onDomContentsLoaded);
}
