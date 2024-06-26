# 5. サードパーティのGitHub ActionsのバージョンをFull Changeset Hashで固定する

## ステータス

- [ ] 提案中
- [x] 承認
- [ ] 否認
- [ ] 廃止
- [ ] 保留

## 背景

今後、このリポジトリでの Reusable Workflow 提供を広めるにあたり、よりセキュアで壊れづらいな Workflow を提供していきたい。

## 決定

サードパーティの GitHub Actions のバージョンを Full Changeset Hash で固定する。バージョンコメントも記載する。

```yaml
- uses: owner/action-name@v1.0.0
# ↓
- uses: owner/action-name@26968a09c0ea4f3e233fdddbafd1166051a095f6 # v1.0.0
```

### サードパーティ以外の GitHub Actions はなぜ固定しないか？

サードパーティ以外とは、例えば [actions/checkout](https://github.com/marketplace/actions/checkout) のような Verified creator のこと。

🔗 [Marketplaceバッジについて \- GitHub Docs](https://docs.github.com/ja/apps/github-marketplace/github-marketplace-overview/about-marketplace-badges)

> GitHubは、アプリケーションを分析しません。 Marketplaceバッジは、パブリッシャーが上記の条件を満たしているということを確認しているだけに過ぎません。

Verified creator であっても、安全性が担保されているわけではない。

すべての GitHub Actions を Full Changeset Hash で固定すると、Dependabot version update による週次 PR 対応が増える。また、Full Changeset Hash で固定しても、安全性が完全に担保されるわけでもない。

そのため、今回は Verified creator でのバージョン固定は見送った。

## 影響

良い影響:

* サードパーティの GitHub Actions で git のタグが書き換えられても影響を受けない
* `owner/action-name@main` のような壊れやすい指定を排除できる

悪い影響:

* サードパーティの GitHub Actions を初めて導入する時に、若干の手間がかかる

中立的な影響:

* Dependabot version update には影響ない[^1]

[^1]: 例: https://github.com/route06/actions/pull/46#discussion_r1650261916
