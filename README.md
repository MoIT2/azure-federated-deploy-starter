# Azure Federated Deploy Starter (Lab Repository)

Starter repository for the Pluralsight hands-on lab **Deploy an Azure App with GitHub Actions and Federated Identity**. **Fork** this repository into your own GitHub account, then follow the lab guide.

## What is in here

- `server.js`, `package.json`: the shipment tracker, a zero-dependency Node app the workflow deploys to Azure App Service. Its `/version` endpoint returns the deployed application version.
- `.github/workflows/deploy.yml`: the deployment workflow, shipped incomplete on purpose. Two marked sections (the Azure sign-in step and the deploy step) and an `AZURE_WEBAPP_NAME` placeholder are completed during the lab, and the lab walks you through running and troubleshooting the workflow.

## What the lab has you configure in your fork

- Repository secrets `AZURE_CLIENT_ID`, `AZURE_TENANT_ID`, and `AZURE_SUBSCRIPTION_ID`: the identity and subscription values for federated sign-in. None of them is a password or key; the trust itself comes from a federated credential you create on an Azure managed identity, scoped to your fork.
- The two marked workflow sections, using the exact steps the lab guide provides.

The application code is correct and never changes during the lab. The workflow file is the only file you edit.
