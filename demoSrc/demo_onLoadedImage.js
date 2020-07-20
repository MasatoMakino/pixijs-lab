import { Application, Sprite } from "pixi.js";
import { initLink, initApp } from "./onLoadImage";

/**
 * img.texture.baseTexture.on("loaded")の挙動を確認するためのデモ。
 * Mobile Safariの場合、bfcacheにより実行が保証されない。
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
