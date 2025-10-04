export type IconName = "earnings" | "ideas" | "chat" | "friends" | "dashboard" | "plus" | "minus";

export interface Tab {
  id: string;
  path: string;
  icon: IconName;
}