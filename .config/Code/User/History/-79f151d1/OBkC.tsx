export type Toast = {
    title: string,
    duration: number,
    isOpen: boolean,
    onOpenChange: () => void
}