import "./Preview.css";
import TopWitnessesBar from "../TopWitnesses/TopWitnesses";
const Preview=()=>{
    //dummy data
    const collections=["Diet","Workout","Food"];
    const video="https://www.youtube.com/embed/dQw4w9WgXcQ";

    
    const collectionOptions=collections.map((collection)=>{
        return(<option classname="formCollectionOption" value={collection}>{collection}</option>)
    })

    return(
        <div>  
        <div className="uploadGrid">
            <p className="uploadAVideoWord">Upload a video</p>
            <p className="previewWord">Preview</p>
            <iframe width="420" height="315" className="videoPreview" src={video}></iframe>
            <form>
                <p className="formDetailWord">Details</p>
                <p className="formTitleLabel">Title(required field)</p>
                <input className="titleInputBox" type="text" placeholder="Add video title here" />
                <p className="formDescriptionLabel">Description</p>
                <input className="descriptionInputBox" type="text" placeholder="Tell something about your video" />
                <p className="formCollectionLabel">Collection</p>
                <p className="formCollectionHint">Add your video to a collection</p>
                <select className="formCollectionSelect" multiple >
                    <option value="" disabled selected>Select</option>
                    {collectionOptions}
                </select>
                <button className="formNewCollectionButton">NEW COLLECTION</button>
                <p className="formTagsLabel">Tags</p>
                <input className="TagsInputBox" type="text" placeholder="Add Tag" />
                <p className="formTagsHint">Enter a comma after each tag</p>
                <button className="formSaveButton" type="submit"> Save </button>
            </form>
        </div>
        <div><TopWitnessesBar/></div></div>
        
    )
}
export default Preview;