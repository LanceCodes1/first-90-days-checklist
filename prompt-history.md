# Prompt History — First 90 Days Checklist

How I worked: one Claude conversation per session, one purpose per
conversation. Each entry links the full conversation and pulls out the
moments that shaped the project.

-------

## Session 1 — Planning & Problem Selection — July 13–18, 2026.
**Conversation link:** https://claude.ai/share/4a50ff87-5662-4979-ba30-c51b4807d644

**Goal:** Choose the problem, define the value, and lock a v1 plan before
writing any code.

**Key decisions and the thinking behind them:**

- **Blank list vs. pre-loaded list (Option C):** The call was whether the
  app opens empty or opens already loaded with the critical first-90-days
  tasks. I went with loaded. Technically it's the same build - one list of
  tasks either way — but an empty page puts the weight back on a mind
  that's already carrying too much. The app should walk in the door already
  knowing what matters. Those starter tasks come from my own first 90 days
  and from the people I sit across from every week, not from a brainstorm.

- **Persistence stays required:** Claude made the case that saving to the
  browser could wait, since the core idea gets proven without it. I took
  half of that, which is; it's not the first thing we build, but I held that 
  it stays required for v1. A checklist that forgets everything when you close
  the browser is just a prettier piece of paper, and losing the paper is
  half the problem I'm solving.

- **Task IDs from day one:** Delete and edit didn't make v1, but I asked
  for every task to carry a unique ID anyway. That way, when delete gets
  built later, it's unscrewing a panel instead of tearing down a wall. Small
  decision now, saves a restructure later.

- **Holding the line on scope:** Claude raised a fair point — "I typed it
  wrong" is the first friction a real user hits, so shouldn't delete be
  required? I said no. The four required features are the ones that keep
  the wall standing; delete is comfort, not structure. If you typo a task
  in v1, you check it off and let it die. Not smooth, but it passes, and
  delete sits first in line for stretch.

- **The bench:** Notes on a task, a progress counter, and a print option
  all went on the "what I'd build next" list. None of them came from
  brainstorming features, they came from watching what actually trips
  people up. Checking off "get ID" was never the hard part; knowing which
  office and what to bring is. And a print option matters because device
  access comes and goes in those first weeks. The bench is the bench,
  none of it touches v1.

**What I learned this session:** The biggest thing was the difference
between proving an idea and shipping a tool. The proof is small - somebody
opens the app, sees the list already there, checks something off. The tool
is the rest. Planning it this way means every build session has one small
job instead of me trying to swallow the whole thing at once.


---------

## Session 2 — Skeleton + Deploy — July 19-20, 2026
**Conversation link:** https://claude.ai/share/489a9af4-de66-44cd-a1cf-e4d5ed8fa617

**Goal:** Create the three-file skeleton (index.html, styles.css, empty
script.js) with the page layout only — no features — then deploy to
GitHub Pages.

**Key moments and what I learned:**

- **Hit my first console error and worked it like a builder.** After
  clicking Add, Chrome showed: "Unsafe attempt to load URL file:// —
  'file:' URLs are treated as unique security origins." Instead of
  panicking, I read it, tested a fresh load (clean console), and called
  it: this wasn't my code, it was my environment — Chrome not trusting
  pages that run straight off the hard drive, reacting to the form's
  default submit. Claude confirmed the read, and said distinguishing
  code errors from environment errors is a judgment call that's hard to
  fake.

- **The prediction paid off.** I wrote in this log that the error would
  disappear once the app lived at a real https address. After deploying
  to GitHub Pages, I retested the same submit with the console open:
  error gone. Observe, classify, predict, verify.

- **Concepts banked this session:** forms have a default submit behavior
  older than JavaScript itself (and event.preventDefault() is how our
  script will take that job over next session); IDs vs. classes — an id
  marks one specific element so JavaScript can find it without guessing,
  a class styles a group.

- **Deployed.** GitHub Pages, deploy-from-branch on main. Now every
  git push updates the live site automatically.

**Live URL:** https://lancecodes1.github.io/first-90-days-checklist/


----------

## Session 3 — Feature 1a: Render Starter List — July 21, 2026
**Conversation link:** https://claude.ai/share/c7be64d4-eae3-4e3e-a750-563d09275868

**Goal:** Render my curated starter tasks as plain-text list items on page
load. No interaction yet — that's 1b's territory. Scope ruling made up
front: no checkbox markup this session, so each commit's changes match the
feature it's named for.

**Key moments and what I learned:**

- **Red pen on the content: my domain, my call.** Claude drafted the ten
  starter tasks. Two things weren't right, and I corrected them as the
  expert: "SSI card" became "Get Social Security card" (SSI is a benefit
  program, the card is a document — different things, and mixing them up
  matters in my world), and birth certificate moved ABOVE state ID,
  because one unlocks the other. The task order in this app isn't
  decoration, it's the sequence I lived and the one I walk clients
  through every week.

- **Caught the AI's process error.** The build chat's closing instructions
  said add and commit; no push. I flagged it: commit only checkpoints
  locally; push is what publishes to GitHub, and my live deploy runs off
  pushed main. Without it, the "done" feature exists on one laptop and
  nowhere else.

- **Recognized a known error instead of re-debugging it.** The file://
  security message showed up again in local testing. Same artifact I
  distinguished in Session 2 environment, not code, and it doesn't occur
  on the deployed site. Logged and moved on.

- **Concepts banked:** script placement at the bottom of <body> is why no
  DOMContentLoaded is needed (the page above is already built when the
  script runs); getElementById returns null on a miss, and calling
  appendChild on null is a textbook runtime error, starts clean, dies at
  the problem line, usually caused by something as small as an id typo.

- **Design choice worth remembering:** textContent over innerHTML for
  rendering task text, treats everything as plain text, never as code.
  Safe default even with trusted data. And the tasks array stays the
  single source of truth: 1b (toggle) and Feature 3 (localStorage) will
  read and write the array, not scrape the page.

**Commit:** "Render starter task list on page load"
**Live check:** https://lancecodes1.github.io/first-90-days-checklist/


-------

## Session 4 — Feature 1b: Toggle Task Completion — July 21-22, 2026
**Conversation link:** https://claude.ai/share/1fb2fea5-108d-4302-b7d5-1209b9ee5a85

**Goal:** Click a task to mark it complete, click again to un-mark it,
with the completed state living in the tasks array, not just the page.

**How it got built, small slices, each verified before the next:**
data model first (completed field plus class hook, proven with a
hand-flip test before any click logic existed), render refactored into
a reusable renderTasks function (proven repeat-safe by calling it twice
from the console, count held at ten), data-id stamped on every li (the
day-one ID decision finally cashing in, the claim-check stub linking
each element back to its task), a delegated click listener that just
logged ids (one guard at the building entrance instead of a guard at
every door, survives re-renders and covers future tasks free), then the
real toggle (guard clause, id lookup with a string-to-number conversion,
flip, re-render), and finally the CSS that makes it visible.

**Key moments and what I learned:**

- **Three zones, not two.** Testing where clicks land, clicks on a task
  log its id, clicks inside the list but off a task would log undefined,
  and clicks outside the list log nothing at all because the listener
  never hears them. Silence and undefined are two different negatives,
  and telling them apart is what made the guard clause a decision
  instead of a guess.

- **Two bugs that never got to exist.** The Number() conversion (dataset
  values are strings, array ids are numbers, and without converting, the
  lookup would crash on every click) and the guard clause (clicks with
  no data-id would crash the lookup). Both caught in review and testing
  before they ever ran. Bugs avoided by process are still debugging
  stories.

- **Test before commit, always.** I asked whether I needed to commit
  before tests would register and got the order straight: the browser
  reads the saved file, Git is the record keeper, not the electricity.
  Save, test, verify, then commit the verified work.

- **Console-driven testing.** Learned to interrogate the live page by
  hand from DevTools, flipping data and calling my own functions to
  prove behavior before wiring anything permanent.

- **Caught the AI twice at the finish line.** It suggested localStorage
  as the next feature, but my build order puts add-a-task first so
  persistence saves the complete picture. And its commit instructions
  kept omitting git push, which is the difference between work that
  exists on one laptop and work that exists in the world.

**Commits:** Add completed field to task data model / Refactor task
rendering into reusable renderTasks function / Add data-id attributes
to rendered tasks / Add click listener to log clicked task id / Toggle
task completion on click / Add strikethrough and dimmed styling for
completed tasks

**Live check:** Confirmed at https://lancecodes1.github.io/first-90-days-checklist/, 
tasks cross off on click and come back on the second click.



--------

## Session 5 — Feature 2: Add a Custom Task — July 23, 2026
**Conversation link:** https://claude.ai/share/fc3c78a6-bd04-4bb6-9a56-2166cf13ca94

**Goal:** Type a task, hit Add or Enter, and it joins the list as a full
citizen: unique id, toggleable, input cleared, no page reload.

**Key moments:**

- **preventDefault retired my oldest error.** The wedge in the mail
  slot's flap. The form still fires its submit event but the browser's
  reload reflex gets cancelled, and with no navigation happening, the
  file:// security error from Session 2 is gone for good. One line
  closed a two-week loop.

- **I flagged the empty-array edge before the code existed.** New ids
  come from max-plus-one, so I asked what happens if the list is ever
  empty. Answer: Math.max on nothing returns negative infinity, and
  every add after that collides forever. One ternary of insurance,
  id starts at 1 in an empty room. Third bug that never got to exist.

- **An accident became a stress test.** I added "buy stamps" twice by
  mistake, and the system handled it clean: same text, different ids,
  one toggled complete while the other sat unchecked. Two identical
  coats, different claim-check stubs, live proof of why tasks match by
  id and not by text.

- **Concept banked:** listen to the form's submit event, not the
  button's click, because forms submit on Enter by default and submit
  catches both roads with one wire.

**Commits:** Wire form submit with preventDefault and input logging /
Add custom task with unique id generation

**Live check:** https://lancecodes1.github.io/first-90-days-checklist/


--------

## Session 6 — Feature 3: localStorage Persistence — July 26, 2026
**Conversation link:** https://claude.ai/share/12b9bbca-81fc-4ea9-99d7-f0aa28fc7e9d

**Goal:** The whole list, starter tasks, completions, and custom adds,
survives closing and reopening the browser. Last required feature.

**Key moments:**

- **I opened the session with the question I'd been carrying since
  planning.** Before any code got written I asked what stops the
  hardcoded starter list from overwriting saved progress on every page
  load. The answer became the design instead of a patch: check the vault
  first, and only fall back to the hardcoded array when storage is
  empty, seeding it immediately so that branch never runs again. Spare
  key under the mat, used once on move-in day, never touched after the
  real key exists. That question was written down in Session 1 and
  cashed in Session 6.

- **Sequencing: load, wire, save.** Built loadTasks alone and proved it
  in isolation, then wired it in as the real source of truth, then built
  saveTasks alone, then called it at the two mutation points. I also
  flagged mid-session that load without save is a dead end, a vault
  nobody deposits into, so the save half got scheduled before the load
  half was even finished.

- **The first thing this app ever remembered.** Pushed a fake task into
  memory from the console, called saveTasks by hand, refreshed, and it
  came back. Every refresh before that moment in this project's life was
  a reset to zero.

- **Concepts banked:** localStorage only stores strings, so arrays get
  sealed with JSON.stringify going in and rebuilt with JSON.parse coming
  out. getItem returns null on a miss, and checking null specifically,
  not just falsy, is what keeps an empty string from being misread as a
  first visit and clobbering the vault. And the pattern that now governs
  every future feature: any time the array changes, deposit it.

**Commits:** Add loadTasks with first-visit seeding / Load tasks from
localStorage with starter fallback / Add saveTasks to write tasks to
localStorage / Save tasks to localStorage on toggle and add

**Live check:** https://lancecodes1.github.io/first-90-days-checklist/

---------

## Session 7 — README — July 26, 2026
**Conversation link:** https://claude.ai/share/e60ebebd-ff62-4aa9-bd0d-b85bf7417607

**Goal:** Write the full README, all nine sections the spec requires.

**Key moments:**

- **Interviewed instead of drafted.** I had the AI ask me one section at
  a time and write from my answers instead of generating content about a
  problem it hasn't lived. The Problem section is my own account of the
  first 72 hours home and what I see weekly as a navigator.

- **Named the limitation instead of hiding it.** localStorage is
  per-device, so the list doesn't sync between a phone and a laptop.
  Device access is inconsistent in the first weeks after release, which
  makes that a real gap, and I'd rather a reviewer read it from me than
  discover it themselves.

- **A 404 that wasn't what it looked like.** The prompt-history link
  failed from the README even though the file was right there in the
  repo. I opened the file directly and read the raw URL: it ended in
  %20, a URL-encoded space, so the actual filename carried a trailing
  space and the link pointed at a file that didn't exist. Renamed it
  with git mv. In the bug taxonomy that's a data problem, bad filename,
  not bad code.

- **Knew what wasn't a bug.** The live site was showing a test task I'd
  typed in earlier. That's persistence working correctly, my own
  localStorage on my own device, not something a reviewer would ever
  see. Confirmed it with an incognito check instead of assuming, then
  cleared it for a clean demo.

**Commits:** Write full README / Fix filename, remove trailing space
from prompt-history.md

