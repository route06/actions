# 定例用Discussion自動作成

## 導入手順

1. 定例用Discussionを自動作成したいリポジトリの `.github/workflows/` に `scripts` ディレクトリを作成し、 `createWeeklyMeetingDiscussion.cjs` ファイルを作成します
2. 作成したファイルに、本リポジトリの `.github/workflows/scripts/createWeeklyMeetingDiscussion.cjs` の中身をコピーして貼り付けてください
3. 次に、定例用Discussionを自動作成したいリポジトリの `.github/workflows/` に `create_weekly_meeting_discussion.yml` ファイルを作成します
4. 作成したファイルに、本リポジトリの `.github/workflows/create_weekly_meeting_discussion.yml` の中身をコピーして貼り付けてください
5. `create_weekly_meeting_discussion.yml` に `NOTE:` とコメントが書いてある箇所があるので、そこのコメントのとおりに修正を加えます 
6. 最後に、定例用Discussionを自動作成したいリポジトリに `_templates` ディレクトリを作成、 その下に `weekly_meeting_discussion` ディレクトリを作成して、 `description.md` ファイルを作成します
7. `description.md` が作成されるDiscussionの中身になりますので、自由に編集してください
8. 導入手順は以上となります、PRを作成し、mainリポジトリにマージしてください