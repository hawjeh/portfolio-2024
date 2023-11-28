import Cartoon from '../../assets/imgs/cartoon.webp'

export default function HomePic({ style }) {
    return (
        <img
            src={Cartoon.src}
            className={style}
            alt="Haw Jeh Picture"
            loading="lazy"
        />
    )
}
