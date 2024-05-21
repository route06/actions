# 4. tagprの導入

## ステータス

- [ ] 提案中
- [x] 承認
- [ ] 否認
- [ ] 廃止
- [ ] 保留

## 背景

リリースを自動化して、リリースフローを明確にしたい。

## 決定

[tagpr](https://github.com/Songmu/tagpr)を導入して、リリースを自動化する。

## 影響

- tagprが自動的に作成するRelease PRをマージするだけで、[Releases](https://github.com/route06/actions/releases) へのリリースが完了する
    - デフォルトではパッチバージョンが1つ上がったリリースが作られる
    - Release PRに `tagpr:major` ラベルを付ければメジャーバージョンが、`tagpr:minor` ラベルを付ければパッチバージョンが1つ上がる
- 初見では以上の仕組みが分からないと思うので、README.mdにリリースフローを記載する
