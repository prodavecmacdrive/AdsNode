Here is a detailed specification for the interactive canvas. This document describes the component as a professional 2D space for visual review, which will be intuitive to anyone who has worked with modern graphic or prototyping editors.

**Component Specification: Interactive Working Canvas**

**Concept:**
The Working Canvas is an infinite (or scalable) 2D space serving as a visual board for the development and testing stages (tab-development and tab-prefinal). Instead of a classic vertical news feed, content is arranged on a coordinate plane, allowing for free movement between screens, videos, and emulators while leaving comments with precise spatial anchoring.

**1. Visual Design and Grid (Background)**

- **Background Pattern:** To ensure the user understands they are looking at an interactive plane rather than just a gray page, the background is filled with a low-contrast dot grid pattern.
- **Boundaries:** The canvas takes up 100% of the available width and height of the container below the tab bar.

**2. Floating Toolbar**
Located at the bottom center of the screen (above the batch comment submission area) in the form of a compact pill-shaped menu. It contains the main interaction modes:

- **Cursor / Select:** The default mode. Allows clicking on objects, selecting them, playing/pausing videos, or interacting with Iframes.
- **Hand / Pan:** The canvas navigation mode. While holding the left mouse button (LMB), the canvas is "dragged" by the cursor.
- **Pin / Point-and-Comment:** When activated, the cursor changes to a marker icon. Clicking anywhere on the canvas or over an uploaded object leaves a draft marker for writing an edit.

**3. Navigation and Viewport Controls**
Navigation must support both mouse and trackpad, mimicking industry standards:

- **Panning:**
- Holding Space + LMB.
- Two-finger swipe on a trackpad.
- Pressing the middle mouse button (scroll wheel).

- **Zooming:**
- Holding Ctrl (or Cmd on Mac) + scrolling the mouse wheel.
- Pinch-to-zoom on a trackpad.

- **Zoom Controls (mini-widget):** Located in the upper right corner of the canvas. Contains **+**, **-** buttons and a percentage display of the current zoom level (e.g., 100%). Clicking on the percentage automatically centers the scale to _Fit to screen_ (fit all objects into the screen).

**4. Canvas Nodes**
Materials uploaded by the developer (screenshots, GIFs, MP4s, Iframes) become "nodes" on the board.

- **Free Positioning (Drag & Drop):** Objects are not tied to a rigid grid. They can be placed next to each other so the client can easily compare "Before / After" or view an animation storyboard.
- **Focus:** When clicking on an object in the "Cursor" mode, it receives a light colored outline (Focus Ring), indicating that it is currently active.
- **Object Metadata:** A compact badge hangs above each object with its name, resolution, or file size (e.g., _Victory_Screen_v2.png • 1080x1920_).

**5. Spatial Pins Mechanics**
Pins are strictly tied to the coordinates of the object they are placed on. If the object is moved, the pin moves with it.

- **Pin Appearance:** A bright round marker with a sequence number (e.g., 1, 2, 3).
- **Pin States:**
- **Yellow (Draft):** The pin has just been placed by the client but not yet sent to the chat (it is in a batch).
- **Red (Open):** The pin has been sent; the task requires a resolution.
- **Green (Resolved):** The issue is closed.

- **Interaction:** Clicking on a pin opens a small popover next to it containing the comment text, or the global chat at the bottom of the screen automatically scrolls to the corresponding message and highlights it.

**6. Role Model and Permissions for the Canvas**

- **Administrator (Developer):** Has full access. Can drag and drop files from the computer directly onto an empty space on the canvas (files will upload and appear at the drop location). Can move objects around the board, arranging them into a convenient composition, and delete them.
- **Customer (Client):** The interface operates in a "read-only" mode for objects. The customer cannot move screenshots or delete them. They only have access to navigation tools (Panning, Zoom) and Pin creation.
