import React from 'react'

import IndexMain from '../components/main/IndexMain'

function Index() {
  const onFileChange = (files) => {
    console.log(files)
  }

  return (
      <>
        <IndexMain onFileChange={(files) => onFileChange(files)} />
      </>
  )
}
export default Index