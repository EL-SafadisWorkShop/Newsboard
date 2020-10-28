export default function Article({ article, index, author, points }) {
    return (
      <article className="Story">
        <div className="Story_container">
          <div className="Story_data">
            <a href={article.url}><h1 className="Story_title">{article.text}</h1></a>
            <div className="Story_meta">
              <span>{article.points} points</span>
              <span className="Story_separator"> </span>
              <span><span>by {article.author}</span></span>
              <span className="Story_separator"> </span>
              <span className="Story_separator">|</span>
              <span>{article.num_comments} comments</span>
            </div>
          </div>
        </div>
      </article>
    );
}