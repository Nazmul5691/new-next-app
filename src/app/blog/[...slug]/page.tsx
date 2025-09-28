export default async function CatchAllRoute({ params }: { params: Promise<{ slug: string }> }) {
    console.log(await params);
    return (
        <div>
            <h1>This is CatchAllRoute</h1>
        </div>
    );
}