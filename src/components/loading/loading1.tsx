import React from 'react'
import styled from 'styled-components'

const Loader = () => {
  return (
    <StyledWrapper className="mx-auto">
      <div className="loading-wave">
        <div className="loading-bar" />
        <div className="loading-bar" />
        <div className="loading-bar" />
        <div className="loading-bar" />
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  .loading-wave {
    width: 300px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }

  .loading-bar {
    width: 20px;
    height: 10px;
    margin: 0 5px;
    background-color: #3498db;
    border-radius: 5px;
    animation: loading-wave-animation 1s ease-in-out infinite;
  }

  .loading-bar:nth-child(2) {
    animation-delay: 0.1s;
  }

  .loading-bar:nth-child(3) {
    animation-delay: 0.2s;
  }

  .loading-bar:nth-child(4) {
    animation-delay: 0.3s;
  }

  @keyframes loading-wave-animation {
    0% {
      height: 10px;
    }

    50% {
      height: 50px;
    }

    100% {
      height: 10px;
    }
  }
`

export default Loader
