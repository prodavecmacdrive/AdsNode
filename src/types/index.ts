/** Represents a user in the system. */
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'client';
  avatarUrl?: string;
  createdAt: string;
}

/** Status of a playable ad project. */
export type PlayableStatus =
  | 'draft'
  | 'in_review'
  | 'approved'
  | 'revision_requested'
  | 'delivered';

/** Represents a playable ad project. */
export interface Playable {
  id: string;
  title: string;
  status: PlayableStatus;
  adNetwork: string;
  storeUrl?: string;
  createdAt: string;
  updatedAt: string;
  ownerId: string;
}

/** Represents a pin comment on the playable preview. */
export interface Comment {
  id: string;
  playableId: string;
  authorId: string;
  content: string;
  /** Pin coordinates relative to iframe (0-1 normalized) */
  pinX: number;
  pinY: number;
  resolved: boolean;
  createdAt: string;
}

/** Represents a chat/event log entry. */
export interface ChatMessage {
  id: string;
  playableId: string;
  authorId: string;
  content: string;
  type: 'message' | 'system' | 'status_change';
  createdAt: string;
}
