import Link from 'next/link';



export default function Footer() {
    return (
        <footer>
            <div className="container">
                <Link href='/' passHref>
                    <h2 id="foot">Bippity Boppity Give Me The Zoppity  ~ that's what she said...</h2>
                </Link>


            </div>

        </footer>
    )
}