---
title: My AI product manager setup in Cursor
date: 2026-11-22
description: A single workflow for specs, evidence, prototypes, and tickets.
draft: true
---

I spent the last few weeks building what I jokingly call my “AI product manager” setup inside Cursor.

This wasn’t a “let’s generate some copy” experiment. It started from a very practical annoyance: I was tired of having my thinking spread across too many places—ChatGPT threads, half-baked custom GPTs, a notes doc, a design tool, a project board. Each tool was fine on its own, but the workflow was fragile. Context went stale, I repeated myself, and every new initiative started from a blank state.

What I wanted was simple:

- one place to think
- one place to keep context up to date
- one place to turn evidence into execution

Cursor ended up being that place for me, mostly because it can sit on top of the things my work already depends on: our codebase, our docs, our tooling, and the “paper trail” of past decisions.

### The pieces

The setup is not magical, and it’s not complicated either. It’s just a few ingredients that work well together:

- **A living context folder.** Text files I update constantly: what we’ve built, who we sell to, common objections, roadmap, and—most importantly—past decisions and why we made them.
- **Connections to pull evidence and push actions.** So it can read what matters (notes, data, tickets) and write back where we actually work.
- **Access to the codebase.** So proposals are grounded in what exists, not vibes.
- **A lightweight prototyping loop.** So specs and prototypes stay aligned as they change.

The key idea is that “context” isn’t a prompt. It’s an asset you maintain. If you don’t feed it the reality of your business, it will fill the gaps with whatever sounds plausible.

### What I ask it to do

When I kick off a new piece of product work, I don’t start with “write a spec.” I start with a question and constraints.

For example: “Work on a new spec for X. Here’s why it matters, here’s what we’re optimizing for, and here’s the decision we need to make.”

At a high level, the loop looks like this:

1. **Collect what we already know.** Past decisions, existing tickets, constraints in the product and code.
2. **Gather evidence.** Notes, transcripts, usage data, edge cases.
3. **Draft the plan and the artifacts.** A spec, and (when useful) a prototype, then turn it into tickets with references.

I still review everything, obviously. The point isn’t to outsource judgment. The point is to compress the “blank page” time and keep the work connected end-to-end.

### Two concrete examples

#### 1) Improving how merchants set up AI rules

We wanted to improve how merchants write the rules that guide their agent. That sounds like a UX problem until you stare at real inputs and realize it’s a taxonomy problem: people write wildly different things, in wildly different styles, with lots of edge cases.

Instead of guessing, I asked the system to analyze real usage data (in our case, across a few hundred orgs). It cleaned messy inputs, grouped them into categories, and highlighted patterns that could be turned into templates.

From there it drafted a spec for a prefill UX, with the analysis as the source of truth, and created a ticket with references linked.

If you’ve ever done this kind of work manually, you know the time sink isn’t the spec—it’s the data cleaning and the edge cases. That’s exactly the kind of operational work I want a system to take off my plate.

#### 2) A partner dashboard for agencies

We also needed a partner dashboard: agencies manage multiple client accounts, so they need a secure way to switch between them and see what matters.

Here the system did the boring but essential work first: it checked what already existed in the backend, pulled relevant meeting context, and proposed an architecture that fit our constraints.

Then it produced a full spec and a working prototype. The first version wasn’t perfect. I took a short call with an engineer, got challenged on a few points, clarified details, and then one prompt later the spec and prototype were updated and coherent again.

### What I learned building this

- **The setup cost is real.** Writing down your strategy, your ICP, your decision history, and how your team operates takes effort. It’s work that usually lives in your head. But once it exists, you stop paying the “re-explain everything” tax.
- **You need a permission model in your own head.** Just because the system can draft a ticket doesn’t mean it should decide priorities. I treat it like a strong operator, not a leader. I’m responsible for the direction.
- **The output is only as good as the inputs.** If the context folder is stale, everything downstream is stale. Maintaining context is the job.
- **Humans still matter.** Conversations with engineers, the pushback, the “this won’t work because of X”—that’s where good product work happens. The workflow should amplify that, not replace it.

I don’t think this is the only way to work, and I’m sure it will evolve. But it’s already made my day-to-day product work feel calmer: fewer tabs, less repetition, more continuity from idea to execution.

