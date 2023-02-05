interface ObjJsonViewProps {
    obj: any;
}

export function ObjJsonView({ obj }: ObjJsonViewProps) {
    return <pre>{JSON.stringify(obj, null, 2)}</pre>
}