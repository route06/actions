# Changelog

## [v2.4.1](https://github.com/route06/actions/compare/v2.4.0...v2.4.1) - 2024-09-26
### Maintenance :technologist:
- build(deps): bump Songmu/tagpr from 1.4.0 to 1.4.1 by @dependabot in https://github.com/route06/actions/pull/78
- Add workflow_dispatch to My Release workflow by @masutaka in https://github.com/route06/actions/pull/76
- build(deps): bump reviewdog/action-actionlint from 1.54.0 to 1.55.0 by @dependabot in https://github.com/route06/actions/pull/81
- build(deps): bump Songmu/tagpr from 1.4.1 to 1.4.2 by @dependabot in https://github.com/route06/actions/pull/80
### Other Changes
- Refactor .github/workflows/create_gh_issue.yml by @masutaka in https://github.com/route06/actions/pull/77
- Add missing workflow links to README.md by @masutaka in https://github.com/route06/actions/pull/74
- Fix the usage of create_gh_issue.yml by @masutaka in https://github.com/route06/actions/pull/75
- Dynamically generate CodeQL jobs by @masutaka in https://github.com/route06/actions/pull/82

## [v2.4.0](https://github.com/route06/actions/compare/v2.3.0...v2.4.0) - 2024-09-13
### New Features :tada:
- 指定した GitHub Discussion ID に固定コメントを追加する reusable workflow を作成 by @masutaka in https://github.com/route06/actions/pull/72
- GitHub Issue を作成する reusable workflow を作成する by @masutaka in https://github.com/route06/actions/pull/73
### Maintenance :technologist:
- build(deps-dev): bump adr from 1.4.6 to 1.5.1 by @dependabot in https://github.com/route06/actions/pull/69
- build(deps-dev): bump adr from 1.5.1 to 1.5.2 by @dependabot in https://github.com/route06/actions/pull/71

## [v2.3.0](https://github.com/route06/actions/compare/v2.2.0...v2.3.0) - 2024-08-15
### New Features :tada:
- create_gh_discussion.ymlのoutputsに作成したDiscussionIDを持たせる by @TomckySan in https://github.com/route06/actions/pull/65
### Maintenance :technologist:
- 全ての workflow に `name:` を設定しつつ、reusable workflow のドキュメントを改善する by @masutaka in https://github.com/route06/actions/pull/67
- build(deps): bump Songmu/tagpr from 1.3.0 to 1.4.0 by @dependabot in https://github.com/route06/actions/pull/68

## [v2.2.0](https://github.com/route06/actions/compare/v2.1.7...v2.2.0) - 2024-08-01
### New Features :tada:
- Discussionを自動生成するReusable Workflowsの作成 by @TomckySan in https://github.com/route06/actions/pull/52
- スケジュールされた次の日付を取得するワークフローを作成 by @TomckySan in https://github.com/route06/actions/pull/59
### Maintenance :technologist:
- build(deps-dev): bump adr from 1.4.5 to 1.4.6 by @dependabot in https://github.com/route06/actions/pull/50
- maintenance: use github app token by @MH4GF in https://github.com/route06/actions/pull/49
- build(deps): bump reviewdog/action-actionlint from 1.51.0 to 1.53.0 by @dependabot in https://github.com/route06/actions/pull/54
- build(deps): bump actions/create-github-app-token from 1.10.2 to 1.10.3 by @dependabot in https://github.com/route06/actions/pull/55
- build(deps): bump reviewdog/action-actionlint from 1.53.0 to 1.54.0 by @dependabot in https://github.com/route06/actions/pull/58
- Pin actions/create-github-app-token to major version by @masutaka in https://github.com/route06/actions/pull/56
### Other Changes
- workflows/create_discussion.yml で空のテンプレートファイルを許容する by @TomckySan in https://github.com/route06/actions/pull/53
- Rename create_discussion.yml to create_gh_discussion.yml by @masutaka in https://github.com/route06/actions/pull/57
- Rename get_next_scheduled_date.yml to calc_next_date.yml by @masutaka in https://github.com/route06/actions/pull/62
- Bit improve create_gh_discussion.yml by @masutaka in https://github.com/route06/actions/pull/63
- Improve input name of create_gh_discussion.yml by @masutaka in https://github.com/route06/actions/pull/64
- ワークフロー get_next_scheduled_date の追加およびcreate_discussionの改善 by @TomckySan in https://github.com/route06/actions/pull/61

## [v2.1.7](https://github.com/route06/actions/compare/v2.1.6...v2.1.7) - 2024-06-26
### Maintenance :technologist:
- build(deps): bump reviewdog/action-actionlint from 1.48.0 to 1.51.0 by @dependabot in https://github.com/route06/actions/pull/46
### Other Changes
- Use full changeset hash for 3rd-party GitHub Actions by @masutaka in https://github.com/route06/actions/pull/48

## [v2.1.6](https://github.com/route06/actions/compare/v2.1.5...v2.1.6) - 2024-06-18
### Fix bug :bug:
- Fix gh_discussion_comment_to_slack.yml part2 by @masutaka in https://github.com/route06/actions/pull/43
- fix missing permission for my_setup_pr.yml by @masutaka in https://github.com/route06/actions/pull/44

## [v2.1.5](https://github.com/route06/actions/compare/v2.1.4...v2.1.5) - 2024-06-18
### Fix bug :bug:
- Fix gh_discussion_comment_to_slack.yml by @masutaka in https://github.com/route06/actions/pull/41
### Other Changes
- maintenance: Setup merge queue and remove push event by @MH4GF in https://github.com/route06/actions/pull/40

## [v2.1.4](https://github.com/route06/actions/compare/v2.1.3...v2.1.4) - 2024-06-17
### Maintenance :technologist:
- Introduce actionlint workflow by @masutaka in https://github.com/route06/actions/pull/35
- Refactor CI by @masutaka in https://github.com/route06/actions/pull/38

## [v2.1.3](https://github.com/route06/actions/compare/v2.1.2...v2.1.3) - 2024-06-13
### Fix bug :bug:
- CodeQL workflow ignores deleted files by @masutaka in https://github.com/route06/actions/pull/34
### Maintenance :technologist:
- Avoid concurrent release workflow by @masutaka in https://github.com/route06/actions/pull/31
- maintenance: change section and add label for release.yml by @MH4GF in https://github.com/route06/actions/pull/33

## [v2.1.2](https://github.com/route06/actions/compare/v2.1.1...v2.1.2) - 2024-05-28
### Other Changes
- Add MIT License by @masutaka in https://github.com/route06/actions/pull/29

## [v2.1.1](https://github.com/route06/actions/compare/v2.1.0...v2.1.1) - 2024-05-27
### Update modules :up:
- build(deps): bump actions/setup-java from 3 to 4 by @dependabot in https://github.com/route06/actions/pull/27

## [v2.1.0](https://github.com/route06/actions/compare/v2.0.3...v2.1.0) - 2024-05-24
### New Features :tada:
- Introduce CodeQL workflow by @masutaka in https://github.com/route06/actions/pull/25

## [v2.0.3](https://github.com/route06/actions/compare/v2.0.2...v2.0.3) - 2024-05-22
### Fix bug :bug:
- Fix release workflow by @masutaka in https://github.com/route06/actions/pull/23

## [v2.0.2](https://github.com/route06/actions/compare/v2.0.1...v2.0.2) - 2024-05-21
- Introduce tagpr for automatic release by @masutaka in https://github.com/route06/actions/pull/20
- Release 時に v2 等の git tag が最新の v2.Y.Z を指すように書き換える by @masutaka in https://github.com/route06/actions/pull/22

## [v2.0.1](https://github.com/route06/actions/compare/v2.0.0...v2.0.1) - 2024-05-17
- build(deps): bump ls-lint/action from 2.2.2 to 2.2.3 by @dependabot in https://github.com/route06/actions/pull/18
- Fix permissions of add_assignee_to_pr.yml by @masutaka in https://github.com/route06/actions/pull/19

## [v2.0.0](https://github.com/route06/actions/compare/v2.0.0...v2) - 2024-05-17
- build(deps): bump ls-lint/action from 2.2.2 to 2.2.3 by @dependabot in https://github.com/route06/actions/pull/18
- Fix permissions of add_assignee_to_pr.yml by @masutaka in https://github.com/route06/actions/pull/19

## [v2.0.0](https://github.com/route06/actions/compare/v1...v2.0.0) - 2024-01-24
- Upgrade README.md by @masutaka in https://github.com/route06/actions/pull/14
- feat: add get-last-discussion-url workflow by @MH4GF in https://github.com/route06/actions/pull/12
- feat!: ワークフローの命名規則をsnake_caseに変更 by @MH4GF in https://github.com/route06/actions/pull/15
- v2 に向けた調整 by @masutaka in https://github.com/route06/actions/pull/17

## [v1.1.0](https://github.com/route06/actions/compare/v1.0.0...v1.1.0) - 2024-01-19
- feat: add gh-discussion-comment-to-slack workflow by @MH4GF in https://github.com/route06/actions/pull/13

## [v1.0.0](https://github.com/route06/actions/compare/v1.0.0...v1) - 2024-01-19
- feat: add gh-discussion-comment-to-slack workflow by @MH4GF in https://github.com/route06/actions/pull/13

## [v1.0.0](https://github.com/route06/actions/commits/v1.0.0) - 2024-01-17
- feat: PRにassigneeを追加するreusable workflowを追加 by @MH4GF in https://github.com/route06/actions/pull/1
- fix: reusable workflowは、.github/workflows/ に配置する必要があるため修正 by @MH4GF in https://github.com/route06/actions/pull/3
- feat: Slack通知を行うワークフローを追加 by @MH4GF in https://github.com/route06/actions/pull/2
- feat: CODEOWNERS ファイルを設定 by @MH4GF in https://github.com/route06/actions/pull/5
- maintenance: ADRを書けるようにする by @MH4GF in https://github.com/route06/actions/pull/9
- Introduce dependabot by @masutaka in https://github.com/route06/actions/pull/10
- docs: セマンティックバージョニングについてのADRを追加 by @MH4GF in https://github.com/route06/actions/pull/11
