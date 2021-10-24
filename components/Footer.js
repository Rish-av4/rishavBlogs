import Link from 'next/link';



export default function Footer() {
    return (
        <footer>
            <div className="container1">
                <Link href='/' passHref>
                    <h2 id="foot"> © by Rishav Prashar | 2020 - 21 </h2>
                </Link>


            </div>

        </footer>
    )
}