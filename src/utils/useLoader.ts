import { useState } from "react"

export function useLoader() {
  const [ loading,  setLoading] = useState(0)

  function addLoader() {
    setLoading( l => l+1 )
  }

  function stopLoader(force: boolean = false) {

    setTimeout(() => {
      setLoading( l => !force ? l-1 : 0 )
    }, 200)
  }

  async function handleLoader(promise: Promise<any>) {
    let result = null

    try {
      addLoader()
      result = await promise
    } finally {
      stopLoader()
    }
    
    return result
  }

  return {
    addLoader,
    stopLoader,
    handleLoader,
    loading
  }

}