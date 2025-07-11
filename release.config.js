module.exports = {
  branches: ['master'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/npm',
    '@semantic-release/git',
    {
      assets: ['package.json', 'package-lock.json', 'CHANGELOG.md'],
      message:
        'release: v${nextRelease.version} \n\n${nextRelease.notes}\n\n[skip ci]',
    },
  ],
  repositoryUrl: 'https://github.com/amitrazz/serverless-dashboard',
};
