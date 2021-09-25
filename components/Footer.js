import Link from 'next/link';



export default function Footer() {
    return (
        <footer>
            <div className="container1">
                <Link href='/' passHref>
                    <h2 id="foot">Copyrights @ RP 2021</h2>
                </Link>


            </div>

        </footer>
    )
}