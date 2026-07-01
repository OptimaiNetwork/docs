---
sidebar_position: 1
title: "Use Cases"
description: "Practical workflows that connect OptimAI Search, Claw, Persona, nodes, and campaigns."
---

# Use Cases

The best way to understand OptimAI is to follow a workflow from request to result. Each example below shows how the same stack connects: Search finds context, Claw executes work, Persona preserves memory, and the data layer validates outputs.

:::note[About metrics]
The examples describe expected value qualitatively. Do not publish hard ROI numbers unless they come from measured customer or product data.
:::

## Use Case Matrix

| Use case | Primary product | Supporting layer | Output |
| --- | --- | --- | --- |
| Market intelligence | Claw | Search, Persona | cited brief, competitor table, source list |
| Product monitoring | Claw | campaigns, nodes | recurring change log and alerts |
| Research assistant | Search | Claw, Persona | source-backed answer and reusable notes |
| Lead research | Claw | campaigns, validation | structured company dataset |
| Content strategy | Search | Persona, Claw | topic map and content outlines |
| Compliance tracking | Search | Claw, validation | policy change summary with source links |
| Personal operator | Persona | Search, Claw | daily brief and task plan |

## Market Intelligence

```text
Claw, build a weekly market brief on decentralized AI data networks.
Include key players, product launches, funding news, social narratives, and source links.
```

**Flow**

1. Search retrieves current web and social sources.
2. Claw extracts companies, claims, dates, and links.
3. The data layer checks freshness and source quality.
4. Persona applies the user’s preferred format.
5. The final brief includes citations and a reusable competitor table.

**Good output**

- summary of market movement
- table of companies and products
- notable source links
- changes since last report
- follow-up questions for deeper research

## Product Monitoring

```text
Claw, monitor these competitor pages every Monday.
Track pricing changes, new features, integrations, positioning, and changelog updates.
```

**Flow**

1. A campaign defines watched URLs and extraction fields.
2. Core Nodes run recurring extraction tasks.
3. The Data Engine compares current and previous records.
4. Persona summarizes only meaningful changes.

**Good output**

- weekly diff
- affected pages
- extracted field changes
- evidence URLs
- priority level

## Research Assistant

```text
Search the current state of agent-native payment infrastructure.
Then Claw the top sources into a short memo with claims, protocols, and open questions.
```

**Flow**

1. Search gathers current context.
2. Claw turns top sources into structured notes.
3. Persona stores approved conclusions.
4. The next research session starts with stronger context.

## Lead Research

```text
Claw, find 50 Series A fintech companies in North America.
Return company, website, product category, leadership, funding context, and evidence URL.
```

**Flow**

1. Claw creates an extraction schema.
2. Nodes collect candidate records.
3. Validation samples check accuracy.
4. Accepted records become a dataset.

## Content Strategy

```text
Claw, analyze current founder conversations about AI agents.
Identify recurring questions, objections, examples, and content opportunities.
```

**Flow**

1. Search finds active conversations.
2. Claw extracts themes and representative examples.
3. Persona applies the brand voice and content preferences.
4. The user receives outlines and source-backed angles.

## Compliance Tracking

```text
Search for recent AI data privacy policy updates in the EU and US.
Claw, extract obligations, dates, affected entities, and official source links.
```

**Flow**

1. Search retrieves official and reputable sources.
2. Claw extracts obligations and dates.
3. A reviewer validates sensitive findings.
4. The output separates source-backed facts from interpretation.

## Personal Operator

```text
Persona, prepare my daily operator brief.
Include urgent messages, market changes, project blockers, and the three decisions I need to make today.
```

**Flow**

1. Persona loads approved memory.
2. Search refreshes external context.
3. Claw extracts changes from approved sources.
4. The agent returns a short brief and recommended actions.
