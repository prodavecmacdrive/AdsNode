Role Model and Permissions:

Administrator: Full access. This is the root interface for managing the client database.

Client: Page does not exist (404) or redirects to the Main page.

1. Navigation and Context

Access is granted via the gear icon (⚙️) in the header, visible only to you, or through your profile dropdown menu.

Page title: Settings / Client Management.

2. Main Canvas: Client List

Displays a list of all created companies/clients.

Columns: Company name (e.g., Acme Corp), Available projects (number indicating how many games are open to them), Access Status (Active / Revoked).

Main action: "Add Client" button above the table.

3. Client Profile (Permissions and Magic Link)
   Opens as a modal window or a separate page when creating a new client or clicking on an existing one. Consists of two key blocks:

Block A: Link Management (Auth Hub)

Information banner with the currently generated Magic Link (read-only).

Copy Link button (copies the URL to the clipboard to send via Telegram/email).

Reset / Regenerate Link button (invalidates the old link if, for example, the client's manager quits and access needs to be revoked).

Block B: Permissions Matrix (Game Permissions)

A vertical list of all games that exist in your Global Archive.

Next to each game is a toggle switch or checkbox.

Logic: Turn the toggle on for "Match-3 Adventure" -> the game instantly appears on this client's dashboard. Turn it off -> it gets hidden.
