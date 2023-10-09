import { useEffect, useState } from 'react'
import '../css/Dashboard.css'
import InsterController from '../controllers/inster/InsterController'
import { GenerateProductInfoDTO } from '../controllers/inster/dtos/GenerateProductInfoDTO'
import InstagramMetadata from './components/InstagramMetadata'
import { getBasicMetadata } from '../controllers/inster/getBasicMetadata'
import { BasicMetadataRequest } from '../controllers/inster/models/BasicMetadataRequest'
import { BasicMetadataResponse } from '../controllers/inster/dtos/BasicMetadataResponseDTO'

function Dashboard() {
  const [generatedProductInfo, setGeneratedProductInfo] =
    useState<GenerateProductInfoDTO | null>(null)
  const [imageGenerated, setImageGenerated] = useState(false)
  const [basicMetadata, setBasicMetadata] = useState<BasicMetadataResponse>()

  const handleGeneratePost = async () => {
    try {
      const insterController: InsterController = new InsterController('123')
      const apiResponse = await insterController.generateProductInfo()
      const generateProductInfoResponse: GenerateProductInfoDTO =
        apiResponse.data.data
      setGeneratedProductInfo(generateProductInfoResponse)
      setImageGenerated(true) // Set imageGenerated to true
    } catch (error) {
      console.error('Error generating image:', error)
    }
  }

  const handlePublishImage = async () => {
    try {
      const insterController: InsterController = new InsterController('123')
      await insterController.postPhotoToInstagram()
    } catch (error) {
      console.error('Error posting image to Instagram:', error)
    }
  }

  const handleBasicMetadata = async () => {
    try {
      const basicMetadataRequest: BasicMetadataRequest = {
        id: '123', // TODO: Rethink how to pass id for different clients
        fields: {
          followers_count: true,
          name: true,
          profile_picture_url: true,
          username: true,
        },
      }
      const apiResponse = await getBasicMetadata(basicMetadataRequest, '121')
      setBasicMetadata(apiResponse.data.data)
    } catch (error) {
      console.error('Error posting image to Instagram:', error)
    }
  }

  useEffect(() => {
    // Call handleBasicMetadata when the component mounts
    handleBasicMetadata()
  }, [])

  return (
    <div className="dashboard-page">
      <h2 className="dashboard-title">Dashboard</h2>
      <div className="dashboard-content">
        <p>Welcome to the dashboard! You are logged in.</p>
        {basicMetadata && InstagramMetadata(basicMetadata)}
        <div className="dashboard-generated-product-info">
          {generatedProductInfo && (
            <div className="generated-product-info-container">
              <img
                className="generated-product-info"
                src={generatedProductInfo.imageUrl}
                alt={generatedProductInfo.title}
              />
              <h3>{generatedProductInfo.title}</h3>
              {/* TODO: Uncomment this: <p>{generatedProductInfo.caption}</p>*/}
            </div>
          )}
        </div>
        <button
          className="dashboard-generate-button"
          onClick={handleGeneratePost}
        >
          {imageGenerated ? 'Regenerate Image' : 'Generate Image'}
        </button>
        {imageGenerated && (
          <div className="button-spacing">
            <button
              className="dashboard-publish-button"
              onClick={handlePublishImage}
            >
              Publish Image
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard
