import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    date: "Mar 16, 2020",
    category: "Marketing",
    excerpt: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
    image: "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  },
  {
    id: 2,
    title: "How to use search engine optimization to drive sales",
    date: "Mar 10, 2020",
    category: "Sales",
    excerpt: "Optio sit exercitation et ex ullamco aliquid explicabo. Dolore do ut officia anim non ad eu. Magna laboris incididunt commodo elit ipsum.",
    image: "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
    author: {
      name: "Lindsay Walton",
      role: "Front-end Developer",
      imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  },
  {
    id: 3,
    title: "Improve your customer experience",
    date: "Feb 12, 2020",
    category: "Business",
    excerpt: "Dolore commodo in nulla do nulla esse consectetur. Adipisicing voluptate velit sunt adipisicing ex duis elit deserunt sint ipsum. Culpa in exercitation magna adipisicing id reprehenderit consectetur culpa eu aliquip.",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
    author: {
      name: "Tom Cook",
      role: "Director of Product",
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  }
];

const BlogSection = () => {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
          <p className="mt-2 text-lg leading-8 text-gray-500">
            Learn how to grow your business with our expert advice.
          </p>
          <div className="mt-6 space-y-16 pt-10 sm:mt-6 sm:pt-16">
            {blogPosts.map((post) => (
              <article key={post.id} className="flex flex-col sm:flex-row gap-6">
                <div className="relative h-48 sm:h-auto sm:w-2/5">
                  <div className="absolute inset-0 w-full h-full">
                    <img
                      src={post.image}
                      alt=""
                      className="h-full w-full rounded-2xl bg-gray-100 object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-between sm:w-4/5">
                  <div>
                    <div className="flex items-center gap-x-4">
                      <time dateTime={post.date} className="text-gray-500 text-sm">
                        {post.date}
                      </time>
                      <span className="relative z-10 rounded-full bg-gray-100 border border-gray-200 px-3 py-1 font-medium text-gray-600 text-sm">
                        {post.category}
                      </span>
                    </div>
                    <div className="group relative">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                        <span className="absolute inset-0" />
                        {post.title}
                      </h3>
                      <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 max-w-prose">{post.excerpt}</p>
                    </div>
                  </div>
                  <div className="relative mt-5 pt-5 border-t border-gray-200">
                    <div className="flex items-center gap-x-4">
                      <img 
                        src={post.author.imageUrl} 
                        alt="" 
                        className="h-10 w-10 rounded-full bg-gray-50"
                      />
                      <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                          {post.author.name}
                        </p>
                        <p className="text-gray-600">{post.author.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection; 