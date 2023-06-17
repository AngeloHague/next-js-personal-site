import React from 'react'
import { getSortedPostsData } from '@/lib/posts'

// export async function getStaticProps() {
    
//     return {
//       props: {
//         allPostsData,
//       },
//     };
//   }

export default async function Blog() {
  const allPostsData = await getSortedPostsData();
    return (
        <section>
            <h2>Blog</h2>
            <ul>
            {allPostsData.map(({ id, date, title }) => (
                <li key={id}>
                {title}
                <br />
                {id}
                <br />
                {date}
                </li>
            ))}
        </ul>
    </section>
    )
}
