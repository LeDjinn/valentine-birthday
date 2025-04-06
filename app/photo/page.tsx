import BlogList from "@/components/global/BlogList";
import ImageForm from "@/components/global/image-form";
import { auth } from "@/lib/auth";

export default async function ProtectedPage() {
  const session = await auth();

  if (!session) {
    return <p>Access Denied. Please log in.</p>;
  }

  return (
    <div>
 
      <div>
        <ImageForm />
      </div>
      <div>
        <BlogList />
      </div>
    </div>
  );
}
