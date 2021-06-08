import React from 'react'

export default function Gallery(props) {

    const { setPage,
        currentPage
    } = props
    console.log(props);

    if(props.currentPage==="Gallery"){

    return (
        <div>
            <section>
                <div class="grid-container" id="work">
                    <div class="grid-item1"><a href="https://dragoonkite.github.io/iCamp/"></a></div>
                    <div class="grid-item2"></div>
                    <div class="grid-item3"></div>
                    <div class="grid-item4"></div>
                    <div class="grid-item-side">Work</div>
                </div>
            </section>
        </div>
    )
    }else{
        return null;
    }
}
