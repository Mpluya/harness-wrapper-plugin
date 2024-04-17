This is a plugin wrapper around the OSS backstage plugin - [Harness CI/CD](https://github.com/harness/backstage-plugins/tree/main/plugins/harness-ci-cd).

Published Package - [@maeluyalarge/plugin-harness-ci-cd-wrapper](https://www.npmjs.com/package/@maeluyalarge/plugin-harness-ci-cd-wrapper)
---

### Local Development

This wrapper plugin was produced specifically to surface the Harness CI/CD backstage plugin within Tanzu Developer Portal (TDP). TDP's doc outlines the [steps](https://docs.vmware.com/en/VMware-Tanzu-Application-Platform/1.7/tap/tap-gui-configurator-create-plug-in-wrapper.html).

Ensure you have the following tools installed:
- node 16
- yarn 1.22.x

```
yarn install && yarn tsc && yarn workspaces run build
yarn login
yarn publish
```

---

### Run harness-wrapper-plugin in Tanzu Developer Portal
- [steps](https://docs.vmware.com/en/VMware-Tanzu-Application-Platform/1.7/tap/tap-gui-configurator-building.html)
