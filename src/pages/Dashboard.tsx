import { useState } from 'react'
import '../css/Dashboard.css'
import InsterController from '../controllers/inster/InsterController'
import { GenerateProductInfoDTO } from '../controllers/inster/dtos/GenerateProductInfoDTO'

function Dashboard() {
  const [generatedProductInfo, setGeneratedProductInfo] =
    useState<GenerateProductInfoDTO | null>(null)
  const [imageGenerated, setImageGenerated] = useState(false)

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

  const handlePublishImage = () => {
    // Add logic to publish the image
    // This function will be called when the "Publish Image" button is clicked
  }

  return (
    <div className="dashboard-page">
      <h2 className="dashboard-title">Dashboard</h2>
      <div className="dashboard-content">
        <p>Welcome to the dashboard! You are logged in.</p>
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
