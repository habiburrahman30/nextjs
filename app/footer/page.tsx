import Link from "next/link";

export default () => {
    return (
        <footer className="flex justify-center bg-orange-500 rounded py-2.5">
            <Link href={'/'} className="text-2xl font-bold text-gray-50">Footer</Link>
        </footer>
    )
}