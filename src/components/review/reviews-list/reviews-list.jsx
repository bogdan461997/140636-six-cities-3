import React from 'react';
import PropTypes from 'prop-types';

const ReviewsList = ({comments}) => {
  return (
    <ul className="reviews__list">
      {comments.map((comment) => <ReviewsItem key={comment.id} comment={comment}></ReviewsItem>)}
    </ul>
  );
};

ReviewsList.propTypes = {
  comments: PropTypes.array.isRequired
};

const ReviewsItem = ({comment}) => {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={comment.user.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {comment.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: Math.floor(comment.rating) * 20 + `%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment.comment}
        </p>
        <time className="reviews__time" dateTime={comment.date}>{dateStamp(comment.date)}</time>
      </div>
    </li>
  );
};

ReviewsItem.propTypes = {
  comment: PropTypes.shape(
      {
        comment: PropTypes.string.isRequired,
        date: PropTypes.instanceOf(Date).isRequired,
        id: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        user: PropTypes.shape({
          avatarUrl: PropTypes.string.isRequired,
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired
        })
      })
};

const dateStamp = (date) => {
  const MONTHS = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];

  return `${MONTHS[date.getMonth()]} ${date.getDay()}, ${date.getFullYear()}`;
};

export default ReviewsList;
