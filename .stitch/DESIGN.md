System General Concept (Playable Ads CRM)
This document is a consolidated specification of a closed B2B CRM system designed to manage the Playable Ads (interactive advertising creatives) creation process. The system is built around a strict hierarchy of projects (Client → Game → Playable → Variations) and provides seamless communication, requirements approval (Specification), HTML5 build testing, and delivery of final archives. It is based on a single-window principle with strict role separation: the administrator (developer) manages the entire data array, while the client sees only their projects and works in a maximally simplified, linear interface. You need to use a dark theme for the service design, you can also add a theme switch from dark to light in the header

1. Entry Points and Authorization
   Role separation begins at the login stage, ensuring maximum security for the administrator and frictionless UX for the client.

Administrator Login (login.md)
Represents a minimalist centered screen (Full-page layout) without distracting elements.
Contains a large system logo and an authorization form with Email and Password fields, as well as a prominent "Log In" button.
For security purposes, public registration and password recovery are absent.
This screen is the single entry point for the system owner; clients do not use it.

Client Login (magic-link-loading.md)
Accessed exclusively via a unique Magic Link format: [domain.com/client?token=xyz](https://domain.com/client?token=xyz).
The client does not see data entry fields; instead, a focal placeholder screen is displayed with a logo, a spinner, and the text "Preparing workspace...".
If the token is valid, a session is established, and an instant redirect to the main page (index.md) occurs.
In the case of an invalid link, an error icon is displayed with the text: "The link has expired or access is closed. Please request an up-to-date link from your manager."

2. Global Navigation and Main Page (index.md)
   The main page acts as a unified dashboard (Mission Control) where the entire project structure is gathered.

Header and Notifications (header-alert-dropdown.md)
On the left side of the header is a text logo; clicking it returns the user to the main page.
On the right side is a "Bell" icon with a badge showing the total number of unread notifications.
Notifications are sorted chronologically and contain visual markers: gray (regular message), red/yellow (batch of edits on the emulator), and green (stage approval).
Each notification contains a context path in the form of micro-tags (e.g., Raid Clone / castle(3-warriors)).
Clicking a notification works like a teleport: the system redirects the user to the required playable page, opens the necessary tab, and scrolls to the specific message.
The administrator receives notifications about client actions, while the client receives notifications only from the developer regarding their own projects.

Main Projects Table (Global Archive)
The screen layout implies a horizontal division: the table is on top, and the global chat is below it.
The table has high data density, where each row is a separate game.
Column 1 contains the game icon; clicking it leads to the game page.
Column 2 displays the game title and the playables tree, formatted with micro-tags and nested in parentheses (e.g., Base(variation1, variation2(sub-variation))).
Each micro-tag is a clickable link to a specific sub-playable page.
Column 3 contains indicators with counter badges: a "Questions" icon to navigate to unanswered messages and an "Approvals" icon to navigate to items awaiting approval.
The administrator sees all games and the "Add Game" button, whereas the client sees only the projects available to them, and the add button is hidden.

3. Cross-cutting Communication Module (globol-chat.md)
   The chat is a crucial system element that combines scattered comments and files into a single project log.

Working Principle and Visuals:
The chat works on a funnel principle: on the main page, it displays 100% of the history across all projects, but on nested pages, it filters out irrelevant branches.
The interface has a two-sided layout: client messages on the left, administrator messages on the right.

Context Organization and Message Types:
A series of messages relating to a single sub-playable are visually grouped with a curly bracket } labeled with the nesting path.
Text replies are displayed on light-gray bubbles.
System events are color-coded: green bubbles for approvals, yellow/red for the pool of edits (pins), and blue for asset uploads.

Interaction:
A right-click opens a context menu with options to reply or go to the message source.
An input field is located at the bottom with a paperclip button to attach files.

4. Project and Playable Management
   The entity creation process is divided into a global level (Game) and a working level (Playable).

Game Creation (add-game.md)
Displayed as a modal window (popup) over the main page.
Contains an input for a store link (with auto-parsing of the title and icon) and a manual entry option.
Available exclusively to the administrator; an attempt by the client to navigate directly triggers a redirect.

Game Page (game-page.md)
Contains breadcrumbs for navigation.
The central element is the local playables table, structurally repeating the main table but supplemented with a localization badges column (e.g., EN, DE, FR).
Below the table is a file manager zone for the game's global source files (fonts, UI), where the client can upload graphics.
The "Create Playable" button is placed above the table, is available only to the administrator, and leads to a separate form page.

Playable Creation / Brief (add-playable.md)
A vertically scrolling form containing fields: title, free canvas for the moodboard and Specification (Drag & Drop), local assets zone, ad network checkboxes, localization tagger field, and deadline calendar.
Ends with a "Launch into work" button.
The process is available only to the administrator.

5. Playable Workspace (playable-page.md)
   This is the main interaction zone where the creative goes from brief to final archive.

Navigation and Structure
The header contains breadcrumbs with a dropdown list for quick switching between variations (e.g.: Current version: Base (castle) 🔽) and a stage status badge.
All content is switched using a row of 4 tabs located at the top.
Access to the tabs is sequential: you cannot proceed to the final stage without passing the pre-final.

Tab 1: Specification (tab-specifications)
Displays the filled-out brief (moodboard, assets, networks, deadline).
Contains a prominent "Approve Specification for Work" button (changes to a badge after approval).

Tab 2: Development and QA (tab-development)
The canvas contains a feed of working cards (screenshots, video) from the developer.
Interactivity is implemented via the "Pin" tool (Point-and-comment), allowing placement of edit dots on top of materials with batch submission mechanics.

Tab 3: Pre-Final (tab-prefinal)
An Iframe emulator of the live HTML5 playable is located in the center.
The control panel allows toggling the orientation (Portrait / Landscape / Tablet).
The "Pin" tool works on top of the live iframe, automatically taking a screenshot for comments.

Tab 4: Final Export (tab-final)
Represents a clean file hub where ZIP archives are grouped by ad networks.
Implemented batch selection via checkboxes (all checked by default) with a global "Download" button.

6. Empty Interface States (empty-states.md)
   To prevent visual errors when data is absent, the system renders explanatory placeholders with icons.
   On the Main Page: The administrator sees an open empty folder icon and an "Add Game" button; the client sees a waiting icon and text stating that there are no active projects yet.
   On the Game Page: The administrator has access to the create playable button and an active asset upload zone; the client only sees a notification about an empty file list.
   In the Dev & QA Tab: Both roles see a gear/loader icon with an explanation that review materials have not been uploaded yet.
   In the Final Tab: An archive icon is displayed with text about the need to approve the Pre-Final stage.
   In the Global Chat: Muted text is displayed: "The full history of changes and correspondence will be displayed here...".
