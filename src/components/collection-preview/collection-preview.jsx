import CollectionItem from "../collection-item/collection-item.component";
import "./collection-previewstyle.scss";
const CollectionPreview = ({ title, items }) => (
  <>
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {/* console.log("items: " + items) */}
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  </>
);

export default CollectionPreview;
