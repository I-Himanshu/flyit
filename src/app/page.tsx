import { headers } from 'next/headers';
 
export default function Page() {
  const headersList = headers();
  const ip = headersList.get('x-forwarded-for') || '';
 
  return <div><br />
    IP: {ip}
  </div>;
}