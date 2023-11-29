import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../Provider/Authprovider'; // Import your Authprovider
import Book from '../../Components/Book';

const Mybooks = () => {
  const { user } = useContext(AuthContext);
  const [myBooks, setMyBooks] = useState([]);
  const { email } = useParams(); // Assuming your route has a parameter named "userEmail"

  useEffect(() => {
    const fetchMyBooks = async () => {
      try {
        const response = await fetch(`http://localhost:5000/mybooks/${email}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user.token}`, // Assuming you have a token for authentication
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user books');
        }

        const data = await response.json();
        setMyBooks(data);
      } catch (error) {
        console.error('Error fetching user books:', error);
      }
    };

    if (user && user?.email) {
      fetchMyBooks();
    }
  }, [user, email]);

  return (
    <div className='w-11/12 mx-auto min-h-screen' >
      <h1 className='text-4xl font-bold text-center mt-10'>My Books</h1>
      {myBooks.length === 0 ? (
        <p className='text-xl text-center mt-4'>You haven't added any books yet. Please add a book!</p>
      ) : (
        <div className='grid grid-cols-3 gap-x-20 gap-y-10'>
          {myBooks.map((book) => (
            <Book key={book._id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Mybooks;
