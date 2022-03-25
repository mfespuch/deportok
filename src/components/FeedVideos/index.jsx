import VideoPlayer from '../VideoPlayer'
import styles from './styles.module.css'

const VIDEOS = [
  {
    id: 1,
    author: 'ruziotaku',
    description: 'Madre mia lo que hay que aguantar 😂 #españa #foryoupage #fyp #humor #viral #musica',
    likes: 123,
    shares: 234,
    comments: 333,
    songTitle: 'sonido original - zzerok1',
    albumCover: 'https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/5d66495fe33247c7b2764a60c906811a~c5_720x720.jpeg?x-expires=1645182000&x-signature=cTp%2FkYqRSTN9xm%2FmjizLP0TGJ1w%3D',
    src: 'https://v16-webapp.tiktok.com/7a9b91ea479e9db91e052b268106a2c4/623b1f8b/video/tos/useast2a/tos-useast2a-pve-0068/d2445652610642a7a6f46fa5a5639c2a/?a=1988&br=3014&bt=1507&cd=0%7C0%7C0%7C0&ch=0&cr=0&cs=0&dr=0&ds=2&er=&ft=XOQ9-307nz7ThaiTMDXq&l=20220323072223010223066035180B1D98&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajRtazs6Zm5pOzMzNzczM0ApaTVkZ2hkO2RkNzU1ZjQzZmcxYGFscjRfcjFgLS1kMTZzczZiMTBiMS0yX2A2MC0uMl86Yw%3D%3D&vl=&vr='
  },
  {
    id: 2,
    author: 'lennymartineez',
    description: 'Madre mia lo que hay que aguantar 😂 #españa #foryoupage #fyp #humor #viral #musica',
    likes: 123,
    shares: 234,
    comments: 333,
    songTitle: 'sonido original - zzerok1',
    albumCover: 'https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/740d90d52585ccf61db86f4931cea4ba~c5_720x720.jpeg?x-expires=1645196400&x-signature=OfUNDcyNFhhEMiB2dysMggnQfI0%3D',
    src: 'https://v16-webapp.tiktok.com/fe8d35a3ad1ed13c8e8a55dad3241c4d/623b1f1a/video/tos/useast2a/tos-useast2a-ve-0068c002/76d80124ba0b46cb8658642d0e9fc60d/?a=1988&br=418&bt=209&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-307nz7ThaiTMDXq&l=20220323072223010223066035180B1D98&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amtya2g6ZmZsOzMzNzczM0ApMzVnMzM3aWQ5NzZnZjtpOGdwYWVmcjQwY2lgLS1kMTZzc2I1NTBfMjVfMjEyMTQ2MmA6Yw%3D%3D&vl=&vr='
  },
  {
    id: 3,
    author: 'kairosconk',
    description: '#xusojones #xusojonesoficial #quierounmenubigmac #xuso #jones #duoconxusojones #xusojonesybombai #kairosconk #envivo #endirecto #nosabias',
    likes: 123,
    shares: 234,
    comments: 333,
    songTitle: 'sonido original - zzerok1',
    albumCover: 'https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/0205eb56b331708a6fe18a9e64dbdff6~c5_720x720.jpeg?x-expires=1645196400&x-signature=lTcJZQU%2BeLKgsntOB2iQM7dTKeg%3D',
    src: 'https://v16-webapp.tiktok.com/ef8a34f3e08d5c71b54e47a178efbc2e/623b1f18/video/tos/useast2a/tos-useast2a-ve-0068c001/225a8822c03e445eab79244c1b5088af/?a=1988&br=2740&bt=1370&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-307nz7ThaiTMDXq&l=20220323072223010223066035180B1D98&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3M3NWY6ZmdzOjMzNzczM0ApNzU2OmU5OTw2NzZnNjk3NmcucWljcjRvZjRgLS1kMTZzcy0vNTUzLl9iM18tLy5hM2M6Yw%3D%3D&vl=&vr='
  }
]

export default function FeedVideos() {
  return (
    VIDEOS.map(video => {
      return (
        <div key={video.id} className={styles.item}>
          <VideoPlayer {...video} />
        </div>
      )
    })
  )
}
