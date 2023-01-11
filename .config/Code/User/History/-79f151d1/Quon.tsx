export type Toast = {
    title: string,
    description: string,
    duration: number,
    isOpen: boolean,
    onOpenChange: () => void
}