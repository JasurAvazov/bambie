import Button from '@/components/ui/Button'

export default function Home() {
  function foo() {
    console.log('dsadas')
  }
  
  return (
    <>
      <Button
        size='large'
        onClick={ foo }
        title='dsadas'
      />
    </>
  );
}
