import React, {useEffect, useState} from "react";
import * as service from "../../services/likes-service";

/**
 * Component for showing tuit stats including number of replies, retuits, likes and dislikes.
 * User can also like/dislike by clicking the according button.
 *
 * @param {boolean} likedByMe  check if set to false as default
 * @param dislikedByMe
 * @param tuit Tuit object that has the stats
 * @param likeTuit function triggered when user click like button
 * @param dislikeTuit function triggered when user click dislike button
 * @example
 * const tuit = {tuit: "my tuit", postedBy: "123", stats: {replies: 0, retuits: 0, likes: 0, dislikes: 0}}
 * const likeTuit = () => {}
 * const dislikeTuit = () => {}
 * return (
 *      <TuitStats tuit={tuit}, likeTuit={likeTuit}, dislike={dislikeTuit}/>
 * )
 */
const TuitStats = ({
                       likedByMe=false, dislikedByMe=false,tuit, likeTuit, dislikeTuit = () => {
    }
                   }) => {
    const [isLikedByMe, setLikeTuit] = useState(likedByMe);
    const [isDislikedByMe, setDislikeTuit] = useState(dislikedByMe);
    const isTuitLikedByMe = () => {
        service.tuitLikedByMe('me', tuit._id)
            .then((like) => {
                if (like) {
                    setLikeTuit(true);
                } else {
                    setLikeTuit(false);
                }
            }).catch(e => alert(e))
    }

    const isTuitDislikedByMe = () => {
        service.tuitDislikedByMe('me', tuit._id)
            .then((dislike) => {
                if (dislike) {
                    setDislikeTuit(true);
                } else {
                    setDislikeTuit(false);
                }
            }).catch(e => alert(e))
    }

    useEffect(isTuitLikedByMe);
    useEffect(isTuitDislikedByMe);
    return (
        <div className="row mt-2">
            <div className="col">
                <i className="far fa-message me-1"/>
                {tuit.stats &&
                    <span className="ttr-stats-replies">{tuit.stats.replies}</span>
                }
            </div>
            <div className="col">
                <i className="far fa-retweet me-1"/>
                {tuit.stats &&
                    <span className="ttr-stats-retuits">{tuit.stats.retuits}</span>
                }
            </div>
            <div className="col">
                <span className="ttr-like-tuit-click" onClick={() => likeTuit(tuit)}>
              {
                  isLikedByMe &&
                  <i className="fa-solid fa-thumbs-up me-1" style={{color: 'blue'}}/>
              }
                    {
                        !isLikedByMe &&
                        <i className="fa-light fa-thumbs-up me-1"/>
                    }
                    <span className="ttr-stats-likes">{tuit.stats && tuit.stats.likes}</span>
            </span>
            </div>
            <div className="col">
                <span className="ttr-dislike-tuit-click" onClick={() => dislikeTuit(tuit)}
                      data-testid="test-dislikeButton">
                {
                    isDislikedByMe &&
                    <i className="fa-solid fa-thumbs-down me-1" style={{color: 'blue'}}
                       id="test-dislikedByMe"/>
                }
                    {
                        !isDislikedByMe &&
                        <i className="fa-light fa-thumbs-down me-1"/>
                    }
                    <span className="ttr-stats-dislikes">{tuit.stats && tuit.stats.dislikes}</span>
            </span>
            </div>
            <div className="col">
                <i className="far fa-inbox-out"/>
            </div>
        </div>
    );
}
export default TuitStats;