import { BasicMetadataResponse } from '../../controllers/inster/dtos/BasicMetadataResponseDTO'
import './css/InstagramMetadata.css'

const InstagramMetadata = (props: BasicMetadataResponse) => {
  return (
    <div className="instagram-metadata-container">
      <p>Name: {props.name}</p>
      <p>Followers Count: {props.followers_count}</p>
      <img
        src={props.profile_picture_url}
        alt="Profile Picture"
        className="profile-picture"
      />
      {/* Add more JSX as needed */}
    </div>
  )
}

export default InstagramMetadata
