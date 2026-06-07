Screen #1 Specification: Header

Logo: Located on the left. AdNode text logo. Clicking on it redirects to the main screen (Dashboard).

Right Side (Interactive):

Notifications Icon (Bell): With an indicator for unread events. Clicking it opens a dropdown list with the latest notifications.

Screen #1 Specification: Main Projects Table (Global Archive)

The table is built on the principle of maximum data density. Each row represents one game. The row is visually divided into 3 semantic blocks (columns):

Column 1 (Visuals):

Large game icon/logo.

Interactive: Clicking the icon leads to the general page of the specific Game.

Column 2 (Information and Playables Tree):

Top row: Game title (large font). Clicking leads to the general Game page.

Bottom row (Tree): List of playables with nesting via parentheses. Format: Base(variation1, variation2(sub-variation)).

Interactive: Every single word (name of the playable or sub-playable) in this row is an independent clickable link that leads exactly to the page of that specific sub-playable.

Column 3 (Action Indicators):

Aligned one under the other (or side by side if width permits).

"Questions" Icon (Chat bubble): With a bright badge counter (e.g., a green circle with the number 3). Clicking leads to a filtered page with a list of all unanswered questions across this entire branch.

"Approvals" Icon (Document with a stamp): With a badge counter. Clicking leads to a filtered page with a list of all items awaiting approval (Specification, Pre-Final, etc.) for this game.

Table on top, Chat below it.

Screen #1 Specification: Global Hierarchical Chat (Cross-cutting component)

This element is present at all levels of the platform but works on a funnel principle: on the Main page, it collects 100% of the history across all projects, but when diving into the structure, it filters out everything "above" or in parallel branches.

1. Chat Visual Structure (Messenger)
   Two-sided layout: Messages and actions from the client are aligned to the left, from you (administrator) — to the right.

Context Grouping (Brackets): If there is a series of messages/events related to a single sub-playable, they are visually grouped on the side (left or right) with a curly bracket }. Next to the bracket, the nesting path is displayed using micro-tags, for example: Raid_Clone(castle(3-warriors)).

2. Message Types (Color Coding)
   Text messages: Regular replies are displayed on neutral light-gray bubbles.

System notifications (Events): Color-highlighted depending on the type. For example:

Specification / Final Approval: Green bubble with an icon.

Pool of edits (pins): Yellow/red bubble with the number of comments left.

Asset upload: Blue bubble with a list of files/archives.

3. Interactivity and Functionality
   Context menu (Right-click): Right-clicking any bubble (text or system) opens a dropdown menu:

Go to source — redirects the user exactly to the page/tab where this action occurred.

Reply — quotes the message for a reply.

Input field: Standard input at the bottom of the chat with a "Paperclip" button to attach files, images, and documents.

Horizontal division: Table on top, Chat below it.

Role Model and Permissions:

Administrator: Has full access. Sees a cross-cutting table with all games of all clients. The main "Add Game" button is available.

Client: Sees a filtered table containing only the games they have access to. The "Add Game" button is hidden.
