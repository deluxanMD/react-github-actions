module.exports = {
  branches: "main",
  repositoryUrl: "https://github.com/deluxanMD/react-github-actions",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/npm",
    "@semantic-release/github"
  ]
};
