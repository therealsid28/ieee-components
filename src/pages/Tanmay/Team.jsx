import { FaLinkedin, FaXTwitter } from 'react-icons/fa6';

const team = [
  {
    name: 'Lindsay Walton',
    role: 'Front‑end Developer',
    image:
      'https://images.unsplash.com/photo-1560223072-e9ffc15c8ac5?q=80&w=1173&auto=format&fit=crop',
    twitter: '#',
    linkedin: '#',
  },
  {
    name: 'Court Henry',
    role: 'Designer',
    image:
      'https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=687&auto=format&fit=crop',
    twitter: '#',
    linkedin: '#',
  },
  {
    name: 'Tom Cook',
    role: 'Director of Product',
    image:
      'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&w=600&q=80',
    twitter: '#',
    linkedin: '#',
  },
];

export default function TeamSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <header className="text-left">
        <h2 className="text-4xl font-semibold text-gray-900 sm:text-5xl">
          Our team
        </h2>
        <p className="mt-8 max-w-2xl text-lg text-gray-600">
          We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.
        </p>
      </header>

      <ul
        role="list"
        className="mt-16 grid gap-10 sm:gap-12 sm:grid-cols-2 lg:grid-cols-3"
      >
        {team.map((person) => (
          <li
            key={person.name}
            className="flex flex-col rounded-2xl bg-white/40"
          >

            <img
              src={person.image}
              alt={person.name}
              className="h-64 w-full rounded-2xl object-cover shadow-sm"
            />

            <div className="mt-6 flex-1">
              <h3 className="text-lg font-semibold leading-6 text-gray-900">
                {person.name}
              </h3>
              <p className="mt-1 font-medium text-sm text-gray-500">{person.role}</p>
            </div>

            <div className="mt-4 flex gap-4">
              <a
                href={person.twitter}
                className="text-gray-400 transition hover:text-gray-500"
                aria-label={`${person.name} on X`}
              >
                <FaXTwitter className="h-5 w-5" />
              </a>
              <a
                href={person.linkedin}
                className="text-gray-400 transition hover:text-gray-500"
                aria-label={`${person.name} on LinkedIn`}
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
