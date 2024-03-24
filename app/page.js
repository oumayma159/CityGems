import Link from 'next/link';

const HomePage = () => {
  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content text-center'>
        <div className='max-w-xl'>
          <h1 className='text-6xl font-bold text-primary'> CityGems </h1>

          <p className='py-4 text-lg leading-loose'>
          CityGems: Your virtual guide to global landmarks. Powered by advanced algorithms, it recommends must-see monuments, enhancing your travel experience and exploration of cities worldwide!
          </p>
          
          <Link href='/chat' className='btn btn-secondary'>
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
