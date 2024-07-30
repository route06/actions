# actions

ROUTE06内外から使われることを想定したGitHub ActionsのReusable Workflow集です。

## 利用可能なWorkflow

各workflowの説明や使い方はリンク先をどうぞ。

<!-- アルファベット順にソートする -->

* [add_assignee_to_pr.yml](./.github/workflows/add_assignee_to_pr.yml)
* [codeql.yml](./.github/workflows/codeql.yml)
* [get_last_discussion_url.yml](./.github/workflows/get_last_discussion_url.yml)
* [gh_discussion_comment_to_slack.yml](./.github/workflows/gh_discussion_comment_to_slack.yml)
* [notify_slack_on_ci_failed.yml](./.github/workflows/notify_slack_on_ci_failed.yml)

### Release Candidate

利用可能ですが、最終的なテストやフィードバック待ちのバージョンとなります。  

* [create_gh_discussion.yml](./.github/workflows/create_gh_discussion.yml)
* [get_next_scheduled_date.yml](./.github/workflows/get_next_scheduled_date.yml)

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

### リリース方法

1. 前回のリリース以降に main ブランチに commit が追加されると、Release PR が作られます
    * 例: https://github.com/route06/actions/pull/21
1. デフォルトではパッチバージョンが 1 つ上がります
    * メジャーバージョンを上げたい時は `tagpr:major` ラベルを、マイナーバージョンを上げたい時は `tagpr:minor` ラベルを付けて下さい
1. マージすると [Releases](https://github.com/route06/actions/releases) に、新しいバージョンのリリースが作られます
    * 加えて、v2 などのタグが最新の v2.Y.Z を指すように、git tag が書き換えられます
