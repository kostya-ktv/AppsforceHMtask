export interface IButton {
   title: string
   type?: "confirm" | "cancel" | "edit" | "delete"
   onClick: any
}