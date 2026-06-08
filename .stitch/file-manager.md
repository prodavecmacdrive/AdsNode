Here is the English translation of the component specification, maintaining the professional formatting and structure of your previous request.

**Component Specification: Hierarchical File Explorer**

**Concept:**
There is only one physical file storage per project in the system. The Root directory is always the Game folder itself. All playables and their variations automatically create nested folders, mirroring the tree structure from the Main Table.

**1. Contextual Display (Smart Routing)**
Although the file system is unified, the manager automatically filters what the user sees depending on the page they are on:

- **On the Game Page (`game-page.md`):** The manager opens in the root folder. The user sees shared assets (logos, UI) and first-level playable folders (e.g., 📁 _castle_, 📁 _desert_).
- **On the Playable Page (`playable-page.md`):** If the user navigates to the _castle(5-warriors)_ variation, the file manager opens by default inside the _Root / castle / 5-warriors_ folder.
- **Upward Navigation:** Even when on a deeply nested page, the user can click the breadcrumbs within the file manager itself to go up a level (e.g., to grab a font from the root folder) without leaving the current playable page.

---

**2. Visual Interface (UI)**
The component is visually separated from the rest of the page content by a neat border and features its own toolbar.

- **Top Panel (Toolbar):**
- **Internal Breadcrumbs:** Show the current path in the manager (e.g., 🏠 Game Title / castle / 5-warriors).
- **View Controls:** Buttons to switch between **List** (detailed with date and size) and **Grid** (large previews for images).
- **Quick Actions:** _Create Folder_ and _Upload Files_ buttons.

- **Workspace:**
- Files and folders are displayed as standard icons.
- Image files (PNG, JPG, SVG, GIF) automatically generate thumbnails instead of standard icons.

---

**3. Advanced Drag & Drop Mechanics (OS-like Behavior)**
This is a key feature of the component. Drag & Drop should work exactly as it does in a desktop operating system:

- **Drop to Background:** If files are dragged from the computer to the empty space of the manager's workspace, they will be uploaded to the currently open folder. The manager's border highlights (e.g., in blue) with the text _"Drop files to upload"_.
- **Drop to Folder:** If a file dragged from the computer is hovered exactly over a specific folder icon inside the manager, the folder icon highlights, and the file is uploaded directly into it, rather than the current root.
- **Internal Move:** The user can grab a file already uploaded to the system and drag it into an adjacent folder. The file instantly moves through the hierarchy (without downloading and re-uploading).

---

**4. Interaction and Controls**
The manager supports standard desktop interaction patterns:

- **Context Menu (Right-click):** Right-clicking on a file/folder opens a dropdown menu:
- Download
- Rename
- Move to...
- Delete

- **Multi-select:** The user can hold `Shift` (to select a range) or `Ctrl`/`Cmd` (for pinpoint selection of multiple files) and perform bulk actions—such as dragging a group of files into another folder or downloading them all as a single ZIP archive.
- **Double Click:** Double-clicking on a folder opens it. Double-clicking on a file opens its full-screen preview (Lightbox) with the ability to flip through files using keyboard arrows.

---

**5. Role Model and Permissions**

- **Administrator (Developer):** Has full access (CRUD—create, read, update, delete). Can freely create custom folders within the automatic structure, rename files, move them via Drag & Drop, and delete them.
- **Customer (Client):** The interface operates in a "Read and Download Only" mode. The customer can freely navigate through the folders of the current project, view previews, and download source files (individually or by selecting them into an archive). Functions for uploading, deleting, renaming, and dragging/dropping files are disabled for them. When attempting to drag a file from their computer, they will see a "not allowed" cursor (🚫).
