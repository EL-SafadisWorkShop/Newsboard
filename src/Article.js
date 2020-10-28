export default function Article({ article, index, author, points, completeButton }) {
    return (
      <article className="Story">
        <div className="Story_container">
          <div className="Story_data">
            <a href={article.url}><h1 className="Story_title" style={{textDecoration:article.isCompleted?"line-through":""}}>{article.text}</h1></a>
            <div className="Story_meta">
              <span>{article.points} points</span>
              <span className="Story_separator"> </span>
              <span><span>by {article.author}</span></span>
              <span className="Story_separator"> </span>
              <span className="Story_separator">|</span>
              <span>{article.num_comments} comments</span>
              <button className="completebutton" onClick={() => completeButton(index)}>Done</button>
            </div>
            
          </div>
        </div>
      </article>
    );
}