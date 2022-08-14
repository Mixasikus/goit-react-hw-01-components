import PropTypes from 'prop-types'
import { CardProfile, CardDescription, CardImg, StatsList, StatsItem, Quantity } from './Profile.styled'

export default function Profile({avatar, username, tag, location, statsFollowers, statsViews, statsLikes}) {
  return (
    <CardProfile>
      <CardDescription>
        <CardImg src={avatar} alt={username} />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </CardDescription>
      <StatsList>
        <StatsItem>
          <span className="label">Followers</span>
          <Quantity>{statsFollowers}</Quantity>
        </StatsItem>
        <StatsItem>
          <span className="label">Views</span>
          <Quantity>{statsViews}</Quantity>
        </StatsItem>
        <StatsItem>
          <span className="label">Likes</span>
          <Quantity>{statsLikes}</Quantity>
        </StatsItem>
      </StatsList>
    </CardProfile>
  );
}

Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    statsFollowers: PropTypes.number.isRequired,
    statsViews: PropTypes.number.isRequired,
    statsLikes: PropTypes.number.isRequired,
}