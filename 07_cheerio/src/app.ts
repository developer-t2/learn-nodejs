import axios from 'axios';
import cheerio from 'cheerio';

const movies = [
  {
    title: '장르만 로맨스',
    link: 'https://movie.naver.com/movie/bi/mi/basic.naver?code=185264',
  },
  {
    title: '이터널스',
    link: 'https://movie.naver.com/movie/bi/mi/basic.naver?code=184311',
  },
  {
    title: '프렌치 디스패치',
    link: 'https://movie.naver.com/movie/bi/mi/basic.naver?code=187312',
  },
  {
    title: '너에게 가는 길',
    link: 'https://movie.naver.com/movie/bi/mi/basic.naver?code=203715',
  },
  {
    title: '듄',
    link: 'https://movie.naver.com/movie/bi/mi/basic.naver?code=191559',
  },
];

movies.forEach(async (movie) => {
  const { data } = await axios.get(movie.link);

  const $ = cheerio.load(data);
  const score = $('.score.score_left > .star_score').text().trim();

  console.log(`영화: ${movie.title} / 평점: ${score}`);
});
