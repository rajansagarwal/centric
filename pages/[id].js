import { useRouter } from "next/router";
import Link from 'next/link';
export default function ContactId() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <p>Items for block {id} visible upon log in <u><Link href={`chain/${id}`}>here</Link></u></p>
    </div>
  );
}