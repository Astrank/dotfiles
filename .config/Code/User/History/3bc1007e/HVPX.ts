export type Scale = {
    note: string,
    name: string,
    pattern: number[]
}

export type Theory = {
    notes: string[],
    notesFlat: string[],
    scales: Scale[],
    frets: number,
    strings: number[]
}