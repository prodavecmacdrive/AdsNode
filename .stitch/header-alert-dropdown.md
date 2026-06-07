Notifications Dropdown (header-alert-dropdown)
Since the system has complex nesting (Game -> Playable -> Variation -> Tab), notifications must be as informative as possible so the user understands where the signal came from before clicking.

1. Dropdown Header

Title: "Notifications" and a badge with the total number of unread items.

Quick Action: A text button Mark all as read (useful when a dozen system logs have accumulated).

2. Individual Notification Card (List Item)
   Sorting is in strict chronological order (newest first), but each card must contain clear context.

Visual Marker (Icon): Color coding that repeats the logic of the global chat.

💬 (Gray) — a regular text message.

📍 (Red/Yellow) — a batch of edits (pins) left on the emulator.

📜 (Green) — stage approval.

Context Path (Micro-tags): Right below the notification text, a breadcrumb is displayed in small text, for example: Raid Clone / castle(3-warriors).

Event Text: For example, "Specification Approved" or a preview of chat text: "Let's make the button a bit larger...".

Time: "10 mins ago", "Yesterday".

Indicator: A dot on the side (or a light background highlight) indicating that the notification has not yet been read.

3. Transition Logic (Deep Linking)
   This is a critically important mechanism for convenience. A click on a notification should work like a teleport.

Upon clicking, the system instantly redirects the user to the specific Playable Page.

Automatically switches the interface to the required Tab (for example, if it's a pre-final approval, the Pre-Final tab opens).

If it's a chat reply or a pin on the canvas, the page automatically scrolls down to the chat, highlighting the specific message for a couple of seconds.

Role Model and Permissions:

Administrator: Receives notifications about the client's actions (e.g.: "Client Acme Corp approved the Specification" or "3 edits left in Dev & QA").

Client: Receives notifications about the developer's actions only for their own projects (e.g.: "New build uploaded for testing" or "Chat reply received").
