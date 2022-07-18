import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { url } = router.query

  return <p>Film: {url}</p>
}

export default Post