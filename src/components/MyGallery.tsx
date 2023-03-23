
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/scss/image-gallery.scss';
import '../assets/images/aravi.png'

const images = [
  {
    original: 'https://imagizer.imageshack.com/img923/4822/OTANO2.png',
    thumbnail: 'https://imagizer.imageshack.com/img923/4822/OTANO2.png',
  },
  {
    original: 'https://imagizer.imageshack.com/img923/3272/3GfrhM.png',
    thumbnail: 'https://imagizer.imageshack.com/img923/3272/3GfrhM.png',
  },
  {
    original: 'https://imagizer.imageshack.com/img922/3852/HB23Ln.png',
    thumbnail: 'https://imagizer.imageshack.com/img922/3852/HB23Ln.png',
  },
  {
    original: 'https://imagizer.imageshack.com/img923/3720/q6LmQ0.jpg',
    thumbnail: 'https://imagizer.imageshack.com/img923/3720/q6LmQ0.jpg',
  },
  {
    original: 'https://imagizer.imageshack.com/img924/5108/1NkNhh.jpg',
    thumbnail: 'https://imagizer.imageshack.com/img924/5108/1NkNhh.jpg',
  },
  {
    original: 'https://imagizer.imageshack.com/img923/8290/O6WwaB.png',
    thumbnail: 'https://imagizer.imageshack.com/img923/8290/O6WwaB.png',
  },
  {
    original: 'https://imagizer.imageshack.com/img924/7605/ryHVns.png',
    thumbnail: 'https://imagizer.imageshack.com/img924/7605/ryHVns.png',
  },
  {
    original: 'https://imagizer.imageshack.com/img922/3703/hsmLNs.png',
    thumbnail: 'https://imagizer.imageshack.com/img922/3703/hsmLNs.png',
  },
  {
    original: 'https://imagizer.imageshack.com/img923/9827/iSxwqc.png',
    thumbnail: 'https://imagizer.imageshack.com/img923/9827/iSxwqc.png',
  },
  {
    original: 'https://imagizer.imageshack.com/img922/1943/GbHRx4.png',
    thumbnail: 'https://imagizer.imageshack.com/img922/1943/GbHRx4.png',
  },
  {
    original: 'https://imagizer.imageshack.com/img924/9194/wcqkFu.jpg',
    thumbnail: 'https://imagizer.imageshack.com/img924/9194/wcqkFu.jpg',
  },
  {
    original: 'https://imagizer.imageshack.com/img924/4647/IOubU7.png',
    thumbnail: 'https://imagizer.imageshack.com/img924/4647/IOubU7.png',
  },
  {
    original: 'https://imagizer.imageshack.com/img923/5247/abh5LX.png',
    thumbnail: 'https://imagizer.imageshack.com/img923/5247/abh5LX.png',
  },
  {
    original: 'https://imagizer.imageshack.com/img923/6212/Rmmmlr.png',
    thumbnail: 'https://imagizer.imageshack.com/img923/6212/Rmmmlr.png',
  },
  {
    original: 'https://imagizer.imageshack.com/img922/8941/OtAdft.png',
    thumbnail: 'https://imagizer.imageshack.com/img922/8941/OtAdft.png',
  },
  {
    original: 'https://imagizer.imageshack.com/img924/1685/7UL1ht.jpg',
    thumbnail: 'https://imagizer.imageshack.com/img924/1685/7UL1ht.jpg',
  },
  {
    original: 'https://imagizer.imageshack.com/img924/8283/Ody3BP.png',
    thumbnail: 'https://imagizer.imageshack.com/img924/8283/Ody3BP.png',
  },
  {
    original: 'https://imagizer.imageshack.com/img924/2066/E1FVX2.png',
    thumbnail: 'https://imagizer.imageshack.com/img924/2066/E1FVX2.png',
  },
  {
    original: 'https://imagizer.imageshack.com/img922/4665/6BcL28.png',
    thumbnail: 'https://imagizer.imageshack.com/img922/4665/6BcL28.png',
  },
  {
    original: 'https://imagizer.imageshack.com/img924/5803/tI32Cr.jpg',
    thumbnail: 'https://imagizer.imageshack.com/img924/5803/tI32Cr.jpg',
  },
  {
    original: 'https://imagizer.imageshack.com/img924/7246/GHsgQz.png',
    thumbnail: 'https://imagizer.imageshack.com/img924/7246/GHsgQz.png',
  },
  {
    original: 'https://imagizer.imageshack.com/img924/7740/mYsRQ1.jpg',
    thumbnail: 'https://imagizer.imageshack.com/img924/7740/mYsRQ1.jpg',
  },
  {
    original: 'https://imagizer.imageshack.com/img923/5453/FAk7jF.jpg',
    thumbnail: 'https://imagizer.imageshack.com/img923/5453/FAk7jF.jpg',
  },


];

function MyGallery() {
  return <ImageGallery items={images} />;
}
export default MyGallery;