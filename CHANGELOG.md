# Changelog

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
