# 🧑‍💻 Contributing to This Project

Thank you for considering contributing! Whether you're fixing a bug, proposing a feature, improving documentation, or reviewing a PR — we welcome your input. 🙌

---

## 📦 How to Contribute

### 🛠️ 1. Fork & Clone

```bash
git clone https://github.com/amitrazz/serverless-dashboard.git
cd serverless-dashboard
```

### 🧹 2. Setup

Follow instructions in `README.md` to install dependencies and run the project locally.

```bash
npm install
npm run dev
```

> For monorepos: check `frontend/`, `backend/`, and `infra/` folders for their own setup.

### 🌱 3. Create a Feature Branch

```bash
git checkout -b feat/your-feature-name
```

---

## 📥 Pull Request Guidelines

### ✅ Do

- Create small, focused PRs with a clear purpose
- Reference related issues in the description (`Fixes #123`)
- Follow commit message conventions:
  `feat:`, `fix:`, `refactor:`, `docs:`, `test:`, `chore:`

### 🚫 Don’t

- Don't submit PRs with unrelated or noisy changes
- Don't commit `node_modules`, `.env`, build artifacts, or editor temp files
- Don't change formatting/lint rules without discussion

---

## 🧪 Testing & Validation

Before submitting your PR:

- [ ] Run all unit & integration tests
- [ ] Check for lint issues (`npm run lint`)
- [ ] Build the project (`npm run build`)
- [ ] Manually test your changes if relevant

---

## ✅ Pull Request Review Checklist

### 🔍 Pre-review

- [ ] Read the PR description carefully
- [ ] Understand the impact of this change (feature, fix, refactor, chore)

### 📘 General Review

- [ ] Praise something positive and specific in the PR
- [ ] Clear, meaningful commit messages and PR title
- [ ] Linked to relevant issue or user story

### 🧹 Code Quality

- [ ] Clean, descriptive naming
- [ ] Small, single-purpose functions
- [ ] Reasonable default parameters
- [ ] Readable and modular logic
- [ ] Matches the repo's lint/style config

### 🧪 Tests

- [ ] Covers new/changed functionality
- [ ] Includes edge/corner cases
- [ ] Descriptive test names
- [ ] Passes locally and in CI

### 🗂️ File Hygiene

- [ ] No editor temp or build files committed
- [ ] Files belong to appropriate module
- [ ] New files follow license guidelines

### 🧪 Functionality

- [ ] Works as described
- [ ] Fixes the issue if one was referenced
- [ ] No major regressions or broken features

### ⚙️ Tooling

- [ ] CI/CD pipelines pass
- [ ] Docker, scripts, or build tooling updated if affected

### 🤝 Post-Review

- [ ] Leave constructive feedback and kind comments
- [ ] Approve or request changes clearly
- [ ] Merge when ready and thank the contributor 🎉

---

## 🤝 Code of Conduct

We are committed to creating a respectful, inclusive environment.
Please read and adhere to our [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md).

---

## ❓ Need Help?

Open a discussion in the **Issues** or ping the maintainer on the PR thread.
Let’s build something great — together.
