import { useState } from 'react'
import '../css/Dashboard.css'
import { useNavigate } from 'react-router-dom'
import handleLogout from './functions/handleLogout'
import InsterController from '../controllers/inster/InsterController'
import { GenerateImageDTO } from '../controllers/inster/dtos/GenerateImageDTO'

function Dashboard() {
  const navigate = useNavigate()
  const [generatedImage, setGeneratedImage] = useState<GenerateImageDTO | null>(
    null
  )

  const handleGeneratePost = async () => {
    try {
      const insterController: InsterController = new InsterController('123')
      const apiResponse = await insterController.generateImage()
      const generateImageResponse: GenerateImageDTO = apiResponse.data.data
      setGeneratedImage(generateImageResponse)
    } catch (error) {
      console.error('Error generating image:', error)
    }
  }

  return (
    <div className="dashboard-page">
      <h2 className="dashboard-title">Dashboard</h2>
      <div className="dashboard-content">
        <p>Welcome to the dashboard! You are logged in.</p>
        <div className="dashboard-generated-image">
          {generatedImage && (
            <div className="generated-image-container">
              <img
                className="generated-image"
                src={generatedImage.imageUrl}
                alt={generatedImage.title}
              />
              <h3>{generatedImage.title}</h3>
              <p>{generatedImage.description}</p>
            </div>
          )}
        </div>
        <button
          className="dashboard-generate-button"
          onClick={handleGeneratePost}
        >
          Generate Post
        </button>
      </div>
      <button
        className="dashboard-logout-button"
        onClick={() => handleLogout(navigate)}
      >
        Logout
      </button>
    </div>
  )
}

export default Dashboard
