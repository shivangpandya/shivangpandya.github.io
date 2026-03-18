---
title: "Integration Patterns on Oracle Cloud: REST, SOAP, and FBDI"
description: "A practical guide to the three integration patterns I use most when connecting enterprise systems on Oracle Cloud Infrastructure."
publishDate: "2025-01-08"
tags: ["oci", "integration", "architecture", "oic"]
---

One of the most common challenges in enterprise cloud projects isn't the compute or storage — it's integration. How do you connect your existing ERP, FTP servers, SaaS tools, and databases cleanly? Here are the three patterns I reach for most often on OCI.

## REST APIs via Oracle Integration Cloud

The default for most modern integrations. Oracle Integration Cloud (OIC) provides a visual designer for REST-based integrations that handles error handling, retries, and logging out of the box.

For customer-facing APIs, I typically recommend placing Oracle API Gateway in front of OIC. This gives you rate limiting, authentication (OAuth, JWT), and request transformation without baking those concerns into the integration logic itself.

A typical pattern looks like this:

```
Client → API Gateway (auth, rate limit) → OIC (transform, route) → Backend System
```

OIC's adapter library is extensive — Salesforce, ServiceNow, SAP, and most major SaaS platforms have pre-built adapters. This saves significant development time compared to building REST clients from scratch.

## SOAP and legacy systems

Enterprise customers almost always have SOAP services running somewhere — typically older on-premise ERP modules or legacy middleware. OIC handles SOAP well through its SOAP adapter.

A pattern I've used repeatedly: expose a SOAP endpoint externally (for backward compatibility with older clients) while translating to REST internally for new services. OIC handles the protocol translation cleanly, and the mapping designer makes the transformation logic visible and auditable — which matters for compliance-heavy environments.

## FBDI — File-Based Data Import

This is the pattern that surprises people coming from non-Oracle backgrounds. FBDI is Oracle's bulk data loading mechanism for Fusion Cloud applications. You:

1. Prepare a structured CSV in the FBDI template format
2. Zip and upload it to Oracle UCM or OCI Object Storage
3. Trigger a scheduled ESS job to process the file
4. Monitor the job log for errors

```
Source System → Extract CSV → FBDI Template → Object Storage → ESS Job → Fusion
```

> FBDI looks old-fashioned but it's often the right choice for high-volume batch loads where transactional integrity matters more than latency.

I've used FBDI to load hundreds of thousands of GL journal entries, supplier invoices, and asset records into Oracle Fusion ERP — reliably, with full auditability.

## Which pattern when?

| Scenario | Pattern |
|---|---|
| Real-time, event-driven | REST via OIC |
| Legacy system compatibility | SOAP via OIC |
| Bulk data loads into Fusion | FBDI |
| High-volume API traffic | API Gateway + OIC |

Understanding which pattern fits which use case is half the battle. The other half is testing your error handling — that's where most integration projects run into trouble.
