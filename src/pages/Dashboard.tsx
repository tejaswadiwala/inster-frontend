import { useState } from 'react'
import '../css/Dashboard.css'
import { useNavigate } from 'react-router-dom'
import handleLogout from './functions/handleLogout'
import InsterController from '../controllers/inster/InsterController'
import { GenerateProductInfoDTO } from '../controllers/inster/dtos/GenerateProductInfoDTO'

function Dashboard() {
  const navigate = useNavigate()
  const [generatedProductInfo, setGeneratedProductInfo] =
    useState<GenerateProductInfoDTO | null>(null)

  const handleGeneratePost = async () => {
    try {
      const insterController: InsterController = new InsterController('123')
      const apiResponse = await insterController.generateProductInfo()
      const generateProductInfoResponse: GenerateProductInfoDTO =
        apiResponse.data.data
      setGeneratedProductInfo(generateProductInfoResponse)
    } catch (error) {
      console.error('Error generating image:', error)
    }
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
              <p>{generatedProductInfo.caption}</p>
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
