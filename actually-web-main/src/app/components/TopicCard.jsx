export default function TopicCard(props) {
    return (
      <div className="card flex-column justify-start space-y-22">
        <a href="#" className="card-img-top"> 
            <img className="thumbnail-img w-[311px] h-[175px]" src={props.featureimage} alt={props.title} /> 
        </a>
        <div className="card-body flex-column justify-start space-y-22">
          <a href="#" className="card-title">
            <h1 className="topic-title text-4xl text-pretty font-semibold text-white">{props.title}</h1>
          </a>
          <div className="card-engagement flex-row justify-start space-x-14">
            <a href="#"> <img className="icon-take" src="chat_bubble.svg"/> </a>
            <h5 className="topic-takes text-sm font-normal">{props.takecount}</h5>
            <a href="#"> <img className="icon-save" src="bookmark.svg"/> </a>
            <a href="#"> <img className="icon-share" src="ios_share.svg"/> </a>
          </div>
        </div>
      </div>
    );
}