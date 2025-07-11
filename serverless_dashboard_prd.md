# 📝 Product Requirements Document (PRD)

## 📌 Project Title:  
**Serverless Management Dashboard**

---

## 1. 🧭 Overview

### Summary:
A web-based dashboard that allows users to upload files (CSV/JSON) to S3, trigger AWS Glue ETL jobs, monitor their status and logs, and visualize ingestion metrics. Also supports managing and monitoring multiple AWS serverless services like Lambda, Athena, and EventBridge.

---

## 2. 🎯 Goals

- Simplify interaction with serverless AWS components
- Provide real-time visibility into ETL and ingestion pipelines
- Enable DevOps/Data teams to manage jobs, view logs, and troubleshoot
- Create a user-friendly UI for non-technical users

---

## 3. 👤 Target Audience

- Data Engineers
- DevOps Engineers
- Platform/Infra Teams
- Technical PMs

---

## 4. 💡 Features

### ✅ Core Features

| Feature | Description |
|--------|-------------|
| **File Upload** | Upload CSV/JSON to specific S3 buckets |
| **ETL Trigger** | Automatically trigger Glue jobs via EventBridge |
| **Log Viewer** | Stream Glue/Lambda logs from CloudWatch |
| **Dashboard** | View ingestion status, job metrics, errors |
| **Lambda Monitor** | View invocations, error rates, durations |
| **Athena Queries** | Run and display query results from processed data |
| **Job History** | See historical runs with success/failure metadata |
| **Auth** | Optional Cognito/Auth0 login + role-based access control |

---

## 5. ✅ Acceptance Criteria

| ID | Criteria |
|----|----------|
| AC1 | User uploads CSV/JSON → file appears in correct S3 bucket |
| AC2 | Upload triggers Glue job automatically |
| AC3 | User can view Glue job logs via CloudWatch integration |
| AC4 | Failed jobs and logs are clearly visible in dashboard |
| AC5 | Authenticated users only can access dashboard |
| AC6 | Athena queries can be triggered and results displayed |
| AC7 | Real-time job metrics (duration, rows processed, etc.) appear on dashboard |

---

## 6. 🧱 Architecture Overview

**Frontend:**  
- React + Next.js  
- Tailwind CSS + shadcn/ui  
- React Query for API fetching  
- Vercel for deployment

**Backend:**  
- Node.js + NestJS  
- REST/GraphQL API to AWS  
- AWS SDK v3  
- PostgreSQL for job logs and metadata

**AWS Infra:**  
- S3 (uploads)  
- EventBridge (Glue triggers)  
- Glue (ETL jobs)  
- Lambda (optional compute)  
- Athena (query transformed data)  
- CloudWatch (logs & metrics)  
- RDS PostgreSQL or DynamoDB (job metadata)

---

## 7. ⚙️ Non-Functional Requirements

| NFR | Detail |
|-----|--------|
| **Security** | IAM roles with least privilege, AWS KMS encryption |
| **Performance** | Metrics and logs must update in <2s latency |
| **Availability** | 99.9% uptime, retry logic for failed jobs |
| **Accessibility** | WCAG-compliant UI (ARIA labels, keyboard nav) |
| **Scalability** | Should support 10+ Glue jobs and Lambda functions |

---

## 8. 📆 Timeline & Milestones

| Milestone | ETA |
|-----------|-----|
| Project Setup & CI/CD | Day 1–3 |
| S3 Upload + Trigger Glue | Week 1 |
| Dashboard UI (Job Cards) | Week 2 |
| CloudWatch Logs Integration | Week 3 |
| Lambda + Athena Metrics | Week 4 |
| Auth + Permissions | Week 5 |
| Final QA & Deployment | Week 6 |

---

## 9. 📋 Open Questions

- Should we allow manual job re-runs from dashboard?
- Should logs be stored beyond CloudWatch (for long-term)?
- Do users need custom Athena query saving/sharing?