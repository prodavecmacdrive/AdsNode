(Client Entry Point / Auth Gateway)
Role Model and Permissions:

Administrator: Does not use.

Client: The only way to access the system (navigating via a unique URL like [domain.com/client?token=xyz](https://domain.com/client?token=xyz)).

1. Visual Structure (Loading State)

The client never sees fields to enter a login and password.

Upon following the link, they see a focal placeholder screen: the system logo in the center and a neat animated spinner (or progress bar).

Text under the loader: "Preparing workspace..." or "Secure login...".

2. System Logic (Displaying Results)

Success (Token is valid): The system checks the token, establishes a session, and instantly (within 1-2 seconds) redirects the client to index.md (The main page with the list of games available to them).

Error (Token expired or invalid): If the link was revoked by you in the settings or is corrupted, the loader changes to an error icon (⚠️) and fixed text: "The link has expired or access is closed. Please request an up-to-date link from your manager."
