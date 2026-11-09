# Website build agent team

Five subagents that split a website build into roles with real separation between
them: the person who decides what "done" means, the person who builds it, and three
different people who check it.

## Installing

Copy the five `.md` files into your project:

```
your-project/
├── .claude/
│   └── agents/
│       ├── requirements-manager.md
│       ├── developer.md
│       ├── code-reviewer.md
│       ├── qa.md
│       └── tester.md
└── docs/
    └── requirements/        # the requirements-manager writes specs here
```

Put them in `~/.claude/agents/` instead if you want them available in every project.
Project-level definitions win when both exist.

Check they loaded with `/agents`. Invoke one by name — "use the code-reviewer agent on
my changes" — or let Claude pick based on the `description` field, which is what the
main agent matches against.

## The workflow

```
  requirements-manager          developer              code-reviewer
  ────────────────────          ─────────              ─────────────
  spec with REQ-001…      →     implements      →      reads the diff
  acceptance criteria           each REQ ID            blockers / majors / minors
         ▲                           ▲                        │
         │                           └────────────────────────┘
         │                              fixes come back here
         │
         │                         tester                    qa
         │                         ──────                    ──
         └── blocked / new   ←     automates the      ←      runs the site,
             scope found           criteria as tests         verifies each REQ,
                                   + regression tests        hunts edge cases,
                                                             PASS / FAIL verdict
```

A full cycle:

1. **requirements-manager** — "I want a booking page for my rental property."
   Produces `docs/requirements/booking-page.md` with numbered acceptance criteria.
2. **developer** — builds against REQ-001 onward, one slice at a time.
3. **code-reviewer** — reads the diff, returns findings by severity. Developer fixes
   blockers and majors, then re-review.
4. **qa** — runs the built site, verifies each REQ, probes edge cases, accessibility
   and responsive behaviour. Returns a verdict and numbered defects.
5. **tester** — encodes the criteria and each fixed defect as automated tests so
   nothing regresses.

Steps 4 and 5 can run in parallel once the code review is clear.

## Why QA and tester are separate

They sound like the same job and are often the same person, but they fail differently,
so splitting them is deliberate:

- **QA** asks *did we build the right thing, and will it hold up in front of a real
  person?* It's judgement, exploration, and the authority to say no. It's done by
  hand, once, against the running site.
- **Tester** asks *will this still work next month?* It's engineering — building a
  suite that runs on every commit forever.

Fold them together and the automation always wins, because it's the part with a green
checkmark at the end. You end up with a test suite that passes and a site nobody
actually looked at.

The same logic separates **code-reviewer** (judges the source) from **QA** (judges the
product). A change can be clean code that doesn't meet the requirement, or ugly code
that works perfectly. You want both checks.

## Things worth knowing

- **Each agent starts cold.** It gets your prompt and the tools listed in its
  frontmatter, not this conversation's history. Point it at the spec file and the
  branch — that's why the file-based handoff through `docs/requirements/` matters.
- **REQ IDs are the connective tissue.** They're what lets the reviewer check claims,
  the QA agent build a verification pass, and the tester name its tests. Don't renumber
  them.
- **The read-only roles are read-only on purpose.** `code-reviewer` and `qa` have no
  `Write` or `Edit` in their tools. An agent that can fix what it just found stops
  being a check and becomes a second developer.
- **Models are a cost dial.** `opus` on the three judgement-heavy roles,
  `sonnet` on the two execution-heavy ones. Drop any of them to `sonnet` or `haiku` if
  you're running a lot of cycles, or raise them all if the project is high-stakes.
- **Tools are deliberately narrow.** Widen them if you need to — adding browser MCP
  tools to the `qa` agent so it can drive a real browser is the most useful change you
  can make to this set.
- **Tune the stack specifics.** The `developer` and `tester` agents are written to
  detect your stack from the repo. If you always build in the same one, naming it in
  those files directly will give you better output than making them infer it every time.
