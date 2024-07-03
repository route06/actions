/**
 * @fileoverview Discussionを作成するためのスクリプト
 */

const fs = require("fs");
const { title } = require("process");

/**
 * @param {object} github 
 * @param {string} owner 
 * @param {string} repositoryName 
 * @returns
 */
async function featchRepoIdAndDiscussionCategoryId(github, owner, repositoryName, discussionCategorySlug) {
  const result = await github.graphql(`query($owner:String!, $repositoryName:String!, $discussionCategorySlug:String!) {
    repository(owner: $owner, name: $repositoryName) {
      id
      discussionCategory(slug: $discussionCategorySlug) {
        id
      }
    }
  }`, {
    owner: owner,
    repositoryName: repositoryName,
    discussionCategorySlug: discussionCategorySlug,
  });

  return {repositoryId: result.repository.id, categoryId: result.repository.discussionCategory.id};
}

async function createWeeklyReportDiscussion(github, repositoryId, categoryId, title, description) {
  const result = await github.graphql(`mutation($repositoryId:ID!, $categoryId:ID!, $title:String!, $body:String!) {
    createDiscussion(input: {repositoryId: $repositoryId, categoryId: $categoryId, title: $title, body: $body}) {
      discussion {
        id
      }
    }
  }`, {
    repositoryId: repositoryId,
    categoryId: categoryId,
    title: title,
    body: description
  });
}

const WEEKLY_REPORT_TEMPLATE_DIR = "./_templates/weekly_meeting_discussion";
const DESCRIPTION_TEMPLATE_PATH = `${WEEKLY_REPORT_TEMPLATE_DIR}/description.md`;

module.exports = async ({ github }) => {
  const { OWNER, REPOSITORY_NAME, DISCUSSION_CATEGORY_SLUG, TARGET_DATE, TITLE } = process.env;

  const repositoryIdAndCategoryId = await featchRepoIdAndDiscussionCategoryId(
    github,
    OWNER,
    REPOSITORY_NAME,
    DISCUSSION_CATEGORY_SLUG,
  )

  const title = `${TARGET_DATE} ${TITLE}`;
  const description = fs.readFileSync(DESCRIPTION_TEMPLATE_PATH, "utf8");

  const discussionId = await createWeeklyReportDiscussion(
    github,
    repositoryIdAndCategoryId.repositoryId,
    repositoryIdAndCategoryId.categoryId,
    title,
    description,
  );
}