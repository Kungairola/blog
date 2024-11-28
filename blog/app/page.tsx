import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`Welcome to my corner of the world! I'm a mountain enthusiast with a passion for exploring high passes, learning from indigenous cultures, and unraveling the secrets of ecology. Currently, I'm delving into the fascinating realm of molecular ecology, while also learning to program in Python. When I'm not geeking out over science, you can find me dreaming of my next adventure in breathtaking destinations like Iceland, Norway, Denmark, Italy, Yukon, the Andes, Greenland, and Japan. Join me on this journey as I share tales from the mountains, musings on ecology, and insights into the intersection of technology and nature.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
