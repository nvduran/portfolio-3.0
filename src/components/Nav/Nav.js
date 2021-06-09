import React from 'react'

export default function Nav(props) {

    const { setPage,
        currentPage
    } = props

    return (
        <div>
            <h1 class="bannerName">Nick Duran</h1>
            <nav>
                <ul>
                    <li>
                        <span
                            onClick={() => { setPage('About') }}>About</span>
                    </li>
                    <li>
                        <span
                            onClick={() => { setPage('Gallery') }}>Work</span>
                    </li>
                    <li>
                        <span
                            onClick={() => { setPage('Contact') }}>Contact</span>
                    </li>
                    {/* <li>
                        <span
                            onClick={() => { setPage('Resume') }}>Resume</span>
                    </li> */}
                </ul>
            </nav>
        </div>
    )
}
