'use client';
import axios from "axios"

const Token = ({currentTokens}) => {

    const handleSubscription = async (e) => {
        e.preventDefault();
        const { data } = await axios.post('/api/payment',
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
        );
        window.location.assign(data)
      }

  return (
      <div className='max-w-md bg-white rounded-lg shadow-md p-6 mb-8 ml-8 flex items-center justify-between'>
        <h2 className='text-xl font-extrabold'>
          Token Amount : {currentTokens}
        </h2>
        <button className='btn btn-primary join-item' type='submit' onClick={handleSubscription}>
          Buy Tokens
        </button>
      </div>
  );
};
export default Token ;
