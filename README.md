# actions

ROUTE06内外から使われることを想定したGitHub Actionsです。

## 利用可能なGitHub Actions

各actionの説明や使い方はリンク先をどうぞ。

* [_add-assignee-to-pr.yml](./.github/workflows/_add-assignee-to-pr.yml)
* [_gh-discussion-comment-to-slack.yml](./.github/workflows/_notify-slack.yml)
* [_notify-slack.yml](./.github/workflows/_notify-slack.yml)

## 開発者向け

### ADR

このリポジトリでは[ADR (Architecture Decision Records)](https://adr.github.io/)を採用しています。

* [ADR](./docs/adr)

### ADRの追加方法

リポジトリのルートで以下を実行します。

```
npm install
npm run adr:new タイトル
```
