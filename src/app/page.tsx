import { headers } from 'next/headers';
import ShareForm from './components/ShareForm';


export default async function Page() {
  const headersList = headers();
  const ip = headersList.get('x-forwarded-for') || '';
  


  return <>
    <header>
      <h1>Home</h1>
    </header>
    <main className='w-full h-full flex justify-center items-center'>
      <ShareForm
        ip={ip}
      />
      </main>
  </>
}