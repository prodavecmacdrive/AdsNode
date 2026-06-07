Pre-Final Tab (tab-pre-final)

1. Navigation Bar and Status Bar

Pre-Final tab is active.

Top bar (Actions panel): Similar to the specification, a status panel is located at the top.

Main action: A large green "Approve final build" button. Clicking it freezes the addition of edits and unlocks access to the last tab (Final).

2. Working Canvas (Sandbox Emulator)
   This is the central visual element of the screen. To separate the game from the CRM interface, we use background inversion.

Background (Dark Mode): The area under the emulator is filled with a dark color (Slate 900, #0F172A). This creates high contrast and focuses the eye exclusively on the bright HTML5 creative.

Emulator Toolbar (Top panel above iframe): A compact control panel for the "device" itself. Contains toggles:

Orientation: 📱 Portrait / 📱 Landscape.

Device type: Phone / Tablet.

🔄 Restart button (to quickly restart the game logic inside the iframe).

Iframe Wrapper: The iframe itself is placed in a visual frame imitating the physical boundaries of a mobile device.

3. Interactivity: Play and Comment Modes
   Since the iframe intercepts mouse clicks for the game itself, we need to separate the testing and commenting modes. A noticeable switch (Toggle) is located in the emulator toolbar:

🎮 Play Mode (Default): Regular cursor, all clicks go inside the iframe, the client plays the playable.

📍 Leave Edit Mode: A transparent overlay is placed on top of the iframe. The game is paused. Clicking on any screen coordinate places our signature "Pin" (Point-and-Comment).

4. Batch Bar

Pops up at the bottom of the canvas (above the chat) if the client switched to Leave Edit mode and placed pins on the emulator. Contains a "Submit as Batch" button.

5. Chat Zone

Our standard hierarchical log is located at the very bottom of the page below the Sandbox block. Notifications about new pins left on top of the emulator drop here, and text communication is conducted.

Role Model and Permissions:

Administrator: Responsible for uploading and updating the live HTML5 build inside the iframe emulator.

Client: Tests the build. Can switch emulator modes (Play / Leave Edit). Has exclusive access to the "Approve final build" button.
