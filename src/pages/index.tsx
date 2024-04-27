import Button from '@/components/ui/Button'
import { log } from 'console';

export default function Home() {
  function foo() {
    console.log('dsadas')
  }
  
  return (
    <>
      <Button 
        onClick={ foo }
        title='dsadas'
      />
    </>
  );
}
