# ✅ PR Review Checklist

## Pre-review

- [ ] Read the PR description carefully (context, scope, issue link, and motivation)
- [ ] Understand the impact of this change: feature, fix, refactor, chore?

---

## General Review Flow

- [ ] Praise something specific and thoughtful in the PR
- [ ] Are commit messages clear, conventional (if applicable), and meaningful?
- [ ] Does the PR title follow the project’s naming convention?

---

## Code Quality

- [ ] Are variable and function names clear, consistent, and meaningful?
- [ ] Are functions small (ideally one paragraph or less)?
- [ ] Are functions cohesive (do one thing only)?
- [ ] Are default parameters used appropriately?
- [ ] Is the code readable without deep comments?
- [ ] Does the code follow the repo's styleguide or linting rules?

---

## Tests

- [ ] Are tests added for all new or changed functionality?
- [ ] Do the tests actually cover edge and corner cases?
- [ ] Are the test names descriptive?
- [ ] Are mocking/stubbing strategies correct (if used)?
- [ ] Do tests pass locally or in CI?

---

## Files & Structure

- [ ] Are any unrelated changes or “cruft” files (e.g., `.swp`, build files) accidentally committed?
- [ ] Are new files in appropriate folders/modules?
- [ ] Are deleted files properly justified in the PR?
- [ ] Do new files conform to the repository license?

---

## Functionality & Integration

- [ ] Does the code do what the PR claims?
- [ ] If the PR fixes an issue, does it **fully resolve** it?
- [ ] If applicable, has backward compatibility been preserved?
- [ ] Is the feature accessible (a11y) and responsive (frontend)?

---

## Tooling

- [ ] Does CI/CD pass?
- [ ] If not automated, did you build and test it locally?
- [ ] Are build scripts, Dockerfiles, or pipelines updated if needed?

---

## Post-Review

- [ ] Kindly comment your review — include praise and constructive feedback
- [ ] Approve or request changes clearly
- [ ] Merge and close if all criteria are met
- [ ] Thank the contributor!

---

## Optional Suggestions

- [ ] Suggest refactors that improve long-term maintainability
- [ ] Recommend splitting large PRs in the future for easier reviews
- [ ] Propose code comments or docs for non-obvious logic
