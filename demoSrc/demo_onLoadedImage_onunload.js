import { Sprite } from "pixi.js";
import { initApp, initLink } from "./onLoadImage";

/**
 * 一般的なbfcache対策であるunloadハンドラを追加した場合の
 * img.texture.baseTexture.on("loaded")の挙動を確認するためのデモ。
 *
 * 症状は改善せず、実行は担保されない。
 */
const onDomContentsLoaded = () => {
  const W = 800;
  const H = 600;
  const app = initApp(W, H);

  const img = Sprite.from("./150.png");
  app.stage.addChild(img);

  const onLoadImage = () => {
    img.x = W / 2 - img.texture.baseTexture.width / 2;
    img.y = H / 2 - img.texture.baseTexture.height / 2;
  };
  img.texture.baseTexture.on("loaded", onLoadImage);

  initLink();
};

if (document.readyState !== "loading") {
  onDomContentsLoaded();
} else {
  document.addEventListener("DOMContentLoaded", onDomContentsLoaded);
}

window.addEventListener("unload", () => {
  //bfcache
});
