# First 90
*Miss nothing. Rebuild everything.*

A first-90-days checklist for people coming home from incarceration, built so nothing critical gets lost to paper or memory overload.

---

## Live Demo

**[https://lancecodes1.github.io/first-90-days-checklist/](https://lancecodes1.github.io/first-90-days-checklist/)**

No login, no signup, nothing to install, just open it and start. Someone in week two of reentry shouldn't have to create an account to use a checklist.

---

## Problem

The first 72 hours home hit all at once: California ID, birth certificate, Social Security card, a parole check-in, a phone, an email, transitional housing, CalFresh, reentry program intakes and assessments, most requiring in-person appearances. None of it is optional, and none of it is independent. Proof of residency is required for the ID. The birth certificate proves the residency. The ID is required for the Social Security card. Nothing else, no stipend, no workforce program, happens without that ID in hand. It's two steps forward, two or three back, and nobody hands you the sequence.

I came home in March 2025 with a parole plan I had to rip up in the first week. Inside, you plan and visualize, but you don't actually know until you're out. What I had instead was scattered activity: phone calls, half-remembered referrals, things that dawned on me two days too late. A family member got me a phone early, but no one showed me how to download an app, set a reminder, or use a calendar. So most of it rode in my head, and my head was already full.

The cost of something slipping isn't just inconvenience. A missed check-in is a reprimand from your PO and a bad first note in your file. A missed program deadline can mean waiting months, sometimes until the next cohort, sometimes into next year. And after already losing fifteen, twenty, twenty-five years, another setback tells you a story about yourself: that maybe you're not cut out for this, that the place you came from was at least something you understood.

I see the same wall every week now, working as a reentry navigator, sometimes worse. People who can't get a birth certificate because the hospital they were born in no longer exists, or they were born out of state. People locked out of their own email because no one taught them to store a password. People who lose a whole day in the wrong DMV line because they didn't know appointments could be booked online.

The systems out there work. Nobody comes home knowing how to work them. Call it organized chaos.

---

## Value

A checklist for the first 90 days after release, so no critical task gets lost to paper or memory overload.

More than that: it takes the wall off somebody's shoulders. The list is already sitting there in the right order, so instead of carrying the guilt and confusion of trying to remember it all, that energy goes toward family, toward freedom, toward actually being in the moment instead of bracing for what got forgotten.

---

## Project Plan

I planned this before writing a line of code: problem, user, value, then the smallest version that would prove the idea works, then required features, then everything deliberately left out.

The core decision was that the app opens with a real list already in it instead of a blank page, a blank page hands the weight right back to somebody whose memory is already full. I also decided during planning that every task carries a unique ID from day one, even though nothing used it yet, so features like delete could be added later without restructuring the data.

Build order was smallest first, one feature per session: render the list, mark complete, add a custom task, then persistence.

Full planning worksheet: [PLAN.md](PLAN.md)

---

## Features

**Complete:**

- **Pre-populated starter list.** Opens with ten first-90-days tasks already in it, in the order they actually hit you. That content came from my own reentry and from the people I work with every week, not from a brainstorm.
- **Mark complete.** Click a task, it strikes through and dims. Click again, it comes back.
- **Add a custom task.** Everybody's reentry is different, so the list is a starting point, not a limit.
- **Persistence.** Everything survives closing the browser, saved locally on the device, nothing sent anywhere.

**What I'd build next:**

- **Delete a task.** First in line. "I typed it wrong" is the first real friction somebody hits.
- **Notes on a task.** Checking off "get ID" was never the hard part. Knowing which office, what to bring, and that the birth certificate comes first is the hard part.
- **Print option.** Device access comes and goes in the first weeks. A paper backup respects that instead of assuming everybody has a working phone.

Full bench, edit, due dates, categories, progress counter, and a future multi-client navigator version, is in [PLAN.md](PLAN.md).

---

## Technologies Used

- **HTML, CSS, and JavaScript.** No frameworks, no libraries. The whole app is three files a person could read in one sitting.
- **localStorage.** The browser's own storage on your device. It's how the list survives closing the tab.
- **GitHub Pages.** Free static hosting, which is all this needs since there's no server involved.

No backend, no database, no accounts, and that's deliberate. Nothing about a person's reentry situation, their tasks, or their progress is ever transmitted anywhere or stored on anyone's server. It lives in their browser, on their device, and that privacy property is part of the product, not a shortcut.

---

## AI Tools Used

I used Claude across the whole build, one conversation per session, one purpose per conversation. I set the rules up front: one small step at a time, no moving forward until I sent a VERIFIED report describing what I actually tested and observed, comprehension questions after every code block that I had to answer before continuing, and a plain-English explanation of every piece before it went in.

Three examples worth naming:

**I corrected it on domain content.** It drafted my ten starter tasks and got two things wrong. It wrote "SSI card" when it meant Social Security card, one's a benefit program and one's a document, and they're not interchangeable. It also had the state ID listed before the birth certificate, when the birth certificate is what proves residency to get the ID in the first place. That list is my expertise, not generated filler, and I checked it like it mattered.

**I corrected it on process.** More than once its closing instructions said commit but left off push. Commit only checkpoints locally, push is what publishes and what my live deploy actually runs from. It also proposed building persistence before the add-task feature, which would have meant saving an incomplete picture. My build order had them the other way around, and I held the line.

**I asked questions that changed the design instead of patching it later.** Before any persistence code was written, I asked what stops the hardcoded starter list from overwriting saved progress on every page load. That question turned into the seeding rule the feature is built on: check storage first, only fall back to the starter list when it's empty. I asked the same kind of question about task IDs, what happens if the list is ever empty when the app calculates the next ID, and the answer, negative infinity, got insured against before it could ever be a bug.

Full trail, with a shared conversation link for every session: [prompt-history.md](prompt-history.md)

---

## Running the Project

No build step, no dependencies, no server. Clone the repo and open index.html in any browser, that's it. The three files are index.html, styles.css, and script.js, and everything runs in the browser.

One limitation worth naming: because the list is saved with localStorage, it lives in whatever browser it was entered in. Open it locally and on the live site and you'll see two separate lists, which is expected. Same reason it doesn't sync between a phone and a laptop, and that's a real limitation I'd rather name than hide. Device access is inconsistent in the first weeks after release, and a synced version is future work.
