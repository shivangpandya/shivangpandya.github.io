---
title: "Terraform tip: remote state on OCI Object Storage"
publishDate: "2025-02-10"
---

Store Terraform state in OCI Object Storage with a pre-authenticated request URL as the backend endpoint. Add state locking using a DynamoDB-compatible table in OCI NoSQL. Keeps your IaC team from overwriting each other's state during concurrent deployments.
