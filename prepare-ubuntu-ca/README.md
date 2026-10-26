# Prepare Ubuntu CA trust

Temporary mitigation for the eMudhra CA incident described in [USN-8944-1](https://ubuntu.com/security/notices/USN-8944-1). The per-release version floors in `update-ca.sh` identify the first fixed Ubuntu package; they are not versions pinned for installation. Newer packages are accepted, and already updated runners skip package installation.

Use this composite action as the first step in each affected Ubuntu job, referenced by a full commit SHA. It does not require checkout. A local `./prepare-ubuntu-ca` reference inside a reusable workflow would resolve against the caller's workspace, so the shared workflows use an explicit repository reference.

The script is the single source for the package update and version policy. An unsupported OS or unsuccessful update fails before the job's application steps. This action does not replace the runner's Node binary or change its trust configuration.

For JavaScript actions, the calling job must declare:

```yaml
env:
  NODE_OPTIONS: --use-openssl-ca
  SSL_CERT_FILE: /etc/ssl/certs/ca-certificates.crt
  SSL_CERT_DIR: /etc/ssl/certs
```

These declarations intentionally remain in the workflows: GitHub does not allow setting `NODE_OPTIONS` through `GITHUB_ENV`, and a composite action's own environment does not configure later caller steps.

## Retirement criteria

This is not a permanent package-management layer. Remove the action calls and the temporary Node/CA environment settings together once all of the following are confirmed for the supported runner configurations:

1. GitHub has deployed fixed images and runner runtimes; verify the actual packages and bundled Node, not just a runner label or release announcement.
2. Unmodified hosted runners reject both affected certificate paths and pass normal GitHub API, checkout, and CLI checks without this action or its environment overrides.
3. Representative consumer runs on the selected shared-workflow release pass, including the notification paths used by those consumers.

Track provider rollout in [actions/runner-images#15018](https://github.com/actions/runner-images/issues/15018). Do not remove the mitigation merely because a calendar deadline has passed. After consumers adopt the replacement release, the helper can be removed from the current tree; historical SHA-pinned callers must retain access to their referenced commit.

## Limits

Action downloads and runner startup occur before this action and still require provider remediation. macOS, Java, containers, and custom trust stores are outside its scope. Installing packages may add latency or fail if repositories are unavailable. Rolling back restores the previous exposure.
