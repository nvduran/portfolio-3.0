import React from 'react'

export default function About(props) {
    // const { setPage,
    //     currentPage
    // } = props
    console.log(props)
    if(props.currentPage==="About"){

    return (
        <div>
            <section>
                <div class="grid-container-about" id="about">
                    <div class="about-item1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo praesentium blanditiis vero magnam saepe enim sunt a impedit quod laborum cumque eius exercitationem, suscipit vitae atque nisi fugit doloremque voluptatem. <br /> <br />Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora eum dignissimos rem vero facilis, quae unde optio, cumque repellendus excepturi ex, voluptas veniam debitis enim accusantium quia ullam commodi maxime.</div>
                    <div class="about-item-side">About Me</div>
                </div>
            </section>
        </div>
    )

    }else{
        return null;
    }
}
