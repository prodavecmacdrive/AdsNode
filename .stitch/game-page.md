Screen #3 Specification: Game Page

1. Header and Breadcrumbs \* Standard Header + navigation Home / [Icon] Game Title.

2. Playables Table (based on your screenshot)

Column 1 (Base): Name of the base playable (e.g., castle or desert). It is a clickable link.

Column 2 (Variation Tree): Micro-tags with nesting in parentheses (e.g., 5-warriors(timer-20s, timer-30s)). Each tag is clickable and leads to its own page.

Column 3 (Localization): List of languages as compact badges (e.g., EN, DE, FR) relevant to this branch.

Column 4 (Indicators): Question 💬 and approval 📜 icons with counters.

3. Global Assets Zone (Below the table)

File manager for the game's global source files. Located as a separate block strictly below the playables table so the client can scroll down and immediately upload global graphics (fonts, UI).

4. "Create Playable" Button

Located above the table. Clicking does not open a modal window; it navigates to a full new page (Screen #4).

Role Model and Permissions:

Administrator: The "Create Playable" button is available. Has rights to manage (add/delete) files in the "Game Global Assets" block.

Client: The "Create Playable" button is hidden. Can view the local playables table and download source files from the "Game Global Assets" block (client file upload capability is optional).
