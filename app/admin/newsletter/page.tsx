import AddNewsLetterClient from "@/components/newsLetterClient";
import { getAllNewsletterSubscribers } from "@/lib/prisma";

export const revalidate = 0;

export default async function NewsLetter() {
  const subscribers = await getAllNewsletterSubscribers();
  return <AddNewsLetterClient subscribers={subscribers} />;
}
