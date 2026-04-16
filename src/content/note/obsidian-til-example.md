---
title: "TIL: Fix Terraform OCI remote state lock errors quickly"
publishDate: "2026-04-15"
description: "When OCI Object Storage state locking fails, verify policy scope and object versioning first."
tags: ["terraform", "oci", "troubleshooting"]
---

Today I learned a quick triage sequence for Terraform remote state lock failures on OCI:

1. Confirm the IAM policy grants object read/write on the correct bucket compartment.
2. Verify object versioning is enabled for safer rollback.
3. Check if a stale lock object exists from an interrupted run.
4. Retry with a clean `terraform init -reconfigure` when backend settings changed.

This saves time before debugging provider-level errors.
