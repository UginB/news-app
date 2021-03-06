import {useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import noImg from '../../resources/img/no-img.jpg';

import './SinglePage.css';

const SinglePage = () => {
	const {articleId} = useParams();
	const [article, setArticle] = useState({});
	const [imgUrl, setImgUrl] = useState(null)
	const {articlesMainPage, articlesSearchResult} = useSelector(state => state);

	useEffect(() => {
		let art = [...articlesMainPage, ...articlesSearchResult].find(item => item.id === articleId);
		setArticle(art);
		setImgUrl(art.urlToImage)
    }, [articleId]);

	const {description, content, title} = article;

	return (
		<div className="singlePage">
			<img 
				onError={() => setImgUrl(noImg)}
				src={imgUrl}
				alt={title}
				className="singlePage__img"
				/>
			<h3 className="singlePage__title">
				{title}
			</h3>
			<p className='singlePage__content'>
				{ 
				(!content) ? description : content
				}
			</p>
		</div>
	);
}

export default SinglePage;