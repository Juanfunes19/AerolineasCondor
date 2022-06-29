import "./Loading.css"

const Loading = () => {
  return (
    <div className="loading text-center">
        <div className="spinner-border text-info d-flex justify-content-center " >
            <span className="visually-hidden">Loading...</span>
        </div>
            Loading...
    </div>
  )
}

export default Loading