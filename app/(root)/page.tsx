import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    // we wrap it in the react fragment as we don't have to give it any classes
    <>
      <h1 className="head-text text-left">Home</h1>
    </>
  );
}
