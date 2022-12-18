//giphy image
const Giphy = ({giphy}) => {

        return giphy.data ? (
            <>
            <h1>Get a random Giphy</h1>
            <img src={giphy.data.images.downsized.url} alt="giphy"/>
            </>
        ) : (
            <h1>
                Loading...
            </h1>
        )
    }
    
    export default Giphy;