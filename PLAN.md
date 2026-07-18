# Project Plan — First 90 Days Checklist

## Problem
The first 90 days after release from incarceration come with a wall of urgent,
high-stakes tasks: ID, Social Security card, parole/probation check-ins,
benefits enrollment, clinic appointments — usually tracked on paper or in
memory. Missing one can carry serious consequences. This is drawn from lived
experience (17 years incarcerated, navigating this personally on release) and
ongoing professional experience as a reentry community navigator, working with
people living this exact situation every week.

## Technology & Architecture
Vanilla HTML, CSS, and JavaScript only: no frameworks, no libraries, no
backend, no database, no user accounts, deployed as static files on GitHub
Pages. This is a deliberate design choice, not just a build constraint: with
no server and no accounts, nothing about a user's situation, tasks, or
progress is ever transmitted or stored anywhere but their own browser. For a
tool holding someone's reentry checklist, that privacy property is part of
the product, not incidental to it.

## User
The returning citizen, managing their own first-90-days task list, on their
own device. Not a case manager or multi-client tool: one person, one list,
nothing leaves their browser. (A navigator/multi-client version is real and
used in my own day job, but is intentionally out of scope for v1 — see
"What I'd Build Next.")

## Value
**Full statement (for this plan):** During the first 90 days after release,
when one missed task can carry serious consequences, this app keeps every
must-do task in one place you can trust; instead of a paper list you can
lose or a memory already overloaded — so you always know what's done and
what's still pending.

**Short pitch (for README):** A checklist for the first 90 days after
release, so no critical task gets lost to paper or memory overload.

## Solution Options Considered
| Option | Description | Verdict |
|---|---|---|
| A — Blank checklist | User adds every task themselves from an empty list | Rejected — still asks the user to remember everything up front |
| B — Blank checklist + due dates | Option A plus due dates and overdue highlighting | Rejected for v1 — real value, but adds date-comparison complexity too early; moved to stretch |
| **C — Pre-populated starter list + custom additions** | **App opens with a curated set of first-90-days tasks already loaded, sourced directly from lived and professional experience; user can check them off and add their own** | **Chosen** |

**Why C:** Same technical footprint as Option A (one array of task objects;
add/render/complete/persist). The only difference is the array isn't empty
on first load. That difference is the entire point: a blank page puts the
mental load back on the user; a pre-loaded, correctly ordered list carries it
for them instead. The starter tasks are not generated or guessed — they come
directly from sitting across from people living these first 90 days weekly,
and from living them personally.

## Smallest Demonstration of Value
View the pre-populated starter list and mark a task complete.

The moment someone opens the app, sees the real, correctly ordered list of
first-90-days tasks already there, and checks one off, the core idea is
proven: this feels lighter than a blank page or paper. (Note: this moment is
reached across two build sessions — render, then toggle — see Build Order.)

## Required Features (v1)
1. **Pre-populated starter list** — curated first-90-days tasks, correctly
   ordered, sourced from lived/professional experience. Loads on first open.
2. **Mark a task complete** — check off a task, see it visually register as
   done.
3. **Add a custom task** — user can add a task beyond the starter set for
   anything specific to their situation.
4. **Persistence (localStorage)** — starter tasks, completions, and custom
   additions all survive closing and reopening the browser.

**Design note carried into build:** every task gets a unique ID from day
one, even though delete/edit isn't required for v1 — so stretch features
like delete can be added later without restructuring the data model.

## Stretch Features (priority order, one max if time allows)
1. Delete a task
2. Edit a task
3. Due dates + overdue highlighting
4. Categories (grouping by type: documents, benefits, check-ins, medical)

## What I'd Build Next (bench — not v1, may never be built)
- **Notes field per task** — the how, not just the what (e.g., which office,
  what to bring, that a birth certificate is needed first). Checking off
  "get ID" was never the hard part.
- **Progress counter** ("7 of 10 done") — visible momentum when rebuilding
  from zero.
- **Print option** — device access is inconsistent in the first weeks post-
  release; a paper backup respects that reality instead of assuming
  everyone has a phone.
- **Navigator / multi-client mode** — a version for tracking tasks across
  multiple people, matching my day job. Deliberately out of v1 scope; raises
  privacy questions (other people's reentry data) that don't belong in a
  single-user, on-device tool.

## Build Order (smallest-first, one feature per Builder Loop session)
1. **Skeleton + deploy** — index.html / styles.css / empty script.js, GitHub
   Pages live. (Phase 1, per Execution Plan.)
2. **Feature 1a — Render starter list** — display the curated tasks on page
   load. Read-only; proves the data and layout, not yet the value.
3. **Feature 1b — Mark task complete** — click a task, toggle its completed
   state, see it visually update. Combined with 1a, this completes the
   smallest demonstration of value.
4. **Feature 2 — Add a custom task**
5. **Feature 3 — Persistence (localStorage)**
6. *(Stop here — required features complete, value fully demonstrated.)*
7. **Optional Feature 4 — Delete a task** — only if time allows, per the
   Execution Plan's one-stretch-feature limit.