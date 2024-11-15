import Link from "next/link"

const Nav = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-6 md:px-10 bg-gray-950">
        <div className="text-2xl font-bold text-slate-50 dark:text-white">Aiman</div>
        <div className="space-x-4 ">
          <Link href="/" className="text-fuchsia-800 hover:text-fuchsia-400 dark:text-gray-300 dark:hover:text-white">Home</Link>
          <Link href="About" className="text-fuchsia-800 hover:text-fuchsia-400 dark:text-gray-300 dark:hover:text-white">About</Link>
          <Link href="/Contact" className="text-fuchsia-800 hover:text-fuchsia-400 dark:text-gray-300 dark:hover:text-white">Contact</Link>
      </div>
      </nav>
  )
}
export default Nav;