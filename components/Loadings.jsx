import React from 'react'
import ScaleLoader from "react-spinners/ScaleLoader";

function Loadings() {
 
  return (
    <div className="flex flex-col absolute justify-center w-full will-change-scroll h-full items-center z-1000 bg-slate-300 bg-opacity-50 sweet-loading">
      <ScaleLoader
        color={"#673DE6"}
        loading={true}
        height={80}
        width={4}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <div className="text-2xl font-black leading-9 text-primary">
          Vieo
        </div>
    </div>
  )
}

export default Loadings