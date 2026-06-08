# Stitch Integration Recommendations for AdsNode

Based on the project requirements outlined in `README.md` and `.stitch/DESIGN.md`, here are the recommendations for integrating with Stitch to generate the UI for the AdsNode application.

## 1. Project Initialization

- **Action:** Create a new Stitch project named "AdsNode".
- **Purpose:** This provides the isolated workspace for generating all screens and defining the core design system for the Playable Ads CRM.

## 2. Design System Configuration

- **Action:** Upload `.stitch/DESIGN.md` to the created Stitch project and create a design system from it.
- **Key Specifications from DESIGN.md:**
  - **Theme:** Dark theme by default, with a toggle for light theme in the header.
  - **Layout Strategy:** High data density tables, modal popups, and multi-tab structured workspaces.
  - **Visual Elements:** Use specific color-coded indicators (green for approvals, yellow/red for edits, blue for assets, etc.).

## 3. Screen Generation Strategy

The `.stitch/DESIGN.md` specifies a clear hierarchy of screens. Generate these screens using Stitch's text-to-screen capabilities, ensuring they conform to the generated design system:

### A. Authentication & Entry Points

1.  **Administrator Login (`login.md`)**: Full-page, minimalist dark theme layout, large logo, Email/Password inputs, and a prominent "Log In" button. No registration or password recovery.
2.  **Client Login (`magic-link-loading.md`)**: Minimalist loader screen, no input fields, displaying a spinner and "Preparing workspace...".

### B. Global Navigation & Dashboard

1.  **Main Page (`index.md`)**:
    - **Header (`header-alert-dropdown.md`)**: Text logo on the left, notification bell on the right with colored unread badges, and a theme toggle.
    - **Global Archive Table**: High-density table displaying games, playables tree with micro-tags, and interactive counter badges for questions and approvals.
    - **Global Chat (`globol-chat.md`)**: Dual-sided layout (client left, admin right) filtering communication by project hierarchy, supporting color-coded system event bubbles.

### C. Project Management

1.  **Add Game Modal (`add-game.md`)**: Popup over the main page for the admin to input store links or manual details.
2.  **Game Page (`game-page.md`)**: Local playables table with localization badges, a file manager zone for global assets, and a "Create Playable" button for admins.
3.  **Add Playable Form (`add-playable.md`)**: Vertical scrolling form for the admin including title, moodboard canvas, networks checkboxes, and deadline calendar.

### D. Playable Workspace (`playable-page.md`)

This multi-tab interface is central to the application workflow:

1.  **Header**: Breadcrumbs, variation dropdown, and status badge.
2.  **Tab 1: Specification (`tab-specifications`)**: Read-only brief with a large "Approve" button.
3.  **Tab 2: Dev & QA (`tab-development`)**: Active workspace feed with interactive "Pin" tool for dropping comments on visual assets.
4.  **Tab 3: Pre-Final (`tab-prefinal`)**: Iframe emulator with Portrait/Landscape/Tablet toggles and pinning tool over the live playable.
5.  **Tab 4: Final Export (`tab-final`)**: Download hub with ZIP archives grouped by network and a batch download interface.

### E. Empty States (`empty-states.md`)

Ensure empty state screens are generated to match the descriptions in the documentation to handle cases with no data elegantly.

## 4. Execution Workflow

1.  Use `stitch_create_project` to initialize the project.
2.  Use `stitch_upload_design_md` to upload `.stitch/DESIGN.md`.
3.  Use `stitch_create_design_system_from_design_md` using the uploaded file.
4.  Use `stitch_generate_screen_from_text` iteratively for each of the core screens listed above, providing the specific layout requirements as prompts, ensuring the dark theme and required UI elements are prioritized.
