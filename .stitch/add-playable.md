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

Screen #4 Specification: Playable Creation (Brief)
Since this is a separate page, the client has space to comfortably compile the Specification without cluttered elements.

1. Title and Navigation:

Breadcrumbs: Home / [Game Icon] / Create new Playable.

2. Form Fields (vertical scroll):

Title: Text input (e.g., castle).

Moodboard and Description (Specification): Large free canvas (Drag & Drop) for inserting text, reference images, videos, and links.

Local Assets: Upload zone for files/archives needed only for this playable (with a text field for comments if there are no files).

Platforms: Checkbox buttons for ad networks (Unity Ads, AppLovin, FB, etc.).

Localization: Tagger field for entering required languages (EN, FR, ES), which will then be displayed in column #3 on the Game Page.

Deadline: Calendar.

3. Saving:

"Launch into work" button.

Role Model and Permissions:

Administrator: Full access to filling out the brief (title, moodboard, ad network selection, localization, deadline) and the "Launch into work" button.

Client: Page is inaccessible. Initialization of new tasks is on the administrator's side.
