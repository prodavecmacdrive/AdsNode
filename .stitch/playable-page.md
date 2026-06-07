Screen #5 Specification: Playable Workspace (The 4-Tab Workspace)

1. Header and Navigation (Context)

Header: Standard (Logo, notifications).

Breadcrumbs: Home / [Game Icon] Raid Clone / castle.

Variation Selector: Next to the playable name in the breadcrumbs is a dropdown list for quick switching between nested versions. For example: Current version: Base (castle) 🔽 (on click, you can quickly jump to the Specification of the 5-warriors variation without returning to the main page).

Status Badge: Next to the playable name hangs a bright status (e.g., 🟡 Awaiting Pre-Final review).

2. Global Screen Layout (Split-Screen) (4 Tabs)

All page content is switched via tabs.

At the top, there is a row of 4 tabs related to the playable page; below that, the content of the fully opened tab spans the entire page. By default, tab-specifications is open.

Tab 1: Specification (tab-specifications).

Canvas: Displays the moodboard, assets, selected networks, and deadline that the client filled out in the previous step (Brief).

Action: A large Approve Specification for Work button (for the client) or a Specification Approved badge (if the stage is passed).

Tab 2: Dev & QA (tab-development).

Canvas: A feed of working cards from the developer. For example, an uploaded static screenshot with a question: "Do we keep this button color?".

Interactive: The client turns on the "Pin" tool (Point-and-comment) and places a dot right on the screenshot to leave an edit. "Batching" mechanics (draft edits) are enabled.

Tab 3: Pre-Final (tab-prefinal).

Canvas: A Device Emulator (Iframe with a live HTML5 playable) appears in the center.

Emulator Controls: Toggles above the Iframe: 📱 Portrait / 📱 Landscape / 💻 Tablet.

Interactive: The "Pin" tool works on top of the live iframe, taking a screenshot and leaving performance comments on it.

Tab 4: Final (tab-final).

Canvas: A clean file hub. ZIP archives strictly grouped by ad networks (Unity Ads, AppLovin, etc.). Checkbox selection for compiled versions (all selected by default), Download Button.

Role Model and Permissions:

General: Both roles see the same structure (Header, Breadcrumbs, Tab row). Access to switching tabs is limited by their status (cannot go to the Final stage if Pre-Final is not passed).
