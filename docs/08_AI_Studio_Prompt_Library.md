# RockyOS — AI Studio Prompt Library

**Document ID:** RDU-PL-001
**Version:** 1.0.0
**Status:** Approved
**Last Updated:** August 31, 2026

---

# 1. Purpose

This document provides a structured prompt library for Google AI Studio and other AI coding assistants.

Its purpose is to ensure that RockyOS can be developed consistently, incrementally, and safely according to the approved product vision, requirements, architecture, design system, UX specification, technical architecture, and roadmap.

The prompts in this document are not random instructions.

They are reusable project-level assets.

They should help the AI understand:

* the role it must play
* the project context
* the current phase
* the scope of each task
* the quality standard expected
* the boundaries it must not cross

---

# 2. Prompt Strategy

RockyOS should not be developed with one large prompt.

It should be developed through small, precise, repeatable prompts.

Each prompt should do one of the following:

* define a page
* implement a component
* refine an interaction
* expand content
* improve responsiveness
* add multilingual support
* optimize performance
* prepare deployment
* fix a specific issue

This approach reduces confusion and improves output quality.

---

# 3. Prompting Principles

## 3.1 Be Specific

The AI should be told exactly what to build, refine, or explain.

Vague prompts produce vague output.

---

## 3.2 Preserve Project Context

Every important prompt should remind the AI that RockyOS is:

* a long-term digital universe
* a personal operating system
* a story-driven interactive experience
* a multilingual platform
* an AI-assisted product

---

## 3.3 Work in Small Increments

Ask the AI to complete one coherent task at a time.

For example:

* create the homepage layout
* then refine the galaxy interaction
* then implement the opening sequence
* then add localization
* then add search

---

## 3.4 Protect Architectural Consistency

Any prompt that changes code must respect:

* the six core worlds
* the world architecture
* the design system
* the UX specification
* the technical architecture
* the roadmap sequence

---

## 3.5 Prefer Reusable Prompts

Whenever possible, reuse a prompt template rather than rewriting from scratch.

A reusable prompt library improves consistency and saves time.

---

# 4. AI Role Definition

When working on RockyOS, the AI should adopt the role of:

* senior product-minded frontend engineer
* motion-aware UI builder
* architecture-respecting implementation partner
* multilingual content-aware assistant
* long-term maintainability supporter

The AI should not behave like a generic code generator.

It should behave like a careful collaborator working inside a well-defined system.

---

# 5. Global Prompt Rules

These rules apply to all prompts in this library.

## 5.1 Always Reference the Project

Include the project name RockyOS and the current phase whenever relevant.

---

## 5.2 Keep the Output Aligned with the Docs

The AI should follow the approved documents, not invent a new direction.

---

## 5.3 Ask for Structured Output

When appropriate, request:

* file structure
* component structure
* route structure
* content schema
* implementation steps
* code blocks
* acceptance criteria

---

## 5.4 Avoid Scope Drift

Do not let the AI expand a task beyond the current phase unless asked.

---

## 5.5 Maintain Style Consistency

Use the same tone, visual logic, and interaction philosophy across every prompt.

---

# 6. Prompt Categories

This library is divided into the following categories:

* Foundation Prompts
* Page Prompts
* Component Prompts
* Motion Prompts
* Content Prompts
* Internationalization Prompts
* Search Prompts
* Performance Prompts
* Accessibility Prompts
* Bug Fix Prompts
* Deployment Prompts
* Refactor Prompts
* Expansion Prompts

---

# 7. Foundation Prompts

These prompts are used when the project needs structural work.

---

## 7.1 Project Setup Prompt

```text id="s8h1xq"
You are working on RockyOS, a long-term personal digital universe.

Build the initial project foundation in a way that follows the approved technical architecture.

Requirements:
- use Next.js with TypeScript
- organize the codebase for long-term maintainability
- prepare the project for multilingual support
- prepare the project for content-driven pages
- keep the structure AI-friendly and modular
- do not introduce unnecessary complexity
- follow the approved documentation hierarchy

Return:
- recommended folder structure
- main architectural decisions
- implementation steps
- any important conventions I should follow
```

---

## 7.2 Architecture Alignment Prompt

```text id="h2k4nt"
You are working on RockyOS.

Before writing code, review the current implementation against the approved documents:
- 01 Vision
- 02 Requirements
- 03 Information Architecture
- 04 Design System
- 05 UI/UX Specification
- 06 Technical Architecture
- 07 Development Roadmap

Identify any mismatches between the current implementation and the approved direction.

Return:
- what is aligned
- what is not aligned
- what should be changed first
- the safest implementation order
```

---

# 8. Page Prompts

These prompts are used to build or improve specific pages.

---

## 8.1 Homepage Prompt

```text id="p7r4qa"
You are building the RockyOS homepage.

This homepage is not a standard landing page.
It is the galaxy map of the entire digital universe.

Requirements:
- present the six core worlds as interactive celestial nodes
- make the layout feel elegant, spatial, and alive
- support hover states, subtle motion, and clear click behavior
- ensure the homepage works beautifully on desktop and mobile
- keep the experience consistent with the approved world architecture
- avoid generic portfolio patterns

Return:
- layout concept
- interaction concept
- component breakdown
- implementation notes
- accessibility considerations
```

---

## 8.2 World Page Prompt

```text id="v1z9ch"
Create a world page for RockyOS.

The world must feel like an independent digital environment while remaining part of the same universe.

Requirements:
- respect the selected world identity
- include a hero section
- include world-specific navigation
- include content sections with a clear hierarchy
- include a return path to the homepage
- include mobile-friendly behavior
- include subtle motion that fits the world theme

Return:
- page structure
- section order
- component list
- interaction notes
- responsive behavior notes
```

---

## 8.3 Detail Page Prompt

```text id="q6m8dj"
Create a detailed content page for RockyOS.

This page may be used for a project, article, timeline entry, or laboratory experiment.

Requirements:
- clear title and summary
- readable typography
- contextual metadata
- related content sections
- strong navigation back to the parent world
- excellent mobile readability
- consistent spacing and hierarchy

Return:
- page structure
- reusable components
- content model assumptions
- UX notes
```

---

# 9. Component Prompts

These prompts are used to create reusable interface pieces.

---

## 9.1 Component Creation Prompt

```text id="c4m2pe"
Create a reusable component for RockyOS.

Context:
RockyOS is a long-term, story-driven, multilingual digital universe.

Requirements:
- the component should be reusable
- the component should be easy to maintain
- the component should match the approved design system
- the component should support responsive behavior
- the component should be easy for AI to understand later

Return:
- component purpose
- props interface
- implementation code
- usage example
- any edge cases to consider
```

---

## 9.2 Card System Prompt

```text id="r3n8vf"
Design a card system for RockyOS.

Cards may be used for:
- worlds
- projects
- articles
- experiments
- timeline entries

Requirements:
- elegant visual hierarchy
- subtle hover feedback
- accessible focus states
- mobile-friendly layout
- consistent spacing and rounding
- support for short and long text

Return:
- card design logic
- variants
- code structure
- recommended usage rules
```

---

# 10. Motion Prompts

These prompts are used for animation and interaction refinement.

---

## 10.1 Opening Sequence Prompt

```text id="m5q1sk"
Implement or refine the RockyOS opening sequence.

This sequence is a cinematic introduction, not a loading screen.

Requirements:
- follow the four-scene narrative
- express the evolution of human-AI collaboration
- feel smooth, intentional, and premium
- support a skip option after first visit
- support replay from settings or about page
- respect reduced-motion preferences
- transition cleanly into the homepage

Return:
- animation structure
- scene timing
- transition logic
- accessibility notes
- implementation recommendations
```

---

## 10.2 Cursor Interaction Prompt

```text id="k8s6ta"
Improve the cursor interactions for RockyOS.

The cursor should feel like an active participant in exploration.

Requirements:
- subtle magnetic behavior
- contextual hover feedback
- smooth state changes
- no distracting effects
- performance-conscious implementation
- graceful fallback on touch devices

Return:
- cursor behavior model
- interaction states
- implementation approach
- mobile fallback strategy
```

---

## 10.3 Page Transition Prompt

```text id="t9g3pw"
Create smooth page transitions for RockyOS.

Transitions should reinforce the feeling of moving between worlds.

Requirements:
- preserve continuity
- feel cinematic but restrained
- avoid abrupt cuts
- remain performant
- respect reduced-motion settings

Return:
- transition strategy
- animation timing suggestions
- implementation notes
```

---

# 11. Content Prompts

These prompts are used to shape the writing and content structure of RockyOS.

---

## 11.1 Project Content Prompt

```text id="x2j7dl"
Write or structure content for a RockyOS project page.

Requirements:
- make the project understandable quickly
- explain the problem, solution, architecture, and outcome
- emphasize real execution and learning
- keep the writing clear and professional
- support multilingual adaptation later

Return:
- recommended section order
- content outline
- sample copy
- notes for future expansion
```

---

## 11.2 Blog Content Prompt

```text id="b7d4ua"
Create a blog structure for RockyOS.

The blog should support technical writing, learning notes, reflections, and long-term knowledge capture.

Requirements:
- clear title hierarchy
- readable article flow
- tags and categories
- reading-friendly structure
- easy future expansion
- MDX-compatible formatting

Return:
- recommended blog schema
- article section model
- writing style recommendations
```

---

## 11.3 Growth Log Prompt

```text id="g1f8re"
Design a growth log format for RockyOS.

This section should document progress, milestones, lessons, and evolution over time.

Requirements:
- chronological structure
- easy future expansion
- honest and reflective tone
- clear metadata
- multilingual support

Return:
- growth log schema
- entry structure
- sample format
```

---

# 12. Internationalization Prompts

These prompts are used to manage multilingual implementation.

---

## 12.1 Localization Setup Prompt

```text id="i4u2xc"
Implement multilingual support for RockyOS.

Supported languages:
- English
- Simplified Chinese
- German
- French
- Japanese

Requirements:
- instant language switching
- route-aware localization
- shared content structure
- language-specific metadata
- consistent layout behavior across scripts
- future language expansion support

Return:
- localization architecture
- folder structure recommendation
- translation data approach
- implementation notes
```

---

## 12.2 Translation Quality Prompt

```text id="l6m9qx"
Review the translated text for RockyOS.

Requirements:
- make the translation feel native
- preserve meaning and tone
- avoid machine-translated phrasing
- keep the brand voice consistent
- adapt to the target language naturally

Return:
- improved translation
- any tone issues found
- suggestions for localization consistency
```

---

# 13. Search Prompts

These prompts are used to create or refine global search.

---

## 13.1 Global Search Prompt

```text id="s1v8pt"
Build a global search experience for RockyOS.

Requirements:
- search across worlds, projects, articles, experiments, and timeline entries
- support keyboard-first usage
- return grouped results
- provide a clear empty state
- feel fast and integrated into the product
- leave room for future semantic search

Return:
- search UX model
- data indexing strategy
- result grouping logic
- implementation recommendations
```

---

## 13.2 Command Palette Prompt

```text id="d8n3yk"
Create a command palette for RockyOS.

Requirements:
- open with Cmd+K / Ctrl+K
- support search and navigation
- support quick actions
- support theme and language switching
- feel lightweight and fast
- work well with keyboard-only usage

Return:
- command structure
- data model
- interaction flow
- implementation notes
```

---

# 14. Accessibility Prompts

These prompts are used to improve usability for everyone.

---

## 14.1 Accessibility Review Prompt

```text id="a9p5hz"
Review the RockyOS experience for accessibility.

Requirements:
- keyboard navigation
- visible focus states
- screen reader support
- sufficient color contrast
- reduced motion support
- semantic HTML
- accessible forms and interactive elements

Return:
- accessibility issues found
- priority order
- recommended fixes
```

---

## 14.2 Reduced Motion Prompt

```text id="z5c1nb"
Adapt the RockyOS experience for users who prefer reduced motion.

Requirements:
- remove or simplify non-essential animation
- preserve usability
- keep the experience elegant
- avoid visual clutter
- maintain narrative clarity without motion-heavy effects

Return:
- reduced-motion strategy
- implementation guidance
```

---

# 15. Performance Prompts

These prompts are used to improve speed and efficiency.

---

## 15.1 Performance Review Prompt

```text id="y7w3fd"
Review the performance of RockyOS.

Requirements:
- identify bottlenecks
- minimize bundle size
- reduce unnecessary client-side work
- optimize images and assets
- preserve smooth transitions
- maintain a premium feel on mobile and desktop

Return:
- performance risks
- optimization suggestions
- implementation priorities
```

---

# 16. Bug Fix Prompts

These prompts are used when something is broken.

---

## 16.1 Targeted Bug Fix Prompt

```text id="f3k6va"
Fix the following issue in RockyOS.

Problem:
[describe the bug clearly]

Context:
RockyOS is a modular, multilingual, story-driven digital universe.

Requirements:
- identify the likely cause
- propose the smallest safe fix
- avoid changing unrelated behavior
- preserve the design and architecture
- explain any tradeoffs

Return:
- root cause analysis
- fix strategy
- updated code if needed
```

---

# 17. Refactor Prompts

These prompts are used to improve code quality without changing behavior.

---

## 17.1 Safe Refactor Prompt

```text id="r9e2jm"
Refactor the following RockyOS code safely.

Requirements:
- preserve current behavior
- improve readability
- reduce duplication
- keep the architecture consistent
- make the code easier for AI and humans to maintain

Return:
- refactor summary
- updated code
- any behavior risks
```

---

# 18. Deployment Prompts

These prompts are used before release and maintenance tasks.

---

## 18.1 Deployment Readiness Prompt

```text id="u2h7cs"
Prepare RockyOS for deployment.

Requirements:
- verify production readiness
- check environment variables
- confirm build success
- review metadata
- validate routing
- confirm responsive behavior
- check fallback states
- ensure no obvious release blockers

Return:
- deployment checklist
- risks found
- launch readiness status
```

---

# 19. Prompt Template

Use this template whenever a new prompt is needed.

```text id="p4q8lh"
You are working on RockyOS, a long-term digital universe and personal operating system.

Current phase:
[insert phase or task]

Context:
[briefly describe the relevant page, module, or problem]

Requirements:
- [list clear requirements]
- [list clear constraints]
- [list desired output format]

Important:
- follow the approved documentation
- preserve architectural consistency
- keep the solution maintainable
- make the experience feel premium and coherent

Return:
- [what you want the AI to output]
```

---

# 20. Prompt Writing Rules

## 20.1 One Prompt, One Goal

Each prompt should ask for one meaningful task.

---

## 20.2 Include the Minimum Necessary Context

Give enough context for accuracy, but do not overload the AI with irrelevant detail.

---

## 20.3 Ask for Structure When Needed

When the result must be reused, request structured output.

---

## 20.4 Preserve the Product Voice

All prompts should reflect the same RockyOS personality:

* calm
* intelligent
* premium
* human
* exploratory
* long-term

---

## 20.5 Keep Prompts Reusable

Prompts should be written so they can be used again later with only small edits.

---

# 21. Recommended Prompt Workflow

A good development cycle should look like this:

1. define the task
2. select the relevant prompt template
3. provide the current context
4. ask for a structured response
5. review the output
6. implement the result
7. test the result
8. refine if needed

---

# 22. Prompt Governance

Prompts should evolve with the project.

When the product changes, the prompt library should be updated.

When a prompt produces weak results repeatedly, rewrite it.

When a prompt becomes obsolete, archive it.

The prompt library should remain as living documentation.

---

# 23. Success Criteria

This prompt library is successful when:

* AI Studio produces better and more consistent results
* prompts become faster to reuse
* development becomes more predictable
* the project maintains architectural coherence
* AI assistance becomes easier over time
* the product grows without losing its identity

---

# 24. Prompt Library Motto

Clear prompts create clear products.

A good prompt is a reusable design asset.

RockyOS should be built with intention, not improvisation.
