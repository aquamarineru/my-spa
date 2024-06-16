import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { setReviews, setCurrentPage } from '../store/reviewSlice';
import reviewsData from '../../data/data.json';
import './Main.scss';

interface Review {
  name: string;
  review: string;
  date: string;
}

const formatName = (name: string): string => {
  const parts = name.split(' ');
  if (parts.length < 2) {
    return name; 
  }
  const [lastName, firstName] = parts;
  return `${lastName} ${firstName.charAt(0)}.`;
};

const Main: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const language = useSelector((state: RootState) => state.language.language);
  const reviews = useSelector((state: RootState) => state.reviews.reviews);
  const currentPage = useSelector((state: RootState) => state.reviews.currentPage);
  const reviewsPerPage = useSelector((state: RootState) => state.reviews.reviewsPerPage);

  useEffect(() => {
    if (language && reviewsData[language]) {
      const formattedReviews = Object.values(reviewsData[language]).map((review: Review) => {
        return {
          ...review,
          name: formatName(review.name),
        };
      });
      dispatch(setReviews(formattedReviews));
    }
  }, [language, dispatch]);

  const handleClick = (pageNumber: number) => {
    dispatch(setCurrentPage(pageNumber));
  };

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(reviews.length / reviewsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <main className='main'>
      <ul className='mainList'>
        {currentReviews.map((review, index) => (
          <li key={index} className="mainListItem">
            <p className="mainListItemName">{review.name}</p>
            <p className="mainListItemDescription">{review.review}</p>
            <p className="mainListItemDay">{review.date}</p>
          </li>
        ))}
      </ul>
      <nav className="mainPagination">
        <ul className="mainPaginationList">
          {pageNumbers.map(number => (
            <li key={number} className="mainPaginationItem">
              <button onClick={() => handleClick(number)} className="mainPaginationBtn">{number}</button>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
};

export default Main;
