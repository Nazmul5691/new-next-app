
export default async function DynamicBlogPage({ params }: { params: Promise<{ blogId: string }> }) {
    // console.log(await params);
    const { blogId } = await params;
    return (
        <div>
            <h1>This is Dynamic Blog Page : {blogId}</h1>
        </div>
    );
}