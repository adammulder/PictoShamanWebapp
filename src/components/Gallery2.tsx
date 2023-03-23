
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/scss/image-gallery.scss';


const images = [
  {
    original: 'https://imagizer.imageshack.com/img922/39/tDPvz3.jpg',
    thumbnail: 'https://imagizer.imageshack.com/img922/39/tDPvz3.jpg',
  },
  {
    original: 'https://imagizer.imageshack.com/img923/4563/reivCG.jpg',
    thumbnail: 'https://imagizer.imageshack.com/img923/4563/reivCG.jpg',
  },
  {
    original: 'https://imagizer.imageshack.com/img923/7528/zOqeVc.jpg',
    thumbnail: 'https://imagizer.imageshack.com/img923/7528/zOqeVc.jpg',
  },
  {
    original: 'https://imagizer.imageshack.com/img923/9861/5yR3oA.jpg',
    thumbnail: 'https://imagizer.imageshack.com/img923/9861/5yR3oA.jpg',
  },
  {
    original: 'https://imagizer.imageshack.com/img922/376/AbeYQc.jpg',
    thumbnail: 'https://imagizer.imageshack.com/img922/376/AbeYQc.jpg',
  },
  {
    original: 'https://imagizer.imageshack.com/img922/1441/zvb7oO.jpg',
    thumbnail: 'https://imagizer.imageshack.com/img922/1441/zvb7oO.jpg',
  },
  {
    original: 'https://imagizer.imageshack.com/img922/2253/sLwKUC.jpg',
    thumbnail: 'https://imagizer.imageshack.com/img922/2253/sLwKUC.jpg',
  },
  {
    original: 'https://imagizer.imageshack.com/img924/1733/OJPT4P.png',
    thumbnail: 'https://imagizer.imageshack.com/img924/1733/OJPT4P.png',
  },
  {
    original: 'https://imagizer.imageshack.com/img922/5144/8Ud4J5.jpg',
    thumbnail: 'https://imagizer.imageshack.com/img922/5144/8Ud4J5.jpg',
  },
  {
    original: 'https://imagizer.imageshack.com/img923/4903/5ncUs7.png',
    thumbnail: 'https://imagizer.imageshack.com/img923/4903/5ncUs7.png',
  },
  {
    original: 'https://imagizer.imageshack.com/img923/8904/86JPMx.jpg',
    thumbnail: 'https://imagizer.imageshack.com/img923/8904/86JPMx.jpg',
  },


 

];

function Gallery2() {
  return <ImageGallery items={images} />;
}
export default Gallery2;