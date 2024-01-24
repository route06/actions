# actions

ROUTE06内外から使われることを想定したGitHub ActionsのReusable Workflow集です。

## 利用可能なWorkflow

各workflowの説明や使い方はリンク先をどうぞ。

<!-- アルファベット順にソートする -->

* [add_assignee_to_pr.yml](./.github/workflows/add_assignee_to_pr.yml)
* [get_last_discussion_url.yml](./.github/workflows/get_last_discussion_url.yml)
* [gh_discussion_comment_to_slack.yml](./.github/workflows/gh_discussion_comment_to_slack.yml)
* [notify_slack.yml](./.github/workflows/notify_slack.yml)

## 開発者向け

### ADR

このリポジトリでは[ADR (Architecture Decision Records)](https://adr.github.io/)を採用しています。

* [ADR](./docs/adr)

#### ADRの追加方法

リポジトリのルートで以下を実行します。

```
npm install
npm run adr:new タイトル
```
