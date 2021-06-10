import React from 'react';
import PropTypes from 'prop-types';
import './PostsList.scss';

export const PostsList = ({ posts, selectPostId, selectedPostId }) => (
  <div className="PostsList">
    <h2>Posts:</h2>

    <ul className="PostsList__list">
      {
        posts.map(post => (
          <li className="PostsList__item">
            <div>
              <b>
                [User #
                {post.userId}
                ]:
                {' '}
              </b>
              {post.title}
            </div>
            <button
              type="button"
              className="PostsList__button button"
              onClick={() => {
                if (selectedPostId === post.id) {
                  selectPostId(0);

                  return;
                }

                selectPostId(post.id);
              }}
            >
              {
                selectedPostId === post.id
                  ? 'Close'
                  : 'Open'
              }
            </button>
          </li>
        ))
      }
    </ul>
  </div>
);

PostsList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape(),
  ).isRequired,
  selectPostId: PropTypes.func.isRequired,
  selectedPostId: PropTypes.func.isRequired,
};