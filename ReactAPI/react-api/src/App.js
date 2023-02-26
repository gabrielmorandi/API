import Header from './components/header/Header'
import Main from './components/main/Main'

function App() {

    const onFileChange = (files) => {
        console.log(files)
    }

    return (
        <>
            <Header />
            <Main onFileChange={(files) => onFileChange(files)} />
        </>
    )
}

export default App
